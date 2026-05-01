#!/usr/bin/env bash
# Generate a goaccess HTML traffic report from the production Caddy
# access log.
#
# Works from either your laptop or directly on the production server:
#   - On the server: runs goaccess on the local log file and writes the
#     HTML to /tmp/adaptyx-traffic-report.html. Tells you to scp it.
#   - On your laptop: SSHes to the server, generates the report, scps it
#     back, opens it in your browser.
#
# Usage: bash scripts/traffic-report.sh

set -euo pipefail

HOST="root@178.156.210.225"
LOG="/var/log/caddy/adaptyx-web.access.log"
REPORT="/tmp/adaptyx-traffic-report.html"

if [[ -r "$LOG" ]]; then
  echo "==> running locally (log file found at $LOG)"
  goaccess "$LOG" --log-format=CADDY --no-global-config -o "$REPORT" 2>/dev/null
  echo "==> report written to $REPORT"
  echo
  echo "To view from your laptop, run:"
  echo "  scp $HOST:$REPORT ~/Downloads/ && open ~/Downloads/$(basename "$REPORT")"
  echo
  echo "Or for a live terminal dashboard, run:"
  echo "  goaccess $LOG --log-format=CADDY --no-global-config"
  exit 0
fi

echo "==> generating report on $HOST"
ssh "$HOST" "goaccess $LOG --log-format=CADDY --no-global-config -o $REPORT 2>/dev/null"

echo "==> downloading report"
scp "$HOST:$REPORT" "$REPORT" >/dev/null

echo "==> opening $REPORT"
case "$(uname)" in
  Linux*)  xdg-open "$REPORT" 2>/dev/null || echo "open: $REPORT" ;;
  Darwin*) open "$REPORT" ;;
  *)       echo "open: $REPORT" ;;
esac
