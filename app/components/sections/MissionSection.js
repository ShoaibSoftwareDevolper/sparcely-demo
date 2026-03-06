"use client"
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';

const MissionSection = ({ mission }) => {
    return (
        <section className="py-24 md:py-40 relative overflow-hidden">
            {/* Background Accent Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="site-padding relative z-10">
                <div className="flex flex-col mb-20">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-8 h-px bg-accent" />
                            <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] font-bold">
                                // CORE_PROTOCOLS
                            </h3>
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black uppercase text-white tracking-tighter leading-[0.85]">
                            OUR MISSION <br />
                            <span className="text-stroke">& VISION.</span>
                        </h2>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {mission.map((point, idx) => (
                        <FadeIn key={idx} direction="up" delay={idx * 0.1}>
                            <div className="group relative p-12 bg-white/[0.02] border border-white/5 backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-accent/40 hover:bg-white/[0.04]">
                                {/* Animated Corner Bracket */}
                                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-accent/0 group-hover:border-accent/100 transition-all duration-700" />

                                <div className="flex flex-col gap-8 relative z-10">
                                    <div className="flex justify-between items-start">
                                        <span className="text-[40px] font-black leading-none text-white/5 group-hover:text-accent/20 transition-colors duration-500 font-mono">
                                            0{idx + 1}
                                        </span>
                                        <div className="px-3 py-1 border border-white/10 rounded-full">
                                            <span className="text-[8px] font-mono text-white/40 uppercase tracking-widest">Active_Protocol</span>
                                        </div>
                                    </div>

                                    <p className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                        {point}
                                    </p>

                                    <div className="flex items-center gap-4 mt-4">
                                        <div className="h-px flex-1 bg-white/5" />
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em] group-hover:text-accent/50 transition-colors">
                                            Process_Stream_ID: {Math.floor(Math.random() * 9999)}
                                        </span>
                                    </div>
                                </div>

                                {/* Background Pattern */}
                                <div className="absolute -bottom-10 -right-10 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none">
                                    <div className="w-40 h-40 border-4 border-white rotate-45" />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                {/* Vertical Decorative Metadata */}
                <div className="absolute left-[2%] top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-6 opacity-20">
                    <span className="vertical-text text-[8px] font-mono uppercase tracking-[0.6em] text-white">SPARCLEY_ENGINE_V1.0</span>
                    <div className="w-px h-20 bg-white" />
                </div>
            </div>
        </section>
    );
};

export default MissionSection;
