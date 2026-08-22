import { SKILLS, SKILL_COLORS } from '../data/portfolioData'
import * as SiIcons from 'react-icons/si'

export default function Skills() {
  return (
    <section
      id="skills"
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
          color: 'var(--text-primary)',
          marginBottom: 8,
        }}
      >
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> Skills
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 48 }}>
        Technologies I work with
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 24,
        }}
      >
        {Object.entries(SKILLS).map(([cat, skills]) => {
          const catColor = SKILL_COLORS[cat]
          return (
            <div
              key={cat}
              style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderTop: `3px solid ${catColor}`,
                borderRadius: 14,
                padding: '28px 22px',
              }}
            >
              {/* Category heading */}
              <h3
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: 13,
                  color: catColor,
                  marginBottom: 24,
                  letterSpacing: 1.5,
                  textTransform: 'uppercase',
                }}
              >
                {cat}
              </h3>

              {/* Icon grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                  gap: 14,
                }}
              >
                {skills.map((s) => {
                  const Icon = SiIcons[s.icon]
                  return (
                    <div
                      key={s.name}
                      title={s.name}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 10,
                        padding: '18px 8px',
                        borderRadius: 12,
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-color)',
                        transition: 'all 0.25s ease',
                        cursor: 'default',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                      onMouseEnter={e => {
                        e.currentTarget.style.background = `color-mix(in srgb, ${s.color} 9%, transparent)`
                        e.currentTarget.style.border = `1px solid color-mix(in srgb, ${s.color} 33%, transparent)`
                        e.currentTarget.style.transform = 'translateY(-6px) scale(1.04)'
                        e.currentTarget.style.boxShadow = `0 8px 24px color-mix(in srgb, ${s.color} 20%, transparent)`
                      }}
                      onMouseLeave={e => {
                        e.currentTarget.style.background = 'var(--bg-surface)'
                        e.currentTarget.style.border = '1px solid var(--border-color)'
                        e.currentTarget.style.transform = 'translateY(0) scale(1)'
                        e.currentTarget.style.boxShadow = 'none'
                      }}
                    >
                      {/* Glow blob behind icon */}
                      <div style={{
                        position: 'absolute',
                        width: 60, height: 60,
                        borderRadius: '50%',
                        background: `color-mix(in srgb, ${s.color} 8%, transparent)`,
                        filter: 'blur(14px)',
                        top: '20%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        pointerEvents: 'none',
                      }} />

                      {/* Icon */}
                      {Icon
                        ? <Icon size={44} color={s.color} style={{ position: 'relative', zIndex: 1 }} />
                        : <span style={{ fontSize: 40 }}>⚙️</span>
                      }

                      {/* Label */}
                      <span
                        style={{
                          fontSize: 11,
                          color: 'var(--text-secondary)',
                          textAlign: 'center',
                          lineHeight: 1.3,
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 500,
                          position: 'relative',
                          zIndex: 1,
                        }}
                      >
                        {s.name}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}