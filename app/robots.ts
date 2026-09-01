import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/.next/', '/private/'],
    },
    sitemap: 'https://dimensiongroup.co.in/sitemap.xml',
    host: 'https://dimensiongroup.co.in',
  }
}
