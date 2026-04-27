<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"
    doctype-public="-//W3C//DTD XHTML 1.0 Transitional//EN"
    doctype-system="http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd" />

  <xsl:template match="/">
    <html lang="en">
      <head>
        <title><xsl:value-of select="/rss/channel/title" /></title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex,follow" />
        <style type="text/css">
          :root {
            --navy: #0C1B33;
            --navy-deep: #07101F;
            --gold: #C8922A;
            --cream: #F5F3EF;
            --text: #111;
            --muted: rgba(255,255,255,0.78);
          }
          * { box-sizing: border-box; }
          body {
            margin: 0;
            font-family: Georgia, "Times New Roman", serif;
            color: var(--text);
            background: var(--cream);
          }
          .hero {
            background: var(--navy);
            color: #fff;
            padding: 72px 32px 56px;
          }
          .container {
            max-width: 720px;
            margin: 0 auto;
          }
          .eyebrow {
            font-family: ui-sans-serif, system-ui, -apple-system, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--gold);
            margin: 0 0 12px;
          }
          h1 {
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 900;
            font-size: 48px;
            line-height: 1.05;
            letter-spacing: -0.02em;
            margin: 0 0 18px;
          }
          h1 em { color: var(--gold); font-style: italic; }
          .lede {
            font-size: 17px;
            line-height: 1.6;
            color: var(--muted);
            margin: 0;
            max-width: 600px;
          }
          .lede a { color: var(--gold); }
          .badge {
            display: inline-block;
            margin-top: 24px;
            padding: 6px 12px;
            font-family: ui-sans-serif, system-ui, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            background: rgba(200,146,42,0.18);
            color: var(--gold);
            border: 1px solid rgba(200,146,42,0.35);
            border-radius: 2px;
          }
          .how {
            background: #fff;
            padding: 56px 32px;
            border-bottom: 1px solid rgba(12,27,51,0.08);
          }
          .how h2 {
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 800;
            font-size: 26px;
            color: var(--navy);
            margin: 0 0 8px;
          }
          .how p {
            font-size: 15px;
            line-height: 1.6;
            color: #444;
            margin: 0 0 18px;
          }
          .url-block {
            background: var(--cream);
            border: 1px solid rgba(12,27,51,0.1);
            padding: 14px 16px;
            font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
            font-size: 14px;
            color: var(--navy);
            border-radius: 2px;
            word-break: break-all;
          }
          .readers {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 16px;
          }
          .readers a {
            display: inline-block;
            font-family: ui-sans-serif, system-ui, sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--navy);
            padding: 8px 14px;
            border: 1px solid rgba(12,27,51,0.18);
            border-radius: 2px;
            text-decoration: none;
          }
          .readers a:hover { border-color: var(--gold); color: var(--gold); }
          .posts {
            padding: 56px 32px;
          }
          .posts h2 {
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 800;
            font-size: 26px;
            color: var(--navy);
            margin: 0 0 24px;
          }
          .post {
            padding: 24px 0;
            border-bottom: 1px solid rgba(12,27,51,0.08);
          }
          .post:last-child { border-bottom: none; }
          .post .meta {
            font-family: ui-sans-serif, system-ui, sans-serif;
            font-size: 11px;
            font-weight: 700;
            letter-spacing: 0.14em;
            text-transform: uppercase;
            color: var(--gold);
            margin-bottom: 8px;
          }
          .post h3 {
            font-family: Georgia, "Times New Roman", serif;
            font-weight: 800;
            font-size: 22px;
            line-height: 1.2;
            margin: 0 0 8px;
          }
          .post h3 a {
            color: var(--navy);
            text-decoration: none;
          }
          .post h3 a:hover { color: var(--gold); }
          .post p {
            font-size: 15px;
            line-height: 1.6;
            color: #444;
            margin: 0;
          }
          .footer {
            padding: 40px 32px;
            background: var(--navy-deep);
            color: rgba(255,255,255,0.6);
            text-align: center;
            font-family: ui-sans-serif, system-ui, sans-serif;
            font-size: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }
          .footer a { color: var(--gold); text-decoration: none; }
        </style>
      </head>
      <body>
        <header class="hero">
          <div class="container">
            <p class="eyebrow">RSS Feed · Insights</p>
            <h1>
              You found the <em>feed</em>.
            </h1>
            <p class="lede">
              This page is the machine-readable version of <a href="/blog">our Insights</a>. Drop the URL below into any RSS reader to get every new post automatically.
            </p>
            <span class="badge">XML / RSS 2.0</span>
          </div>
        </header>

        <section class="how">
          <div class="container">
            <h2>Subscribe in one step</h2>
            <p>Copy this URL and paste it into your RSS reader:</p>
            <div class="url-block">
              <xsl:value-of select="/rss/channel/atom:link/@href" />
            </div>
            <div class="readers">
              <a target="_blank" rel="noopener">
                <xsl:attribute name="href">https://feedly.com/i/subscription/feed/<xsl:value-of select="/rss/channel/atom:link/@href" /></xsl:attribute>
                Feedly
              </a>
              <a target="_blank" rel="noopener">
                <xsl:attribute name="href">https://www.inoreader.com/?add_feed=<xsl:value-of select="/rss/channel/atom:link/@href" /></xsl:attribute>
                Inoreader
              </a>
              <a target="_blank" rel="noopener">
                <xsl:attribute name="href">https://newsblur.com/?url=<xsl:value-of select="/rss/channel/atom:link/@href" /></xsl:attribute>
                NewsBlur
              </a>
              <a target="_blank" rel="noopener" href="https://en.wikipedia.org/wiki/Comparison_of_feed_aggregators">
                More readers
              </a>
            </div>
          </div>
        </section>

        <section class="posts">
          <div class="container">
            <h2>Recent posts</h2>
            <xsl:for-each select="/rss/channel/item">
              <article class="post">
                <div class="meta">
                  <xsl:value-of select="substring(pubDate, 0, 17)" />
                </div>
                <h3>
                  <a>
                    <xsl:attribute name="href"><xsl:value-of select="link" /></xsl:attribute>
                    <xsl:value-of select="title" />
                  </a>
                </h3>
                <p>
                  <xsl:value-of select="description" disable-output-escaping="yes" />
                </p>
              </article>
            </xsl:for-each>
          </div>
        </section>

        <footer class="footer">
          <a href="/">CareCore by Adaptyx</a>
          &#160;·&#160;
          <a href="/blog">Insights</a>
          &#160;·&#160;
          <a href="/pilot">Pilot Program</a>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
