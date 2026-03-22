import { EXPERIENCES } from '../data/portfolioData'
import * as SiIcons from 'react-icons/si'

const COMPANY_ICONS = {
  'Hudson Software Solutions Pvt. Ltd.': { icon: 'SiPython', color: '#3776ab' },
  'Leopard Tech Labs': { icon: 'SiNodedotjs', color: '#5fa04e' },
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        padding: '80px 6%',
        position: 'relative',
        zIndex: 1,
        maxWidth: 1100,
        margin: '0 auto',
      }}
    >
      <h2
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700,
          color: '#fff',
          marginBottom: 8,
        }}
      >
        <span style={{ color: '#00f5c4' }}>//</span> Experience
      </h2>
      <p style={{ color: '#555', fontSize: 16, marginBottom: 56 }}>
        My professional journey so far
      </p>

      <div style={{ position: 'relative' }}>

        {/* Vertical spine line */}
        <div style={{
          position: 'absolute',
          left: 27,
          top: 0,
          bottom: 0,
          width: 2,
          background: 'linear-gradient(to bottom, #00f5c4aa, #7c6fff44, transparent)',
          borderRadius: 2,
        }} />

        {EXPERIENCES.map((exp, i) => {
          const companyInfo = COMPANY_ICONS[exp.company]
          const Icon = companyInfo ? SiIcons[companyInfo.icon] : null

          return (
            <div
              key={i}
              style={{
                display: 'flex',
                gap: 32,
                marginBottom: i < EXPERIENCES.length - 1 ? 40 : 0,
                position: 'relative',
              }}
            >
              {/* Timeline dot with icon */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  width: 56, height: 56,
                  borderRadius: '50%',
                  background: '#0d0d18',
                  border: `2px solid ${exp.color}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 0 20px ${exp.color}44`,
                  zIndex: 1,
                  position: 'relative',
                }}>
                  {Icon
                    ? <Icon size={24} color={exp.color} />
                    : <div style={{
                        width: 12, height: 12,
                        borderRadius: '50%',
                        background: exp.color,
                      }} />
                  }
                </div>
              </div>

              {/* Card */}
              <div
                style={{
                  flex: 1,
                  background: '#0d0d18',
                  border: '1px solid #1a1a2e',
                  borderRadius: 16,
                  padding: '28px 28px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = `1px solid ${exp.color}55`
                  e.currentTarget.style.boxShadow = `0 8px 40px ${exp.color}18`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid #1a1a2e'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Left accent bar */}
                <div style={{
                  position: 'absolute',
                  left: 0, top: 0, bottom: 0,
                  width: 3,
                  background: `linear-gradient(to bottom, ${exp.color}, ${exp.color}22)`,
                  borderRadius: '16px 0 0 16px',
                }} />

                {/* Glow blob */}
                <div style={{
                  position: 'absolute',
                  width: 200, height: 200,
                  borderRadius: '50%',
                  background: exp.color + '08',
                  filter: 'blur(50px)',
                  top: -60, right: -60,
                  pointerEvents: 'none',
                }} />

                {/* Top row: title + period badge */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: 12,
                  marginBottom: 6,
                }}>
                  <h3 style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 16,
                    fontWeight: 700,
                    color: exp.color,
                    margin: 0,
                    lineHeight: 1.4,
                  }}>
                    {exp.title}
                  </h3>

                  {/* Period badge */}
                  <span style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 11,
                    fontFamily: "'JetBrains Mono', monospace",
                    color: exp.color,
                    background: exp.color + '15',
                    border: `1px solid ${exp.color}44`,
                    borderRadius: 20,
                    padding: '5px 14px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600,
                  }}>
                    <span style={{
                      width: 6, height: 6,
                      borderRadius: '50%',
                      background: exp.color,
                      display: 'inline-block',
                      animation: i === 0 ? 'blink 1.5s ease-in-out infinite' : 'none',
                    }} />
                    {exp.period}
                  </span>
                </div>

                {/* Company + location */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 20,
                }}>
                  <span style={{
                    fontSize: 13,
                    color: '#aaa',
                    fontWeight: 500,
                  }}>
                    {exp.company}
                  </span>
                  <span style={{ color: '#333', fontSize: 13 }}>·</span>
                  <span style={{
                    fontSize: 12,
                    color: '#555',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                    📍 {exp.location}
                  </span>
                </div>

                {/* Divider */}
                <div style={{
                  height: 1,
                  background: `linear-gradient(to right, ${exp.color}33, transparent)`,
                  marginBottom: 20,
                }} />

                {/* Bullet points */}
                <ul style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  margin: 0,
                  padding: 0,
                }}>
                  {exp.points.map((p, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 12,
                        fontSize: 14,
                        color: '#999',
                        lineHeight: 1.7,
                      }}
                    >
                      {/* Arrow bullet */}
                      <span style={{
                        color: exp.color,
                        fontSize: 14,
                        flexShrink: 0,
                        marginTop: 2,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}>▹</span>
                      {p}
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}