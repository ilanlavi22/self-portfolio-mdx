import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/assets/fonts/',
        '/*.woff$',
        '/*.woff2$',
        '/*.ttf$',
        '/*.otf$',
        '/*.eot$'
      ]
    },
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  }
}
