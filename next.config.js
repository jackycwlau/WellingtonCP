const withPWA = require('next-pwa')

module.exports = withPWA({
  future: { webpack5: true },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  env: {
    siteTitle: 'WellingtonCP',
    siteDescription: 'Wellington Compounding Pharmacy',
    siteKeywords: 'Wellington Compounding Pharmacy',
    siteUrl: 'https://wellingtoncp.vercel.app',
    siteImagePreviewUrl: '/images/preview.png',
    twitterHandle: '@your_handle'
  },
})
