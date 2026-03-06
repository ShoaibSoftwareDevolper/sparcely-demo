"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';

const AboutHero = ({ heading, subheading }) => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax effect for the background text
    const y1 = useTransform(scrollY, [0, 500], [0, -100]);

    return (
        <section ref={containerRef} className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden pt-[450px] pb-[30px]">
            {/* Architectural Grid Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Ghost Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
                <motion.h2
                    style={{ y: y1 }}
                    className="text-[30vw] font-black uppercase tracking-tighter leading-none text-white opacity-[0.02] select-none whitespace-nowrap"
                >
                    AGENCY
                </motion.h2>
            </div>

            <div className="site-padding relative z-10">
                <div className="max-w-6xl">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-px bg-accent" />
                            <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                // ABOUT_SPARCLEY
                            </span>
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.1}>
                        <h1 className="text-6xl md:text-[9vw] font-black uppercase leading-[0.85] tracking-tighter text-white mb-12">
                            {heading?.split(' ').slice(0, 3).join(' ')} <br />
                            <span className="text-stroke">{heading?.split(' ').slice(3).join(' ')}</span>
                        </h1>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
                        <div className="md:col-span-7">
                            <FadeIn direction="up" delay={0.2}>
                                <p className="text-xl md:text-3xl font-light text-white/60 leading-tight border-l border-accent/30 pl-8">
                                    {subheading}
                                </p>
                            </FadeIn>
                        </div>
                        <div className="md:col-span-5 flex justify-start md:justify-end">
                            <FadeIn direction="up" delay={0.3}>
                                <div className="flex flex-col gap-4">
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">INIT_YEAR // 2009</span>
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">LOC // LONDON_UK</span>
                                </div>
                            </FadeIn>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Animated Bar */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </section>
    );
};

export default AboutHero;
