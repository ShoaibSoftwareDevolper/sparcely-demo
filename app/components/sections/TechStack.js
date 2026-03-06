"use client"
import React from 'react';
import FadeIn from '@/app/components/ui/FadeIn';
import OrbitImages from '@/app/components/ui/OrbitImages';
import data from '@/app/api/data.js';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiWordpress,
    SiWoocommerce, SiPrestashop, SiLaravel, SiJavascript, SiHtml5,
    SiPhp, SiCss3, SiAmazonwebservices, SiGooglecloud, SiDigitalocean,
    SiGithub, SiDocker, SiCloudflare, SiSalesforce, SiHubspot, SiPostgresql, SiNodedotjs,
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { HiLightningBolt } from 'react-icons/hi';

const TechStack = () => {
    // Collecting technologies and mapping them to icons
    const techMap = {
        "React": <SiReact />,
        "Next.js": <SiNextdotjs />,
        "TypeScript": <SiTypescript />,
        "Tailwind CSS": <SiTailwindcss />,
        "WordPress": <SiWordpress />,
        "WooCommerce": <SiWoocommerce />,
        "PrestaShop": <SiPrestashop />,
        "Laravel": <SiLaravel />,
        "JavaScript": <SiJavascript />,
        "HTML": <SiHtml5 />,
        "PHP": <SiPhp />,
        // "CSS": <SiCss3 />,
        "AWS": <SiAmazonwebservices />,
        "Google Cloud": <SiGooglecloud />,
        "DigitalOcean": <SiDigitalocean />,
        "GitHub": <SiGithub />,
        "Docker": <SiDocker />,
        "Cloudflare": <SiCloudflare />,
        "Salesforce": <SiSalesforce />,
        "HubSpot": <SiHubspot />,
        "PostgreSQL": <SiPostgresql />,
        // "Node.js": <SiNodedotjs />,
        "AI Tools": <HiLightningBolt />,
        "AI TOOLS": <HiLightningBolt />
    };

    // Strictly use company.techStack from data.js
    const techList = data.company.techStack || [];

    const techItems = techList.map((tech, index) => (
        <div key={tech} className="flex items-center justify-center group relative">
            <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#111] border border-white/5 backdrop-blur-3xl flex items-center justify-center transition-all duration-500 group-hover:border-accent/40 group-hover:bg-accent/5">
                <span className="text-2xl md:text-4xl text-white group-hover:text-accent group-hover:scale-110 transition-all duration-500">
                    {techMap[tech] || tech.substring(0, 1)}
                </span>
            </div>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50 group-hover:-top-14">
                <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-[0.2em] bg-black/90 backdrop-blur-md px-3 py-1.5 border border-accent/30 rounded-full shadow-[0_0_20px_rgba(var(--accent-rgb),0.2)]">
                    {tech}
                </span>
            </div>
        </div>
    ));

    return (
        <section className="py-20 md:py-60 relative overflow-hidden ">
            {/* Background Details */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at center, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            <div className="site-padding relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-0">
                    <div className="lg:col-span-8">
                        <FadeIn direction="up">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-px bg-accent" />
                                <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                    // TECHNOLOGIES
                                </span>
                            </div>
                            <h2 className="text-[10vw] md:text-[10vw] font-black uppercase leading-[0.75] tracking-tighter text-white">
                                TECHNOLOGIES<br />
                                <span className="text-stroke"> WE WORK.</span>
                            </h2>
                        </FadeIn>
                    </div>
                    <div className="lg:col-span-4 lg:flex lg:items-end lg:justify-end pb-4">
                        <FadeIn direction="up" delay={0.1}>
                            <p className="text-white/30 font-medium uppercase tracking-widest text-[10px] max-w-xs leading-relaxed lg:text-right">
                                Our architecture revolves around a core of modern standards and high-performance protocols. Ensuring absolute reliability in every deployment cycle.
                            </p>
                        </FadeIn>
                    </div>
                </div>

                {/* Orbit Container — desktop only */}
                <div className="w-full relative pointer-events-auto -mt-10 lg:-mt-20 hidden md:block">
                    <FadeIn direction="up" delay={0.2}>
                        <OrbitImages
                            items={techItems}
                            shape="ellipse"
                            radiusX={450}
                            radiusY={120}
                            rotation={-5}
                            duration={40}
                            itemSize={100}
                            responsive={true}
                            baseWidth={1200}
                            showPath={true}
                            pathColor="rgba(255,255,255,0.03)"
                            aspectRatio="3 / 1"
                            centerContent={
                                <div className="hidden lg:flex flex-col items-center justify-center animate-pulse">
                                    <div className="w-32 h-32 rounded-full border border-accent/20 flex items-center justify-center">
                                        <div className="w-24 h-24 rounded-full border border-accent/40 flex items-center justify-center">
                                            <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/60 flex items-center justify-center overflow-hidden">
                                                <img src="/assets/SPARCLEY_Logo.webp" alt="Sparcley" className="w-8 invert" />
                                            </div>
                                        </div>
                                    </div>
                                    <span className="font-mono text-[8px] text-accent/40 uppercase tracking-[0.5em] mt-8">SYSTEM_CORE</span>
                                </div>
                            }
                        />
                    </FadeIn>
                </div>

                {/* Mobile Grid — mobile only */}
                <div className="md:hidden mt-10">
                    <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                        {techList.map((tech) => (
                            <div key={tech} className="flex flex-col items-center gap-2 group">
                                <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center group-hover:border-accent/40 group-hover:bg-accent/5 transition-all duration-500">
                                    <span className="text-xl text-white/60 group-hover:text-accent transition-colors">
                                        {techMap[tech] || tech.substring(0, 1)}
                                    </span>
                                </div>
                                <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-white/25 text-center leading-tight">{tech}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Technical Stats Overlay */}
                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-24 mt-32 md:mt-10 pt-20 border-t border-white/5 w-full">
                    <FadeIn direction="up" delay={0.3} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent" />
                            <span className="text-white text-4xl font-black tracking-tighter">99.9%</span>
                        </div>
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">System Efficiency <br/>Threshold Verified</p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.4} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent" />
                            <span className="text-white text-4xl font-black tracking-tighter">0.1s</span>
                        </div>
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">Average Execution <br/>Latency Response</p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.5} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent" />
                            <span className="text-white text-4xl font-black tracking-tighter">∞</span>
                        </div>
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">Enterprise Level <br/>Scalability Protocol</p>
                    </FadeIn>
                    <FadeIn direction="up" delay={0.6} className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-1.5 h-1.5 bg-accent" />
                            <span className="text-white text-4xl font-black tracking-tighter">A+</span>
                        </div>
                        <p className="font-mono text-[9px] text-white/40 uppercase tracking-widest leading-relaxed">Security Infrastructure <br/>Audit Index</p>
                    </FadeIn>
                </div> */}
            </div>

            {/* Side Labels */}
            <div className="absolute top-20 left-10 -rotate-90 origin-left hidden xl:block">
                <span className="font-mono text-[8px] text-white/10 uppercase tracking-[1em]">PROTOCOLS_ACTIVE_SYNC</span>
            </div>
            <div className="absolute bottom-20 right-10 rotate-90 origin-right hidden xl:block">
                <span className="font-mono text-[8px] text-white/10 uppercase tracking-[1em]">SPARCLEY_ENGINE_V4</span>
            </div>
        </section>
    );
};

export default TechStack;