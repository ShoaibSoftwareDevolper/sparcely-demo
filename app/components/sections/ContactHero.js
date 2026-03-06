"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ContactHero = ({ heading, subheading }) => {
    return (
        <section className="relative pt-[350px] pb-28 overflow-hidden bg-[#0b0b0b]">
            {/* Exact same Architectural Grid as Homepage */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Ghost Typography Background — like homepage */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.025, scale: 1 }}
                    transition={{ duration: 2, ease: [0.76, 0, 0.24, 1] }}
                    className="text-[35vw] font-black uppercase tracking-tighter leading-none text-white select-none whitespace-nowrap"
                >
                    TALK
                </motion.h2>
            </div>

            {/* Main Content */}
            <div className="w-full relative z-20 site-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">

                    {/* LEFT: Display Headline */}
                    <div className="lg:col-span-8 flex flex-col items-start">

                        {/* Metadata Row — same as homepage */}
                        <div className="flex items-center gap-4 mb-10">
                            <motion.span
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase"
                            >
                                // CONTACT_US
                            </motion.span>
                            <div className="h-px w-20 bg-white/10" />
                            <motion.span
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase"
                            >
                                DIRECT LINE
                            </motion.span>
                        </div>

                        {/* Giant Title — exactly like homepage h1 */}
                        <div className="overflow-hidden mb-6">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                                className="text-7xl md:text-[10vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white"
                            >
                                Let&apos;s <br />
                                <span className="text-stroke" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
                                    Turn
                                </span>
                                <span className="text-accent"> ideas</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                                className="text-7xl md:text-[10vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white"
                            >
                                Into
                                <span className="text-stroke ml-6" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>
                                    Experience.
                                </span>
                            </motion.h2>
                        </div>

                        {/* Sub text + CTA row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-10 mt-12"
                        >
                            <p className="text-lg md:text-xl text-white/40 max-w-sm font-medium leading-relaxed">
                                {subheading}. Crafting digital solutions from your first idea to launch.
                            </p>

                        </motion.div>
                    </div>

                    {/* RIGHT: Architectural HUD Metadata */}
                    <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-end gap-12 pb-4">
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-col gap-8 items-end"
                        >
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">// HQ Office</span>
                                <span className="text-[11px] font-bold text-white uppercase tracking-[0.15em]">London, UK</span>
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">51.5074° N, 0.1278° W</span>
                            </div>
                            <div className="w-px h-24 bg-white/10" />
                            <div className="flex flex-col items-end gap-2">
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">// EU Studio</span>
                                <span className="text-[11px] font-bold text-white uppercase tracking-[0.15em]">Vilnius, LT</span>
                                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">54.6872° N, 25.2797° E</span>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom Tech Bar — matching homepage */}
            <div className="absolute bottom-10 left-[10%] z-20 hidden md:flex items-center gap-12">
                <div className="flex flex-col">
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mb-1">REQUEST TYPE</span>
                    {/* <span className="text-[11px] font-bold text-white uppercase tracking-[0.1em]">New Project Inquiry</span> */}
                </div>
                <div className="w-12 h-[1px] bg-white/10" />
            </div>

            {/* Side Metadata */}
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 z-30 items-center">
                <span className="vertical-text text-[9px] font-mono uppercase tracking-[0.5em] text-white/20">Start the Conversation</span>
                <div className="w-px h-24 bg-white/10" />
            </div>

            {/* HUD Corner Frame */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/5 z-20 hidden lg:block" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 z-20 hidden lg:block" />
        </section>
    );
};

export default ContactHero;
