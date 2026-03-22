import { useState, useRef } from 'react'
import { SiGithub, SiGmail } from 'react-icons/si'
import { FaLinkedinIn, FaPhone } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const CONTACT_LINKS = [
  {
    icon: SiGmail,
    label: 'Email',
    value: 'ginojames27@gmail.com',
    href: 'mailto:ginojames27@gmail.com',
    color: '#ea4335',
    desc: 'Best way to reach me',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: 'linkedin.com/in/gino-james',
    href: 'https://linkedin.com/in/gino-james',
    color: '#0a66c2',
    desc: "Let's connect professionally",
  },
  {
    icon: SiGithub,
    label: 'GitHub',
    value: 'github.com/GINOJAMES-27',
    href: 'https://github.com/GINOJAMES-27',
    color: '#ffffff',
    desc: 'Check out my code',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+91 9074598626',
    href: 'tel:+919074598626',
    color: '#00f5c4',
    desc: 'Available Mon–Sat',
  },
]

const INPUT_STYLE = {
  width: '100%',
  background: '#0a0a12',
  border: '1px solid #1e1e35',
  borderRadius: 12,
  padding: '14px 18px',
  fontSize: 14,
  color: '#e0e0e0',
  fontFamily: "'DM Sans', sans-serif",
  outline: 'none',
  transition: 'border 0.25s, box-shadow 0.25s',
  boxSizing: 'border-box',
}

export default function Contact() {
  const [hovered, setHovered] = useState(null)
  const [copied,  setCopied]  = useState(false)
  const [status,  setStatus]  = useState('idle')
  const [focused, setFocused] = useState(null)
  const formRef = useRef()

  const [form, setForm] = useState({
    from_name:  '',
    from_email: '',
    message:    '',
  })

  const copyEmail = () => {
    navigator.clipboard.writeText('ginojames27@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.from_name || !form.from_email || !form.message) return
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ from_name: '', from_email: '', message: '' })
      setTimeout(() => setStatus('idle'), 4000)
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const focusStyle = (name) =>
    focused === name
      ? { border: '1px solid #00f5c466', boxShadow: '0 0 0 4px #00f5c414' }
      : {}

  return (
    <section
      id="contact"
      style={{
        padding: '80px 6% 100px',
        position: 'relative',
        zIndex: 1,
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      {/* Section header */}
      <h2 style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 'clamp(26px, 4vw, 40px)',
        fontWeight: 700, color: '#fff', marginBottom: 8,
      }}>
        <span style={{ color: '#00f5c4' }}>//</span> Get In Touch
      </h2>
      <p style={{ color: '#555', fontSize: 16, marginBottom: 60 }}>
        Let's build something amazing together
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 28,
        alignItems: 'start',
      }}>

        {/* ── LEFT COLUMN ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

          {/* Info card */}
          <div style={{
            background: '#0d0d18',
            border: '1px solid #1a1a2e',
            borderRadius: 20,
            padding: '36px 32px',
            position: 'relative',
            overflow: 'hidden',
          }}>
            {/* Top gradient line */}
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 3,
              background: 'linear-gradient(90deg, #00f5c4, #7c6fff44)',
              borderRadius: '20px 20px 0 0',
            }} />

            {/* Ambient glow */}
            <div style={{
              position: 'absolute', width: 300, height: 300, borderRadius: '50%',
              background: '#00f5c40a', filter: 'blur(70px)',
              top: -100, left: -100, pointerEvents: 'none',
            }} />

            {/* Status badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#00f5c412', border: '1px solid #00f5c433',
              borderRadius: 30, padding: '7px 18px', marginBottom: 28,
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#00f5c4', display: 'inline-block',
                animation: 'blink 1.5s ease-in-out infinite',
                boxShadow: '0 0 8px #00f5c4',
              }} />
              <span style={{
                fontSize: 11, color: '#00f5c4',
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700, letterSpacing: 1.5,
              }}>OPEN TO OPPORTUNITIES</span>
            </div>

            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 'clamp(20px, 3vw, 26px)',
              fontWeight: 700, color: '#fff',
              lineHeight: 1.35, marginBottom: 16,
            }}>
              Have a project<br />
              in mind?{' '}
              <span style={{ color: '#00f5c4' }}>Let's talk.</span>
            </h3>

            <p style={{
              fontSize: 14, color: '#666', lineHeight: 1.9, marginBottom: 28,
            }}>
              I'm open to full-time roles, freelance projects, and interesting
              conversations. Fill out the form or reach out directly — I usually
              reply within 24 hours.
            </p>

            {/* Copy email button */}
            <button
              onClick={copyEmail}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: copied ? '#00f5c418' : '#ffffff08',
                border: copied ? '1px solid #00f5c455' : '1px solid #ffffff12',
                borderRadius: 10, padding: '11px 18px',
                fontSize: 12, color: copied ? '#00f5c4' : '#555',
                fontFamily: "'JetBrains Mono', monospace",
                cursor: 'pointer', transition: 'all 0.25s',
                fontWeight: 600,
              }}
            >
              <span style={{ fontSize: 14 }}>{copied ? '✓' : '⎘'}</span>
              {copied ? 'Copied to clipboard!' : 'ginojames27@gmail.com'}
            </button>
          </div>

          {/* Contact link cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 14,
          }}>
            {CONTACT_LINKS.map((link, i) => {
              const Icon = link.icon
              const isHov = hovered === i
              return (
                <a
                  key={i}
                  href={link.href}
                  target={link.href.startsWith('mailto') || link.href.startsWith('tel') ? '_self' : '_blank'}
                  rel="noreferrer"
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    textDecoration: 'none',
                    background: isHov ? link.color + '0e' : '#0d0d18',
                    border: isHov ? `1px solid ${link.color}55` : '1px solid #1a1a2e',
                    borderRadius: 16, padding: '20px 18px',
                    display: 'flex', flexDirection: 'column', gap: 14,
                    position: 'relative', overflow: 'hidden',
                    transition: 'all 0.25s ease',
                    transform: isHov ? 'translateY(-5px)' : 'translateY(0)',
                    boxShadow: isHov ? `0 16px 44px ${link.color}18` : 'none',
                  }}
                >
                  {/* Corner glow */}
                  <div style={{
                    position: 'absolute', width: 90, height: 90, borderRadius: '50%',
                    background: link.color + '10', filter: 'blur(22px)',
                    top: -20, right: -20, pointerEvents: 'none',
                    opacity: isHov ? 1 : 0, transition: 'opacity 0.3s',
                  }} />

                  {/* Icon box */}
                  <div style={{
                    width: 42, height: 42, borderRadius: 11,
                    background: link.color + '18',
                    border: `1px solid ${link.color}33`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: isHov ? `0 0 18px ${link.color}44` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}>
                    <Icon size={18} color={link.color} />
                  </div>

                  {/* Text */}
                  <div>
                    <p style={{
                      fontSize: 10, color: '#444',
                      fontFamily: "'JetBrains Mono', monospace",
                      letterSpacing: 1.2, textTransform: 'uppercase',
                      margin: '0 0 4px', fontWeight: 700,
                    }}>{link.label}</p>
                    <p style={{
                      fontSize: 11, color: isHov ? '#fff' : '#777',
                      fontWeight: 500, margin: '0 0 3px',
                      transition: 'color 0.2s', wordBreak: 'break-all',
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{link.value}</p>
                    <p style={{
                      fontSize: 10, color: '#333', margin: 0,
                      fontFamily: "'DM Sans', sans-serif",
                    }}>{link.desc}</p>
                  </div>

                  {/* Arrow */}
                  <span style={{
                    position: 'absolute', top: 16, right: 16, fontSize: 13,
                    color: isHov ? link.color : '#2a2a3a',
                    transition: 'color 0.2s, transform 0.2s',
                    transform: isHov ? 'translate(2px,-2px)' : 'translate(0,0)',
                  }}>↗</span>
                </a>
              )
            })}
          </div>
        </div>

        {/* ── RIGHT: FORM ── */}
        <div style={{
          background: '#0d0d18',
          border: '1px solid #1a1a2e',
          borderRadius: 20,
          padding: '36px 32px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Top gradient line */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0, height: 3,
            background: 'linear-gradient(90deg, #7c6fff, #ff6b9d44)',
            borderRadius: '20px 20px 0 0',
          }} />

          {/* Ambient glow */}
          <div style={{
            position: 'absolute', width: 280, height: 280, borderRadius: '50%',
            background: '#7c6fff08', filter: 'blur(70px)',
            bottom: -100, right: -100, pointerEvents: 'none',
          }} />

          {/* Form header */}
          <div style={{ marginBottom: 28 }}>
            <h3 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 6,
            }}>
              Send a Message
            </h3>
            <p style={{ fontSize: 13, color: '#555', lineHeight: 1.6, margin: 0 }}>
              Fill in the details below — I'll get back to you shortly.
            </p>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{ display: 'flex', flexDirection: 'column', gap: 18 }}
          >
            <input type="hidden" name="to_email" value="ginojames27@gmail.com" />

            {/* Name + Email side by side */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 14,
            }}>
              {/* Name */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label style={{
                  fontSize: 10, color: '#444',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700,
                }}>Your Name</label>
                <input
                  type="text"
                  name="from_name"
                  placeholder="John Doe"
                  value={form.from_name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  style={{ ...INPUT_STYLE, ...focusStyle('name') }}
                />
              </div>

              {/* Email */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                <label style={{
                  fontSize: 10, color: '#444',
                  fontFamily: "'JetBrains Mono', monospace",
                  letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700,
                }}>Your Email</label>
                <input
                  type="email"
                  name="from_email"
                  placeholder="john@example.com"
                  value={form.from_email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  style={{ ...INPUT_STYLE, ...focusStyle('email') }}
                />
              </div>
            </div>

            {/* Locked recipient */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <label style={{
                fontSize: 10, color: '#444',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700,
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                Recipient
                <span style={{
                  fontSize: 9, color: '#2a2a40',
                  background: '#1a1a2e', border: '1px solid #2a2a40',
                  borderRadius: 4, padding: '2px 7px', letterSpacing: 0.5,
                }}>🔒 LOCKED</span>
              </label>
              <div style={{
                ...INPUT_STYLE,
                display: 'flex', alignItems: 'center',
                justifyContent: 'space-between',
                background: '#070710',
                border: '1px solid #12121f',
                cursor: 'not-allowed', color: '#333',
                gap: 10,
              }}>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13, color: '#3a3a55',
                }}>
                  ginojames27@gmail.com
                </span>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%',
                  background: '#00f5c4',
                  boxShadow: '0 0 6px #00f5c4',
                  flexShrink: 0,
                }} />
              </div>
            </div>

            {/* Message */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
              <label style={{
                fontSize: 10, color: '#444',
                fontFamily: "'JetBrains Mono', monospace",
                letterSpacing: 1.2, textTransform: 'uppercase', fontWeight: 700,
              }}>Message</label>
              <textarea
                name="message"
                placeholder="Hi Gino, I'd love to discuss..."
                value={form.message}
                onChange={handleChange}
                onFocus={() => setFocused('message')}
                onBlur={() => setFocused(null)}
                required
                rows={6}
                style={{
                  ...INPUT_STYLE,
                  resize: 'vertical',
                  minHeight: 130,
                  lineHeight: 1.7,
                  ...focusStyle('message'),
                }}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'sending'}
              style={{
                background: status === 'error' ? '#ff6b9d'
                          : '#00f5c4',
                color: '#0a0a0f',
                border: 'none', borderRadius: 12,
                padding: '15px 28px',
                fontWeight: 700, fontSize: 15,
                cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                fontFamily: "'DM Sans', sans-serif",
                transition: 'all 0.25s',
                opacity: status === 'sending' ? 0.75 : 1,
                display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10,
                letterSpacing: 0.3,
              }}
              onMouseEnter={e => {
                if (status !== 'sending') {
                  e.currentTarget.style.transform = 'translateY(-3px)'
                  e.currentTarget.style.boxShadow = '0 10px 36px #00f5c455'
                }
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {status === 'idle'    && <><span>Send Message</span><span>→</span></>}
              {status === 'sending' && <><span>⏳</span><span>Sending...</span></>}
              {status === 'success' && <><span>✓</span><span>Message Sent!</span></>}
              {status === 'error'   && <><span>✕</span><span>Failed — Try Again</span></>}
            </button>

            {/* Status feedback */}
            {status === 'success' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#00f5c412', border: '1px solid #00f5c433',
                borderRadius: 10, padding: '12px 16px',
                animation: 'fadeInUp 0.4s ease',
              }}>
                <span style={{ fontSize: 18 }}>🎉</span>
                <p style={{
                  fontSize: 13, color: '#00f5c4', margin: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  Thanks! I'll reply within 24 hours.
                </p>
              </div>
            )}
            {status === 'error' && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                background: '#ff6b9d12', border: '1px solid #ff6b9d33',
                borderRadius: 10, padding: '12px 16px',
              }}>
                <span style={{ fontSize: 18 }}>⚠️</span>
                <p style={{
                  fontSize: 13, color: '#ff6b9d', margin: 0,
                  fontFamily: "'JetBrains Mono', monospace",
                }}>
                  Something went wrong. Email me directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>

      {/* ── Terminal bar ── */}
      <div style={{
        marginTop: 48,
        background: '#0d0d18',
        border: '1px solid #1a1a2e',
        borderRadius: 14, padding: '18px 24px',
        display: 'flex', alignItems: 'center', gap: 14,
        overflow: 'hidden', position: 'relative',
      }}>
        {/* Subtle glow */}
        <div style={{
          position: 'absolute', width: 200, height: 60,
          background: '#00f5c408', filter: 'blur(30px)',
          left: 0, top: 0, pointerEvents: 'none',
        }} />

        {/* Traffic lights */}
        <div style={{ display: 'flex', gap: 7, flexShrink: 0 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
            <div key={c} style={{
              width: 11, height: 11, borderRadius: '50%', background: c,
              boxShadow: `0 0 6px ${c}88`,
            }} />
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: 1, height: 20, background: '#1a1a2e', flexShrink: 0 }} />

        <p style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13, color: '#555', margin: 0,
          overflow: 'hidden', whiteSpace: 'nowrap',
          textOverflow: 'ellipsis',
        }}>
          <span style={{ color: '#00f5c4' }}>gino@portfolio</span>
          <span style={{ color: '#7c6fff' }}> ~ </span>
          <span style={{ color: '#555' }}>$ </span>
          <span style={{ color: '#aaa' }}>echo </span>
          <span style={{ color: '#ff6b9d' }}>"Let's build something great together 🚀"</span>
        </p>
      </div>
    </section>
  )
}