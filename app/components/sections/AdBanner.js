"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';
import data from '@/app/api/data.js';
import Button from '@/app/components/ui/Button';
import { FiArrowRight } from 'react-icons/fi';

const AdBanner = () => {
    const sectionRef = useRef(null);
    const adData = data.pages.home.sections.find(s => s.id === 'ad-banner');
    
    if (!adData) return null;

    const parts = adData.content.split('–');
    const title = parts[0]?.trim() || '';
    const highlighted = parts[1]?.trim() || '';
    const description = parts[2]?.trim() || '';

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax transforms
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section 
            ref={sectionRef}
            className="relative h-[80vh] md:h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
        >
            {/* Background Parallax Layer */}
            <motion.div 
                style={{ y: y1, opacity: 0.1 }}
                className="absolute inset-0 z-0 pointer-events-none select-none"
            >
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                    <span className="text-[20vw] font-black uppercase text-white leading-none whitespace-nowrap opacity-10">
                        {title.split(' ').join('_')}
                    </span>
                    <span className="text-[20vw] font-black uppercase text-stroke-white text-stroke-[2px] leading-none whitespace-nowrap opacity-5">
                        {highlighted.split(' ').join('_')}
                    </span>
                </div>
            </motion.div>

            {/* Floating Architectural Elements */}
            <motion.div 
                style={{ y: y2 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute top-1/4 left-10 w-32 h-32 border border-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-64 h-64 border border-blue-500/10 rounded-full blur-3xl" />
            </motion.div>

            <div className="site-padding relative z-10 w-full max-w-7xl mx-auto text-center">
                <motion.div 
                    style={{ scale, opacity }}
                    className="space-y-12"
                >
                    <FadeIn direction="up">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <div className="w-12 h-px bg-accent" />
                            <span className="font-mono text-[10px] tracking-[0.5em] text-accent uppercase font-bold">
                                // ENGAGEMENT_PROTOCOL
                            </span>
                            <div className="w-12 h-px bg-accent" />
                        </div>
                        
                        <h2 className="text-5xl md:text-7xl lg:text-[7vw] font-black uppercase tracking-tighter leading-[0.85] text-white">
                            {title} <br />
                            <span className="text-stroke tracking-normal">{highlighted}</span>
                        </h2>
                        
                        <p className="mt-12 text-white/40 text-sm md:text-base font-medium uppercase tracking-[0.2em] max-w-2xl mx-auto leading-relaxed">
                            {description}
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <div className="pt-10 flex flex-col sm:flex-row items-center justify-center gap-8">
                            <Button 
                                href="/contact" 
                                variant="accent"
                                className="px-16 py-8 rounded-full shadow-[0_0_40px_rgba(var(--accent-rgb),0.2)] hover:shadow-[0_0_60px_rgba(var(--accent-rgb),0.4)]"
                                icon={<FiArrowRight />}
                            >
                                Initialize Free Audit
                            </Button>
                            
                            <div className="flex items-center gap-4 opacity-40">
                                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                                <span className="font-mono text-[8px] uppercase tracking-[0.4em] text-white">Limited_Availability</span>
                            </div>
                        </div>
                    </FadeIn>
                </motion.div>
            </div>

            {/* Bottom Technical Grid */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-20 opacity-5 whitespace-nowrap overflow-hidden w-full px-10">
                <span className="font-mono text-[10px] tracking-[1.5em] text-white uppercase shrink-0">VULNERABILITY_NULL_SET</span>
                <span className="font-mono text-[10px] tracking-[1.5em] text-white uppercase shrink-0">LOGIC_OPTIMIZATION_V4.2</span>
                <span className="font-mono text-[10px] tracking-[1.5em] text-white uppercase shrink-0">PARALLAX_SYNC_ACTIVE</span>
            </div>
        </section>
    );
};

export default AdBanner;