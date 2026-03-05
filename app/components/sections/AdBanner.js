import React from 'react';
import Link from 'next/link';
import FadeIn from '@/app/components/ui/FadeIn';

const AdBanner = ({ content }) => {
    const parts = content.split('–');
    const headline = parts[0]?.trim() || content;
    const sub = parts[1]?.trim() || '';

    return (
        <section className="bg-accent/10 py-48 relative overflow-hidden group border-y border-white/5">
            {/* Marquee background text */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
                <div className="text-[350px] font-black text-white uppercase whitespace-nowrap animate-marquee select-none italic leading-none">
                    * Special Offer * Manifest Success * Evaluate Quality * Continuous Care *&nbsp;
                </div>
            </div>

            <div className="relative z-10 text-center flex flex-col items-center gap-16 px-[10%]">
                <FadeIn direction="up">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-4">Engagement Protocol</span>
                    <h2 className="text-5xl md:text-[8vw] font-black uppercase max-w-7xl tracking-tighter leading-[0.85] text-white">
                        {headline} <br />
                        {sub && <span className="text-stroke-white text-stroke tracking-normal">{sub}</span>}
                    </h2>
                </FadeIn>
                <FadeIn direction="up" delay={0.2}>
                    <Link href="/contact" className="bg-accent text-white px-20 py-10 rounded-full font-bold uppercase text-[10px] tracking-[0.6em] hover:bg-white hover:text-black transition-all duration-500 shadow-3xl">
                        Claim Free Audit
                    </Link>
                </FadeIn>
            </div>
        </section>
    );
};

export default AdBanner;
