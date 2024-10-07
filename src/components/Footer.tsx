import React from 'react'
import { Instagram, Linkedin, Facebook, Twitter, Youtube, Github } from 'lucide-react'
import { FaTiktok, FaPinterest, FaProductHunt } from 'react-icons/fa'

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: <Instagram size={24} />, url: 'https://instagram.com/realtalishaw' },
    { icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/realtalishaw' },
    { icon: <Facebook size={24} />, url: 'https://facebook.com/realtalishaw' },
    { icon: <Twitter size={24} />, url: 'https://twitter.com/realtalishaw' },
    { icon: <Youtube size={24} />, url: 'https://youtube.com/@realtalishaw' },
    { icon: <FaTiktok size={24} />, url: 'https://tiktok.com/@realtalishaw' },
    { icon: <FaPinterest size={24} />, url: 'https://pinterest.com/realtalishaw' },
    { icon: <Github size={24} />, url: 'https://github.com/realtalishaw' },
    { icon: <FaProductHunt size={24} />, url: 'https://www.producthunt.com/@realtalishaw' },
  ]

  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2024 Talisha White. All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer