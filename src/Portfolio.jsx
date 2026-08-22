import { useState, useEffect, useRef } from "react";

const NAV = ["About", "Experience", "Projects", "Skills", "Achievements", "Contact"];

const ROLES = ["Software Developer", "AI Enthusiast", "Backend Engineer", "Flutter Developer", "Problem Solver"];

const EXPERIENCES = [
  {
    title: "Software Developer",
    company: "Hudson Software Solutions Pvt. Ltd.",
    location: "Koovappally, Kerala",
    period: "Jan 2026 – Present",
    color: "#00f5c4",
    points: [
      "Contributing to AI-driven SaaS and ERP solutions tailored for enterprise needs.",
      "Building cloud-native platforms, automation tools, and scalable enterprise systems using Python, AI frameworks, and cloud technologies.",
    ],
  },
  {
    title: "Backend Developer Intern (Node.js)",
    company: "Leopard Tech Labs",
    location: "Koovappally, Kerala",
    period: "June 2025",
    color: "#7c6fff",
    points: [
      "Built and tested Node.js applications including a hotel booking system with secure user authentication.",
      "Developed a self-driven project, Task Manager, featuring user/admin roles.",
    ],
  },
  {
    title: "Android App Developer Intern (Flutter)",
    company: "Leopard Tech Labs",
    location: "Koovappally, Kerala",
    period: "June 2024 – July 2024",
    color: "#ff6b9d",
    points: [
      "Built and tested Flutter mobile applications with enhanced performance optimization.",
      "Ensured cross-platform compatibility across Android and iOS devices.",
    ],
  },
];

const PROJECTS = [
  {
    title: "Learning-Enhanced RRT with Voronoi-Guided Path Optimization",
    desc: "Hybrid AI planner combining RRT with Voronoi diagrams for maximal-clearance global guidance and locally adaptable exploration.",
    tags: ["Python", "OpenCV", "PyTorch"],
    icon: "🤖",
    color: "#00f5c4",
  },
  {
    title: "Native Goods",
    desc: "Full-stack platform enabling local sellers to list and manage products online with an intuitive frontend and robust backend.",
    tags: ["Django", "PostgreSQL", "HTML", "CSS"],
    icon: "🛒",
    color: "#7c6fff",
  },
  {
    title: "Employee Management System",
    desc: "Java-based desktop application to help organizations manage employee records efficiently with a clean Swing UI.",
    tags: ["Java", "MySQL", "Java Swing"],
    icon: "🏢",
    color: "#ff6b9d",
  },
];

const SKILLS = {
  "Languages": ["Java", "Python", "SQL"],
  "Frontend": ["HTML", "CSS", "Figma"],
  "Backend & DB": ["Node.js", "MongoDB", "PostgreSQL"],
  "Concepts": ["Artificial Intelligence", "DSA", "OOP", "Agile", "SDLC"],
};

const SKILL_COLORS = {
  "Languages": "#00f5c4",
  "Frontend": "#7c6fff",
  "Backend & DB": "#ff6b9d",
  "Concepts": "#f5a623",
};

export default function Portfolio() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [activeSection, setActiveSection] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const charIdx = useRef(0);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIdx];
    let timeout;
    if (typing) {
      if (charIdx.current < current.length) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current + 1));
          charIdx.current++;
        }, 70);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (charIdx.current > 0) {
        timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIdx.current - 1));
          charIdx.current--;
        }, 35);
      } else {
        setRoleIdx((r) => (r + 1) % ROLES.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIdx]);

  // Scroll spy
  useEffect(() => {
    const handler = () => {
      for (const sec of NAV) {
        const el = document.getElementById(sec.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(sec);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={styles.root}>
      {/* Animated BG dots */}
      <div style={styles.bgDots} />

      {/* NAV */}
      <nav style={styles.nav}>
        <span style={styles.navLogo}>GJ</span>
        <div style={styles.navLinks}>
          {NAV.map((n) => (
            <button
              key={n}
              onClick={() => scrollTo(n)}
              style={{
                ...styles.navLink,
                color: activeSection === n ? "#00f5c4" : "#aaa",
                borderBottom: activeSection === n ? "2px solid #00f5c4" : "2px solid transparent",
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <button style={styles.menuBtn} onClick={() => setMenuOpen((m) => !m)}>☰</button>
      </nav>

      {menuOpen && (
        <div style={styles.mobileMenu}>
          {NAV.map((n) => (
            <button key={n} onClick={() => scrollTo(n)} style={styles.mobileMenuLink}>{n}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="about" style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.heroGreet}>👋 Hello, I'm</p>
          <h1 style={styles.heroName}>Gino James</h1>
          <div style={styles.typewriterRow}>
            <span style={styles.typewriterText}>{displayed}</span>
            <span style={styles.cursor}>|</span>
          </div>
          <p style={styles.heroBio}>
            I’m a Full-Stack Software Developer with a strong focus on backend architecture and scalable solutions. I enjoy designing APIs, working with databases, and integrating systems. Currently, I'm contributing to enterprise SaaS products at Hudson Software Solutions.
          </p>
          <div style={styles.heroBtns}>
            <button onClick={() => scrollTo("Projects")} style={styles.btnPrimary}>View My Work</button>
            <a href="mailto:ginojames27@gmail.com" style={styles.btnSecondary}>Contact Me</a>
          </div>
          <div style={styles.socialRow}>
            <a href="https://linkedin.com/in/gino-james" target="_blank" rel="noreferrer" style={styles.socialLink}>in LinkedIn</a>
            <a href="https://github.com/GINOJAMES-27" target="_blank" rel="noreferrer" style={styles.socialLink}>⌥ GitHub</a>
            <span style={styles.socialLink}>📧 ginojames27@gmail.com</span>
            <span style={styles.socialLink}>📞 +91 9074598626</span>
          </div>
        </div>
        <div style={styles.heroArt}>
          <div style={styles.avatarRing}>
            <div style={styles.avatar}>GJ</div>
          </div>
          <div style={styles.floatBadge1}>🏆 NASA Space Apps Winner</div>
          <div style={styles.floatBadge2}>🚀 I2U Phase-II Funded</div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={styles.section}>
        <h2 style={styles.sectionTitle}>Experience</h2>
        <p style={styles.sectionSub}>My professional journey so far</p>
        <div style={styles.timeline}>
          {EXPERIENCES.map((exp, i) => (
            <div key={i} style={styles.timelineItem}>
              <div style={{ ...styles.timelineDot, background: exp.color }} />
              {i < EXPERIENCES.length - 1 && <div style={styles.timelineLine} />}
              <div style={styles.timelineCard}>
                <div style={styles.expHeader}>
                  <div>
                    <h3 style={{ ...styles.expTitle, color: exp.color }}>{exp.title}</h3>
                    <p style={styles.expCompany}>{exp.company} · {exp.location}</p>
                  </div>
                  <span style={{ ...styles.expPeriod, borderColor: exp.color, color: exp.color }}>{exp.period}</span>
                </div>
                <ul style={styles.expList}>
                  {exp.points.map((p, j) => (
                    <li key={j} style={styles.expPoint}>
                      <span style={{ ...styles.expBullet, background: exp.color }} />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Projects</h2>
        <p style={styles.sectionSub}>Things I've built</p>
        <div style={styles.projectsGrid}>
          {PROJECTS.map((proj, i) => (
            <div key={i} style={{ ...styles.projectCard, borderTop: `3px solid ${proj.color}` }}>
              <div style={{ fontSize: 36, marginBottom: 12 }}>{proj.icon}</div>
              <h3 style={{ ...styles.projTitle, color: proj.color }}>{proj.title}</h3>
              <p style={styles.projDesc}>{proj.desc}</p>
              <div style={styles.tagRow}>
                {proj.tags.map((t) => (
                  <span key={t} style={{ ...styles.tag, background: proj.color + "22", color: proj.color, border: `1px solid ${proj.color}55` }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Skills</h2>
        <p style={styles.sectionSub}>Technologies I work with</p>
        <div style={styles.skillsGrid}>
          {Object.entries(SKILLS).map(([cat, skills]) => (
            <div key={cat} style={styles.skillCard}>
              <h3 style={{ ...styles.skillCat, color: SKILL_COLORS[cat] }}>{cat}</h3>
              <div style={styles.skillPills}>
                {skills.map((s) => (
                  <span key={s} style={{ ...styles.skillPill, background: SKILL_COLORS[cat] + "18", color: SKILL_COLORS[cat], border: `1px solid ${SKILL_COLORS[cat]}44` }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" style={styles.section}>
        <h2 style={styles.sectionTitle}>Achievements</h2>
        <p style={styles.sectionSub}>Recognition & milestones</p>
        <div style={styles.achieveGrid}>
          <div style={{ ...styles.achieveCard, borderLeft: "4px solid #00f5c4" }}>
            <div style={styles.achieveIcon}>🏆</div>
            <div>
              <h3 style={styles.achieveTitle}>NASA Space Apps Challenge 2025 — Winner</h3>
              <p style={styles.achieveDesc}>Senior Category · Amal Jyothi College of Engineering</p>
            </div>
          </div>
          <div style={{ ...styles.achieveCard, borderLeft: "4px solid #7c6fff" }}>
            <div style={styles.achieveIcon}>🚀</div>
            <div>
              <h3 style={styles.achieveTitle}>Innovation Ideas Unleashed (I2U) 2025 — Phase II Funded</h3>
              <p style={styles.achieveDesc}>Selected for funding in Project Contest Phase-II</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Get In Touch</h2>
        <p style={styles.sectionSub}>Let's build something amazing together</p>
        <div style={styles.contactBox}>
          <p style={styles.contactText}>
            I'm currently open to new opportunities, collaborations, and interesting conversations. My inbox is always open!
          </p>
          <a href="mailto:ginojames27@gmail.com" style={styles.contactBtn}>Say Hello 👋</a>
          <div style={styles.contactLinks}>
            <a href="https://linkedin.com/in/gino-james" target="_blank" rel="noreferrer" style={styles.contactLink}>LinkedIn</a>
            <span style={{ color: "#444" }}>·</span>
            <a href="https://github.com/GINOJAMES-27" target="_blank" rel="noreferrer" style={styles.contactLink}>GitHub</a>
            <span style={{ color: "#444" }}>·</span>
            <span style={{ color: "#777", fontSize: 14 }}>+91 9074598626</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p style={{ color: "#555", fontSize: 13 }}>Designed & Built by <span style={{ color: "#00f5c4" }}>Gino James</span> · 2025</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: var(--bg-primary); }
        @keyframes pulse { 0%,100%{opacity:0.5;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'DM Sans', sans-serif",
    background: "var(--bg-primary)",
    color: "#e0e0e0",
    minHeight: "100vh",
    position: "relative",
    overflowX: "hidden",
  },
  bgDots: {
    position: "fixed",
    inset: 0,
    backgroundImage: "radial-gradient(circle, var(--border-color) 1px, transparent 1px)",
    backgroundSize: "32px 32px",
    opacity: 0.5,
    zIndex: 0,
    pointerEvents: "none",
  },
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    height: 64,
    background: "rgba(10,10,15,0.92)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid var(--border-color)",
  },
  navLogo: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 22,
    color: "#00f5c4",
    letterSpacing: 2,
  },
  navLinks: {
    display: "flex",
    gap: 8,
    "@media(maxWidth:768px)": { display: "none" },
  },
  navLink: {
    background: "none",
    border: "none",
    borderBottom: "2px solid transparent",
    color: "#aaa",
    cursor: "pointer",
    fontSize: 14,
    padding: "4px 12px",
    transition: "color 0.2s",
    fontFamily: "'DM Sans', sans-serif",
  },
  menuBtn: {
    display: "none",
    background: "none",
    border: "none",
    color: "#00f5c4",
    fontSize: 22,
    cursor: "pointer",
    "@media(maxWidth:768px)": { display: "block" },
  },
  mobileMenu: {
    position: "fixed",
    top: 64,
    left: 0,
    right: 0,
    zIndex: 99,
    background: "var(--bg-secondary)",
    borderBottom: "1px solid var(--border-color)",
    display: "flex",
    flexDirection: "column",
    padding: "8px 0",
  },
  mobileMenuLink: {
    background: "none",
    border: "none",
    color: "#ccc",
    padding: "12px 5%",
    textAlign: "left",
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
  },
  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "100px 6% 60px",
    position: "relative",
    zIndex: 1,
    flexWrap: "wrap",
    gap: 40,
  },
  heroContent: { flex: "1 1 340px", maxWidth: 560 },
  heroGreet: { fontSize: 18, color: "#00f5c4", marginBottom: 8, fontFamily: "'JetBrains Mono', monospace" },
  heroName: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: "clamp(36px, 6vw, 64px)",
    color: "#fff",
    lineHeight: 1.1,
    marginBottom: 16,
    textShadow: "0 0 40px rgba(0,245,196,0.2)",
  },
  typewriterRow: { display: "flex", alignItems: "center", gap: 4, marginBottom: 20, minHeight: 40 },
  typewriterText: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "clamp(18px, 3vw, 26px)",
    color: "#7c6fff",
    fontWeight: 700,
  },
  cursor: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 28,
    color: "#00f5c4",
    animation: "blink 0.8s step-end infinite",
  },
  heroBio: { fontSize: 16, color: "#999", lineHeight: 1.8, marginBottom: 28, maxWidth: 480 },
  heroBtns: { display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 28 },
  btnPrimary: {
    background: "#00f5c4",
    color: "var(--bg-primary)",
    border: "none",
    borderRadius: 8,
    padding: "12px 28px",
    fontWeight: 700,
    fontSize: 15,
    cursor: "pointer",
    fontFamily: "'DM Sans', sans-serif",
    transition: "transform 0.15s",
  },
  btnSecondary: {
    background: "transparent",
    color: "#00f5c4",
    border: "1.5px solid #00f5c4",
    borderRadius: 8,
    padding: "12px 28px",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer",
    textDecoration: "none",
    fontFamily: "'DM Sans', sans-serif",
    display: "inline-block",
  },
  socialRow: { display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center" },
  socialLink: { color: "#666", fontSize: 13, textDecoration: "none", transition: "color 0.2s" },
  heroArt: {
    flex: "0 0 auto",
    position: "relative",
    width: 280,
    height: 280,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarRing: {
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "conic-gradient(from 0deg, #00f5c4, #7c6fff, #ff6b9d, #00f5c4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    animation: "spin 8s linear infinite",
  },
  avatar: {
    width: 180,
    height: 180,
    borderRadius: "50%",
    background: "var(--bg-secondary)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 52,
    color: "#00f5c4",
  },
  floatBadge1: {
    position: "absolute",
    top: 10,
    right: -20,
    background: "var(--border-color)",
    border: "1px solid #00f5c4",
    color: "#00f5c4",
    borderRadius: 20,
    padding: "6px 14px",
    fontSize: 12,
    fontWeight: 600,
    animation: "float 3s ease-in-out infinite",
    whiteSpace: "nowrap",
  },
  floatBadge2: {
    position: "absolute",
    bottom: 10,
    left: -30,
    background: "var(--border-color)",
    border: "1px solid #7c6fff",
    color: "#7c6fff",
    borderRadius: 20,
    padding: "6px 14px",
    fontSize: 12,
    fontWeight: 600,
    animation: "float 3.5s ease-in-out infinite 0.5s",
    whiteSpace: "nowrap",
  },
  section: {
    padding: "80px 6%",
    position: "relative",
    zIndex: 1,
    maxWidth: 1100,
    margin: "0 auto",
  },
  sectionTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: "clamp(26px, 4vw, 40px)",
    fontWeight: 700,
    color: "#fff",
    marginBottom: 8,
  },
  sectionSub: {
    color: "#666",
    fontSize: 16,
    marginBottom: 48,
  },
  timeline: { display: "flex", flexDirection: "column", gap: 0, paddingLeft: 32 },
  timelineItem: { display: "flex", gap: 24, position: "relative", paddingBottom: 32 },
  timelineDot: {
    width: 14,
    height: 14,
    borderRadius: "50%",
    flexShrink: 0,
    marginTop: 6,
    position: "relative",
    zIndex: 1,
    boxShadow: "0 0 8px currentColor",
  },
  timelineLine: {
    position: "absolute",
    left: 6,
    top: 20,
    bottom: 0,
    width: 2,
    background: "linear-gradient(to bottom, #00f5c430, transparent)",
  },
  timelineCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: 12,
    padding: "20px 24px",
    flex: 1,
  },
  expHeader: { display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12, flexWrap: "wrap", gap: 8 },
  expTitle: { fontFamily: "'JetBrains Mono', monospace", fontSize: 16, fontWeight: 700, marginBottom: 4 },
  expCompany: { color: "#777", fontSize: 14 },
  expPeriod: {
    fontSize: 12,
    border: "1px solid",
    borderRadius: 20,
    padding: "4px 12px",
    fontFamily: "'JetBrains Mono', monospace",
    whiteSpace: "nowrap",
  },
  expList: { listStyle: "none", display: "flex", flexDirection: "column", gap: 8 },
  expPoint: { display: "flex", alignItems: "flex-start", gap: 10, fontSize: 14, color: "#aaa", lineHeight: 1.6 },
  expBullet: { width: 6, height: 6, borderRadius: "50%", flexShrink: 0, marginTop: 7 },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 24,
  },
  projectCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: 12,
    padding: "28px 24px",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  projTitle: {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 10,
    lineHeight: 1.4,
  },
  projDesc: { color: "#888", fontSize: 14, lineHeight: 1.7, marginBottom: 16 },
  tagRow: { display: "flex", flexWrap: "wrap", gap: 8 },
  tag: {
    fontSize: 12,
    fontFamily: "'JetBrains Mono', monospace",
    borderRadius: 6,
    padding: "4px 10px",
    fontWeight: 600,
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 20,
  },
  skillCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: 12,
    padding: "24px 20px",
  },
  skillCat: {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 15,
    marginBottom: 16,
  },
  skillPills: { display: "flex", flexWrap: "wrap", gap: 8 },
  skillPill: {
    fontSize: 13,
    borderRadius: 20,
    padding: "5px 14px",
    fontWeight: 500,
  },
  achieveGrid: { display: "flex", flexDirection: "column", gap: 20 },
  achieveCard: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: 12,
    padding: "24px 28px",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  achieveIcon: { fontSize: 36, flexShrink: 0 },
  achieveTitle: { fontSize: 17, fontWeight: 600, color: "#e0e0e0", marginBottom: 6 },
  achieveDesc: { color: "#777", fontSize: 14 },
  contactBox: {
    background: "var(--bg-secondary)",
    border: "1px solid var(--border-color)",
    borderRadius: 16,
    padding: "48px 40px",
    textAlign: "center",
    maxWidth: 560,
    margin: "0 auto",
  },
  contactText: { color: "#888", fontSize: 16, lineHeight: 1.8, marginBottom: 28 },
  contactBtn: {
    display: "inline-block",
    background: "#00f5c4",
    color: "var(--bg-primary)",
    borderRadius: 8,
    padding: "14px 36px",
    fontWeight: 700,
    fontSize: 16,
    textDecoration: "none",
    marginBottom: 24,
    fontFamily: "'DM Sans', sans-serif",
  },
  contactLinks: { display: "flex", justifyContent: "center", alignItems: "center", gap: 12 },
  contactLink: { color: "#7c6fff", fontSize: 15, textDecoration: "none" },
  footer: {
    textAlign: "center",
    padding: "24px",
    borderTop: "1px solid var(--border-color)",
    position: "relative",
    zIndex: 1,
  },
};
