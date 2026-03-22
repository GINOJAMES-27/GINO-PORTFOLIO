import { useState, useEffect, useRef } from 'react'
import { SiGithub, SiPython, SiNodedotjs, SiFlutter, SiReact, SiOpenjdk } from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'

const ROLES = [
  'Software Developer',
  'AI Enthusiast',
  'Backend Engineer',
  'Flutter Developer',
  'Problem Solver',
]

const FLOATING_ICONS = [
  { Icon: SiPython,    color: '#3776ab', top: '8%',  left: '5%',  size: 28, delay: '0s',   duration: '4s'   },
  { Icon: SiReact,     color: '#61dafb', top: '20%', left: '88%', size: 24, delay: '0.5s', duration: '5s'   },
  { Icon: SiNodedotjs, color: '#5fa04e', top: '70%', left: '92%', size: 26, delay: '1s',   duration: '4.5s' },
  { Icon: SiFlutter,   color: '#02569b', top: '80%', left: '3%',  size: 22, delay: '1.5s', duration: '6s'   },
  { Icon: SiOpenjdk,   color: '#f89820', top: '45%', left: '90%', size: 20, delay: '2s',   duration: '5.5s' },
]

const STATS = [
  { value: '8.36', label: 'CGPA' },
  { value: '3+',   label: 'Projects' },
  { value: '2',    label: 'Internships' },
  { value: '2x',   label: 'Award Winner' },
]

export default function Hero() {
  const [roleIdx,   setRoleIdx]   = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing,    setTyping]    = useState(true)
  const [mounted,   setMounted]   = useState(false)
  const charIdx = useRef(0)

  useEffect(() => { setTimeout(() => setMounted(true), 100) }, [])

  useEffect(() => {
    const current = ROLES[roleIdx]
    let timeout
    if (typing) {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current + 1))
          charIdx.current++
        }, 70)
      } else {
        timeout = setTimeout(() => setTyping(false), 1800)
      }
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current - 1))
          charIdx.current--
        }, 35)
      } else {
        setRoleIdx((r) => (r + 1) % ROLES.length)
        setTyping(true)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, typing, roleIdx])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 6% 60px',
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {/* ── Ambient glow orbs ── */}
      <div style={{
        position: 'absolute', top: '10%', left: '15%',
        width: 400, height: 400, borderRadius: '50%',
        background: 'radial-gradient(circle, #00f5c420 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 6s ease-in-out infinite',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '10%',
        width: 350, height: 350, borderRadius: '50%',
        background: 'radial-gradient(circle, #7c6fff20 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite 1s',
      }} />
      <div style={{
        position: 'absolute', top: '50%', right: '25%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, #ff6b9d15 0%, transparent 70%)',
        filter: 'blur(30px)', pointerEvents: 'none',
        animation: 'float 5s ease-in-out infinite 2s',
      }} />

      {/* ── Floating tech icons ── */}
      {FLOATING_ICONS.map(({ Icon, color, top, left, size, delay, duration }, i) => (
        <div key={i} style={{
          position: 'absolute', top, left, opacity: 0.15,
          animation: `float ${duration} ease-in-out infinite ${delay}`,
          pointerEvents: 'none',
        }}>
          <Icon size={size} color={color} />
        </div>
      ))}

      {/* ── Scanline ── */}
      <div style={{
        position: 'absolute', left: 0, right: 0, height: 1,
        background: 'linear-gradient(to right, transparent, #00f5c420, transparent)',
        top: '30%', pointerEvents: 'none',
        animation: 'scanline 8s linear infinite',
      }} />

      {/* ── Two-column layout wrapper ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 'clamp(32px, 5vw, 80px)',
        maxWidth: 1060,
        width: '100%',
        flexWrap: 'wrap',
      }}>

        {/* ── LEFT: text content ── */}
        <div style={{
          flex: '1 1 360px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}>

          {/* Available badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#00f5c410', border: '1px solid #00f5c430',
            borderRadius: 30, padding: '8px 20px', marginBottom: 28,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%',
              background: '#00f5c4', display: 'inline-block',
              animation: 'blink 1.5s ease-in-out infinite',
              boxShadow: '0 0 6px #00f5c4',
            }} />
            <span style={{
              fontSize: 12, color: '#00f5c4',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600, letterSpacing: 1,
            }}>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Name */}
          <h1 style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 'clamp(36px, 6vw, 72px)',
            color: '#fff', lineHeight: 1.05,
            marginBottom: 8, letterSpacing: -2,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}>
            Gino{' '}
            <span style={{
              color: 'transparent',
              WebkitTextStroke: '2px #00f5c4',
              textShadow: '0 0 40px #00f5c444',
            }}>James</span>
          </h1>

          {/* Typewriter */}
          <div style={{
            display: 'flex', alignItems: 'center',
            gap: 6, marginBottom: 20, minHeight: 44,
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.7s ease 0.3s',
          }}>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(14px, 2.5vw, 22px)',
              color: '#7c6fff', fontWeight: 700,
            }}>&lt; {displayed}</span>
            <span style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 26, color: '#00f5c4',
              animation: 'blink 0.8s step-end infinite',
            }}>|</span>
          <span style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 'clamp(16px, 3vw, 24px)',
            color: '#7c6fff', fontWeight: 700,
          }}>/ &gt;</span>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: 'clamp(13px, 1.8vw, 16px)',
            color: '#888', lineHeight: 1.9,
            maxWidth: 480, marginBottom: 32,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.7s ease 0.4s, transform 0.7s ease 0.4s',
          }}>
            B.Tech IT student at{' '}
            <span style={{ color: '#ccc', fontWeight: 500 }}>
              Amal Jyothi College of Engineering
            </span>{' '}
            (CGPA:{' '}
            <span style={{ color: '#00f5c4', fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
              8.36
            </span>
            ) — building AI‑driven SaaS at{' '}
            <span style={{ color: '#ccc', fontWeight: 500 }}>Hudson Software Solutions</span>.
            Passionate about scalable systems, path planning algorithms, and shipping products that matter.
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex', gap: 14, flexWrap: 'wrap',
            marginBottom: 40,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
          }}>
            <button
              onClick={() => scrollTo('projects')}
              style={{
                background: '#00f5c4', color: '#0a0a0f',
                border: 'none', borderRadius: 10,
                padding: '13px 28px', fontWeight: 700,
                fontSize: 14, cursor: 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 30px #00f5c455'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              View My Work ↓
            </button>

            <a
              href="/resume.pdf"
              download
              style={{
                background: 'transparent', color: '#fff',
                border: '1.5px solid #ffffff22', borderRadius: 10,
                padding: '13px 28px', fontWeight: 600, fontSize: 14,
                textDecoration: 'none', display: 'inline-block',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'border 0.2s, background 0.2s, transform 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.border = '1.5px solid #ffffff55'
                e.currentTarget.style.background = '#ffffff0a'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.border = '1.5px solid #ffffff22'
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Download Resume ↗
            </a>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'flex', gap: 0,
            background: '#0d0d18',
            border: '1px solid #1a1a2e',
            borderRadius: 14, overflow: 'hidden',
            marginBottom: 32, flexWrap: 'wrap',
            width: '100%', maxWidth: 460,
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(10px)',
            transition: 'opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                flex: '1 1 25%', padding: '16px 12px', textAlign: 'center',
                borderRight: i < STATS.length - 1 ? '1px solid #1a1a2e' : 'none',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = '#ffffff05'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 'clamp(16px, 2.5vw, 22px)',
                  fontWeight: 700, color: '#00f5c4', marginBottom: 3,
                }}>{s.value}</div>
                <div style={{
                  fontSize: 10, color: '#555',
                  fontFamily: "'DM Sans', sans-serif",
                  textTransform: 'uppercase', letterSpacing: 1,
                }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Social links */}
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            flexWrap: 'wrap',
            opacity: mounted ? 1 : 0,
            transition: 'opacity 0.7s ease 0.7s',
          }}>
            {[
              { Icon: SiGithub,     label: 'GitHub',   href: 'https://github.com/GINOJAMES-27',    color: '#fff'    },
              { Icon: FaLinkedinIn, label: 'LinkedIn',  href: 'https://linkedin.com/in/gino-james', color: '#0a66c2' },
            ].map(({ Icon, label, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: '#0d0d18', border: '1px solid #1a1a2e',
                  borderRadius: 10, padding: '9px 16px',
                  textDecoration: 'none', color: '#888',
                  fontSize: 13, fontWeight: 500,
                  fontFamily: "'DM Sans', sans-serif",
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${color}55`
                  e.currentTarget.style.color = '#fff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.background = color + '12'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid #1a1a2e'
                  e.currentTarget.style.color = '#888'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.background = '#0d0d18'
                }}
              >
                <Icon size={15} color={color} />
                {label}
              </a>
            ))}

            <div style={{ width: 1, height: 18, background: '#1a1a2e' }} />

            <a
              href="mailto:ginojames27@gmail.com"
              style={{ fontSize: 12, color: '#555', textDecoration: 'none', fontFamily: "'JetBrains Mono', monospace" }}
              onMouseEnter={e => e.currentTarget.style.color = '#00f5c4'}
              onMouseLeave={e => e.currentTarget.style.color = '#555'}
            >
              ginojames27@gmail.com
            </a>
          </div>
        </div>

        {/* ── RIGHT: Profile photo ── */}
        <div style={{
          flex: '0 0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          opacity: mounted ? 1 : 0,
          transform: mounted ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s',
        }}>

          {/* Outer spinning ring */}
          <div style={{
            position: 'relative',
            width: 280, height: 280,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>

            {/* Spinning conic ring */}
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              background: 'conic-gradient(from 0deg, #00f5c4, #7c6fff, #ff6b9d, #00f5c4)',
              animation: 'spin 8s linear infinite',
              padding: 3,
            }}>
              <div style={{
                width: '100%', height: '100%',
                borderRadius: '50%',
                background: '#0a0a0f',
              }} />
            </div>

            {/* Glow behind photo */}
            <div style={{
              position: 'absolute',
              width: 220, height: 220, borderRadius: '50%',
              background: 'radial-gradient(circle, #00f5c430 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }} />

            {/* Profile photo */}
            <img
              src="/profile.jpg"
              alt="Gino James"
              style={{
                position: 'relative',
                width: 252, height: 252,
                borderRadius: '50%',
                objectFit: 'cover',
                objectPosition: 'center top',
                border: '3px solid #0a0a0f',
                zIndex: 1,
              }}
              onError={(e) => {
                // Fallback to initials if image not found
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />

            {/* Fallback initials (hidden by default) */}
            <div style={{
              position: 'absolute',
              width: 252, height: 252,
              borderRadius: '50%',
              background: '#0d0d18',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700, fontSize: 52,
              color: '#00f5c4', zIndex: 1,
            }}>GJ</div>

            {/* Floating badge — NASA */}
            <div style={{
              position: 'absolute', top: 12, right: -16,
              background: '#1a1a2e', border: '1px solid #00f5c4', color: '#00f5c4',
              borderRadius: 20, padding: '6px 12px',
              fontSize: 11, fontWeight: 600,
              animation: 'float 3s ease-in-out infinite',
              whiteSpace: 'nowrap',
              fontFamily: "'DM Sans', sans-serif",
              zIndex: 2,
            }}>🏆 NASA Winner</div>

            {/* Floating badge — I2U */}
            <div style={{
              position: 'absolute', bottom: 12, left: -24,
              background: '#1a1a2e', border: '1px solid #7c6fff', color: '#7c6fff',
              borderRadius: 20, padding: '6px 12px',
              fontSize: 11, fontWeight: 600,
              animation: 'float 3.5s ease-in-out infinite 0.5s',
              whiteSpace: 'nowrap',
              fontFamily: "'DM Sans', sans-serif",
              zIndex: 2,
            }}>🚀 I2U Funded</div>
          </div>

          {/* Name card below photo */}
          <div style={{
            background: '#0d0d18',
            border: '1px solid #1a1a2e',
            borderRadius: 14, padding: '14px 24px',
            textAlign: 'center',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15, fontWeight: 700,
              color: '#fff', margin: '0 0 4px',
            }}>Gino James</p>
            <p style={{
              fontSize: 12, color: '#555',
              fontFamily: "'DM Sans', sans-serif",
              margin: 0,
            }}>B.Tech IT · AJCE · Kerala, India</p>
          </div>
        </div>

      </div>

      {/* ── Scroll indicator ── */}
      <div
        onClick={() => scrollTo('experience')}
        style={{
          position: 'absolute', bottom: 32, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          opacity: mounted ? 0.4 : 0,
          transition: 'opacity 1s ease 1s',
          cursor: 'pointer',
        }}
      >
        <span style={{
          fontSize: 10, color: '#555', letterSpacing: 2,
          fontFamily: "'JetBrains Mono', monospace",
          textTransform: 'uppercase',
        }}>scroll</span>
        <div style={{
          width: 1, height: 40,
          background: 'linear-gradient(to bottom, #555, transparent)',
          animation: 'float 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes scanline {
          0%   { top: 0%;   opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  )
}
