import { PROJECTS } from '../data/portfolioData'
import * as SiIcons from 'react-icons/si'
import { SiGithub } from 'react-icons/si'

export default function Projects() {
  return (
    <section
      id="projects"
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
        <span style={{ color: 'var(--accent-cyan)' }}>//</span> Projects
      </h2>
      <p style={{ color: 'var(--text-muted)', fontSize: 16, marginBottom: 48 }}>
        Things I've built — click any card to view on GitHub
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 28,
        }}
      >
        {PROJECTS.map((proj, i) => {
          const Icon = SiIcons[proj.icon]
          return (
            <a
              key={i}
              href={proj.github}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 16,
                  padding: '32px 28px',
                  height: '100%',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-8px)'
                  e.currentTarget.style.border = `1px solid color-mix(in srgb, ${proj.color} 40%, transparent)`
                  e.currentTarget.style.boxShadow = `0 20px 60px color-mix(in srgb, ${proj.color} 13%, transparent)`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.border = '1px solid var(--border-color)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top color bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${proj.color}, color-mix(in srgb, ${proj.color} 27%, transparent))`,
                    borderRadius: '16px 16px 0 0',
                  }}
                />

                {/* Glow blob */}
                <div
                  style={{
                    position: 'absolute',
                    width: 160, height: 160,
                    borderRadius: '50%',
                    background: `color-mix(in srgb, ${proj.color} 5%, transparent)`,
                    filter: 'blur(40px)',
                    top: -40, right: -40,
                    pointerEvents: 'none',
                  }}
                />

                {/* Header row */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                  }}
                >
                  {/* Tech icon box */}
                  <div
                    style={{
                      width: 56, height: 56,
                      borderRadius: 14,
                      background: `color-mix(in srgb, ${proj.iconColor} 13%, transparent)`,
                      border: `1px solid color-mix(in srgb, ${proj.iconColor} 27%, transparent)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {Icon
                      ? <Icon size={30} color={proj.iconColor} />
                      : <span style={{ fontSize: 28 }}>⚙️</span>
                    }
                  </div>

                  {/* GitHub badge */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      background: 'var(--border-color-light)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 20,
                      padding: '6px 12px',
                      fontSize: 12,
                      color: 'var(--text-muted)',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <SiGithub size={14} color="var(--text-muted)" />
                    <span>View</span>
                    <span style={{ fontSize: 14 }}>↗</span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 15,
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {proj.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 14,
                    lineHeight: 1.8,
                    margin: 0,
                    flex: 1,
                  }}
                >
                  {proj.desc}
                </p>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    background: 'var(--border-color)',
                    margin: '4px 0',
                  }}
                />

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: 11,
                        fontFamily: "'JetBrains Mono', monospace",
                        borderRadius: 6,
                        padding: '4px 10px',
                        fontWeight: 600,
                        background: `color-mix(in srgb, ${proj.color} 8%, transparent)`,
                        color: proj.color,
                        border: `1px solid color-mix(in srgb, ${proj.color} 20%, transparent)`,
                        letterSpacing: 0.5,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </a>
          )
        })}
      </div>
    </section>
  )
}