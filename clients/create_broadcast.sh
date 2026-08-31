#!/usr/bin/env bash
# Creates a Resend broadcast DRAFT from a built .email.html/.email.txt pair.
# Never sends. A human opens the draft in Resend and sends it. See RESEND.md.
#
#   ./create_broadcast.sh sprag/reports/09-01-2026.broadcast.json --dry-run
#   ./create_broadcast.sh sprag/reports/09-01-2026.broadcast.json --create
#
# The JSON holds everything except the body. The body is read from the .email.html
# and .email.txt sitting next to it, so what ships is the file we built, byte for
# byte, with no retyping in between.
set -euo pipefail

SPEC="${1:?Usage: create_broadcast.sh <broadcast.json> --dry-run|--create}"
MODE="${2:---dry-run}"
DIR="$(dirname "$SPEC")"
STEM="$(basename "$SPEC" .broadcast.json)"
HTML="$DIR/daily-$STEM.email.html"
TXT="$DIR/daily-$STEM.email.txt"
[ -f "$HTML" ] || HTML="$DIR/$STEM.email.html"
[ -f "$TXT" ]  || TXT="$DIR/$STEM.email.txt"

for f in "$SPEC" "$HTML" "$TXT"; do
  [ -f "$f" ] || { echo "Missing: $f" >&2; exit 1; }
done

BYTES=$(wc -c < "$HTML" | tr -d ' ')
[ "$BYTES" -lt 55000 ] || { echo "HTML is ${BYTES}b, over the 55KB cap Gmail clips at." >&2; exit 1; }

PAYLOAD=$(python3 - "$SPEC" "$HTML" "$TXT" <<'PY'
import json, sys
spec = json.load(open(sys.argv[1], encoding="utf-8"))
spec["html"] = open(sys.argv[2], encoding="utf-8").read()
spec["text"] = open(sys.argv[3], encoding="utf-8").read()
# the JSON is kept in the camelCase the dashboard shows; the REST API takes snake_case
rename = {"segmentId": "segment_id", "previewText": "preview_text", "replyTo": "reply_to"}
print(json.dumps({rename.get(k, k): v for k, v in spec.items()}))
PY
)

python3 - "$SPEC" "$HTML" <<'PY'
import json, sys, hashlib
spec = json.load(open(sys.argv[1], encoding="utf-8"))
raw = open(sys.argv[2], "rb").read()
print(f"Name:     {spec['name']}")
print(f"From:     {spec['from']}")
print(f"Subject:  {spec['subject']}")
print(f"Segment:  {spec['segmentId']}")
print(f"Preview:  {spec['previewText'][:100]}")
print(f"Body:     {sys.argv[2]} ({len(raw)} bytes, md5 {hashlib.md5(raw).hexdigest()})")
PY

if [ "$MODE" != "--create" ]; then
  echo
  echo "Dry run. Nothing created. Re-run with --create to make the draft."
  exit 0
fi

: "${RESEND_API_KEY:?Set RESEND_API_KEY (see clients/RESEND.md)}"
RESP=$(curl -s -X POST https://api.resend.com/broadcasts \
  -H "Authorization: Bearer $RESEND_API_KEY" \
  -H "Content-Type: application/json" \
  --data-binary "$PAYLOAD")
echo "$RESP"

ID=$(python3 -c "import json,sys; print(json.loads(sys.argv[1]).get('id',''))" "$RESP" 2>/dev/null || true)
[ -n "$ID" ] || { echo "No broadcast id returned. Nothing created." >&2; exit 1; }

# Read it back and prove the stored HTML is the file we sent, unchanged.
# A heredoc takes over stdin, so the readback goes to a file rather than a pipe.
RB=$(mktemp)
curl -s "https://api.resend.com/broadcasts/$ID" -H "Authorization: Bearer $RESEND_API_KEY" -o "$RB"
python3 - "$HTML" "$RB" <<'PY'
import hashlib, json, sys
remote = json.load(open(sys.argv[2], encoding="utf-8"))
sent = open(sys.argv[1], "rb").read()
got = (remote.get("html") or "").encode()
a, b = hashlib.md5(sent).hexdigest(), hashlib.md5(got).hexdigest()
print(f"status:   {remote.get('status')}")
print(f"local md5 {a}\nremote md5 {b}")
print("IDENTICAL, nothing was reformatted." if a == b else "DIFFERS. Do not send. Inspect the draft.")
print(f"https://resend.com/broadcasts/{remote.get('id')}")
PY
rm -f "$RB"
