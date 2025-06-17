import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://perfectgarage.md'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/ro',
          '/ru',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}