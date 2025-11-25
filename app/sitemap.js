import { MetadataRoute } from 'next'

export default function sitemap() {
  return [
    {
      url: 'https://mamangcao.vercel.app/',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://mamangcao.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mamangcao.vercel.app/certifications',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}