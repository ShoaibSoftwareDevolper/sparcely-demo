import React from 'react';
import FadeIn from '@/app/components/ui/FadeIn';

const VideoSection = ({ heading }) => {
    return (
        <section className="h-screen relative group overflow-hidden bg-black border-y border-white/5 flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 group-hover:opacity-30 transition-opacity duration-1000 scale-105 group-hover:scale-100 transform duration-1000"></div>
            <div className="absolute inset-0 bg-background/40 backdrop-blur-xs pointer-events-none" />

            {/* Grid lines overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
                <div className="absolute top-3/4 left-0 w-full h-px bg-white/5" />
                <div className="absolute top-0 left-1/4 h-full w-px bg-white/5" />
                <div className="absolute top-0 left-3/4 h-full w-px bg-white/5" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[5%] z-10">
                <FadeIn direction="up">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[1.5em] mb-16 block italic underline decoration-accent/30 underline-offset-20">Vision / Performance</span>
                    <h2 className="text-7xl md:text-[15vw] font-black uppercase mb-16 max-w-none leading-none tracking-tighter">
                        {heading || 'Pure'} <br />
                        <span className="text-stroke tracking-normal">Outcome.</span>
                    </h2>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                    <button className="w-40 h-40 md:w-64 md:h-64 rounded-full border border-white/10 flex items-center justify-center text-4xl group-hover:bg-accent group-hover:border-accent group-hover:text-white transition-all duration-1000 backdrop-blur-3xl relative group/play overflow-hidden">
                        <div className="absolute inset-0 bg-accent translate-y-full group-hover/play:translate-y-0 transition-transform duration-700" />
                        <span className="relative z-10 font-light italic">Play</span>
                        <div className="absolute inset-0 rounded-full border border-accent animate-ping opacity-0 group-hover/play:opacity-50 transition-opacity" />
                    </button>
                </FadeIn>
            </div>
        </section>
    );
};

export default VideoSection;
