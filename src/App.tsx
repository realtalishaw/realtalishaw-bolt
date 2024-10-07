import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import ProjectsPage from './pages/ProjectsPage'
import GalleryPage from './pages/GalleryPage'
import PressMediaPage from './pages/PressMediaPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Router>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/press" element={<PressMediaPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App