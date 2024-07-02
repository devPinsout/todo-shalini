const withPWA = require('next-pwa')({
    dest: 'public',
    // disable: process.env.NODE_ENV === 'development',
    // register: true,
    // scope: '/app',
    // sw: 'service-worker.js',
    //...
  });
  
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    output: 'export',
    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,
    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,
    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
  };
  
  module.exports = withPWA(nextConfig);
  