// import React from 'react';
// import Link from 'next/link';
// import data from '@/app/api/data.js';
// import FadeIn from '../components/ui/FadeIn';

// const BlogPage = () => {
//     const blogData = data.pages.blog;
//     const posts = blogData.posts;

//     return (
//         <div className="pt-32 min-h-screen bg-background text-foreground">
//             <section className="section-padding overflow-hidden">
//                 <FadeIn direction="up">
//                     <div className="max-w-6xl mb-32 relative">
//                          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[0.8em] mb-12 block italic">Knowledge / Insights</span>
//                         <h1 className="text-7xl md:text-[10vw] font-black uppercase tracking-tighter leading-[0.85] mb-12">
//                             Digital <br />
//                             <span className="text-stroke tracking-normal">Pulse.</span>
//                         </h1>
//                         <p className="text-2xl md:text-3xl text-muted/60 leading-relaxed max-w-3xl font-medium italic border-l-2 border-accent pl-12">
//                             {blogData.intro}
//                         </p>
//                     </div>
//                 </FadeIn>

//                 <div className="flex flex-col gap-32">
//                     {posts.map((post, index) => (
//                         <FadeIn key={post.id} direction="up" delay={index * 0.1}>
//                             <article className="group relative grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
//                                 <div className="lg:col-span-5 relative aspect-16/11 overflow-hidden rounded-[40px] border border-white/5 bg-secondary group-hover:border-accent/30 transition-all duration-700">
//                                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" style={{backgroundImage: `url('${post.image}')`}}></div>
//                                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                                 </div>

//                                 <div className="lg:col-span-7 flex flex-col gap-10">
//                                     <div className="flex items-center gap-6">
//                                         <span className="px-6 py-2 bg-accent/10 text-accent rounded-full text-[10px] font-bold uppercase tracking-[0.3em]">{post.category}</span>
//                                         <span className="text-muted/40 text-[10px] font-bold uppercase tracking-[0.2em]">{post.date}</span>
//                                     </div>

//                                     <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter group-hover:text-accent transition-all duration-500">
//                                         <Link href={`/blog/${post.id}`}>{post.title}</Link>
//                                     </h2>

//                                     <p className="text-xl text-muted/60 leading-relaxed max-w-2xl font-medium italic">
//                                         {post.excerpt}
//                                     </p>

//                                     <div className="flex items-center gap-12 group/cta">
//                                         <Link href={`/blog/${post.id}`} className="text-[10px] font-bold uppercase tracking-[0.5em] text-white hover:text-accent transition-colors flex items-center gap-6">
//                                             Read Analysis
//                                             <div className="w-12 h-px bg-white/10 group-hover/cta:w-24 group-hover/cta:bg-accent transition-all duration-700" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                                 <div className="absolute -bottom-16 left-0 w-full h-px bg-white/5" />
//                             </article>
//                         </FadeIn>
//                     ))}
//                 </div>
//             </section>

//             {/* Newsletter - Liquid Subscription */}
//             <section className="section-padding py-40 border-t border-white/5 relative overflow-hidden group/news">
//                 <div className="absolute inset-0 bg-secondary/30 transition-colors duration-1000" />
//                 <FadeIn direction="up">
//                     <div className="max-w-5xl mx-auto flex flex-col items-center gap-16 relative z-10 text-center">
//                         <span className="text-[10px] font-bold uppercase tracking-[1em] text-accent">Transmission / Updates</span>
//                         <h2 className="text-6xl md:text-[8vw] font-black uppercase tracking-tighter leading-none group-hover/news:text-white transition-colors">
//                             Align With <br />
//                             <span className="text-stroke group-hover/news:text-stroke-white transition-all whitespace-nowrap">The Pulse.</span>
//                         </h2>

//                         <form className="w-full max-w-2xl flex flex-col md:flex-row gap-6">
//                             <input 
//                                 type="email" 
//                                 placeholder="ENTER EMAIL ADDRESS /" 
//                                 className="flex-1 bg-white/5 backdrop-blur-3xl border border-white/10 px-12 py-8 rounded-full focus:outline-none focus:border-accent text-white font-bold uppercase text-[10px] tracking-[0.3em] transition-all"
//                                 required
//                             />
//                             <button type="submit" className="bg-accent px-16 py-8 rounded-full font-bold uppercase text-[10px] tracking-[0.5em] hover:scale-105 hover:bg-white hover:text-black transition-all shadow-2xl">
//                                 Subscribe
//                             </button>
//                         </form>
//                     </div>
//                 </FadeIn>
//             </section>
//         </div>
//     );
// };

// export default BlogPage;
const BlogPage = () => {
    return (
        <div>
            <h1>Blog</h1>
        </div>
    );
};

export default BlogPage;