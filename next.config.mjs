/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static HTML export, deployed to IIS (dimensiongroup.co.in).
  output: "export",
  // Emit /bond/index.html instead of /bond.html so IIS serves clean URLs
  // (/bond/) through its default document — no URL Rewrite module required.
  trailingSlash: true,
  // Lets a production build run without touching the dev server's .next folder:
  //   NEXT_DIST_DIR=.next-prod npm run build
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Readable stack traces in production debugging; maps are only fetched by devtools.
  productionBrowserSourceMaps: true,
  poweredByHeader: false,
};

export default nextConfig;
