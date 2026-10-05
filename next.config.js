/** @type {import('next').NextConfig} */
// For GitHub Pages project sites set NEXT_PUBLIC_BASE_PATH=/<repo-name> at build time.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
