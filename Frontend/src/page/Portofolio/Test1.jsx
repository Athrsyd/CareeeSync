import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["About", "Work", "Skills", "Contact"];

const PROJECTS = [
    {
        id: 1,
        year: "2024",
        title: "Fintech Dashboard",
        category: "UI / UX Design & Development",
        description:
            "A real-time analytics platform for tracking investment portfolios, built with React and WebSocket. Reduced load time by 60%.",
        tags: ["React", "Node.js", "PostgreSQL", "WebSocket"],
        link: "#",
    },
    {
        id: 2,
        year: "2024",
        title: "E-Commerce Platform",
        category: "Full-Stack Development",
        description:
            "Scalable multi-vendor marketplace with payment integration, inventory management, and real-time order tracking.",
        tags: ["Next.js", "Stripe", "MongoDB", "Redis"],
        link: "#",
    },
    {
        id: 3,
        year: "2023",
        title: "Healthcare CMS",
        category: "Web Application",
        description:
            "Patient record management system with role-based access control, HIPAA-compliant data handling and audit logging.",
        tags: ["Vue.js", "Django", "MySQL", "Docker"],
        link: "#",
    },
    {
        id: 4,
        year: "2023",
        title: "Brand Identity System",
        category: "Design System",
        description:
            "Comprehensive design system with 200+ components, tokens, and documentation for a SaaS product used by 50k+ users.",
        tags: ["Figma", "Storybook", "TypeScript", "Tailwind"],
        link: "#",
    },
];

const SKILLS = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Django", "PostgreSQL", "MongoDB", "Redis", "REST API"] },
    { category: "Tools", items: ["Git", "Docker", "Figma", "AWS", "Vercel", "Linux"] },
];

export default function Portfolio() {
    const [activeSection, setActiveSection] = useState("about");
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredProject, setHoveredProject] = useState(null);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const sectionsRef = useRef({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { threshold: 0.3 }
        );
        Object.values(sectionsRef.current).forEach((el) => el && observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
    };

    return (
        <div style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: "#040f1f", color: "#e8f0fb", minHeight: "100vh" }}>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #040f1f; }
        ::selection { background: #2e7fff; color: #ffffff; }
        a { text-decoration: none; color: inherit; }

        .nav-link {
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4a6fa8;
          cursor: pointer;
          transition: color 0.2s;
          border: none;
          background: none;
          padding: 0;
          font-family: inherit;
        }
        .nav-link:hover, .nav-link.active { color: #7eb8ff; }

        .project-row {
          border-top: 1px solid #0e2040;
          padding: 32px 0;
          cursor: pointer;
          transition: background 0.15s;
        }
        .project-row:last-child { border-bottom: 1px solid #0e2040; }
        .project-row:hover { background: #071428; margin: 0 -24px; padding: 32px 24px; }

        .tag {
          display: inline-block;
          font-size: 11px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border: 1px solid #1a3560;
          padding: 4px 10px;
          border-radius: 2px;
          color: #4a7abf;
          font-family: 'DM Mono', monospace;
        }

        .skill-item {
          font-size: 14px;
          color: #7a9cc8;
          padding: 10px 0;
          border-bottom: 1px solid #0e2040;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .skill-item::before {
          content: '';
          width: 4px;
          height: 4px;
          background: #2e7fff;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .form-field {
          width: 100%;
          background: #071428;
          border: 1px solid #0e2040;
          border-radius: 4px;
          padding: 14px 16px;
          font-size: 15px;
          font-family: inherit;
          color: #e8f0fb;
          outline: none;
          transition: border-color 0.2s, background 0.2s;
          resize: none;
        }
        .form-field::placeholder { color: #2a4a78; }
        .form-field:focus { border-color: #2e7fff; background: #0a1c36; }

        .btn-primary {
          background: #2e7fff;
          color: #ffffff;
          border: none;
          padding: 14px 32px;
          font-size: 13px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          font-family: inherit;
          cursor: pointer;
          border-radius: 3px;
          transition: background 0.2s;
        }
        .btn-primary:hover { background: #1a6aee; }

        .section-label {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #2e5a9a;
          font-family: 'DM Mono', monospace;
          margin-bottom: 48px;
        }

        @media (max-width: 768px) {
          .hero-name { font-size: 52px !important; }
          .project-meta { flex-direction: column; gap: 12px !important; }
          .skills-grid { grid-template-columns: 1fr !important; }
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

            {/* NAV */}
            <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, background: "#040f1f", borderBottom: "1px solid #0e2040" }}>
                <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 32px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 13, letterSpacing: "0.04em", color: "#7eb8ff" }}>
                        AR<span style={{ color: "#2a4a78" }}>.portfolio</span>
                    </span>
                    <div style={{ display: "flex", gap: 36 }}>
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link}
                                className={`nav-link ${activeSection === link.toLowerCase() ? "active" : ""}`}
                                onClick={() => scrollTo(link)}
                            >
                                {link}
                            </button>
                        ))}
                    </div>
                </div>
            </nav>

            {/* HERO */}
            <section
                id="about"
                ref={(el) => (sectionsRef.current.about = el)}
                style={{ maxWidth: 1080, margin: "0 auto", padding: "160px 32px 120px" }}
            >
                <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                    <div>
                        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2e5a9a", marginBottom: 24 }}>
                            Available for work · Jakarta, ID
                        </p>
                        <h1
                            className="hero-name"
                            style={{ fontSize: 76, fontWeight: 300, lineHeight: 1.05, letterSpacing: "-0.03em", color: "#e8f0fb" }}
                        >
                            Ari Ramadhan<br />
                            <em style={{ fontStyle: "italic", fontWeight: 300, color: "#4a6fa8" }}>Full-Stack</em>
                        </h1>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, paddingTop: 24, borderTop: "1px solid #0e2040" }}>
                        <div>
                            <p style={{ fontSize: 17, lineHeight: 1.75, color: "#7a9cc8", fontWeight: 300 }}>
                                I design and build digital products that are clean, fast, and purposeful.
                                5 years crafting interfaces and systems for startups and enterprises across Southeast Asia.
                            </p>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            {[
                                ["Experience", "5 Years"],
                                ["Projects", "40+"],
                                ["Clients", "18"],
                            ].map(([label, val]) => (
                                <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 16, borderBottom: "1px solid #0e2040" }}>
                                    <span style={{ fontSize: 13, color: "#2e5a9a", letterSpacing: "0.04em", fontFamily: "'DM Mono', monospace" }}>{label}</span>
                                    <span style={{ fontSize: 15, fontWeight: 500, color: "#7eb8ff" }}>{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                        <button className="btn-primary" onClick={() => scrollTo("Work")}>View Work</button>
                        <button onClick={() => scrollTo("Contact")} style={{ background: "transparent", border: "1px solid #1a3560", color: "#7eb8ff", padding: "14px 32px", fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "inherit", cursor: "pointer", borderRadius: 3, transition: "border-color 0.2s" }}>
                            Contact Me
                        </button>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section
                id="work"
                ref={(el) => (sectionsRef.current.work = el)}
                style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px" }}
            >
                <p className="section-label">Selected Work</p>
                <div>
                    {PROJECTS.map((p) => (
                        <div
                            key={p.id}
                            className="project-row"
                            onMouseEnter={() => setHoveredProject(p.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="project-meta" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
                                        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1e3a6a", letterSpacing: "0.1em" }}>{p.year}</span>
                                        <h3 style={{ fontSize: 22, fontWeight: 400, letterSpacing: "-0.02em", color: "#c8daf5" }}>{p.title}</h3>
                                    </div>
                                    <p style={{ fontSize: 12, color: "#2e5a9a", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12, fontFamily: "'DM Mono', monospace" }}>{p.category}</p>
                                    {hoveredProject === p.id && (
                                        <p style={{ fontSize: 14, color: "#5a80b0", lineHeight: 1.7, maxWidth: 560, marginBottom: 16 }}>{p.description}</p>
                                    )}
                                    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                                        {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                                    </div>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#2a4a78", fontSize: 13, paddingTop: 4, transition: "color 0.2s", flexShrink: 0 }}>
                                    <span>View</span>
                                    <span style={{ fontSize: 18 }}>→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* SKILLS */}
            <section
                id="skills"
                ref={(el) => (sectionsRef.current.skills = el)}
                style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px" }}
            >
                <p className="section-label">Skills & Tools</p>
                <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48 }}>
                    {SKILLS.map((group) => (
                        <div key={group.category}>
                            <h4 style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#2e5a9a", fontFamily: "'DM Mono', monospace", marginBottom: 16 }}>
                                {group.category}
                            </h4>
                            <div>
                                {group.items.map((item) => (
                                    <div key={item} className="skill-item">{item}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section
                id="contact"
                ref={(el) => (sectionsRef.current.contact = el)}
                style={{ maxWidth: 1080, margin: "0 auto", padding: "80px 32px 120px" }}
            >
                <p className="section-label">Get In Touch</p>
                <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
                    <div>
                        <h2 style={{ fontSize: 40, fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 24, color: "#e8f0fb" }}>
                            Let's build something<br />
                            <em style={{ fontStyle: "italic", color: "#4a6fa8" }}>worth remembering.</em>
                        </h2>
                        <p style={{ fontSize: 15, color: "#4a6fa8", lineHeight: 1.8, marginBottom: 40 }}>
                            Open to freelance projects, full-time roles, and collaborations. Typically respond within 24 hours.
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                            {[
                                ["Email", "ari@example.com"],
                                ["LinkedIn", "linkedin.com/in/ariramadhan"],
                                ["GitHub", "github.com/ariramadhan"],
                            ].map(([label, val]) => (
                                <div key={label} style={{ display: "flex", gap: 16, fontSize: 14 }}>
                                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#1e3a6a", letterSpacing: "0.08em", textTransform: "uppercase", minWidth: 70, paddingTop: 2 }}>{label}</span>
                                    <span style={{ color: "#7a9cc8" }}>{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e5a9a", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Name</label>
                                    <input
                                        className="form-field"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: "block", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e5a9a", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Email</label>
                                    <input
                                        className="form-field"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2e5a9a", marginBottom: 8, fontFamily: "'DM Mono', monospace" }}>Message</label>
                                <textarea
                                    className="form-field"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button className="btn-primary">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer style={{ borderTop: "1px solid #0e2040", padding: "24px 32px", maxWidth: 1080, margin: "0 auto" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#1e3a6a" }}>© 2025 Ari Ramadhan</span>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "#1a3060" }}>Built with React + Tailwind</span>
                </div>
            </footer>
        </div>
    );
}