"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import data from '@/app/api/data.js';

const AnimatedLink = ({ href, children, className = "" }) => {
    return (
        <Link href={href} className={`relative overflow-hidden group inline-block ${className}`}>
            <motion.div
                initial={false}
                className="flex flex-col transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:-translate-y-1/2"
            >
                <span className="block">{children}</span>
                <span className="block text-accent">{children}</span>
            </motion.div>
            <motion.div 
                className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-500" 
            />
        </Link>
    );
};

const Footer = () => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('en-GB', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit',
                hour12: false 
            });
            setCurrentTime(timeString);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const studios = data.company.studios;
    const sitemap = data.sitemap;

    return (
        <footer className="text-[#ccc7c7] pt-32 pb-20 font-sans selection:bg-accent selection:text-white w-full">
            <div style={{ paddingLeft: '8%', paddingRight: '5%' }} className="max-w-[1800px] mx-auto lg:pl-32 lg:pr-20">
                {/* Top Bar - 4 Columns */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32 border-b border-white/5 pb-10">
                    <div className="flex flex-col">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-2">// OFFICE</span>
                        <span className="text-[14px] font-bold tracking-tight uppercase">Sparcley® London</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px) font-mono uppercase tracking-[0.3em] text-white/30 mb-2">// FOCUS</span>
                        <span className="text-[14px] font-bold tracking-tight uppercase">Branding + Digital</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-2">// TIME</span>
                        <span className="text-[14px] font-bold tracking-tight uppercase">{currentTime} LONDON</span>
                    </div>
                    <div className="flex flex-col lg:items-end">
                        <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-white/30 mb-2 lg:hidden">// NAV</span>
                        <div className="flex flex-col gap-2 lg:items-end">
                            {sitemap.slice(0, 4).map((item) => (
                                <AnimatedLink 
                                    key={item.id} 
                                    href={item.slug === 'home' ? '/' : `/${item.slug}`} 
                                    className="text-[13px] font-bold tracking-widest uppercase"
                                >
                                    {item.label}
                                </AnimatedLink>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Middle Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24 items-end">
                    {/* About */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div>
                            {/* <span className="text-[10px] font-mono text-white/20 block uppercase tracking-[0.4em] mb-4">// ABOUT SPARCLEY</span> */}
                            <motion.h2 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-[-0.04em] leading-[0.9] mb-6"
                            >
                                {data.company.tagline}
                            </motion.h2>
                            <p className="text-[15px] text-white/40 leading-relaxed max-w-[420px] font-medium">
                                {data.company.description}
                            </p>
                        </div>

                        <div className="border-l-2 border-accent pl-5">
                            <p className="text-[13px] text-white/30 italic leading-relaxed">
                                &ldquo;{data.company.quote}&rdquo;
                            </p>
                        </div>

                        <div className="flex items-center gap-6 flex-wrap">
                            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">{data.company.founded}</span>
                            <div className="w-px h-4 bg-white/10" />
                            <AnimatedLink href="/about" className="text-[12px] font-bold tracking-[0.2em] uppercase text-accent">
                                Our Story →
                            </AnimatedLink>
                        </div>
                    </div>

                    {/* Contacts, Locations & Socials */}
                    <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">

                      {/* Contacts */}
                      <div className="space-y-6">
                          <span className="text-[10px] font-mono text-white/20 block uppercase tracking-[0.4em]">[ CONTACT ]</span>
                          <div className="space-y-1">
                              <a href={`mailto:${studios[0].email}`} className="text-[14px] font-bold block hover:text-accent transition-colors duration-500">{studios[0].email}</a>
                              <a href={`tel:${studios[0].phone}`} className="text-[14px] font-bold block hover:text-accent transition-colors duration-500">{studios[0].phone}</a>
                          </div>
                          <div className="space-y-1">
                              <a href={`mailto:${studios[1].email}`} className="text-[14px] font-bold block hover:text-accent transition-colors duration-500">{studios[1].email}</a>
                              <a href={`tel:${studios[1].phone}`} className="text-[14px] font-bold block hover:text-accent transition-colors duration-500">{studios[1].phone}</a>
                          </div>
                      </div>

                      {/* Locations */}
                      <div className="space-y-6">
                          <span className="text-[10px] font-mono text-white/20 block uppercase tracking-[0.4em]">[ LOCATIONS ]</span>
                          <div className="space-y-6">
                              {studios.map((studio, i) => (
                                  <div key={i} className="space-y-1">
                                      <div className="flex items-center gap-2">
                                          <span className="text-2xl leading-none">{i === 0 ? '🇬🇧' : '🇱🇹'}</span>
                                          <span className="text-[13px] font-bold uppercase tracking-widest">{studio.country}</span>
                                      </div>
                                      <p className="text-[11px] font-mono text-white/30 leading-relaxed pl-9">{studio.address}</p>
                                  </div>
                              ))}
                          </div>
                      </div>

                      {/* Socials */}
                      <div className="space-y-6 md:items-end flex flex-col">
                          <span className="text-[10px] font-mono text-white/20 block uppercase tracking-[0.4em]">[ CONNECT ]</span>
                          <div className="flex flex-col gap-3">
                              {['Instagram', 'LinkedIn', 'Github'].map((social) => (
                                  <AnimatedLink 
                                    key={social} 
                                    href="#" 
                                    className="text-[18px] font-bold tracking-tight"
                                  >
                                     {social}
                                  </AnimatedLink>
                              ))}
                          </div>
                      </div>

                    </div>
                </div>

                {/* Huge Signature & Badge Section */}
                <div className="relative mt-32 pt-16 flex items-end overflow-hidden">
                    <motion.h1 
                        initial={{ y: "100%", opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[15vw] font-sans font-black uppercase tracking-[-0.04em] leading-[0.85] mb-[-3vw] pointer-events-none select-none text-white/5"
                    >
                        SPARCLEY<motion.span animate={{ opacity: [0.15, 1, 0.15] }} transition={{ duration: 2.5, repeat: Infinity }} className="text-accent">.</motion.span>
                    </motion.h1>

                    {/* Badge/Logo */}
                    <div className="absolute right-0 bottom-8 lg:bottom-12 w-32 h-32 md:w-48 md:h-48">
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-full h-full relative flex items-center justify-center p-2"
                        >
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <path id="circlePath" d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0" fill="transparent" />
                                <text className="text-[7.5px] uppercase font-bold tracking-[4.5px] fill-white/10" >
                                    <textPath href="#circlePath">
                                        • SPARCLEY STUDIO • LONDON • LITHUANIA • SPARCLEY STUDIO •
                                    </textPath>
                                </text>
                            </svg>
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-8 h-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
                                 <motion.div 
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className="w-2 h-2 bg-accent rounded-full" 
                                 />
                              </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Final Row */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-white/5 gap-6">
                  <div className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">
                    © {new Date().getFullYear()} SPARCLEY STUDIO / ALL RIGHTS RESERVED
                  </div>
                  <div className="flex gap-12">
                    <AnimatedLink href="#" className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 leading-none">Privacy</AnimatedLink>
                    <AnimatedLink href="#" className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20 leading-none">Terms</AnimatedLink>
                  </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;