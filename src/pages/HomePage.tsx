import React, { useEffect, useState } from 'react'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Link } from 'react-router-dom'
import { fetchBlogPosts, BlogPost } from '../lib/contentful'
import { format } from 'date-fns'

const HomePage: React.FC = () => {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([])
  const [email, setEmail] = useState('')
  const [subscriptionStatus, setSubscriptionStatus] = useState<'idle' | 'success' | 'error'>('idle')

  useEffect(() => {
    const script = document.createElement('script')
    script.src = "https://embedsocial.com/cdn/ht.js"
    script.id = "EmbedSocialHashtagScript"
    document.getElementsByTagName("head")[0].appendChild(script)

    return () => {
      const existingScript = document.getElementById("EmbedSocialHashtagScript")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  useEffect(() => {
    async function loadFeaturedPosts() {
      try {
        const posts = await fetchBlogPosts()
        setFeaturedPosts(posts.slice(0, 3))
      } catch (error) {
        console.error('Error fetching featured blog posts:', error)
      }
    }

    loadFeaturedPosts()
  }, [])

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubscriptionStatus('success')
    setEmail('')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t1.6435-9/67826065_2614525631893689_2933626086673612800_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=7b2446&_nc_ohc=b4xrMaHphuMQ7kNvgE1_8_D&_nc_ht=scontent-atl3-1.xx&_nc_gid=A4rwBIgyLDP-1nOsX_dBsUq&oh=00_AYBflt6iCUhbXi7XkbL_n9oANei_1re2LWyZ9IQtGHv1Zw&oe=672B55F1"
            alt="Talisha White"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg ml-auto">
            <h1 className="text-4xl font-bold text-white mb-4">Hi, I'm @realTalishaW 👋</h1>
            <p className="text-xl text-white mb-6">Startup founder, fashion designer, and tech enthusiast. Let's innovate together! 💡👗💻</p>
            <form 
              onSubmit={handleSubscribe} 
              className="flex gap-2"
              name="subscription"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="subscription" />
              <Input 
                type="email" 
                name="email"
                placeholder="Enter your email" 
                className="bg-white text-black" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit">Subscribe</Button>
            </form>
            {subscriptionStatus === 'success' && (
              <p className="mt-2 text-green-400">Thank you for subscribing!</p>
            )}
          </div>
        </div>
      </section>

      {/* Featured Blog Posts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Featured Blog Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <article key={post.slug} className="flex flex-col bg-card rounded-lg overflow-hidden shadow-lg">
                <img
                  src={post.featuredImage.url}
                  alt={post.featuredImage.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold mb-2">
                    <Link to={`/blog/${post.slug}`} className="hover:text-primary">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {format(new Date(post.date), 'MMMM d, yyyy')}
                  </p>
                  <p className="text-foreground mb-4 flex-grow">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="text-primary hover:underline inline-flex items-center">
                    Read More <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link to="/blog">
              <Button variant="outline">
                View All Posts <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Instagram Feed</h2>
          <div className="embedsocial-hashtag" data-ref="60861792b36a094c658f9e4c18e49c805f298bb4">
            <a
              className="feed-powered-by-es feed-powered-by-es-slider-img"
              href="https://embedsocial.com/social-media-aggregator/"
              target="_blank"
              title="Instagram widget"
              rel="noopener noreferrer"
            >
              <img
                src="https://embedsocial.com/cdn/images/embedsocial-icon.png"
                alt="EmbedSocial"
              />{' '}
              Instagram widget
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage