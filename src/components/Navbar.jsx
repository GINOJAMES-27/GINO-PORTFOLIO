import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/portfolioData'

export default function Navbar() {
  const [active, setActive] = useState('About')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => {
      for (const sec of NAV_LINKS) {
        const el = document.getElementById(sec.toLowerCase())
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom > 100) {
            setActive(sec)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5%', height: 64,
        background: 'rgba(10,10,15,0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #1a1a2e',
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700, fontSize: 22, color: '#00f5c4', letterSpacing: 2
        }}>GJ</span>

        <div style={{ display: 'flex', gap: 4 }}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: 'none',
              border: 'none',
              borderBottom: active === n ? '2px solid #00f5c4' : '2px solid transparent',
              color: active === n ? '#00f5c4' : '#aaa',
              cursor: 'pointer', fontSize: 14, padding: '4px 12px',
              transition: 'color 0.2s',
              fontFamily: "'DM Sans', sans-serif",
            }}>{n}</button>
          ))}
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: '#0d0d18', borderBottom: '1px solid #1a1a2e',
          display: 'flex', flexDirection: 'column', padding: '8px 0',
        }}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: 'none', border: 'none', color: '#ccc',
              padding: '12px 5%', textAlign: 'left', fontSize: 15,
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}>{n}</button>
          ))}
        </div>
      )}
    </>
  )
}