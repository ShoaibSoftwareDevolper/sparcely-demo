import React from 'react';
import FadeIn from '@/app/components/ui/FadeIn';

const clientLogos = ['Marc Lauder', 'Andalusia', 'R King', 'Workon', 'Toptis', 'Graf Becker'];

const ReviewsClients = () => {
    return (
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
            <div className="absolute -bottom-1/2 -left-1/4 w-[80vw] h-[80vw] bg-accent/5 blur-[250px] pointer-events-none rounded-full" />

            {/* Reviews */}
            <div className="flex flex-col lg:flex-row justify-between items-start mb-48 gap-24 relative z-10">
                <FadeIn direction="up" className="max-w-3xl">
                    <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block">04 / Reputation</span>
                    <h2 className="text-6xl md:text-[8vw] font-black uppercase leading-[0.85] tracking-tighter mb-12">
                        Intelligence <br /> <span className="text-stroke tracking-normal">Validated.</span>
                    </h2>
                    <div className="flex items-center gap-6 p-8 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-full w-fit">
                        <div className="flex gap-2 text-accent">
                            {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-lg">★</span>)}
                        </div>
                        <span className="text-white/40 font-bold uppercase text-[9px] tracking-[0.4em] pt-1">5.0 Matrix / Google Reviews</span>
                    </div>
                </FadeIn>

                <div className="flex-1 w-full lg:max-w-3xl">
                    <FadeIn direction="up" delay={0.2}>
                        <div className="bg-background/40 backdrop-blur-[100px] p-20 border border-white/5 rounded-[60px] relative group/quote">
                            <div className="text-[200px] font-black italic text-accent opacity-5 absolute -top-10 -left-10 select-none pointer-events-none">"</div>
                            <p className="text-3xl md:text-4xl italic leading-tight text-white/80 mb-20 relative z-10 font-medium tracking-tight">
                                They don't just build websites; they build systems that generate revenue. The team's attention to detail is unlike anything we've seen in the industry.
                            </p>
                            <div className="flex items-center gap-10 relative z-10 border-t border-white/5 pt-12">
                                <div className="w-24 h-24 rounded-full bg-secondary border border-white/10 overflow-hidden shadow-2xl">
                                    <img src="https://i.pravatar.cc/150?u=marclauder" alt="Marc Lauder" className="grayscale group-hover/quote:grayscale-0 transition-all duration-700" />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold uppercase tracking-tighter text-white">Marc Lauder</p>
                                    <p className="text-accent text-[10px] font-bold uppercase tracking-[0.4em] mt-2 italic">Visionary / Marc Lauder Watches</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Client Logos */}
            <div className="pt-40 border-t border-white/5 relative z-10">
                <FadeIn direction="up">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-24 items-center opacity-10 hover:opacity-50 transition-all duration-1000">
                        {clientLogos.map(logo => (
                            <div key={logo} className="text-center font-black uppercase text-2xl md:text-3xl tracking-tighter block italic whitespace-nowrap">{logo}</div>
                        ))}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};

export default ReviewsClients;
