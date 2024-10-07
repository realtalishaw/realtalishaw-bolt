import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

const Header: React.FC = () => {
  return (
    <header className="bg-background text-foreground shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Talisha White</Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-primary">Home</Link>
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <Link to="/projects" className="hover:text-primary">Projects</Link>
          <Link to="/gallery" className="hover:text-primary">Gallery</Link>
          <Link to="/press" className="hover:text-primary">Press</Link>
          <Link to="/about" className="hover:text-primary">About</Link>
          <Link to="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header