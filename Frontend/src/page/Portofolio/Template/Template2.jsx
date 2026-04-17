import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiMail, FiZap, FiCode } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
const Template2 = ({ data }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home');
    const [visibleSkills, setVisibleSkills] = useState(3);
    const [photo, setPhoto] = useState(true);
    const [visibleProjects, setVisibleProjects] = useState(2);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            alert('Semua field harus diisi!');
            return;
        }
        
        // Kirim ke email user (dari backend)
        const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(`New Message: ${formData.subject}`)}&body=${encodeURIComponent(`From: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
        
        window.location.href = mailtoLink;
        
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveNav(id);
        setIsMenuOpen(false);
    };



    const skillsData = [
        {
            id: 1,
            title: 'HTML',
            description: 'Membuat struktur halaman web menggunakan elemen dan tag HTML yang semantik.'
        },
        {
            id: 2,
            title: 'CSS',
            description: 'Mendesain dan mengatur tampilan website dengan styling yang responsif dan menarik.'
        },
        {
            id: 3,
            title: 'JavaScript',
            description: 'Menambahkan interaktivitas dan logika dinamis pada aplikasi web dengan JavaScript modern.'
        },
        {
            id: 4,
            title: 'React',
            description: 'Membangun aplikasi web yang cepat dan scalable menggunakan React dan komponen reusable.'
        },
        {
            id: 5,
            title: 'Tailwind CSS',
            description: 'Menggunakan utility-first CSS framework untuk membuat desain yang konsisten dan efisien.'
        },
        {
            id: 6,
            title: 'Node.js',
            description: 'Mengembangkan backend server yang powerful dengan Node.js dan Express.js.'
        },
    ];

    const projectsData = [
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'Platform e-commerce lengkap dengan fitur cart, checkout, dan payment gateway integration.',
            icon: '🛍️',
            techs: ['React', 'Node.js', 'MongoDB', 'Stripe']
        },
        {
            id: 2,
            title: 'Social Media App',
            description: 'Aplikasi media sosial dengan fitur feed, messaging, dan real-time notifications.',
            icon: '📱',
            techs: ['React', 'Firebase', 'Tailwind CSS']
        },
        {
            id: 3,
            title: 'Task Management System',
            description: 'Sistem manajemen tugas dengan fitur kolaborasi tim dan tracking progress.',
            icon: '✅',
            techs: ['React', 'Express', 'PostgreSQL']
        },
        {
            id: 4,
            title: 'Blog Platform',
            description: 'Platform blogging modern dengan editor yang user-friendly dan SEO optimization.',
            icon: '📝',
            techs: ['Next.js', 'GraphQL', 'Prisma']
        },
        {
            id: 5,
            title: 'Weather Dashboard',
            description: 'Dashboard cuaca real-time dengan visualisasi data dan forecast jangka panjang.',
            icon: '🌤️',
            techs: ['React', 'Weather API', 'Chart.js']
        },
        {
            id: 6,
            title: 'Video Streaming Service',
            description: 'Layanan streaming video dengan fitur upload, transcode, dan adaptive bitrate.',
            icon: '🎬',
            techs: ['Node.js', 'FFmpeg', 'AWS S3']
        },
    ];



    return (
        <div className="bg-white text-gray-900">
            {/* NAVBAR */}
            <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="shrink-0">
                            <a href="#" className="text-2xl font-bold text-blue-600">Portfolio</a>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-8">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className={`capitalize transition-colors ${activeNav === item
                                        ? 'text-blue-600 font-semibold'
                                        : 'text-gray-600 hover:text-blue-600'
                                        }`}
                                >
                                    {item === 'projects' ? 'Work' : item}
                                </button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-gray-600 hover:text-blue-600"
                            >
                                {/* {isMenuOpen ? <X size={24} /> : <Menu size={24} />} */}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden pb-4 space-y-2">
                            {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                <button
                                    key={item}
                                    onClick={() => scrollToSection(item)}
                                    className="block w-full text-left px-4 py-2 capitalize text-gray-600 hover:bg-blue-50 rounded"
                                >
                                    {item === 'projects' ? 'Work' : item}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </nav>

            {/* HERO SECTION */}
            <section id="home" className="pt-32 pb-20 bg-linear-to-b from-blue-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-center h-screen -mt-20 gap-12 items-center">
                        <div className={`${photo ? 'w-full md:w-1/2 ml-10' : 'w-full text-center'} `}>
                            <h1 className={`${photo ? 'text-5xl md:text-6xl' : 'text-6xl md:text-7xl'} font-bold text-gray-900 mb-4 `}>
                                Hallo, Saya <span className="text-blue-600">{data.fullname}</span>
                            </h1>
                            <p className={`text-xl text-gray-600 mb-8 ${photo ? 'px-0' : 'px-50'}`}>
                                Selamat datang di Portofolio saya! Saya seorang {data.level} {data.career_name}. Mari bangun kerja sama yang hebat dan ciptakan sesuatu yang luar biasa bersama-sama.
                            </p>
                            <div className={`flex ${photo ? 'mt-0' : 'mt-15 justify-center items-center'} gap-4`}>
                                <button
                                    onClick={() => scrollToSection('projects')}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                    Lihat Ketrampilan saya
                                </button>
                                <button
                                    onClick={() => scrollToSection('contact')}
                                    className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                                >
                                    Mari terhubung
                                </button>
                            </div>
                        </div>
                        {photo ? (
                            <div className="flex justify-center w-1/2">
                                <div className="w-80 h-80 bg-linear-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                                    <div className="text-6xl font-bold text-white">💻</div>
                                </div>
                            </div>
                        ) : null}
                    </div>
                </div>
            </section>

            {/* ABOUT ME SECTION */}
            <section id="about" className="py-20 bg-white">
                <div className="max-w-7xl mx-15 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">About Me</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                {data.about_me}
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pendidikan Terakhir</h3>
                                <p className="text-gray-600">{data.education}</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hobi</h3>
                                <p className="text-gray-600">{data.hobbies}</p>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Pengalaman</h3>
                                <p className="text-gray-600">{data.experience}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" className="py-20 px-15 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">My Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {skillsData.slice(0, visibleSkills).map((skill) => (
                            <div
                                key={skill.id}
                                className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md flex flex-col border border-blue-500 transition-shadow duration-300"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">{skill.title}</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-justify">
                                        <span className="text-gray-700">{skill.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* See More / Show Less Button */}
                    {skillsData.length > 3 && (
                        <div className="flex justify-center mt-12">
                            {visibleSkills < skillsData.length ? (
                                <button
                                    onClick={() => setVisibleSkills(skillsData.length)}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Lihat lebih banyak
                                </button>
                            ) : (
                                <button
                                    onClick={() => setVisibleSkills(3)}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Lihat sedikit
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" className="py-20 bg-white">
                <div className="max-w-7xl mx-15 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Featured Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {projectsData.slice(0, visibleProjects).map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="h-48 bg-linear-to-r from-blue-600 to-blue-400 flex items-center justify-center">
                                    <div className="text-6xl">{project.icon}</div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{project.title}</h3>
                                    <p className="text-gray-600 mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.techs.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* See More / Show Less Button */}
                    {projectsData.length > 2 && (
                        <div className="flex justify-center mt-12">
                            {visibleProjects < projectsData.length ? (
                                <button
                                    onClick={() => setVisibleProjects(projectsData.length)}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Lihat Lebih banyak
                                </button>
                            ) : (
                                <button
                                    onClick={() => setVisibleProjects(2)}
                                    className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                                >
                                    Lihat lebih Sedikit
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Get In Touch</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <p className="text-lg text-gray-600 mb-8">
                                Have a project in mind? Let's talk about it. I'm always interested in hearing about new opportunities.
                            </p>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    {/* <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" /> */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Email</h4>
                                        <a href={`mailto:${data.email}`} className="text-gray-600 hover:text-blue-600">
                                            {data.email}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    {/* <Linkedin className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" /> */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                                        <a href={data.linkedin_link} className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                                            {data.linkedin_link}
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    {/* <Instagram className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" /> */}
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Instagram</h4>
                                        <a href={data.instagram_link} className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                                            {data.instagram_link}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Email</label>
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Subject</label>
                                    <input
                                        type="text"
                                        placeholder="Subject"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleFormChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Your message"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleFormChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                >
                                        Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-gray-300 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <p className="text-center md:text-left mb-4 md:mb-0">&copy; 2025 Your Name. All rights reserved.</p>
                        <div className="flex gap-4">
                            <a href={data.github_link} className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} />
                            </a>
                            <a href={data.linkedin_link} className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={20} />
                            </a>
                            <a href={data.instagram_link} className="hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} />
                            </a>
                            <a href={`mailto:${data.email}`} className="hover:text-blue-400 transition-colors">
                                <FiMail size={20} />
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 pt-6 text-center text-sm">
                        <p>Crafted with ❤️ using React & Tailwind CSS</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Template2;