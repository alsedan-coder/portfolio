/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: { unoptimized: true },
  // Cópia no GitHub Pages: o build de lá define BASE_PATH=/portfolio. Na Cloudflare fica vazio.
  basePath: process.env.BASE_PATH || '',
};
export default nextConfig;
