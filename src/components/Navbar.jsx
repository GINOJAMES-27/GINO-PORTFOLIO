import { useState, useEffect } from 'react'
import { NAV_LINKS } from '../data/portfolioData'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function Navbar({ theme, toggleTheme }) {
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
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-color)',
        transition: 'background 0.3s ease, border-color 0.3s ease'
      }}>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700, fontSize: 22, color: 'var(--accent-cyan)', letterSpacing: 2
        }}>GJ</span>

        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: 'none',
              border: 'none',
              borderBottom: active === n ? '2px solid var(--accent-cyan)' : '2px solid transparent',
              color: active === n ? 'var(--accent-cyan)' : 'var(--text-secondary)',
              cursor: 'pointer', fontSize: 14, padding: '4px 12px',
              transition: 'color 0.2s',
              fontFamily: "'DM Sans', sans-serif",
            }}>{n}</button>
          ))}
          <button onClick={toggleTheme} style={{
            background: 'transparent',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '50%',
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-tertiary)'}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            {theme === 'dark' ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div style={{
          position: 'fixed', top: 64, left: 0, right: 0, zIndex: 99,
          background: 'var(--bg-secondary)', borderBottom: '1px solid var(--border-color)',
          display: 'flex', flexDirection: 'column', padding: '8px 0',
        }}>
          {NAV_LINKS.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={{
              background: 'none', border: 'none', color: 'var(--text-secondary)',
              padding: '12px 5%', textAlign: 'left', fontSize: 15,
              cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}>{n}</button>
          ))}
        </div>
      )}
    </>
  )
}