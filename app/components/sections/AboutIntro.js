"use client"
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '@/app/components/ui/Button';
import { ArrowRight } from 'lucide-react';

const AboutIntro = ({ content }) => {
    const sectionRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Parallax effect: Content shifts slower than scroll
    const yParallax = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section
            ref={sectionRef}
            className="relative py-48 md:py-64 bg-[#0b0b0b] overflow-hidden mt-20 md:mt-32"
        >
            {/* Architectural Grid Lines */}
            <div className="absolute top-0 left-1/2 w-px h-full bg-white/5 z-0" />
            <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 z-0" />

            <div className="w-[90%] md:w-[70%] mx-auto relative z-10">
                <motion.div
                    style={{ y: yParallax }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start"
                >
                    {/* Left: Huge Display Heading */}
                    <div className="lg:col-span-12 mb-12">
                        <div className="flex items-center gap-6 mb-8 overflow-hidden">
                            <motion.span
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase"
                            >
                                [ 01 // WHAT CAN I DO ]
                            </motion.span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <motion.h2
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                            className="text-[12vw] md:text-[8vw] font-black uppercase tracking-[-0.04em] leading-[0.8] text-white"
                        >
                            AESTHETIC <br />
                            <span className="text-stroke text-white/5">ENGINEERING.</span>
                        </motion.h2>
                    </div>

                    {/* Left Description Side */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="relative"
                        >
                            <span className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase mb-8 block font-bold">
                                // MISSION STATEMENT
                            </span>
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white/60 leading-[1.1] font-medium tracking-tight">
                                {content || "We define the digital frontier through precision-crafted experiences that merge technical logic with boundary-pushing aesthetics."}
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Action/Stats Side */}
                    <div className="lg:col-span-5 flex flex-col gap-12 lg:pt-8">
                        <motion.div
                            initial={{ x: 30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="bg-white/[0.02] border border-white/10 p-10 md:p-14 relative group overflow-hidden"
                        >
                            {/* HUD Corner Lugs */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/20" />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/20" />

                            <p className="text-white/40 text-sm md:text-base leading-relaxed mb-10">
                                Beyond layouts and code, we specialize in the architecture of engagement. Every pixel is calculated, every motion purposeful.
                            </p>

                            <Button
                                href="/about"
                                variant="outline"
                                icon={<ArrowRight size={14} />}
                            >
                                THE STUDIO STORY
                            </Button>
                        </motion.div>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
                            <div>
                                <span className="font-mono text-[9px] text-white/20 uppercase block mb-2">Since</span>
                                <span className="text-xl text-white font-bold">2009+</span>
                            </div>
                            <div>
                                <span className="font-mono text-[9px] text-white/20 uppercase block mb-2">Location</span>
                                <span className="text-xl text-white font-bold">LONDON / EU</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutIntro;
