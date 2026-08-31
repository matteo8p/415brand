#!/usr/bin/env bash
# Creates the Aug 31 weekly as a Resend BROADCAST DRAFT. It never sends.
# The key in clients/RESEND.md returns "API key is invalid", so pass a fresh one:
#   RESEND_API_KEY=re_xxx ./send_weekly_draft.sh
set -euo pipefail
: "${RESEND_API_KEY:?set RESEND_API_KEY first}"
cd "$(dirname "$0")"
SEG=e3b1e4f6-3240-4fd3-8ce3-a2dbda9fb709

echo "== contacts in the cloudless.so segment =="
curl -s "https://api.resend.com/audiences/$SEG/contacts" \
  -H "Authorization: Bearer $RESEND_API_KEY" | python3 -m json.tool

python3 -c "
import json,pathlib
p=json.loads(pathlib.Path('8-31-2026.broadcast.json').read_text())
p['html']=pathlib.Path('8-31-2026.email.html').read_text()
p['text']=pathlib.Path('8-31-2026.email.txt').read_text()
pathlib.Path('/tmp/broadcast.json').write_text(json.dumps(p))
"

ID=$(curl -s -X POST https://api.resend.com/broadcasts \
  -H "Authorization: Bearer $RESEND_API_KEY" -H "Content-Type: application/json" \
  --data @/tmp/broadcast.json | python3 -c "import sys,json;print(json.load(sys.stdin).get('id',''))")

[ -n "$ID" ] || { echo "no broadcast id returned"; exit 1; }
echo "== status =="
curl -s "https://api.resend.com/broadcasts/$ID" -H "Authorization: Bearer $RESEND_API_KEY" \
  | python3 -c "import sys,json;print(' status =',json.load(sys.stdin).get('status'))"
echo "preview: https://resend.com/broadcasts/$ID"
