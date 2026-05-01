#!/usr/bin/env bash
# Deploy adaptyx-web from origin/main on this host.
# Run from the repo root: bash scripts/deploy.sh
#
# Uses ./node_modules/.bin/next directly so the build does not depend on
# PATH being set up the way an interactive shell expects. This matters
# when the deploy runs over a non-interactive ssh session.

set -euo pipefail

cd "$(dirname "$0")/.."

PM2_APP="${PM2_APP:-adaptyx-web}"

echo "==> git pull"
git pull --ff-only origin main

echo "==> npm install"
npm install --no-audit --no-fund

echo "==> next build"
./node_modules/.bin/next build

echo "==> pm2 restart $PM2_APP"
pm2 restart "$PM2_APP" --update-env

echo "==> done"
pm2 list | grep "$PM2_APP" || true
