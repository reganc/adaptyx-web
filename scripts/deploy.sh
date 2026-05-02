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

echo "==> clean stale build artifacts"
rm -rf .next .tsbuildinfo

echo "==> npm ci (clean, lockfile-faithful install)"
npm ci --no-audit --no-fund

echo "==> next build"
# Invoke via the package's bin path directly. node_modules/.bin/next is
# sometimes missing after `npm ci` when running as root (npm bin-link
# flake), so we don't rely on it.
#
# Next.js 15.x occasionally hits an ENOENT race during the static export
# rename phase ('.next/export/500.html' -> '.next/server/pages/500.html').
# It's reliably fixed by a clean retry, so do that automatically.
if ! node ./node_modules/next/dist/bin/next build; then
  echo "==> first build failed, cleaning .next and retrying once"
  rm -rf .next
  node ./node_modules/next/dist/bin/next build
fi

echo "==> pm2 restart $PM2_APP"
pm2 restart "$PM2_APP" --update-env

echo "==> done"
pm2 list | grep "$PM2_APP" || true
