"use client"
import React, { useRef } from 'react';
import {
    motion,
    useMotionTemplate,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Button from '@/app/components/ui/Button';

const SECTION_HEIGHT = 1500;

const ServicesIntro = ({ projects }) => {
    return (
        <div className="bg-[#0b0b0b]">
            <Hero projects={projects} />
            {/* The user asked to remove the archive/list part, so we only keep the Hero and Parallax logic */}
        </div>
    );
};

const Hero = ({ projects }) => {
    return (
        <div
            style={{ height: `calc(${SECTION_HEIGHT}px + 100vh)` }}
            className="relative w-full"
        >
            <CenterImage project={projects[0]} />

            <ParallaxImages projects={projects.slice(1, 5)} />

            <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-[#0b0b0b]/0 to-[#0b0b0b]" />
        </div>
    );
};

const CenterImage = ({ project }) => {
    const { scrollY } = useScroll();

    const clip1 = useTransform(scrollY, [0, 1500], [25, 0]);
    const clip2 = useTransform(scrollY, [0, 1500], [75, 100]);

    const clipPath = useMotionTemplate`polygon(${clip1}% ${clip1}%, ${clip2}% ${clip1}%, ${clip2}% ${clip2}%, ${clip1}% ${clip2}%)`;

    const backgroundSize = useTransform(
        scrollY,
        [0, SECTION_HEIGHT + 500],
        ["170%", "100%"]
    );
    const opacity = useTransform(
        scrollY,
        [SECTION_HEIGHT, SECTION_HEIGHT + 500],
        [1, 0]
    );

    return (
        <motion.div
            className="sticky top-0 h-screen w-full flex items-center justify-center"
            style={{
                clipPath,
                backgroundSize,
                opacity,
                backgroundImage: `url(/assets/Marc-Lauder_banner.webp)`, // Real asset link
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            {/* Technical HUD Overlay for the center image to keep it "Next-Gen" */}
            <div className="relative z-10 text-center px-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-black/40 backdrop-blur-3xl border border-white/10 p-12 max-w-2xl mx-auto group"
                >
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-[0.5em] mb-6 block">
                        [ FEATURED_CASE // 01 ]
                    </span>
                    <h2 className="text-5xl md:text-8xl font-black uppercase text-white mb-8 tracking-tighter leading-none">
                        {project?.name || "MARC LAUDER"}
                    </h2>
                    <div className="flex items-center justify-center gap-10 mb-10">
                        <div className="h-px w-10 bg-white/20" />
                        <span className="font-mono text-[9px] text-white/40 uppercase tracking-widest">{project?.category}</span>
                        <div className="h-px w-10 bg-white/20" />
                    </div>
                    <Button href={project?.url} external variant="outline" icon={<ArrowUpRight size={16} />}>
                        EXPLORE CASE
                    </Button>
                </motion.div>
            </div>

            {/* HUD Elements */}
            <div className="absolute top-10 left-[10%] font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">
                PROCES_STREAM // INITIATED
            </div>
            <div className="absolute bottom-10 right-[10%] font-mono text-[9px] text-white/20 uppercase tracking-[0.4em]">
                COORD // 51.5074° N, 0.1278° W
            </div>
        </motion.div>
    );
};

const ParallaxImages = ({ projects }) => {
    // Mapping the reference code's layout to our project data
    const assets = [
        "/assets/andalusia-dream-banner-compressed.webm",
        "/assets/landing-page-img-compressed.webp",
        "/assets/workon_landing_compressed.jpg",
        "/assets/toptis_banner.webp"
    ];

    return (
        <div className="mx-auto max-w-7xl px-8 pt-[200px] grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-40">
            <ParallaxImg
                project={projects[0]}
                src={assets[0]}
                alt={projects[0]?.name}
                start={-200}
                end={200}
                className="w-full md:w-10/12"
                isVideo
            />
            <ParallaxImg
                project={projects[1]}
                src={assets[1]}
                alt={projects[1]?.name}
                start={200}
                end={-250}
                className="w-full md:w-11/12 md:mt-40"
            />
            <ParallaxImg
                project={projects[2]}
                src={assets[2]}
                alt={projects[2]?.name}
                start={-200}
                end={200}
                className="w-full md:w-9/12 ml-auto"
            />
            <ParallaxImg
                project={projects[3]}
                src={assets[3]}
                alt={projects[3]?.name}
                start={0}
                end={-500}
                className="w-full md:w-10/12 md:-mt-20"
            />
        </div>
    );
};

const ParallaxImg = ({ className, alt, src, start, end, project, isVideo }) => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`${start}px end`, `end ${end * -1}px`],
    });

    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);
    const scale = useTransform(scrollYProgress, [0.75, 1], [1, 0.85]);

    const y = useTransform(scrollYProgress, [0, 1], [start, end]);
    const transform = useMotionTemplate`translateY(${y}px) scale(${scale})`;

    return (
        <motion.div
            ref={ref}
            style={{ transform, opacity }}
            className={`${className} group cursor-pointer`}
        >
            <div className="relative overflow-hidden bg-zinc-900 border border-white/5 transition-all duration-700 group-hover:border-accent/40">
                {isVideo ? (
                    <video src={src} autoPlay muted loop className="w-full h-[55vh] object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                ) : (
                    <img src={src} alt={alt} className="w-full h-[55vh] object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                )}

                <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/20 to-transparent">
                    <span className="font-mono text-[9px] text-accent uppercase tracking-widest mb-4 block font-bold">
                    // CASE_{project?.category?.toUpperCase().replace(' ', '_')}
                    </span>
                    <h3 className="text-4xl font-black uppercase text-white mb-6 group-hover:text-accent transition-colors duration-500 leading-none">
                        {project?.name}
                    </h3>
                    <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                        <div className="h-px w-8 bg-accent" />
                        <span className="font-mono text-[9px] text-white/40 uppercase">Initiate Protocol</span>
                    </div>
                </div>

                {/* Architectural Border Reveal */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-accent group-hover:w-full transition-all duration-1000" />
            </div>
        </motion.div>
    );
};

export default ServicesIntro;
