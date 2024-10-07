import React, { useState } from 'react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { AlertCircle, CheckCircle2, User, Mail, MessageSquare, Send } from 'lucide-react'

const ContactPage: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('success')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Get in Touch</h1>
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
        <div className="w-full md:w-1/2">
          <img 
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/456519874_8534774303202096_3442040248915603135_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=YprmGAkoR1cQ7kNvgGK3rBm&_nc_ht=scontent-atl3-1.xx&_nc_gid=Aa2jae6uKwesLb3-Up2lS_w&oh=00_AYCUlZJB0LdyD4XzVxzr8RSdvNHc9xmPYrWoKN7nhAsJxw&oe=6709CFDD" 
            alt="Talisha White" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <form 
            onSubmit={handleSubmit} 
            className="space-y-6"
            name="contact"
            method="POST"
            data-netlify="true"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 flex items-center">
                <User className="mr-2 h-4 w-4" /> Name
              </label>
              <Input
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 flex items-center">
                <Mail className="mr-2 h-4 w-4" /> Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 flex items-center">
                <MessageSquare className="mr-2 h-4 w-4" /> Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full"
                rows={5}
              />
            </div>
            <Button type="submit" className="w-full flex items-center justify-center">
              <Send className="mr-2 h-4 w-4" /> Send Message
            </Button>
          </form>

          {status === 'success' && (
            <div className="mt-4 p-4 bg-green-100 text-green-700 rounded-md flex items-center">
              <CheckCircle2 className="mr-2" />
              Your message has been sent successfully!
            </div>
          )}

          {status === 'error' && (
            <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-center">
              <AlertCircle className="mr-2" />
              An error occurred. Please try again later.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactPage