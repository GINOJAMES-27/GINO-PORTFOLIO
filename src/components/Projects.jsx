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
          color: '#fff',
          marginBottom: 8,
        }}
      >
        <span style={{ color: '#00f5c4' }}>//</span> Projects
      </h2>
      <p style={{ color: '#555', fontSize: 16, marginBottom: 48 }}>
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
                  background: '#0d0d18',
                  border: '1px solid #1a1a2e',
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
                  e.currentTarget.style.border = `1px solid ${proj.color}66`
                  e.currentTarget.style.boxShadow = `0 20px 60px ${proj.color}22`
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.border = '1px solid #1a1a2e'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Top color bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0,
                    height: 3,
                    background: `linear-gradient(90deg, ${proj.color}, ${proj.color}44)`,
                    borderRadius: '16px 16px 0 0',
                  }}
                />

                {/* Glow blob */}
                <div
                  style={{
                    position: 'absolute',
                    width: 160, height: 160,
                    borderRadius: '50%',
                    background: proj.color + '0c',
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
                      background: proj.iconColor + '22',
                      border: `1px solid ${proj.iconColor}44`,
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
                      background: '#ffffff08',
                      border: '1px solid #ffffff15',
                      borderRadius: 20,
                      padding: '6px 12px',
                      fontSize: 12,
                      color: '#666',
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    <SiGithub size={14} color="#888" />
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
                    color: '#f0f0f0',
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {proj.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    color: '#777',
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
                    background: '#1a1a2e',
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
                        background: proj.color + '15',
                        color: proj.color,
                        border: `1px solid ${proj.color}33`,
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