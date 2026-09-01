# Email through Resend

Every client report goes out as a Resend **broadcast**. The tool creates a **draft**. A human opens it in the Resend dashboard, checks it, and sends. No agent ever sends, and `tools/report.py` has no code path that could.

## The key

`RESEND_API_KEY` lives in `.env` at the repo root, which is gitignored, and nowhere else. Never paste it into a markdown file, a script or a chat. `tools/report.py draft` reads it from the environment or from `.env`.

The key was replaced on 2026-09-01 after the previous one started returning `API key is invalid` on every endpoint. The current one is a full-access key named "research415 report builder (Sep 2026)". If it fails, check `curl https://api.resend.com/domains -H "Authorization: Bearer $KEY"` first, then make a new key in the dashboard and update `.env`.

When the key is dead, the Resend MCP connector still works and can create the draft with `create-broadcast`. The connector takes content inline, so a 30 to 45KB email has to be pasted in chunks. Fix the key instead.

## Sender

- Domain `415brand.com`, verified.
- From `research415 <reports@415brand.com>`.
- Reply-to `matt@415brand.com` (each client's `CLIENT.md` frontmatter carries `reply_to`).
- Every broadcast body must contain `{{{RESEND_UNSUBSCRIBE_URL}}}`. The email builder adds it.

## Segments

One segment per client, holding only that client's readers. Never use General.

| Client | Segment id | Who is in it |
|---|---|---|
| aquavoice | `05fbf8a7-400f-4c4b-b5c4-e192b7ec5185` | finn, jack, mark and sam @aquavoice.com |
| sprag | `a8d694bd-9cb6-4e94-acdb-b69732da2615` | Ian and Alex |
| opentag | `dba88be6-d280-4037-a0a3-3890766ad874` | Tony Kam, Shelden Shi, Wilson Nguyen |
| cloudless | `e3b1e4f6-3240-4fd3-8ce3-a2dbda9fb709` | Tim Lenardo only |
| General | `5f922ade-5c8d-4469-a696-2e31989f0413` | empty. Do not use. |

Adapt has no segment recorded. Prospects (goody, experientiallabs, ref) have none until they sign. Confirm who is in a segment with the connector's `list-contacts` on the segment id before the first draft to a client.

## The API, for reference

- `POST /broadcasts` takes `segment_id` **or** `audience_id`, never both (422 otherwise), plus `from`, `reply_to` (a list), `subject`, `preview_text`, `html`, `text`, `name`.
- `GET /broadcasts/<id>` returns `status` and `sent_at`. The tool confirms `status: draft`, `sent_at: null`, and that the stored `html` is byte-identical to the file before printing the preview link `https://resend.com/broadcasts/<id>`.
- Sending is `POST /broadcasts/<id>/send`. Nothing in this repo calls it.
- Gmail clips at about 102KB. Keep emails under 55KB. The builder warns and refuses.
