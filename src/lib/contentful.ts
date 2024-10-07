import { createClient } from 'contentful'
import { Document } from '@contentful/rich-text-types'

const spaceId = 's6mwuzdg52v6'
const accessToken = '_GyM1k3BPSTqOCUgRh4Y_NMkNgEAhMLmKTa73BOJt8I'

if (!spaceId || !accessToken) {
  throw new Error('Contentful space ID or access token is missing. Please check your environment variables.')
}

export const contentfulClient = createClient({
  space: spaceId,
  accessToken: accessToken,
})

export interface BlogPost {
  title: string
  slug: string
  excerpt: string
  content: Document
  featuredImage: {
    url: string
    title: string
  }
  date: string
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    order: '-fields.date',
  })

  return response.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    featuredImage: {
      url: item.fields.featuredImage.fields.file.url,
      title: item.fields.featuredImage.fields.title,
    },
    date: item.fields.date,
  }))
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const response = await contentfulClient.getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })

  if (response.items.length === 0) {
    return null
  }

  const item = response.items[0]
  return {
    title: item.fields.title,
    slug: item.fields.slug,
    excerpt: item.fields.excerpt,
    content: item.fields.content,
    featuredImage: {
      url: item.fields.featuredImage.fields.file.url,
      title: item.fields.featuredImage.fields.title,
    },
    date: item.fields.date,
  }
}