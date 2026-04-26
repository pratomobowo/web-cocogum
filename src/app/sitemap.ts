import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cocogum.id'
  
  const routes = [
    '',
    '/tentang',
    '/produk',
    '/produk/briq',
    '/produk/coal',
    '/produk/cocopaper',
    '/produk/feed',
    '/produk/mosq',
    '/studi-kasus',
    '/teknologi',
    '/hubungi',
    '/audit',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))
}