import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://almarsacc.com',
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: 'https://almarsacc.com/services',
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: 'https://almarsacc.com/about-us',
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: 'https://almarsacc.com/contact',
      lastModified: new Date(),
      priority: 1,
    }
  ]
}