#!/usr/bin/env bash
# Generate a goaccess HTML traffic report from the production Caddy
# access log and open it locally. Run from your laptop.
#
# Usage: bash scripts/traffic-report.sh

set -euo pipefail

HOST="root@178.156.210.225"
REMOTE_LOG="/var/log/caddy/adaptyx-web.access.log"
REMOTE_REPORT="/tmp/adaptyx-traffic-report.html"
LOCAL_REPORT="/tmp/adaptyx-traffic-report.html"

echo "==> generating report on $HOST"
ssh "$HOST" "goaccess $REMOTE_LOG --log-format=CADDY --no-global-config -o $REMOTE_REPORT 2>/dev/null"

echo "==> downloading report"
scp "$HOST:$REMOTE_REPORT" "$LOCAL_REPORT" >/dev/null

echo "==> opening $LOCAL_REPORT"
case "$(uname)" in
  Linux*)  xdg-open "$LOCAL_REPORT" 2>/dev/null || echo "open: $LOCAL_REPORT" ;;
  Darwin*) open "$LOCAL_REPORT" ;;
  *)       echo "open: $LOCAL_REPORT" ;;
esac
