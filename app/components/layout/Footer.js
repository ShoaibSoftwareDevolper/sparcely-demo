import React from 'react';
import Link from 'next/link';
import data from '@/app/api/data.js';
import FadeIn from '../ui/FadeIn';

const Footer = () => {
    return (
        <footer className="bg-background relative pt-48 pb-20 border-t border-white/5 overflow-hidden group/footer">
            <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-accent/2 blur-[150px] pointer-events-none rounded-full" />
            
            <div className="section-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-24 relative z-10">
                <FadeIn direction="up">
                    <div className="flex flex-col gap-10">
                        <Link href="/" className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none group-hover:text-accent transition-all duration-700">
                            <span className="text-accent italic">S</span>PC.
                        </Link>
                        <p className="text-xl text-muted/60 leading-relaxed max-w-xs font-medium italic border-l border-white/10 pl-8">
                            {data.company.description}
                        </p>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.1}>
                    <div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-12 block italic">Navigation</span>
                        <ul className="flex flex-col gap-6">
                            {data.sitemap.map((item) => (
                                <li key={item.id}>
                                    <Link 
                                        href={item.slug === 'home' ? '/' : `/${item.slug}`}
                                        className="text-xs uppercase font-black tracking-[0.4em] text-white/40 hover:text-accent transition-all duration-500 hover:pl-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.2}>
                    <div>
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-12 block italic">Global Base</span>
                        <div className="flex flex-col gap-12">
                            {data.company.studios.map((studio, index) => (
                                <div key={index} className="flex flex-col gap-4 border-l border-white/5 pl-8">
                                    <span className="text-lg font-bold uppercase tracking-tighter text-white/80 italic">{studio.country}</span>
                                    <span className="text-muted/60 text-[10px] uppercase font-bold tracking-widest leading-relaxed">{studio.address}</span>
                                    <div className="flex flex-col gap-2 mt-4">
                                        <a href={`mailto:${studio.email}`} className="text-[9px] uppercase font-black tracking-[0.3em] text-accent hover:text-white transition-colors">{studio.email}</a>
                                        <a href={`tel:${studio.phone}`} className="text-[9px] uppercase font-black tracking-[0.3em] text-white/40">{studio.phone}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                    <div className="relative p-10 bg-white/2 backdrop-blur-3xl border border-white/5 rounded-3xl group-hover/footer:border-accent/20 transition-all duration-1000">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block italic">Manifesto Updates</span>
                        <p className="text-muted/60 text-sm mb-10 leading-relaxed italic font-medium">Join our strategic circle for high-impact digital insights.</p>
                        <form className="flex flex-col gap-4 relative">
                            <input 
                                type="email" 
                                placeholder="Email Protocol" 
                                className="w-full bg-transparent border-b border-white/5 py-6 text-2xl font-black uppercase tracking-tighter italic placeholder:text-white/5 focus:outline-none focus:border-accent transition-all duration-700"
                            />
                            <button className="flex items-center gap-6 text-accent uppercase text-[10px] font-black tracking-[0.4em] hover:gap-10 transition-all duration-700 mt-6 group/sub">
                                <span>Subscribe</span>
                                <div className="w-12 h-px bg-accent group-hover/sub:w-20 transition-all" />
                            </button>
                        </form>
                    </div>
                </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.4}>
                <div className="section-padding pt-20 mt-40 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[9px] font-black uppercase tracking-[0.6em] text-white/10 relative z-10">
                    <p className="hover:text-white/40 transition-colors">&copy; {new Date().getFullYear()} {data.company.fullName}. Zero Mediocrity.</p>
                    <div className="flex gap-12">
                        <Link href="/privacy" className="hover:text-accent transition-all duration-500">Privacy / Protocol</Link>
                        <Link href="/terms" className="hover:text-accent transition-all duration-500">Terms / Engagement</Link>
                    </div>
                </div>
            </FadeIn>
            
            {/* Massive Background Branding */}
            <div className="absolute -bottom-48 -right-48 text-[30vw] font-black text-white/1 select-none pointer-events-none italic uppercase leading-none transform rotate-12">
                Sparcley
            </div>
        </footer>
    );
};

export default Footer;
