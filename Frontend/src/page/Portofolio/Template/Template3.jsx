import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiArrowRight, FiMail, FiZap, FiCode } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Template3 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeNav, setActiveNav] = useState('home');

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
        setActiveNav(id);
        setIsMenuOpen(false);
    };

    const skills = [
        {
            category: 'Frontend',
            icon: '⚡',
            items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Three.js']
        },
        {
            category: 'Backend',
            icon: '🔧',
            items: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
        },
        {
            category: 'DevOps',
            icon: '🚀',
            items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Linux']
        },
    ];

    const projects = [
        {
            id: 1,
            title: 'AI-Powered Analytics',
            description: 'Real-time data analytics platform with machine learning predictions and interactive visualizations.',
            tech: ['React', 'TensorFlow', 'WebGL', 'Node.js'],
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            id: 2,
            title: 'Neural Network Builder',
            description: 'Interactive platform for building and training neural networks with visual debugging capabilities.',
            tech: ['Next.js', 'PyTorch', 'WebSocket', 'MongoDB'],
            gradient: 'from-cyan-500 to-blue-500',
        },
        {
            id: 3,
            title: 'Quantum Simulator',
            description: 'Advanced quantum computing simulator with real-time visualization and algorithm optimization.',
            tech: ['React', 'WebAssembly', 'Python', 'D3.js'],
            gradient: 'from-emerald-500 to-teal-500',
        },
        {
            id: 4,
            title: 'Metaverse Platform',
            description: 'Immersive 3D metaverse platform with real-time collaboration and blockchain integration.',
            tech: ['Three.js', 'Web3', 'Node.js', 'Ethereum'],
            gradient: 'from-orange-500 to-red-500',
        },
    ];

    return (
        <div className="bg-gray-950 text-gray-100 overflow-hidden">
            {/* Animated background elements */}
            <div className="fixed inset-0 -z-40 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-pulse delay-700"></div>
            </div>

            <div className="relative z-10">
                {/* NAVBAR */}
                <nav className="fixed top-0 left-0 right-0 bg-gray-950 bg-opacity-80 backdrop-blur-md border-b border-gray-800 z-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                                    DEV
                                </a>
                            </div>

                            {/* Desktop Menu */}
                            <div className="hidden md:flex gap-8">
                                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className={`capitalize transition-all duration-300 text-sm font-medium ${activeNav === item
                                                ? 'text-cyan-400 border-b-2 border-cyan-400'
                                                : 'text-gray-400 hover:text-cyan-300'
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
                                    className="text-gray-400 hover:text-cyan-400"
                                >
                                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu */}
                        {isMenuOpen && (
                            <div className="md:hidden pb-4 space-y-2 border-t border-gray-800">
                                {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item)}
                                        className="block w-full text-left px-4 py-2 capitalize text-gray-400 hover:text-cyan-400 hover:bg-gray-900 rounded"
                                    >
                                        {item === 'projects' ? 'Work' : item}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </nav>

                {/* HERO SECTION */}
                <section id="home" className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    {/* Decorative grid background */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
                            backgroundSize: '50px 50px'
                        }}></div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30 backdrop-blur-sm">
                                        <span className="text-sm font-semibold text-cyan-300">Welcome to the Future</span>
                                    </div>
                                    <h1 className="text-7xl md:text-8xl font-black leading-tight">
                                        <span className="block bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                                            Future
                                        </span>
                                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300 mt-2">
                                            Ready Dev
                                        </span>
                                    </h1>
                                </div>
                                <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
                                    Building cutting-edge applications with next-generation technologies. Pushing the boundaries of what's possible.
                                </p>
                                <div className="flex flex-wrap gap-4 pt-4">
                                    <button
                                        onClick={() => scrollToSection('projects')}
                                        className="group relative px-8 py-4 font-bold text-white rounded-lg overflow-hidden"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-600 group-hover:from-purple-500 group-hover:to-cyan-500 transition-all duration-300"></div>
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-purple-400 to-cyan-400 transition-opacity duration-300"></div>
                                        <div className="relative flex items-center gap-2">
                                            View Work
                                            <FiArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => scrollToSection('contact')}
                                        className="px-8 py-4 font-bold border-2 border-cyan-500 text-cyan-400 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-300 transition-all duration-300 backdrop-blur-sm"
                                    >
                                        Get In Touch
                                    </button>
                                </div>
                            </div>
                            <div className="relative flex justify-center items-center h-96">
                                {/* Animated orbiting circles */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="absolute w-48 h-48 border-2 border-cyan-500/20 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
                                    <div className="absolute w-64 h-64 border border-purple-500/20 rounded-full animate-spin" style={{animationDuration: '30s', animationDirection: 'reverse'}}></div>
                                    <div className="absolute w-72 h-72 border border-cyan-500/10 rounded-full animate-pulse"></div>
                                </div>
                                
                                {/* Center icon */}
                                <div className="relative z-10">
                                    <div className="absolute -inset-20 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="relative bg-gray-900/80 backdrop-blur-xl border-2 border-cyan-500/50 rounded-3xl p-8 shadow-2xl">
                                        <div className="text-8xl">💻</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ABOUT ME SECTION */}
                <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
                    <div className="absolute top-40 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -translate-x-1/2"></div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-6">
                                <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                    Who Am I?
                                </h2>
                                
                                <div className="space-y-4">
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        I'm a full-stack developer obsessed with technology and innovation. My mission is to create digital experiences that inspire and transform.
                                    </p>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        Specializing in building scalable applications with cutting-edge technologies. Always exploring new possibilities at the intersection of code and creativity.
                                    </p>
                                    <p className="text-gray-400 text-lg leading-relaxed">
                                        From AI integration to blockchain solutions, I'm ready to tackle the challenges of tomorrow's web.
                                    </p>
                                </div>
                                
                                <div className="pt-4">
                                    <button 
                                        onClick={() => scrollToSection('contact')}
                                        className="px-8 py-3 font-bold text-cyan-400 border-2 border-cyan-500 rounded-lg hover:border-cyan-300 hover:text-cyan-300 hover:bg-cyan-500/5 transition-all duration-300"
                                    >
                                        Let's Talk
                                    </button>
                                </div>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-6">
                                <div className="relative group col-span-2 md:col-span-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 group-hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300">
                                        <div className="text-4xl mb-3">🎯</div>
                                        <h3 className="text-xl font-black text-gray-100 mb-2">Experience</h3>
                                        <p className="text-cyan-400 font-bold text-3xl mb-1">5+</p>
                                        <p className="text-gray-400 text-sm">Years of building production applications</p>
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 group-hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300">
                                        <div className="text-4xl mb-3">⚡</div>
                                        <h3 className="text-xl font-black text-gray-100 mb-2">Projects</h3>
                                        <p className="text-cyan-400 font-bold text-3xl mb-1">40+</p>
                                        <p className="text-gray-400 text-sm">Completed successfully</p>
                                    </div>
                                </div>
                                
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 group-hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300">
                                        <div className="text-4xl mb-3">🚀</div>
                                        <h3 className="text-xl font-black text-gray-100 mb-2">Clients</h3>
                                        <p className="text-cyan-400 font-bold text-3xl mb-1">30+</p>
                                        <p className="text-gray-400 text-sm">Trusted startups & enterprises</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SKILLS SECTION */}
                <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
                    <div className="absolute top-20 -left-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                My Arsenal
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                Technologies and tools I master to bring ideas to life
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {skills.map((skillGroup, index) => (
                                <div key={index} className="group relative">
                                    {/* Animated border */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-cyan-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                                    
                                    {/* Card */}
                                    <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-700 group-hover:border-cyan-500/50 p-8 rounded-2xl transition-all duration-300 overflow-hidden">
                                        {/* Background gradient on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-cyan-500/0 group-hover:from-purple-500/5 group-hover:to-cyan-500/5 transition-all duration-300"></div>
                                        
                                        <div className="relative space-y-6">
                                            <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                                                {skillGroup.icon}
                                            </div>
                                            
                                            <div>
                                                <h3 className="text-2xl font-black text-gray-100 mb-2">
                                                    {skillGroup.category}
                                                </h3>
                                                <div className="h-1 w-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                                            </div>
                                            
                                            <div className="space-y-3">
                                                {skillGroup.items.map((skill, idx) => (
                                                    <div key={idx} className="flex items-center gap-3 group/item">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full group-hover/item:scale-150 transition-transform duration-300"></div>
                                                        <span className="text-gray-300 group-hover/item:text-cyan-300 transition-colors duration-300 text-sm font-medium">
                                                            {skill}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
                    <div className="absolute bottom-0 -right-40 w-80 h-80 bg-cyan-600/5 rounded-full blur-3xl"></div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Featured Projects
                            </h2>
                            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                                A showcase of innovative solutions built with cutting-edge technology
                            </p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
                            {projects.map((project, index) => (
                                <div 
                                    key={project.id} 
                                    className={`group ${index % 2 === 1 ? 'md:mt-12' : ''}`}
                                >
                                    <div className="relative bg-gray-900/40 backdrop-blur-xl rounded-2xl overflow-hidden border border-gray-700 group-hover:border-cyan-500/50 transition-all duration-300 h-full flex flex-col">
                                        {/* Project header with gradient */}
                                        <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 relative overflow-hidden group-hover:opacity-100 transition-opacity duration-300`}>
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                                                ⚙️
                                            </div>
                                        </div>
                                        
                                        {/* Project content */}
                                        <div className="p-8 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-black text-gray-100 mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                                                {project.description}
                                            </p>
                                            
                                            {/* Tech tags */}
                                            <div className="flex flex-wrap gap-2 mb-6">
                                                {project.tech.map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-cyan-300 border border-cyan-500/30 group-hover:border-cyan-400/60 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            
                                            {/* View project link */}
                                            <a
                                                href={project.link}
                                                className="inline-flex items-center gap-2 text-cyan-400 font-bold group/link hover:text-cyan-300 transition-colors duration-300"
                                            >
                                                <span>Explore Project</span>
                                                <FiArrowRight size={18} className="group-hover/link:translate-x-2 transition-transform duration-300" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CONTACT SECTION */}
                <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
                    <div className="absolute -top-40 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl translate-x-1/2"></div>
                    
                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="text-center mb-16 space-y-4">
                            <h2 className="text-5xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Ready to Connect?
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Let's collaborate and build something extraordinary
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Links */}
                            <div className="space-y-6">
                                {[
                                    { icon: FiMail, label: 'Email', value: 'your.email@example.com', href: 'mailto:your.email@example.com', colorFrom: 'from-purple-500', colorTo: 'to-pink-500' },
                                    { icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/yourprofile', href: '#', colorFrom: 'from-blue-500', colorTo: 'to-cyan-500' },
                                    { icon: FaInstagram, label: 'Instagram', value: '@yourinstagram', href: '#', colorFrom: 'from-pink-500', colorTo: 'to-purple-500' },
                                    { icon: FaGithub, label: 'GitHub', value: 'github.com/yourprofile', href: '#', colorFrom: 'from-gray-600', colorTo: 'to-cyan-600' },
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <a key={index} href={item.href} className="group relative flex items-start gap-4 p-6 rounded-2xl bg-gray-900/40 backdrop-blur-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                                            <div className={`absolute inset-0 bg-gradient-to-br ${item.colorFrom} ${item.colorTo} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                            <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 flex-shrink-0 mt-1 relative z-10" />
                                            <div className="relative z-10">
                                                <h4 className="font-black text-gray-100 group-hover:text-cyan-400 transition-colors duration-300">{item.label}</h4>
                                                <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 text-sm">{item.value}</p>
                                            </div>
                                        </a>
                                    );
                                })}
                            </div>

                            {/* Contact Form */}
                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <label className="block text-gray-300 font-bold">Name</label>
                                    <input
                                        type="text"
                                        placeholder="Your name"
                                        className="w-full px-5 py-3 bg-gray-900/40 backdrop-blur-xl border border-gray-700 focus:border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-gray-100 placeholder-gray-600 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-gray-300 font-bold">Email</label>
                                    <input
                                        type="email"
                                        placeholder="your@email.com"
                                        className="w-full px-5 py-3 bg-gray-900/40 backdrop-blur-xl border border-gray-700 focus:border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-gray-100 placeholder-gray-600 transition-all duration-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-gray-300 font-bold">Message</label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        className="w-full px-5 py-3 bg-gray-900/40 backdrop-blur-xl border border-gray-700 focus:border-cyan-500/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500/20 text-gray-100 placeholder-gray-600 transition-all duration-300 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full py-4 font-bold text-white rounded-lg bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 active:scale-95 relative group overflow-hidden"
                                >
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-xl bg-gradient-to-r from-purple-400 to-cyan-400 transition-opacity duration-300"></div>
                                    <span className="relative">Send Message</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-t border-gray-800 py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }}></div>
                    </div>
                    
                    <div className="max-w-7xl mx-auto relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                            <div className="space-y-2 text-center md:text-left">
                                <p className="text-gray-500 font-semibold">
                                    &copy; 2025 Your Name
                                </p>
                                <p className="text-gray-600 text-sm">
                                    Designed to inspire. Built to scale. Ready for the future. ✨
                                </p>
                            </div>
                            <div className="flex gap-6">
                                {[
                                    { icon: FaGithub, link: '#', label: 'GitHub' },
                                    { icon: FaLinkedin, link: '#', label: 'LinkedIn' },
                                    { icon: FaInstagram, link: '#', label: 'Instagram' },
                                    { icon: FiMail, link: 'mailto:your.email@example.com', label: 'Email' }
                                ].map((item, index) => {
                                    const Icon = item.icon;
                                    return (
                                        <a 
                                            key={index} 
                                            href={item.link}
                                            className="group relative p-3 rounded-lg bg-gray-900/40 backdrop-blur-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                                            title={item.label}
                                        >
                                            <Icon size={20} className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        
                        <div className="border-t border-gray-800 pt-8 text-center">
                            <div className="inline-flex items-center gap-2 text-sm">
                                <span className="text-gray-600">Built with</span>
                                <span className="text-cyan-400">React</span>
                                <span className="text-gray-600">&</span>
                                <span className="text-purple-400">Tailwind CSS v4</span>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Template3;