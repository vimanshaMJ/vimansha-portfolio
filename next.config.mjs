// Set BASE_PATH (e.g. "/vimansha-portfolio") when the site is served from a subpath.
// Leave it unset for local development or a root domain.
const basePath = process.env.BASE_PATH ?? '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages.
  output: 'export',
  basePath,
  images: { unoptimized: true },
  reactStrictMode: true,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
