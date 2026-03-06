"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';
import { FiArrowRight, FiCommand, FiShield, FiZap, FiBox, FiCpu, FiGlobe } from 'react-icons/fi';
import Link from 'next/link';

const ServiceItem = ({ service, index, activeIndex, setActiveIndex }) => {
    const isActive = activeIndex === index;
    const icons = [<FiCpu />, <FiGlobe />, <FiBox />];
    
    return (
        <motion.div 
            onMouseEnter={() => setActiveIndex(index)}
            className="group relative border-t border-white/5 py-12 md:py-20 transition-all duration-500 cursor-pointer"
        >
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-20">
                {/* Visual Locator */}
                <div className="flex items-center gap-6 md:w-48">
                    <span className={`font-mono text-xs transition-colors duration-500 ${isActive ? 'text-accent' : 'text-white/10'}`}>
                        [{service.number}]
                    </span>
                    <div className={`h-px transition-all duration-700 ${isActive ? 'w-12 bg-accent' : 'w-0 bg-white/10'}`} />
                </div>

                {/* Content Block */}
                <div className="flex-1 space-y-4">
                    <h3 className={`text-4xl md:text-7xl font-black uppercase tracking-tighter transition-all duration-700 ${isActive ? 'text-white' : 'text-white/20'}`}>
                        {service.title}
                    </h3>
                    
                    <AnimatePresence>
                        {isActive && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="text-white/40 text-sm md:text-base max-w-2xl leading-relaxed py-4">
                                    {service.description}
                                </p>
                                <div className="flex gap-4 pt-4">
                                    <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-[8px] text-white/40 uppercase tracking-widest">Architectural_Logic</span>
                                    <span className="px-3 py-1 rounded-full border border-white/10 font-mono text-[8px] text-white/40 uppercase tracking-widest">Module_Sync_V.4</span>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Right Action */}
                <div className="flex items-center gap-8">
                     <div className={`text-4xl transition-all duration-700 ${isActive ? 'text-accent scale-110' : 'text-white/5 scale-100'}`}>
                        {icons[index] || icons[0]}
                    </div>
                    <Link 
                        href={`/services/${service.slug}`}
                        className={`w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 ${isActive ? 'border-accent bg-accent text-black rotate-0' : 'border-white/10 text-white/20 -rotate-45'}`}
                    >
                        <FiArrowRight size={24} />
                    </Link>
                </div>
            </div>

            {/* Liquid Background Glow */}
            <div className={`absolute inset-0 -z-10 bg-gradient-to-r from-accent/[0.03] to-transparent opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-100' : ''}`} />
        </motion.div>
    );
}

const ServicesIntro = ({ data }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    if (!data) return null;

    return (
        <section className="relative pt-32 pb-60 overflow-hidden">
            {/* High-End Background detail */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(var(--accent-rgb),0.05),transparent_70%)]" />
            </div>

            <div className="site-padding relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32">
                    <div className="max-w-4xl">
                        <FadeIn direction="up">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-px bg-accent" />
                                <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                    // CORE_SOLUTIONS
                                </span>
                            </div>
                            <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
                                SYSTEM <br />
                                <span className="text-stroke">MAPPING.</span>
                            </h2>
                        </FadeIn>
                    </div>
                    <div className="pb-4 hidden md:block">
                        <FadeIn direction="up" delay={0.2}>
                            <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] leading-[2]">
                                Precision Development <br /> Architectural Integrity <br /> Seamless Scaling
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Interactive Solution List */}
                <div className="max-w-7xl mx-auto border-b border-white/5">
                    {data.services.map((service, index) => (
                        <ServiceItem 
                            key={service.slug} 
                            service={service} 
                            index={index} 
                            activeIndex={activeIndex}
                            setActiveIndex={setActiveIndex}
                        />
                    ))}
                </div>
            </div>

            {/* Aesthetic Bottom Meta */}
            <div className="site-padding mt-20 flex justify-between items-center opacity-10">
                <span className="font-mono text-[8px] tracking-[1.5em] text-white uppercase">V4.0 // ARCHITECTURE_ACTIVE</span>
                <div className="flex gap-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    <div className="w-12 h-px bg-white/20 my-auto" />
                </div>
            </div>
        </section>
    );
};

export default ServicesIntro;
