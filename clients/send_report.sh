#!/usr/bin/env bash
# Sends a daily report through Resend.
# A human must approve every send: run with --dry-run first, then re-run with --send.
#
#   ./send_report.sh 08-27-2026.email.html --dry-run
#   ./send_report.sh 08-27-2026.email.html --send
#
# Set these (or export them) before running:
FROM="${RESEND_FROM:-415brand <reports@YOUR-VERIFIED-DOMAIN>}"
TO="${RESEND_TO:-tim@cloudless.so}"
SUBJECT="${RESEND_SUBJECT:-Wispr Flow daily brief, Aug 27}"
API_KEY="${RESEND_API_KEY:?Set RESEND_API_KEY (see clients/RESEND.md)}"

set -euo pipefail
FILE="${1:?Usage: send_report.sh <report.email.html> --dry-run|--send}"
MODE="${2:---dry-run}"

[ -f "$FILE" ] || { echo "No such file: $FILE"; exit 1; }

PAYLOAD=$(python3 - "$FILE" "$FROM" "$TO" "$SUBJECT" <<'PY'
import json, sys
html = open(sys.argv[1], encoding="utf-8").read()
print(json.dumps({"from": sys.argv[2], "to": [sys.argv[3]], "subject": sys.argv[4], "html": html}))
PY
)

echo "From:    $FROM"
echo "To:      $TO"
echo "Subject: $SUBJECT"
echo "Body:    $FILE ($(wc -c < "$FILE") bytes)"

if [ "$MODE" != "--send" ]; then
  echo
  echo "Dry run only. Nothing sent. Re-run with --send to deliver."
  exit 0
fi

read -r -p "Send this email now? Type YES to confirm: " OK
[ "$OK" = "YES" ] || { echo "Aborted."; exit 1; }

curl -sS -X POST https://api.resend.com/emails \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d "$PAYLOAD"
echo
