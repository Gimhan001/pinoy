import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://pinoytravels.uk',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://pinoytravels.uk/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    {
      url: 'https://pinoytravels.uk/offers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/popular-destionation',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/popular-destionation/flights-to-cebu-from-london',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/popular-destionation/london-to-manila-flights',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/popular-destionation/london-to-davao-flights',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1,
    },
    {
        url: 'https://pinoytravels.uk/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://pinoytravels.uk/terms-and-conditions',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://pinoytravels.uk/faq',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
    },
  ]
}