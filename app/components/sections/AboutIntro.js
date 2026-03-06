"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Button from '@/app/components/ui/Button';
import { ArrowRight, Globe, Layers, Zap } from 'lucide-react';

const AboutIntro = ({ content }) => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    const words = (content || "We define the digital frontier through precision-crafted experiences that merge technical logic with boundary-pushing aesthetics.").split(" ");

    return (
        <section
            ref={sectionRef}
            className="relative py-32 md:py-56 bg-[#0b0b0b] overflow-hidden"
        >
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Dynamic radial gradient */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] opacity-50 animate-pulse" />

                {/* Vertical Scanning Line */}
                <motion.div
                    initial={{ y: "-100%" }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute left-[15%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
                />
            </div>

            <div className="w-full relative z-10 site-padding">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24">

                    {/* TOP SECTION: Massive Headline */}
                    <div className="lg:col-span-12">
                        <div className="flex items-center gap-4 mb-6">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: 40 }}
                                className="h-px bg-accent"
                            />
                            <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                // WHAT I CAN DO FOR YOU
                            </span>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="text-[13vw] md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] text-white flex flex-col md:flex-row md:items-baseline gap-y-1 gap-x-8"
                            >
                                <span>AESTHETIC</span>
                                <span className="text-stroke text-white/5 ml-2 md:ml-[-2vw]">LOGIC.</span>
                            </motion.h2>
                        </div>
                    </div>

                    {/* BOTTOM LEFT: Detailed Mission */}
                    <div className="lg:col-span-7 mt-4 md:mt-16">
                        <div className="relative group">
                            <div className="absolute -left-8 top-0 bottom-0 w-px bg-white/5 scale-y-0 group-hover:scale-y-100 transition-transform duration-700 origin-top" />

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    visible: { transition: { staggerChildren: 0.02 } }
                                }}
                                className="flex flex-wrap gap-x-3 gap-y-1"
                            >
                                {words.map((word, i) => (
                                    <span key={i} className="overflow-hidden inline-block py-1">
                                        <motion.span
                                            variants={{
                                                hidden: { y: "100%", opacity: 0 },
                                                visible: { y: 0, opacity: 1 }
                                            }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className={`text-[5.5vw] md:text-4xl lg:text-5xl font-medium tracking-tight ${i < 3 ? 'text-white' : 'text-white/40'}`}
                                        >
                                            {word}
                                        </motion.span>
                                    </span>
                                ))}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-12 items-center"
                            >
                                <div className="flex -space-x-4">
                                    {[1, 2, 3].map(i => (
                                        <div key={i} className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 bg-[#151515] flex items-center justify-center backdrop-blur-md">
                                            {i === 1 && <Layers size={18} className="text-accent" />}
                                            {i === 2 && <Zap size={18} className="text-accent" />}
                                            {i === 3 && <Globe size={18} className="text-accent" />}
                                        </div>
                                    ))}
                                </div>
                                <div className="h-px w-24 bg-white/10" />
                                <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">Technical Architecture Protocol</span>
                            </motion.div>
                        </div>
                    </div>

                    {/* BOTTOM RIGHT: Status Card & Metrics */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="bg-[#121212] border border-white/5 p-12 relative overflow-hidden group hover:border-accent/20 transition-all duration-700"
                        >
                            {/* Abstract Geometric Decoration */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[60px] translate-x-1/2 -translate-y-1/2 group-hover:bg-accent/20 transition-all" />

                            <div className="relative z-10">
                                <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.4em] mb-8 block">/ CORE_SPECIALIZATION</span>
                                <p className="text-white/50 text-base leading-relaxed mb-12 italic">
                                    "We transcend generic digital constructs by synthesizing high-end visual language with rigorous engineering principles."
                                </p>

                                <Button
                                    href="/about"
                                    variant="outline"
                                    icon={<ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
                                >
                                    DECRYPT STORY
                                </Button>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span className="font-mono text-[9px] text-accent uppercase block mb-3 font-bold tracking-widest">ESTD. UNIT</span>
                                <span className="text-3xl font-black text-white tracking-tighter">MMIX // 2009</span>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                            >
                                <span className="font-mono text-[9px] text-accent uppercase block mb-3 font-bold tracking-widest">LOC_COORDINATES</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">🇬🇧 LDN</span>
                                    <span className="text-white/10 font-light translate-y-[-2px]">/</span>
                                    <span className="text-3xl font-black text-white tracking-tighter uppercase whitespace-nowrap">🇱🇹 EU</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutIntro;

