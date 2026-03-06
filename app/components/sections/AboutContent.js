"use client"
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';

const AboutContent = ({ description, philosophy, whyChooseUs, benefits }) => {
    return (
        <section className="py-24 md:py-40">
            <div className="site-padding">
                {/* Intro & Philosophy */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40">
                    <div className="lg:col-span-6">
                        <FadeIn direction="up">
                            <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] mb-10">// OUR_IDENTITY</h3>
                            <p className="text-2xl md:text-4xl font-medium text-white leading-tight mb-12">
                                {description}
                            </p>
                        </FadeIn>
                    </div>
                    <div className="lg:col-span-6 flex flex-col justify-end">
                        <FadeIn direction="up" delay={0.2}>
                            <div className="relative p-10 bg-white/[0.02] border border-white/5 backdrop-blur-sm">
                                <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-accent" />
                                <p className="text-lg md:text-xl text-white/40 italic leading-relaxed">
                                    "{philosophy}"
                                </p>
                                <div className="mt-8 flex items-center gap-4">
                                    <div className="w-8 h-px bg-white/10" />
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">Design Philosophy</span>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>

                {/* Why Choose Us & Benefits */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
                    <div className="lg:col-span-7">
                        <FadeIn direction="up">
                            <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] mb-16">// CORE_STRENGTHS</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {whyChooseUs.map((item, idx) => (
                                    <div key={idx} className="group p-8 border border-white/5 hover:border-accent/40 transition-colors duration-500 bg-white/[0.01]">
                                        <span className="text-[10px] font-mono text-white/20 mb-4 block">0{idx + 1}</span>
                                        <p className="text-white font-bold uppercase tracking-tight text-lg group-hover:text-accent transition-colors">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <FadeIn direction="up" delay={0.1}>
                            <div className="h-full flex flex-col justify-between p-12 bg-accent/5 border border-accent/20">
                                <div>
                                    <h3 className="text-[10px] font-mono text-accent uppercase tracking-[0.5em] mb-12">// VALUE_DELIVERY</h3>
                                    <ul className="space-y-12">
                                        {benefits.map((benefit, idx) => (
                                            <li key={idx} className="flex items-start gap-6">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0 animate-pulse" />
                                                <p className="text-xl md:text-2xl font-black uppercase text-white tracking-tighter leading-none">
                                                    {benefit}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-16 pt-8 border-t border-accent/10">
                                    <p className="text-[9px] font-mono text-accent/50 uppercase tracking-[0.3em]">
                                        OPTIMIZING_OPERATIONS // MAXIMIZING_ROI
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
