"use client"
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowUpRight, FiClock, FiTag } from 'react-icons/fi';
import FadeIn from '@/app/components/ui/FadeIn';
import data from '@/app/api/data.js';

const BlogSection = () => {
    const blogPosts = data.pages.blog.posts;
    const scrollContainerRef = useRef(null);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <section className="relative bg-black py-20 md:py-32 overflow-hidden">
            {/* Background Narrative */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none select-none opacity-[0.02]">
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[35vw] font-black uppercase text-white tracking-tighter leading-none">
                    INSIGHTS
                </span>
            </div>

            <div className="site-padding relative z-10 w-full max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24">
                    <div>
                        <FadeIn direction="up">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-px bg-accent" />
                                <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                    // DIGITAL_PULSE
                                </span>
                            </div>
                            <h2 className="text-5xl md:text-[7vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
                                LATEST <br />
                                <span className="text-stroke">INSIGHTS.</span>
                            </h2>
                        </FadeIn>
                    </div>
                    
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => scroll('left')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent group transition-all duration-500"
                        >
                            <FiArrowUpRight className="text-white group-hover:text-accent rotate-[225deg] transition-all" />
                        </button>
                        <button 
                            onClick={() => scroll('right')}
                            className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-accent group transition-all duration-500"
                        >
                            <FiArrowUpRight className="text-white group-hover:text-accent transition-all" />
                        </button>
                    </div>
                </div>

                <div className="h-5 md:h-10" />

                {/* Slider Container */}
                <div 
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-12 cursor-grab active:cursor-grabbing"
                >
                    {blogPosts.map((post, index) => (
                        <div key={post.id} className="min-w-[300px] md:min-w-[450px] snap-start">
                            <BlogCard post={post} index={index} />
                        </div>
                    ))}
                    {/* Ghost card for padding */}
                    <div className="min-w-[20vw] h-1" />
                </div>

                {/* Bottom Technical HUD */}
                <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-8 py-10 border-t border-white/5 opacity-40">
                    <div className="flex items-center gap-6">
                        <span className="font-mono text-[9px] text-white uppercase tracking-widest">PROTOCOL: 08-BLOG</span>
                        <div className="w-24 h-px bg-white/20" />
                        <span className="font-mono text-[9px] text-accent uppercase tracking-widest">STATUS: BROADCASTING</span>
                    </div>
                    
                    <Link 
                        href="/blog"
                        className="group flex items-center gap-6 font-mono text-[10px] text-white uppercase tracking-[0.3em] font-bold"
                    >
                        <span>ACCESS_FULL_ARCHIVE</span>
                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-500">
                            <FiArrowUpRight className="text-white group-hover:text-black transition-colors duration-500" />
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

const BlogCard = ({ post, index }) => {
    return (
        <FadeIn direction="up" delay={index * 0.1}>
            <Link 
                href={`/blog/${post.id}`}
                className="group relative block bg-white/[0.02] border border-white/5 overflow-hidden transition-all duration-700 hover:bg-white/[0.04] hover:border-white/10"
            >
                {/* Image Hub */}
                <div className="aspect-[16/11] md:aspect-[16/10] overflow-hidden relative">
                    <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                        <div className="px-3 py-1 bg-accent text-black font-mono text-[9px] font-black uppercase tracking-widest">
                            {post.category}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-10 space-y-6">
                    <div className="flex items-center justify-between text-white/30 font-mono text-[8px] md:text-[9px] uppercase tracking-widest">
                        <div className="flex items-center gap-2">
                            <FiClock className="text-accent" />
                            <span>{post.date}</span>
                        </div>
                        <span>ID // {post.id}</span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tighter leading-[1.1] group-hover:text-accent transition-colors duration-500">
                        {post.title}
                    </h3>

                    <p className="text-white/20 text-[10px] md:text-xs font-medium uppercase tracking-widest leading-loose line-clamp-2">
                        {post.excerpt}
                    </p>

                    <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <FiTag className="text-accent text-[10px]" />
                            <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest group-hover:text-white transition-colors duration-500">
                                PERSPECTIVE
                            </span>
                        </div>
                        <span className="font-mono text-[9px] text-accent uppercase font-bold tracking-[0.2em] transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                            READ_MORE
                        </span>
                    </div>
                </div>

                {/* Technical Corner Accent */}
                <div className="absolute top-0 right-0 w-12 h-12 pointer-events-none">
                    <div className="absolute top-4 right-4 w-px h-2 bg-accent/30" />
                    <div className="absolute top-4 right-4 w-2 h-px bg-accent/30" />
                </div>
            </Link>
        </FadeIn>
    );
};

export default BlogSection;
