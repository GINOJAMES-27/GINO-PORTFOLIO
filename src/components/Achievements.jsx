import { useState } from 'react'

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null)
  const [hovered, setHovered] = useState(null)

  const achievements = [
    {
      icon: '🏆',
      title: 'NASA Space Apps Challenge 2025 — Winner',
      desc: 'Senior Category · Amal Jyothi College of Engineering',
      longDesc: 'Competed in the global NASA Space Apps Challenge 2025 and won the Senior Category at Amal Jyothi College of Engineering — building an innovative space-tech solution under a 48-hour hackathon format.',
      tag: 'Hackathon',
      badge: 'Winner',
      color: '#00f5c4',
      year: '2025',
      proofUrl: '/certificates/NasaSpaceApp.pdf',
    },
    {
      icon: '🚀',
      title: 'Innovation Ideas Unleashed (I2U) 2025 — Phase II Funded',
      desc: 'Selected for funding in the Project Contest Phase-II',
      longDesc: 'Out of hundreds of applicants, selected for Phase-II funding in the Innovation Ideas Unleashed (I2U) 2025 Project Contest — recognizing the project\'s potential for real-world impact and scalability.',
      tag: 'Funding',
      badge: 'Phase II Funded',
      color: '#7c6fff',
      year: '2025',
      proofUrl: '/certificates/I2U.pdf',
    },
  ]

  const openProof  = (a) => setSelectedAchievement(a)
  const closeProof = ()  => setSelectedAchievement(null)

  return (
    <>
      <section
        id="achievements"
        style={{
          padding: '80px 6%',
          position: 'relative',
          zIndex: 1,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <h2 style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 'clamp(26px, 4vw, 40px)',
          fontWeight: 700, color: '#fff', marginBottom: 8,
        }}>
          <span style={{ color: '#00f5c4' }}>//</span> Achievements
        </h2>
        <p style={{ color: '#555', fontSize: 16, marginBottom: 56 }}>
          Recognition & milestones
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {achievements.map((a, i) => (
            <div
              key={i}
              onClick={() => openProof(a)}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                position: 'relative',
                background: '#0d0d18',
                border: hovered === i ? `1px solid ${a.color}55` : '1px solid #1a1a2e',
                borderRadius: 20,
                padding: '32px 36px',
                cursor: 'pointer',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                transform: hovered === i ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: hovered === i ? `0 16px 60px ${a.color}18` : 'none',
              }}
            >
              {/* Left accent bar */}
              <div style={{
                position: 'absolute',
                left: 0, top: 0, bottom: 0, width: 4,
                background: `linear-gradient(to bottom, ${a.color}, ${a.color}22)`,
                borderRadius: '20px 0 0 20px',
              }} />

              {/* Glow blob */}
              <div style={{
                position: 'absolute',
                width: 280, height: 280, borderRadius: '50%',
                background: a.color + '08',
                filter: 'blur(60px)',
                top: -80, right: -80,
                pointerEvents: 'none',
                opacity: hovered === i ? 1 : 0.4,
                transition: 'opacity 0.3s',
              }} />

              {/* Top row */}
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 16,
                marginBottom: 20,
              }}>
                {/* Icon + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: a.color + '15',
                    border: `2px solid ${a.color}44`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 28, flexShrink: 0,
                    boxShadow: hovered === i ? `0 0 24px ${a.color}44` : 'none',
                    transition: 'box-shadow 0.3s',
                  }}>
                    {a.icon}
                  </div>

                  <div>
                    <span style={{
                      display: 'inline-block',
                      fontSize: 10,
                      fontFamily: "'JetBrains Mono', monospace",
                      color: a.color,
                      background: a.color + '18',
                      border: `1px solid ${a.color}33`,
                      borderRadius: 20,
                      padding: '3px 10px',
                      letterSpacing: 1.5,
                      textTransform: 'uppercase',
                      marginBottom: 8,
                      fontWeight: 700,
                    }}>
                      {a.tag}
                    </span>
                    <h3 style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: 700, color: '#f0f0f0',
                      margin: 0, lineHeight: 1.4,
                    }}>
                      {a.title}
                    </h3>
                  </div>
                </div>

                {/* Badge + year */}
                <div style={{
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'flex-end', gap: 8, flexShrink: 0,
                }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    background: a.color + '20',
                    border: `1px solid ${a.color}55`,
                    borderRadius: 20, padding: '6px 16px',
                  }}>
                    <span style={{
                      width: 6, height: 6, borderRadius: '50%',
                      background: a.color,
                      display: 'inline-block',
                      boxShadow: `0 0 6px ${a.color}`,
                    }} />
                    <span style={{
                      fontSize: 12, fontWeight: 700,
                      color: a.color,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}>
                      {a.badge}
                    </span>
                  </div>
                  <span style={{
                    fontSize: 12, color: '#444',
                    fontFamily: "'JetBrains Mono', monospace",
                  }}>
                    {a.year}
                  </span>
                </div>
              </div>

              {/* Gradient divider */}
              <div style={{
                height: 1,
                background: `linear-gradient(to right, ${a.color}44, transparent)`,
                marginBottom: 20,
              }} />

              {/* Description + CTA */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                flexWrap: 'wrap', gap: 16,
              }}>
                <p style={{
                  fontSize: 14, color: '#777',
                  lineHeight: 1.8, margin: 0, maxWidth: 600,
                }}>
                  {a.longDesc}
                </p>

                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: a.color + '12',
                  border: `1px solid ${a.color}33`,
                  borderRadius: 10, padding: '10px 18px',
                  fontSize: 13, color: a.color,
                  fontWeight: 600,
                  fontFamily: "'JetBrains Mono', monospace",
                  whiteSpace: 'nowrap', flexShrink: 0,
                  transition: 'background 0.2s',
                }}>
                  View Certificate ↗
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Modal (your original logic, redesigned) ── */}
      {selectedAchievement && (
        <div
          onClick={closeProof}
          style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(8px)',
            padding: 20,
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#0d0d18',
              border: `1px solid ${selectedAchievement.color}44`,
              borderRadius: 20,
              width: '100%',
              maxWidth: 1000,
              height: '90vh',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: `0 0 80px ${selectedAchievement.color}22`,
            }}
          >
            {/* Modal header */}
            <div style={{
              padding: '20px 28px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottom: `1px solid ${selectedAchievement.color}22`,
              background: selectedAchievement.color + '08',
              flexWrap: 'wrap', gap: 12,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <span style={{ fontSize: 28 }}>{selectedAchievement.icon}</span>
                <div>
                  <p style={{
                    fontSize: 10,
                    color: selectedAchievement.color,
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: 1.5,
                    textTransform: 'uppercase',
                    margin: '0 0 4px',
                    fontWeight: 700,
                  }}>
                    {selectedAchievement.tag}
                  </p>
                  <h3 style={{
                    color: '#f0f0f0', fontSize: 16, margin: 0,
                    fontFamily: "'JetBrains Mono', monospace", fontWeight: 700,
                  }}>
                    {selectedAchievement.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={closeProof}
                style={{
                  background: '#ffffff0a',
                  border: '1px solid #ffffff15',
                  color: '#888', fontSize: 18,
                  cursor: 'pointer',
                  width: 40, height: 40, borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s', flexShrink: 0,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#ffffff18'
                  e.currentTarget.style.color = '#fff'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = '#ffffff0a'
                  e.currentTarget.style.color = '#888'
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal content — your original iframe/img logic */}
            <div style={{
              flex: 1,
              overflow: 'auto',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 20,
              minHeight: 0,
              width: '100%',
            }}>
              {selectedAchievement.proofUrl?.endsWith('.pdf') ? (
                <iframe
                  src={selectedAchievement.proofUrl}
                  style={{
                    width: '100%', height: '100%',
                    border: 'none', borderRadius: 8,
                  }}
                  title="Achievement Proof"
                />
              ) : (
                <img
                  src={selectedAchievement.proofUrl}
                  alt="Achievement Proof"
                  style={{
                    maxWidth: '100%', maxHeight: '100%',
                    borderRadius: 8, objectFit: 'contain',
                  }}
                />
              )}
            </div>

            {/* Modal footer */}
            <div style={{
              padding: '14px 28px',
              borderTop: `1px solid ${selectedAchievement.color}22`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#0a0a0f',
              flexWrap: 'wrap', gap: 12,
            }}>
              <span style={{
                fontSize: 12, color: '#555',
                fontFamily: "'JetBrains Mono', monospace",
              }}>
                {selectedAchievement.desc}
              </span>
              <a
                href={selectedAchievement.proofUrl}
                download
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  background: selectedAchievement.color,
                  color: '#0a0a0f', borderRadius: 8,
                  padding: '8px 18px', fontSize: 13,
                  fontWeight: 700, textDecoration: 'none',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                Download ↓
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}