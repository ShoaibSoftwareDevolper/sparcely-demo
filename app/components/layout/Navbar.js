"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import data from '@/app/api/data.js';

const navItems = data.sitemap;
const studios = data.company.studios;

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [activeStudio, setActiveStudio] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]);

    // Auto-cycle studio spotlight
    useEffect(() => {
        if (!menuOpen) return;
        const t = setInterval(() => setActiveStudio(v => (v + 1) % studios.length), 3000);
        return () => clearInterval(t);
    }, [menuOpen]);

    const overlayVariants = {
        closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 } },
        open: { clipPath: 'inset(0 0 0% 0)', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
    };

    const staggerContainer = {
        open: { transition: { staggerChildren: 0.07, delayChildren: 0.5 } },
        closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
    };

    const itemReveal = {
        open: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } },
        closed: { y: 80, opacity: 0, transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] } },
    };

    const sideReveal = {
        open: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: 0.6 } },
        closed: { opacity: 0, x: 30, transition: { duration: 0.4 } },
    };

    return (
        <>
            {/* ── Topbar ── */}
            <motion.nav
                animate={{ height: scrolled ? '70px' : '100px' }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] z-[2000] px-[5%] lg:px-[60px] flex justify-between items-center"
            >
                {/* Logo */}
                <Link href="/" onClick={() => setMenuOpen(false)} className="relative z-[2100]">
                    <span className="text-xl md:text-2xl font-black uppercase tracking-[-0.05em] text-white">
                        SPARCELY<span className="text-accent">.</span>
                    </span>
                </Link>

                {/* CTA + Toggle */}
                <div className="flex items-center gap-8 relative z-[2100]">
                    {/* <Link
                        href="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="hidden md:flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-white/50 hover:text-accent transition-colors duration-300"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse inline-block" />
                        Start a Project
                    </Link> */}

                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        aria-label="Toggle menu"
                        className="flex items-center gap-4 group focus:outline-none py-4"
                    >
                        <span className={`hidden md:block text-[11px] font-bold uppercase tracking-[0.25em] transition-colors duration-300 ${menuOpen ? 'text-accent' : 'text-white'}`}>
                            {menuOpen ? 'CLOSE' : 'MENU'}
                        </span>
                        {/* Hamburger */}
                        <div className="flex flex-col justify-center gap-[6px] w-8 h-8">
                            <motion.span
                                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0, backgroundColor: menuOpen ? '#e77415' : '#ffffff' }}
                                className="h-[2px] w-full rounded-full origin-center"
                            />
                            <motion.span
                                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0, width: menuOpen ? '100%' : '60%', backgroundColor: menuOpen ? '#e77415' : '#ffffff' }}
                                className="h-[2px] rounded-full self-end origin-center"
                            />
                        </div>
                    </button>
                </div>
            </motion.nav>

            {/* ── Full-Screen Menu Overlay ── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu"
                        variants={overlayVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="fixed inset-0 bg-[#0a0a0a] z-[1900] flex flex-col overflow-hidden"
                    >
                        {/* Top accent bar */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            exit={{ scaleX: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent origin-left"
                        />

                        <div className="flex flex-col h-full pt-[110px] pb-10 px-[5%] lg:px-[80px]">

                            {/* ── Main grid ── */}
                            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-0 min-h-0">

                                {/* LEFT: Giant Nav Links */}
                                <div className="lg:col-span-7 flex flex-col justify-center">
                                    <motion.ul
                                        variants={staggerContainer}
                                        initial="closed"
                                        animate="open"
                                        exit="closed"
                                        className="flex flex-col"
                                    >
                                        {navItems.map((item, idx) => (
                                            <motion.li
                                                key={item.id}
                                                variants={itemReveal}
                                                onHoverStart={() => setHoveredItem(idx)}
                                                onHoverEnd={() => setHoveredItem(null)}
                                                className="overflow-hidden border-b border-white/5 last:border-b-0"
                                            >
                                                <Link
                                                    href={item.slug === 'home' ? '/' : `/${item.slug}`}
                                                    onClick={() => setMenuOpen(false)}
                                                    className="group flex items-center gap-5 py-4 md:py-5"
                                                >
                                                    {/* Index */}
                                                    <span className="text-[11px] font-mono text-white/20 tabular-nums w-6 shrink-0">
                                                        0{idx + 1}
                                                    </span>

                                                    {/* Label */}
                                                    <span className={`text-3xl sm:text-4xl md:text-5xl lg:text-[4.5vw] font-black uppercase tracking-[-0.04em] leading-none transition-all duration-500 ease-[0.22,1,0.36,1] ${hoveredItem === null
                                                        ? 'text-white'
                                                        : hoveredItem === idx
                                                            ? 'text-white translate-x-3'
                                                            : 'text-white/20'
                                                        }`}>
                                                        {item.label}
                                                    </span>

                                                    {/* Accent dot */}
                                                    <motion.span
                                                        animate={{ scale: hoveredItem === idx ? 1 : 0, opacity: hoveredItem === idx ? 1 : 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="ml-auto w-2 h-2 rounded-full bg-accent shrink-0"
                                                    />
                                                </Link>
                                            </motion.li>
                                        ))}
                                    </motion.ul>
                                </div>

                                {/* RIGHT: Meta panel */}
                                <motion.div
                                    variants={sideReveal}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                    className="lg:col-span-5 hidden lg:flex flex-col justify-between pl-16 border-l border-white/5"
                                >
                                    {/* TOP: Status pill */}
                                    <div className="flex items-center gap-2 self-start mt-2 px-3 py-1.5 border border-white/10 rounded-full">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-white/40">
                                            Accepting Projects
                                        </span>
                                    </div>

                                    {/* MIDDLE: Main info block */}
                                    <div className="space-y-10">

                                        {/* Big email */}
                                        <div>
                                            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 mb-3">// Get in touch</p>
                                            <a
                                                href={`mailto:${studios[0].email}`}
                                                className="group flex items-end gap-3 hover:gap-5 transition-all duration-500"
                                            >
                                                <span className="text-[22px] font-black uppercase tracking-[-0.03em] text-white/80 group-hover:text-accent transition-colors duration-400 leading-none">
                                                    {studios[0].email}
                                                </span>
                                                <span className="text-accent text-lg mb-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">↗</span>
                                            </a>
                                            <a
                                                href={`tel:${studios[0].phone}`}
                                                className="group flex items-end gap-3 hover:gap-5 transition-all duration-500 mt-2"
                                            >
                                                <span className="text-[18px] font-bold text-white/30 group-hover:text-white/70 transition-colors duration-400 leading-none">
                                                    {studios[0].phone}
                                                </span>
                                            </a>
                                        </div>

                                        {/* Studios — animated spotlight cards */}
                                        <div>
                                            <div className="flex items-center justify-between mb-4">
                                                <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">// Studios</p>
                                                {/* Cycle indicators */}
                                                <div className="flex gap-1.5">
                                                    {studios.map((_, i) => (
                                                        <button key={i} onClick={() => setActiveStudio(i)}
                                                            className={`w-4 h-[2px] rounded-full transition-all duration-500 ${activeStudio === i ? 'bg-accent w-6' : 'bg-white/20'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                {studios.map((s, i) => {
                                                    const isActive = activeStudio === i;
                                                    const coords = i === 0 ? '51.5074° N, 0.1278° W' : '54.6872° N, 25.2797° E';
                                                    const flags = ['🇬🇧', '🇱🇹'];
                                                    return (
                                                        <motion.div
                                                            key={i}
                                                            animate={{
                                                                borderColor: isActive ? 'rgba(231,116,21,0.6)' : 'rgba(255,255,255,0.06)',
                                                                backgroundColor: isActive ? 'rgba(231,116,21,0.04)' : 'rgba(255,255,255,0)',
                                                            }}
                                                            transition={{ duration: 0.6 }}
                                                            onClick={() => setActiveStudio(i)}
                                                            className="relative border p-4 overflow-hidden cursor-pointer group"
                                                        >
                                                            {/* Scan line sweep on active */}
                                                            {isActive && (
                                                                <motion.div
                                                                    initial={{ x: '-100%' }}
                                                                    animate={{ x: '200%' }}
                                                                    transition={{ duration: 1.6, ease: 'linear', repeat: Infinity, repeatDelay: 1 }}
                                                                    className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-accent/10 to-transparent pointer-events-none"
                                                                />
                                                            )}

                                                            <div className="flex items-start justify-between mb-3">
                                                                <div className="flex items-center gap-2">
                                                                    <span className="text-xl leading-none">{flags[i]}</span>
                                                                    <div>
                                                                        <p className={`text-[12px] font-black uppercase tracking-widest leading-none transition-colors duration-400 ${isActive ? 'text-accent' : 'text-white/50'}`}>
                                                                            {s.country}
                                                                        </p>
                                                                        <p className="text-[9px] font-mono text-white/20 mt-0.5">{coords}</p>
                                                                    </div>
                                                                </div>
                                                                {/* Pulsing location pin */}
                                                                <div className="relative flex items-center justify-center w-6 h-6">
                                                                    {isActive && (
                                                                        <motion.div
                                                                            animate={{ scale: [1, 2.2, 1], opacity: [0.5, 0, 0.5] }}
                                                                            transition={{ duration: 1.8, repeat: Infinity }}
                                                                            className="absolute w-3 h-3 rounded-full bg-accent"
                                                                        />
                                                                    )}
                                                                    <div className={`w-2 h-2 rounded-full transition-colors duration-400 ${isActive ? 'bg-accent' : 'bg-white/20'}`} />
                                                                </div>
                                                            </div>

                                                            <p className="text-[10px] font-mono text-white/25 leading-relaxed mb-3">{s.address}</p>

                                                            {/* Visit CTA — only on active */}
                                                            <motion.div
                                                                animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 6 }}
                                                                transition={{ duration: 0.4 }}
                                                                className="flex items-center gap-2 pointer-events-none"
                                                            >
                                                                <div className="h-px flex-1 bg-accent/30" />
                                                                <span className="text-[9px] font-mono uppercase tracking-[0.35em] text-accent">Get Directions ↗</span>
                                                            </motion.div>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Socials as big text links */}
                                        <div>
                                            <p className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 mb-4">// Follow</p>
                                            <div className="flex flex-col gap-2">
                                                {[
                                                    { name: 'Instagram', handle: '@sparcleystudio' },
                                                    { name: 'LinkedIn', handle: 'Sparcley Studio' },
                                                    { name: 'Github', handle: 'github/sparcley' },
                                                ].map(s => (
                                                    <Link key={s.name} href="#"
                                                        className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-accent/30 transition-colors duration-300"
                                                    >
                                                        <span className="text-[13px] font-bold uppercase tracking-[0.15em] text-white/50 group-hover:text-white transition-colors">{s.name}</span>
                                                        <span className="text-[10px] font-mono text-white/20 group-hover:text-accent transition-colors">{s.handle}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            {/* ── Bottom Bar ── */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                            >
                                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/20">
                                    © {new Date().getFullYear()} Sparcley Studio — {data.company.founded}
                                </span>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                    <span className="text-[10px] font-mono uppercase tracking-[0.35em] text-white/20">
                                        {data.company.tagline}
                                    </span>
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
