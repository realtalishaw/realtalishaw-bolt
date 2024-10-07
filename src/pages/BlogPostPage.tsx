import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchBlogPostBySlug, BlogPost } from '../lib/contentful'
import { format } from 'date-fns'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types'
import { Button } from '../components/ui/button'
import { ChevronLeft } from 'lucide-react'

const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadPost() {
      if (slug) {
        try {
          const fetchedPost = await fetchBlogPostBySlug(slug)
          setPost(fetchedPost)
        } catch (error) {
          console.error('Error fetching blog post:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    loadPost()
  }, [slug])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!post) {
    return <div className="container mx-auto px-4 py-8">Blog post not found.</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/blog">
        <Button variant="outline" className="mb-4">
          <ChevronLeft className="mr-2 h-4 w-4" /> All Posts
        </Button>
      </Link>
      <article className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
        <time dateTime={post.date} className="text-muted-foreground">
          {format(new Date(post.date), 'MMMM d, yyyy')}
        </time>
        {post.featuredImage && (
          <img
            src={post.featuredImage.url}
            alt={post.featuredImage.title}
            className="w-full h-auto rounded-lg my-6"
          />
        )}
        <div className="prose prose-lg mt-6">
          {documentToReactComponents(post.content as Document)}
        </div>
      </article>
    </div>
  )
}

export default BlogPostPage