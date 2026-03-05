import React from 'react';
import Link from 'next/link';
import FadeIn from '@/app/components/ui/FadeIn';

const projectImages = [
    "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1581291518066-670197771747?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1559028012-448b05e90c51?q=80&w=1932&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
];

const WorksGrid = ({ projects }) => {
    const featured = projects.slice(0, 4);

    return (
        <section className="section-padding overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-40 gap-16">
                <FadeIn direction="left">
                    <div className="max-w-4xl">
                        <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block italic">03 / Artifacts</span>
                        <h2 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter">
                            Selected <span className="text-stroke tracking-normal">Legacy.</span>
                        </h2>
                    </div>
                </FadeIn>
                <FadeIn direction="right">
                    <Link href="/works" className="group flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 hover:text-accent transition-colors">
                        <span>Explore Archive</span>
                        <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-700">
                            ↗
                        </div>
                    </Link>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-32">
                {featured.map((project, index) => (
                    <FadeIn key={project.name} direction="up" delay={index * 0.1}>
                        <div className={`group relative flex flex-col gap-12 ${index % 2 !== 0 ? 'md:mt-64' : ''}`}>
                            <div className="relative overflow-hidden bg-secondary aspect-[16/11.5] rounded-[48px] border border-white/5 group-hover:border-accent/30 transition-all duration-700 shadow-3xl">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-20 group-hover:opacity-100"
                                    style={{ backgroundImage: `url('${projectImages[(index + 2) % projectImages.length]}')` }}
                                ></div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="absolute inset-0 flex flex-col justify-end p-16 translate-y-20 group-hover:translate-y-0 transition-transform duration-700 opacity-0 group-hover:opacity-100 pointer-events-none">
                                    <div className="p-10 bg-white/2 backdrop-blur-3xl border border-white/10 rounded-3xl">
                                        <p className="text-lg font-medium leading-relaxed italic text-white/80">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="absolute top-16 right-16 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center -translate-y-40 group-hover:translate-y-0 transition-all duration-1000 shadow-3xl text-3xl z-20 font-light italic"
                                >
                                    ↗
                                </a>
                            </div>

                            <div className="px-8 relative">
                                <div className="absolute -top-20 -left-4 text-9xl font-black text-white/3 group-hover:text-accent/5 transition-colors pointer-events-none italic uppercase leading-none">0{index + 1}</div>
                                <h3 className="text-5xl font-bold uppercase group-hover:text-accent transition-all mb-4 tracking-tighter leading-none">{project.name}</h3>
                                <div className="w-16 h-px bg-white/10 group-hover:w-full group-hover:bg-accent transition-all duration-1000 mb-8" />
                                <p className="text-muted/60 text-[10px] uppercase tracking-[0.5em] leading-relaxed font-black">{project.subtitle}</p>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </section>
    );
};

export default WorksGrid;
