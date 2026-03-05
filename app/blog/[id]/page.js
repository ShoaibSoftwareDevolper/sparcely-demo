import React from 'react';
import Link from 'next/link';
import data from '@/app/api/data.js';
import FadeIn from '../../components/ui/FadeIn';

export default async function BlogPost({ params }) {
    const { id } = await params;
    const post = data.pages.blog.posts.find(p => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="pt-32 min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold uppercase mb-8">Post Not Found</h1>
                <Link href="/blog" className="text-accent underline uppercase tracking-widest font-bold">Back to Blog</Link>
            </div>
        );
    }

    const otherPosts = data.pages.blog.posts.filter(p => p.id !== post.id).slice(0, 2);

    return (
        <div className="pt-32 min-h-screen bg-background text-foreground">
            {/* Post Header - MASSIVE IMPACT */}
            <article className="section-padding pb-0! relative overflow-hidden">
                <div className="absolute top-0 right-1/4 w-[50vw] h-[50vw] bg-accent/5 blur-[200px] pointer-events-none rounded-full" />
                <FadeIn direction="up">
                    <div className="max-w-6xl mx-auto mb-24 relative">
                        <div className="flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.8em] mb-12 italic">
                            <span className="text-accent underline decoration-accent/30 underline-offset-10">{post.category}</span>
                            <span className="w-12 h-px bg-white/10"></span>
                            <span className="text-muted/40">{post.date}</span>
                        </div>
                        <h1 className="text-5xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter mb-16 italic">
                            {post.title}
                        </h1>
                        <div className="w-24 h-2 bg-accent/20 rounded-full mb-16" />
                    </div>
                </FadeIn>

                {/* Hero Image - HIGH IMPACT */}
                <FadeIn direction="up" delay={0.2}>
                    <div className="max-w-7xl mx-auto aspect-[16/7] bg-secondary overflow-hidden relative mb-32 rounded-[60px] border border-white/5 shadow-3xl group">
                        <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out group-hover:scale-105" 
                            style={{backgroundImage: `url('${post.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-1000" />
                    </div>
                </FadeIn>

                {/* Content - PREMIUM READABILITY */}
                <div className="max-w-4xl mx-auto mb-48 relative z-10">
                    <FadeIn direction="up">
                        <div className="prose prose-invert prose-2xl max-w-none border-l-4 border-accent pl-12 md:pl-20">
                            <p className="text-2xl md:text-4xl text-muted/60 leading-[1.4] italic font-medium whitespace-pre-line tracking-tight">
                                {post.content}
                            </p>
                        </div>
                    </FadeIn>
                    
                    {/* Discussion CTA */}
                    <FadeIn direction="up" delay={0.4}>
                        <div className="mt-32 p-16 bg-white/2 backdrop-blur-[100px] border border-white/5 rounded-[40px] flex flex-col items-center text-center gap-10">
                            <span className="text-accent text-[10px] font-black uppercase tracking-[1em] italic">Synthesize / Dialogue</span>
                            <h3 className="text-4xl font-black uppercase tracking-tighter italic">Have insights to share?</h3>
                            <Link href="/contact" className="px-16 py-8 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.5em] hover:scale-110 transition-all duration-700">
                                Initiate Dialogue
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </article>

            {/* Read More - LIQUID GRID */}
            <section className="section-padding py-40 bg-white/[0.01] border-t border-white/5 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-px bg-white/5" />
                <FadeIn direction="up">
                    <div className="flex flex-col gap-4 mb-24">
                        <span className="text-accent text-[10px] font-black uppercase tracking-[1em] italic">Further / Exploration</span>
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter italic leading-none">Read More <span className="text-stroke">Insights.</span></h2>
                    </div>
                </FadeIn>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
                    {otherPosts.map((other, index) => (
                        <FadeIn key={other.id} direction="up" delay={index * 0.1}>
                            <Link href={`/blog/${other.id}`} className="group flex flex-col gap-10 p-10 bg-white/2 border border-white/5 rounded-[50px] hover:border-accent/30 hover:bg-white/5 transition-all duration-1000">
                                <div className="aspect-[16/9] bg-black overflow-hidden relative rounded-[40px]">
                                    <div 
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110 opacity-60 group-hover:opacity-100" 
                                        style={{backgroundImage: `url('${other.image}')` }}
                                    ></div>
                                </div>
                                <div className="px-6 flex flex-col gap-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-8 h-px bg-accent/40" />
                                        <span className="text-accent text-[9px] font-black uppercase tracking-[0.6em] italic">{other.category}</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-black uppercase group-hover:text-accent transition-all duration-700 leading-none italic tracking-tighter">
                                        {other.title}
                                    </h3>
                                    <div className="w-12 h-px bg-white/10 group-hover:w-full group-hover:bg-accent transition-all duration-1000 mt-2" />
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </section>
        </div>
    );
}
