/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
const withTM = require('next-transpile-modules')(['@ex-turborepo-demo/utils'])

module.exports = withTM(nextConfig)
