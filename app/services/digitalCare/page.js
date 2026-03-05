import React from 'react';
import data from '@/app/api/data.js';
import Link from 'next/link';
import FadeIn from '../../components/ui/FadeIn';

const DigitalCarePage = () => {
    const digitalCare = data.pages.services.completeDigitalCare;

    return (
        <div className="pt-32 min-h-screen bg-background text-foreground">
            {/* Header - MASSIVE IMPACT */}
            <section className="section-padding relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 right-1/4 w-[60vw] h-full bg-accent/5 blur-[200px] pointer-events-none rounded-full" />
                <FadeIn direction="up">
                    <div className="max-w-7xl relative text-center">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1.5em] mb-16 block italic underline decoration-accent/30 underline-offset-20">Vertical / Ecosystem Vitality</span>
                        <h1 className="text-7xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
                            {digitalCare.title.split(' ')[0]} <br />
                            <span className="text-stroke tracking-normal">{digitalCare.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        <p className="text-2xl md:text-4xl italic text-muted/60 max-w-4xl mx-auto font-medium leading-tight">
                            {digitalCare.subtitle}
                        </p>
                    </div>
                </FadeIn>
            </section>

            {/* Packages - LIQUID GLASS SHARP */}
            <section className="section-padding bg-secondary/30 border-y border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-80 h-80 bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
                <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
                    <FadeIn direction="left">
                        <div className="max-w-4xl">
                            <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block italic">Continuous Vigilance</span>
                            <h2 className="text-7xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter">
                                Care <span className="text-stroke tracking-normal">Protocols.</span>
                            </h2>
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {digitalCare.packages.map((pkg, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-background/40 backdrop-blur-[100px] border border-white/5 p-20 rounded-[60px] h-full flex flex-col gap-16 hover:border-accent/30 transition-all duration-1000 group relative overflow-hidden shadow-3xl">
                                <div className="absolute -right-10 -bottom-10 text-[250px] font-black text-white/1 group-hover:text-accent/5 transition-colors duration-1000 pointer-events-none italic uppercase leading-none select-none">{pkg.name.split(' ')[0]}</div>
                                
                                <div className="flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
                                    <div className="flex flex-col gap-6">
                                        <div className="p-8 w-fit bg-accent/10 border border-accent/20 rounded-3xl group-hover:bg-accent group-hover:text-white transition-all duration-700">
                                            <span className="text-xs font-black uppercase tracking-widest italic">{pkg.duration} Cycle</span>
                                        </div>
                                        <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-white group-hover:text-accent transition-all duration-700 leading-none italic">{pkg.name}</h3>
                                    </div>
                                    <div className="text-left md:text-right flex flex-col gap-4">
                                        <span className="text-muted/40 text-[10px] uppercase font-black tracking-[0.6em] block">Retainer Valuation</span>
                                        <div className="flex items-baseline md:justify-end gap-2">
                                            <span className="text-accent text-3xl font-black">{pkg.currency}</span>
                                            <span className="text-7xl md:text-[8vw] font-black tracking-tighter text-white leading-none">{pkg.price}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <p className="text-2xl text-muted/60 leading-relaxed font-medium italic border-l-2 border-white/10 pl-10 max-w-2xl">
                                    {pkg.description}
                                </p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 relative z-10 border-t border-white/5 pt-16">
                                    {pkg.features.map((feature, fIndex) => (
                                        <div key={fIndex} className="flex gap-6 items-center group/feat">
                                            <div className="w-2 h-2 rounded-full bg-accent group-hover/feat:w-8 transition-all duration-500" />
                                            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 group-hover/feat:text-white transition-all">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link href="/contact" className="mt-12 relative group/btn overflow-hidden bg-white/5 border border-white/10 text-white text-center py-10 rounded-full font-black uppercase text-[10px] tracking-[0.6em] group-hover:border-accent group-hover:bg-accent transition-all duration-1000">
                                    <span className="relative z-10 transition-colors duration-700">Initiate Lifecycle</span>
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700" />
                                    <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 text-black z-20 font-black">Initiate Lifecycle</span>
                                </Link>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Process - HIGH IMPACT GRID */}
            <section className="section-padding overflow-hidden">
                <FadeIn direction="up">
                    <div className="max-w-4xl mb-40">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block italic">Service Matrix</span>
                        <h2 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter">
                            Active <span className="text-stroke tracking-normal">Vigilance.</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
                    {digitalCare.process.map((step, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.1}>
                            <div className="bg-background/40 backdrop-blur-3xl p-16 h-full flex flex-col justify-between gap-16 group hover:bg-black transition-all duration-700 relative overflow-hidden min-h-[450px]">
                                <span className="text-8xl font-black text-white/2 group-hover:text-accent/10 transition-all duration-1000 italic absolute -top-4 -left-4 select-none leading-none">0{step.step}</span>
                                <div className="relative z-10 mt-16">
                                    <h4 className="text-3xl font-black uppercase mb-6 group-hover:text-accent transition-colors tracking-tighter leading-none italic">{step.title}</h4>
                                    <div className="w-12 h-px bg-accent mb-10 group-hover:w-full transition-all duration-1000" />
                                    <span className="text-accent text-[8px] font-black uppercase tracking-[0.4em] block mb-10 italic">{step.duration} Cycle</span>
                                    <p className="text-muted/60 text-lg font-medium leading-relaxed group-hover:text-white/60 transition-all italic">{step.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Technologies */}
            <section className="py-48 bg-secondary/30 flex flex-col items-center border-t border-white/5 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full bg-accent/3 blur-[250px] pointer-events-none rounded-full" />
                <FadeIn direction="up">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[1.5em] mb-24 block text-center italic">Protocol Stack / Reliability Driven</span>
                </FadeIn>
                <div className="flex flex-wrap justify-center gap-x-24 gap-y-16 px-10 relative z-10 max-w-7xl">
                    {digitalCare.technologies.map((tech, index) => (
                        <FadeIn key={index} direction="up" delay={index * 0.05}>
                            <span className="text-4xl md:text-[6vw] font-black uppercase italic text-white/2 hover:text-accent hover:scale-105 transition-all duration-700 cursor-default select-none tracking-tighter leading-none whitespace-nowrap">
                                {tech}
                            </span>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default DigitalCarePage;
