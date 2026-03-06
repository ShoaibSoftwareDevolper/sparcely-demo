"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';
import data from '@/app/api/data.js';

const ProcessSection = () => {
    const containerRef = useRef(null);
    const processSteps = data.pages.services.webDevelopment.process;

    // Scroll progress for the entire section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    // High response spring for rapid scrub
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <section 
            ref={containerRef} 
            className="relative h-[115vh] md:h-[110vh] lg:h-screen mt-10 md:mt-20 overflow-hidden" 
        >
            <div className="sticky top-0 h-screen w-full flex flex-col justify-center relative">
                {/* Background Narrative */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.02] select-none">
                    <motion.div 
                        style={{ x: useTransform(smoothProgress, [0, 1], ["5%", "-20%"]) }}
                        className="text-[35vw] md:text-[25vw] font-black uppercase text-white leading-none whitespace-nowrap mt-20"
                    >
                        SYSTEM_v4
                    </motion.div>
                </div>

                <div className="site-padding relative z-10 w-full max-w-7xl mx-auto py-10 md:py-0">
                    <div className="mb-8 md:mb-12">
                        <FadeIn direction="up">
                            <div className="flex items-center gap-4 mb-3 md:mb-4">
                                <div className="w-8 md:w-10 h-px bg-accent" />
                                <span className="font-mono text-[8px] md:text-[9px] tracking-[0.4em] text-accent uppercase font-bold">
                                    // TRACK
                                </span>
                            </div>
                            <h2 className="text-4xl md:text-[5vw] font-black uppercase leading-tight tracking-tighter text-white">
                                APPLIED <span className="text-stroke">LOGIC.</span>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="relative md:pt-6">
                        {/* THE TRACK (Connecting Line) */}
                        <div className="absolute top-[32px] left-0 w-full h-px bg-white/5 hidden lg:block overflow-hidden">
                            <motion.div 
                                style={{ scaleX: smoothProgress }}
                                className="absolute inset-0 bg-accent origin-left"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 md:gap-y-10 lg:gap-6 relative z-10">
                            {processSteps.map((step, index) => (
                                <StepItem 
                                    key={step.step} 
                                    step={step} 
                                    index={index} 
                                    progress={smoothProgress} 
                                    total={processSteps.length}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Technical Bottom HUD */}
                <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 w-full max-w-7xl site-padding flex justify-between items-end opacity-20">
                    <div className="space-y-1">
                        <span className="block font-mono text-[6px] uppercase tracking-widest text-accent">Scrub_Progress</span>
                        <div className="w-24 md:w-32 h-px bg-white/10 relative">
                            <motion.div 
                                style={{ scaleX: smoothProgress }}
                                className="absolute inset-0 bg-accent origin-left"
                            />
                        </div>
                    </div>
                    <div className="text-right font-mono text-[6px] uppercase tracking-[0.2em] text-white">
                        SYNC: TRACKER // V.4.0.1
                    </div>
                </div>
            </div>
        </section>
    );
};

const StepItem = ({ step, index, progress, total }) => {
    const start = index / total;
    const end = (index + 1) / total;
    
    // Transitions optimized for both mobile stack and desktop grid
    const opacity = useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.15, 1, 1, 0.4]);
    const scale = useTransform(progress, [start - 0.1, start, end], [0.95, 1, 1]);
    const accentFill = useTransform(progress, [start, end], [0, 1]);
    
    return (
        <motion.div 
            style={{ opacity, scale }}
            className="flex flex-row lg:flex-col items-center lg:items-start gap-5 md:gap-8"
        >
            {/* Step Hub */}
            <div className="relative shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-black border border-white/10 flex items-center justify-center font-mono text-sm md:text-base z-10 relative overflow-hidden transition-colors duration-500">
                    <motion.div 
                        style={{ opacity: accentFill }}
                        className="absolute inset-0 bg-accent"
                    />
                    <motion.span 
                        style={{ color: useTransform(accentFill, [0, 0.8], ["#fff", "#000"]) }}
                        className="relative z-10 font-bold"
                    >
                        {step.step}
                    </motion.span>
                </div>
                
                <motion.div 
                    style={{ opacity: useTransform(progress, [start, end], [0, 0.08]) }}
                    className="absolute inset-0 bg-accent rounded-full blur-xl scale-110"
                />
            </div>

            {/* Content Container */}
            <div className="space-y-1 md:space-y-3">
                <span className="block font-mono text-[8px] text-accent font-bold uppercase tracking-widest leading-none">
                     P_0{index + 1}
                </span>
                <h3 className="text-lg md:text-xl font-black uppercase text-white tracking-tighter leading-tight max-w-[120px] md:max-w-none">
                    {step.title}
                </h3>
                <p className="text-white/20 text-[8px] md:text-[9px] font-medium uppercase tracking-widest leading-relaxed max-w-[200px] hidden md:block">
                    {step.description}
                </p>
                
                <div className="w-8 md:w-10 h-px bg-white/5 relative">
                    <motion.div 
                        style={{ scaleX: useTransform(progress, [start, end], [0, 1]) }}
                        className="absolute inset-0 bg-accent origin-left"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default ProcessSection;
