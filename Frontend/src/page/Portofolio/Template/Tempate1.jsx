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
        <div className="min-h-screen bg-slate-950 text-slate-100 font-['DM_Sans'] scroll-smooth">
            {/* NAV */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950 border-b border-slate-800">
                <div className="max-w-4xl mx-auto px-8 h-16 flex items-center justify-between">
                    <span className="font-['DM_Mono'] text-sm tracking-wider">
                        AR<span className="text-slate-600">.portfolio</span>
                    </span>
                    <div className="flex gap-9">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link}
                                className={`text-xs tracking-wider uppercase transition-colors ${
                                    activeSection === link.toLowerCase()
                                        ? "text-blue-400"
                                        : "text-blue-700 hover:text-blue-400"
                                }`}
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
                className="max-w-4xl mx-auto px-8 pt-40 pb-32"
            >
                <div className="flex flex-col gap-12">
                    <div>
                        <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-blue-900 mb-6">
                            Available for work · Jakarta, ID
                        </p>
                        <h1 className="text-6xl md:text-7xl font-light leading-tight tracking-tight text-slate-100">
                            Ari Ramadhan<br />
                            <em className="italic font-light text-blue-700">Full-Stack</em>
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6 border-t border-slate-800">
                        <div>
                            <p className="text-lg leading-relaxed text-blue-300 font-light">
                                I design and build digital products that are clean, fast, and purposeful.
                                5 years crafting interfaces and systems for startups and enterprises across Southeast Asia.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4">
                            {[
                                ["Experience", "5 Years"],
                                ["Projects", "40+"],
                                ["Clients", "18"],
                            ].map(([label, val]) => (
                                <div key={label} className="flex justify-between items-center pb-4 border-b border-slate-800">
                                    <span className="text-xs text-blue-900 tracking-wider font-['DM_Mono']">{label}</span>
                                    <span className="text-sm font-medium text-blue-400">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 flex-wrap">
                        <button className="bg-blue-600 text-white px-8 py-3.5 text-xs tracking-widest uppercase rounded transition-colors hover:bg-blue-700" onClick={() => scrollTo("Work")}>View Work</button>
                        <button onClick={() => scrollTo("Contact")} className="bg-transparent border border-blue-800 text-blue-400 px-8 py-3.5 text-xs tracking-widest uppercase rounded transition-colors hover:border-blue-600">
                            Contact Me
                        </button>
                    </div>
                </div>
            </section>

            {/* WORK */}
            <section
                id="work"
                ref={(el) => (sectionsRef.current.work = el)}
                className="max-w-4xl mx-auto px-8 py-20"
            >
                <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-blue-900 mb-12">Selected Work</p>
                <div>
                    {PROJECTS.map((p) => (
                        <div
                            key={p.id}
                            className="border-t border-slate-800 py-8 cursor-pointer transition-colors hover:bg-slate-900 hover:-mx-8 hover:px-8"
                            onMouseEnter={() => setHoveredProject(p.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            <div className="flex justify-between items-start gap-6">
                                <div className="flex-1">
                                    <div className="flex items-baseline gap-4 mb-2">
                                        <span className="font-['DM_Mono'] text-xs text-slate-700 tracking-widest">{p.year}</span>
                                        <h3 className="text-xl font-normal tracking-tight text-slate-200">{p.title}</h3>
                                    </div>
                                    <p className="text-xs text-blue-900 tracking-wider uppercase mb-3 font-['DM_Mono']">{p.category}</p>
                                    {hoveredProject === p.id && (
                                        <p className="text-sm text-blue-500 leading-relaxed max-w-md mb-4">{p.description}</p>
                                    )}
                                    <div className="flex gap-2 flex-wrap">
                                        {p.tags.map((t) => (
                                            <span key={t} className="inline-block text-xs uppercase border border-blue-900 px-2.5 py-1 text-blue-600 font-['DM_Mono'] rounded">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-slate-600 text-xs pt-1 shrink-0">
                                    <span>View</span>
                                    <span className="text-lg">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-b border-slate-800"></div>
                </div>
            </section>

            {/* SKILLS */}
            <section
                id="skills"
                ref={(el) => (sectionsRef.current.skills = el)}
                className="max-w-4xl mx-auto px-8 py-20"
            >
                <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-blue-900 mb-12">Skills & Tools</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {SKILLS.map((group) => (
                        <div key={group.category}>
                            <h4 className="text-xs tracking-widest uppercase text-blue-900 font-['DM_Mono'] mb-4">
                                {group.category}
                            </h4>
                            <div>
                                {group.items.map((item) => (
                                    <div key={item} className="text-sm text-blue-300 py-2.5 border-b border-slate-800 flex items-center gap-2.5">
                                        <span className="w-1 h-1 bg-blue-600 rounded-full shrink-0"></span>
                                        {item}
                                    </div>
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
                className="max-w-4xl mx-auto px-8 py-20 pb-32"
            >
                <p className="font-['DM_Mono'] text-xs tracking-widest uppercase text-blue-900 mb-12">Get In Touch</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-light leading-snug tracking-tight mb-6 text-slate-100">
                            Let's build something<br />
                            <em className="italic text-blue-700">worth remembering.</em>
                        </h2>
                        <p className="text-sm text-blue-700 leading-relaxed mb-10">
                            Open to freelance projects, full-time roles, and collaborations. Typically respond within 24 hours.
                        </p>
                        <div className="flex flex-col gap-3">
                            {[
                                ["Email", "ari@example.com"],
                                ["LinkedIn", "linkedin.com/in/ariramadhan"],
                                ["GitHub", "github.com/ariramadhan"],
                            ].map(([label, val]) => (
                                <div key={label} className="flex gap-4 text-sm">
                                    <span className="font-['DM_Mono'] text-xs text-slate-700 tracking-wider uppercase min-w-fit pt-0.5">{label}</span>
                                    <span className="text-blue-300">{val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col gap-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-xs tracking-widest uppercase text-blue-900 mb-2 font-['DM_Mono']">Name</label>
                                    <input
                                        className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3.5 text-sm font-['DM_Sans'] text-slate-100 outline-none transition-all focus:border-blue-600 focus:bg-slate-800 placeholder-slate-700"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs tracking-widest uppercase text-blue-900 mb-2 font-['DM_Mono']">Email</label>
                                    <input
                                        className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3.5 text-sm font-['DM_Sans'] text-slate-100 outline-none transition-all focus:border-blue-600 focus:bg-slate-800 placeholder-slate-700"
                                        type="email"
                                        placeholder="your@email.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs tracking-widest uppercase text-blue-900 mb-2 font-['DM_Mono']">Message</label>
                                <textarea
                                    className="w-full bg-slate-900 border border-slate-800 rounded px-4 py-3.5 text-sm font-['DM_Sans'] text-slate-100 outline-none transition-all focus:border-blue-600 focus:bg-slate-800 placeholder-slate-700 resize-none"
                                    rows={6}
                                    placeholder="Tell me about your project..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <button className="bg-blue-600 text-white px-8 py-3.5 text-xs tracking-widest uppercase rounded transition-colors hover:bg-blue-700">Send Message</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-slate-800 py-6 px-8 max-w-4xl mx-auto">
                <div className="flex justify-between items-center">
                    <span className="font-['DM_Mono'] text-xs text-slate-700">© 2025 Ari Ramadhan</span>
                    <span className="font-['DM_Mono'] text-xs text-slate-900">Built with React + Tailwind</span>
                </div>
            </footer>
        </div>
    );
}