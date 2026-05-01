# adaptyx-web

CareCore by Adaptyx — marketing site at https://www.adaptyxai.com.
Next.js 15 (App Router) on Node 22, served via pm2 behind Caddy on
`178.156.210.225`.

## Local development

```bash
npm install
npm run dev    # http://localhost:3004
npm run build  # production build
```

## Deploy

From your laptop:

```bash
git push origin main
ssh root@178.156.210.225 'cd /root/apps/adaptyx-web && bash scripts/deploy.sh'
```

`scripts/deploy.sh` runs `git pull` → clears `.next`/`.tsbuildinfo` →
`npm ci` → `next build` → `pm2 restart adaptyx-web`.

## Traffic / access logs

Caddy writes JSON access logs to
`/var/log/caddy/adaptyx-web.access.log` on prod (auto-rotated at
10 MB, 10 files kept, 30-day retention). `goaccess` is installed on
the server.

### From your laptop

One command — generates a fresh report on the server, downloads it,
opens it in your browser:

```bash
bash scripts/traffic-report.sh
```

### From the production server (already SSH'd in)

Live terminal dashboard (press `q` to quit):

```bash
goaccess /var/log/caddy/adaptyx-web.access.log --log-format=CADDY --no-global-config
```

Static HTML report:

```bash
goaccess /var/log/caddy/adaptyx-web.access.log --log-format=CADDY --no-global-config -o /tmp/adaptyx-traffic-report.html
```

(Then from your laptop: `scp root@178.156.210.225:/tmp/adaptyx-traffic-report.html ~/Downloads/`.)

`scripts/traffic-report.sh` works in both contexts — it detects
whether the log file is locally readable and either runs goaccess
locally or SSHes to prod.

Tail raw entries while debugging a specific request:

```bash
tail -f /var/log/caddy/adaptyx-web.access.log
```

## Repo layout

```
app/                Next.js routes (App Router)
  platform/         /platform overview + /platform/[slug] pillar pages
  pilot/            pilot offer + request form
  blog/             MDX blog
  api/pilot/        pilot form submission (Resend)
components/sections/  page sections (Hero, Brief, Depth, etc.)
components/seo/     JSON-LD helpers
content/blog/       MDX posts
lib/
  platform.ts       6 capability pillars and their features
  site.ts           site-wide config (name, tagline, description)
  blog.ts           blog post loader
scripts/
  deploy.sh         deploy from origin/main on prod
  traffic-report.sh goaccess HTML report (laptop or server)
TODO.md             deferred work (security advisories, etc.)
```
