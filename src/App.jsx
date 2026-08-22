import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'radial-gradient(circle, var(--border-color) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.5, zIndex: 0, pointerEvents: 'none'
      }} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '24px', borderTop: '1px solid var(--border-color)', position: 'relative', zIndex: 1, color: 'var(--text-muted)', fontSize: 13 }}>
        Designed & Built by <span style={{ color: 'var(--accent-cyan)' }}>Gino James</span> · 2025
      </footer>
    </div>
  )
}