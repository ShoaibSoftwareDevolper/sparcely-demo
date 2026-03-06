"use client"
import React, { useState, useEffect, useCallback, memo, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import data from '@/app/api/data.js';

import { ArrowUpRight } from 'lucide-react';

const Hero = () => {
    const projects = data.pages.works.projects;
    const slides = projects.slice(0, 5);
    const [current, setCurrent] = useState(0);
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Technical Parallax
    const y1 = useTransform(scrollY, [0, 500], [0, -150]);
    const rotate = useTransform(scrollY, [0, 500], [0, 5]);

    const slidesMedia = [
        { type: "image", src: "/assets/Marc-Lauder_banner.webp" },
        { type: "video", src: "/assets/andalusia-dream-banner-compressed.webm" },
        { type: "image", src: "/assets/landing-page-img-compressed.webp" },
        { type: "image", src: "/assets/workon_landing_compressed.webp" },
        { type: "image", src: "/assets/toptis_banner.webp" },
    ];

    const nextSlide = useCallback(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prevSlide = useCallback(() => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }, [slides.length]);

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <section ref={containerRef} className="h-[110vh] md:h-screen relative overflow-hidden bg-[#0b0b0b] flex flex-col justify-center">

            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Background "Ghost" Typography */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
                <motion.h2
                    key={current}
                    initial={{ opacity: 0, scale: 1.2, y: 50 }}
                    animate={{ opacity: 0.02, scale: 1, y: 0 }}
                    transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[40vw] font-black uppercase tracking-tighter leading-none text-white select-none whitespace-nowrap"
                >
                    {slides[current].name.split(' ')[0]}
                </motion.h2>
            </div>

            <div className="w-full relative z-20 site-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center">

                    {/* LEFT SIDE: Core Messaging */}
                    <div className="lg:col-span-6 flex flex-col items-start pt-24 lg:pt-0">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="w-full"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <motion.span
                                        variants={{
                                            hidden: { x: -20, opacity: 0 },
                                            visible: { x: 0, opacity: 1 }
                                        }}
                                        className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase"
                                    >
                                        // PROJECT_0{current + 1}
                                    </motion.span>
                                    <div className="h-px w-20 bg-white/10" />
                                    <motion.span
                                        variants={{
                                            hidden: { x: 20, opacity: 0 },
                                            visible: { x: 0, opacity: 1 }
                                        }}
                                        className="text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase"
                                    >
                                        {slides[current].category}
                                    </motion.span>
                                </div>

                                <div className="overflow-hidden mb-8">
                                    <motion.h1
                                        variants={{
                                            hidden: { y: "100%" },
                                            visible: { y: 0 }
                                        }}
                                        transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                        className="text-6xl md:text-8xl lg:text-[7vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white"
                                    >
                                        {slides[current].name.split(' ')[0]}<br />
                                        <span className="text-stroke text-white/10">{slides[current].name.split(' ').slice(1).join(' ') || 'STUDIO'}</span>
                                    </motion.h1>
                                </div>

                                <motion.p
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl text-white/40 max-w-lg mb-12 font-medium leading-relaxed"
                                >
                                    {slides[current].subtitle}. Crafting unique digital identities through technical precision and architectural design logic.
                                </motion.p>

                                <motion.div
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-6"
                                >
                                    <Button
                                        href={slides[current].url}
                                        external={true}
                                        icon={<ArrowUpRight size={16} />}
                                        variant="outline"
                                    >
                                        EXPLORE CASE
                                    </Button>
                                    <Button
                                        href="/contact"
                                        variant="outline"
                                    >
                                        ESTIMATE
                                    </Button>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* RIGHT SIDE: Immersive Media Container */}
                    <div className="lg:col-span-6 relative aspect-[4/5] lg:aspect-square group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current}
                                initial={{ clipPath: "inset(100% 0 0 0)", scale: 1.2 }}
                                animate={{ clipPath: "inset(0% 0 0 0)", scale: 1 }}
                                exit={{ clipPath: "inset(0 0 100% 0)", scale: 1.1 }}
                                transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                                className="relative w-full h-[80%] lg:h-full bg-[#1a1a1a] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000"
                                style={{ y: y1, rotate }}
                            >
                                {slidesMedia[current].type === "video" ? (
                                    <video
                                        key={slidesMedia[current].src}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="absolute inset-0 w-full h-full object-cover"
                                    >
                                        <source src={slidesMedia[current].src} type="video/webm" />
                                    </video>
                                ) : (
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url('${slidesMedia[current].src}')` }}
                                    />
                                )}

                                {/* Technical HUD Over Media */}
                                <div className="absolute inset-12 border border-white/5 pointer-events-none flex flex-col justify-between p-6 overflow-hidden">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">[ REC // PREVIEW ]</span>
                                        <div className="flex gap-1">
                                            {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 bg-accent/40" />)}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">LN_00{current + 1}</span>
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.2em]">44° 24′ N 8° 55′ E</span>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Architectural Controls Attached to Image */}
                        <div className="absolute -bottom-6 md:bottom-8 -left-2 md:-left-16 z-30 backdrop-blur-xl bg-black/40 border border-white/10 p-5 md:p-8 flex flex-col gap-6 shadow-[0_8px_32px_rgba(0,0,0,0.5)] overflow-hidden">
                            {/* Decorative Corner Tab */}
                            <div className="absolute top-0 left-0 w-8 h-px bg-accent/80" />
                            <div className="absolute top-0 left-0 w-px h-8 bg-accent/80" />

                            <div className="flex gap-3 relative z-10">
                                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300 group relative overflow-hidden">
                                    <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full origin-center" />
                                    <span className="relative z-10 text-lg font-light group-hover:-translate-x-1 transition-transform duration-300">←</span>
                                </button>
                                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300 group relative overflow-hidden">
                                    <span className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full origin-center" />
                                    <span className="relative z-10 text-lg font-light group-hover:translate-x-1 transition-transform duration-300">→</span>
                                </button>
                            </div>

                            <div className="flex flex-col relative z-10">
                                <div className="flex justify-between items-end mb-3">
                                    <span className="text-[9px] font-mono text-white/40 uppercase tracking-[0.2em] flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                        Sequence
                                    </span>
                                    <span className="text-[10px] font-mono text-white/50 tracking-widest">{`0${current + 1} // 0${slides.length}`}</span>
                                </div>
                                <div className="w-36 md:w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
                                    <motion.div
                                        key={current}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 8, ease: "linear" }}
                                        className="absolute inset-0 bg-accent rounded-full"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 z-30 items-center">
                <span className="vertical-text text-[9px] font-mono uppercase tracking-[0.5em] text-white/20">Scroll for Experience</span>
                <div className="w-px h-24 bg-white/10" />
                <div className="flex flex-col gap-6">
                    {['FB', 'IG', 'X'].map(s => (
                        <a key={s} href="#" className="text-[10px] font-bold text-white/20 hover:text-accent transition-colors">{s}</a>
                    ))}
                </div>
            </div>

            {/* Bottom Tech Bar */}
            <div className="absolute bottom-12 left-[10%] z-20 hidden md:flex items-center gap-12">
                <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-1">STRATEGY</span>
                    <span className="text-[11px] font-bold text-white uppercase tracking-[0.1em]">Brand Evolution</span>
                </div>
                <div className="w-12 h-[1px] bg-white/10" />

            </div>

        </section>
    );
};

export default memo(Hero);

