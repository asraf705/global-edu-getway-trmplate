import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://globaledugateway.com' // Replace with your actual domain

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard', '/login', '/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

