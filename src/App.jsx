import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import StaggeredMenu from './component/StaggeredMenu';
import Footer from './component/Footer';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import About from './pages/About'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import Reference from './pages/Reference'


function App() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
    { label: 'Resources', ariaLabel: 'Helpful resources', link: '/resources' },
    { label: 'Projects', ariaLabel: 'View projects', link: '/projects' },
    { label: 'Blog', ariaLabel: 'Read our blog', link: '/blog' },
    { label: 'About', ariaLabel: 'Learn about us', link: '/about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' },
    { label: 'Reference', ariaLabel: 'Get reference materials', link: '/reference' }
  ]

  return (
    <>
      <div className="w-full min-h-screen">
        <StaggeredMenu
          position="right"
          isFixed
          items={menuItems}
          displaySocials
          displayItemNumbering={true}
          menuButtonColor="#E5E9F0"
          openMenuButtonColor="#E5E9F0"
          changeMenuColorOnOpen={true}
          colors={['#6C63FF', '#1C77C3']}
          logoUrl={reactLogo}
          accentColor="#6C63FF"
          onMenuOpen={() => console.log('Menu opened')}
          onMenuClose={() => console.log('Menu closed')}
        />

        <main style={{ paddingTop: 24 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reference" element={<Reference />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
