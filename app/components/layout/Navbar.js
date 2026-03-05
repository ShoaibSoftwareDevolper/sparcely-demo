"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import data from '@/app/api/data.js';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuVariants = {
        closed: {
            y: "-100%",
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.2
            }
        },
        open: {
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1]
            }
        }
    };

    const containerVariants = {
        open: {
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.4
            }
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] }
        },
        closed: {
            y: 100,
            opacity: 0,
            transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
        }
    };

    return (
        <>
            {/* High-End Navigation Bar */}
            <motion.nav
                initial={{ backgroundColor: "transparent", boxShadow: "none", backdropFilter: "none", y: 0, borderRadius: "0px" }}
                animate={{
                    backgroundColor: "transparent",
                    height: scrolled ? "70px" : "100px",
                    boxShadow: "none",
                    backdropFilter: "none",
                    borderRadius: "0px",
                    y: 0
                }}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-[2000] px-8 md:px-12 flex justify-between items-center transition-all duration-500"
            >
                {/* Branding: Technical & Precise */}
                <div className="flex-1">
                    <Link href="/" className="relative z-[2100] flex items-center group overflow-hidden" onClick={() => setMenuOpen(false)}>
                        <motion.span
                            className={`text-xl md:text-2xl font-black uppercase tracking-[-0.05em] transition-colors duration-500 ${menuOpen ? 'text-white' : (scrolled ? 'text-white' : 'text-white')}`}
                        >
                            SPARCELY<span className="text-accent">.</span>
                        </motion.span>
                    </Link>
                </div>

                {/* Right: Technical Toggle */}
                <div className="flex-none">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex items-center gap-6 focus:outline-none group relative z-[2100] py-4"
                    >
                        <div className="hidden md:flex flex-col items-end">
                            <span className={`text-[9px] font-mono uppercase tracking-[0.3em] transition-colors duration-500 ${menuOpen ? 'text-white/40' : 'text-white/40'}`}>
                                [ {menuOpen ? '02' : '01'} ]
                            </span>
                            <span className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-500 ${menuOpen ? 'text-white' : 'text-white'}`}>
                                {menuOpen ? 'CLOSE' : 'MENU'}
                            </span>
                        </div>

                        <div className="flex flex-col gap-1.5 w-8">
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? 45 : 0,
                                    y: menuOpen ? 4 : 0,
                                    backgroundColor: menuOpen ? "#ff5a00" : "#fff",
                                    width: menuOpen ? "100%" : "100%"
                                }}
                                className="h-[2px] w-full origin-center transition-colors duration-500"
                            />
                            <motion.span
                                animate={{
                                    rotate: menuOpen ? -45 : 0,
                                    y: menuOpen ? -4 : 0,
                                    backgroundColor: menuOpen ? "#ff5a00" : "#fff",
                                    width: menuOpen ? "100%" : "60%"
                                }}
                                className="h-[2px] self-end origin-center transition-colors duration-500"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* "Good Fella" Style Full Screen Menu Overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#0d0d0d] z-[1900] pt-[120px] pb-12 overflow-hidden flex flex-col"
                    >
                        <div className="container mx-auto h-full px-8 md:px-[12%] flex flex-col justify-between">

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

                                {/* Left: Massive Navigation */}
                                <div className="lg:col-span-8">
                                    <div className="mb-10 flex items-center gap-4">
                                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-accent">// NAVIGATION</span>
                                        <div className="h-px flex-1 bg-white/10" />
                                    </div>

                                    <motion.ul variants={containerVariants} className="flex flex-col">
                                        {data.sitemap.map((item, idx) => (
                                            <motion.li
                                                key={item.id}
                                                variants={itemVariants}
                                                className="group"
                                            >
                                                <Link
                                                    href={item.slug === 'home' ? '/' : `/${item.slug}`}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="flex items-center gap-6 py-4 md:py-6 transition-all duration-500"
                                                >
                                                    <span className="text-[12px] md:text-[14px] font-mono text-white/20 tabular-nums">
                                                        0{idx + 1}
                                                    </span>
                                                    <span className="text-4xl md:text-7xl font-black uppercase tracking-tighter text-white/40 group-hover:text-white group-hover:pl-4 transition-all duration-700 ease-[0.22,1,0.36,1] relative">
                                                        {item.label}
                                                        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-accent scale-0 group-hover:scale-100 transition-transform duration-500" />
                                                    </span>
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                {/* Right: Studio Logic & Metadata */}
                                <div className="lg:col-span-4 flex flex-col gap-16 pt-0 lg:pt-24">

                                    {/* Inquiry block */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.6 }}
                                        className="space-y-6"
                                    >
                                        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">[ INQUIRIES ]</span>
                                        <a href={`mailto:${data.company.studios[0].email}`} className="text-xl md:text-2xl font-bold text-white hover:text-accent transition-colors block leading-tight">
                                            {data.company.studios[0].email}
                                        </a>
                                        <p className="text-[11px] font-mono text-white/20 uppercase tracking-[0.1em] max-w-[200px]">
                                            Available for global collaborations & digital architecture.
                                        </p>
                                    </motion.div>

                                    {/* Locales & Socials grid */}
                                    <div className="grid grid-cols-2 gap-8 lg:gap-12 mt-4">
                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.7 }}
                                            className="space-y-6"
                                        >
                                            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">[ LOCALES ]</span>
                                            <div className="text-[12px] font-bold text-white uppercase tracking-[0.12em] leading-[2] space-y-1">
                                                <p>London (HQ)</p>
                                                <p>Vilnius (EU)</p>
                                                <p>Cloud (Remote)</p>
                                            </div>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.8 }}
                                            className="space-y-6"
                                        >
                                            <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30">[ CONNECT ]</span>
                                            <div className="flex flex-col gap-3">
                                                {['Instagram', 'LinkedIn', 'Github'].map((s) => (
                                                    <Link key={s} href="#" className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60 hover:text-accent transition-colors w-fit">{s}</Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Footer: Brand Signature */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 }}
                                className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/30">System Status: Active / Accepting Projects</span>
                                </div>
                                <div className="flex items-center gap-10">
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">EST 2010</span>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/20">© Sparcely Studio</span>
                                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-accent">V4.0 // ARCHITECTURE</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;

