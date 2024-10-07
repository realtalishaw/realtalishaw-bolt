import React, { useEffect, useState } from 'react'
import { fetchBlogPosts, BlogPost } from '../lib/contentful'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { format } from 'date-fns'

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    async function loadPosts() {
      try {
        const fetchedPosts = await fetchBlogPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }

    loadPosts()
  }, [])

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Blog</h1>
      <p className="text-xl text-muted-foreground mb-6">
        Insights on tech, fashion, and entrepreneurship
      </p>
      <Input
        type="text"
        placeholder="Search blog posts..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-8"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={post.featuredImage.url}
                alt={post.featuredImage.title}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time dateTime={post.date} className="text-muted-foreground">
                  {format(new Date(post.date), 'MMMM d, yyyy')}
                </time>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-primary">
                  <Link to={`/blog/${post.slug}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default BlogPage