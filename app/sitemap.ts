import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://ilanlavi.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1
    },
    {
      url: 'https://ilanlavi.com/posts',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    }
  ]
}
