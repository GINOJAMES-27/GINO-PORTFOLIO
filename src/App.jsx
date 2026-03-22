import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <div style={{
        position: 'fixed', inset: 0,
        backgroundImage: 'radial-gradient(circle, #1a1a2e 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        opacity: 0.5, zIndex: 0, pointerEvents: 'none'
      }} />
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Achievements />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '24px', borderTop: '1px solid #1a1a2e', position: 'relative', zIndex: 1, color: '#444', fontSize: 13 }}>
        Designed & Built by <span style={{ color: '#00f5c4' }}>Gino James</span> · 2025
      </footer>
    </div>
  )
}