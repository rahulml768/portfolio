// Link previews and the sitemap need an absolute URL. Hosts expose their own at
// build time; set NEXT_PUBLIC_SITE_URL to override, for example with a custom domain.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  process.env.CF_PAGES_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
