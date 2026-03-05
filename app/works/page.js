// "use client"
// import React, { useState } from 'react';
// import data from '@/app/api/data.js';
// import Link from 'next/link';
// import FadeIn from '../components/ui/FadeIn';

// const WorksPage = () => {
//     const works = data.pages.works;
//     const [activeFilter, setActiveFilter] = useState("All");

//     const filteredProjects = activeFilter === "All" 
//         ? works.projects 
//         : works.projects.filter(project => project.category === activeFilter);

//     const projectImages = [
//         "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1581291518066-670197771747?q=80&w=2070&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1559028012-448b05e90c51?q=80&w=1932&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
//         "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
//     ];

//     return (
//         <div className="pt-32 min-h-screen bg-background text-foreground">
//             {/* Header - MASSIVE IMPACT */}
//             <section className="section-padding overflow-hidden relative">
//                 <div className="absolute top-0 right-1/4 w-[50vw] h-full bg-accent/5 blur-[150px] pointer-events-none rounded-full" />
//                 <FadeIn direction="up">
//                     <div className="max-w-7xl mb-48 relative">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[1.5em] mb-16 block italic underline decoration-accent/30 underline-offset-20">Showcase / Digital Artifacts</span>
//                         <h1 className="text-7xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] mb-16">
//                             Aesthetic <br />
//                             <span className="text-stroke tracking-normal">Engineering.</span>
//                         </h1>
//                         <p className="text-2xl md:text-5xl italic text-muted/60 max-w-5xl font-medium leading-tight border-l-4 border-accent pl-16">
//                             {works.intro}
//                         </p>
//                     </div>
//                 </FadeIn>

//                 {/* Filters - ULTRA PRO UI */}
//                 <FadeIn direction="up" delay={0.2}>
//                     <div className="flex flex-wrap gap-6 mb-40 justify-start items-center">
//                         <span className="text-[10px] uppercase font-black tracking-[0.6em] text-white/20 mr-12 italic">Precision Filtering /</span>
//                         {works.filters.map((filter) => (
//                             <button 
//                                 key={filter}
//                                 onClick={() => setActiveFilter(filter)}
//                                 className={`px-12 py-6 rounded-full text-[10px] font-black uppercase tracking-[0.4em] transition-all duration-700 border relative overflow-hidden group/filter italic ${activeFilter === filter ? 'border-accent text-white shadow-3xl shadow-accent/20' : 'border-white/10 text-muted/60 hover:border-accent hover:text-white'}`}
//                             >
//                                 <span className="relative z-10">{filter}</span>
//                                 {activeFilter === filter && <div className="absolute inset-0 bg-accent animate-pulse" />}
//                                 {! (activeFilter === filter) && <div className="absolute inset-0 bg-accent translate-y-full group-hover/filter:translate-y-0 transition-transform duration-700" />}
//                             </button>
//                         ))}
//                     </div>
//                 </FadeIn>

//                 {/* Works Grid - PREMIUM STACK */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 relative z-10">
//                     {filteredProjects.map((project, index) => (
//                         <FadeIn key={project.name} direction="up" delay={index * 0.1}>
//                             <div className="group flex flex-col gap-12 relative">
//                                 <div className="relative aspect-4/5 overflow-hidden bg-secondary/50 rounded-[60px] border border-white/5 transition-all duration-1000 group-hover:border-accent/30 group-hover:rounded-[20px] shadow-2xl">
//                                     <div 
//                                         className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
//                                         style={{backgroundImage: `url('${projectImages[index % projectImages.length]}')`}}
//                                     ></div>
//                                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 backdrop-blur-[2px]" />

//                                     <div className="absolute inset-0 flex flex-col justify-end p-12 translate-y-20 group-hover:translate-y-0 transition-all duration-1000 opacity-0 group-hover:opacity-100">
//                                         <div className="p-10 bg-white/5 backdrop-blur-[50px] border border-white/10 rounded-[40px] transform group-hover:scale-100 scale-90 transition-transform duration-1000">
//                                             <p className="text-lg font-medium leading-relaxed italic text-white/80">
//                                                 {project.description}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <a 
//                                         href={project.url} 
//                                         target="_blank" 
//                                         rel="noopener noreferrer"
//                                         className="absolute top-10 right-10 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center -translate-y-40 group-hover:translate-y-0 shadow-[0_20px_50px_rgba(255,90,0,0.5)] text-3xl hover:scale-110 transition-all duration-1000 z-10 font-thin italic group-active:scale-95"
//                                     >
//                                         ↗
//                                     </a>
//                                 </div>
//                                 <div className="px-8 relative flex flex-col gap-6">
//                                     <div className="absolute -top-12 -left-4 text-9xl font-black text-white/2 group-hover:text-accent/5 transition-all duration-1000 italic select-none leading-none">0{index + 1}</div>
//                                     <div className="flex justify-between items-center relative z-10 mt-8">
//                                         <div className="flex flex-col gap-4 w-full">
//                                             <div className="flex items-center gap-6">
//                                                 <span className="w-8 h-px bg-accent/30" />
//                                                 <span className="text-accent text-[9px] font-black uppercase tracking-[0.6em] italic">{project.category}</span>
//                                             </div>
//                                             <h3 className="text-4xl md:text-5xl font-black uppercase group-hover:text-stroke transition-all duration-700 tracking-tighter leading-none italic">{project.name}</h3>
//                                             <div className="w-12 h-px bg-white/10 group-hover:w-full group-hover:bg-accent transition-all duration-1000" />
//                                             <p className="text-muted/40 text-[10px] uppercase tracking-[0.5em] font-black italic">{project.subtitle}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </FadeIn>
//                     ))}
//                 </div>
//             </section>

//             {/* CTA Section - MASSIVE OUTCOME */}
//             <section className="section-padding py-60 border-t border-white/5 relative overflow-hidden group/cta-works mt-40">
//                 <div className="absolute inset-0 bg-accent translate-y-full group-hover/cta-works:translate-y-0 transition-transform duration-[1.2s] ease-[cubic-bezier(0.85,0,0.15,1)]" />
//                 <FadeIn direction="up">
//                     <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 relative z-10 text-center">
//                         <span className="text-[10px] font-black uppercase tracking-[1.5em] text-accent group-hover/cta-works:text-white/40 transition-colors italic">Manifest / Eternal Legacy</span>
//                         <h2 className="text-7xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] group-hover/cta-works:text-white transition-all duration-1000">
//                             Architect <br />
//                             <span className="text-stroke group-hover/cta-works:text-stroke-white transition-all duration-1000">Outcome.</span>
//                         </h2>
//                         <Link href="/contact" className="px-24 py-12 bg-white text-black rounded-full font-black uppercase text-[10px] tracking-[0.8em] hover:scale-110 shadow-[0_20px_80px_rgba(255,255,255,0.3)] transition-all duration-700 group-hover/cta-works:bg-black group-hover/cta-works:text-white group-active:scale-95">
//                             Initiate Inquiry
//                         </Link>
//                     </div>
//                 </FadeIn>

//                 {/* Background Text Overlay */}
//                 <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-[30vw] font-black text-white/1 select-none pointer-events-none italic uppercase leading-none opacity-0 group-hover/cta-works:opacity-100 transition-opacity duration-1000 whitespace-nowrap">
//                     Sparcley Works
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default WorksPage;


const WorksPage = () => {
    return (
        <div>
            <h1>Works Page</h1>
        </div>
    );
};

export default WorksPage;   