/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://paladinmma.com',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://paladinmma.com/sitemap.xml',
    ],
  },
  exclude: ['/404'],
  generateIndexSitemap: false,
}

