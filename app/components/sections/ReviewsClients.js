"use client"
import React from 'react';
import { motion } from 'framer-motion';
import FadeIn from '@/app/components/ui/FadeIn';

const ReviewsClients = () => {
    const clientLogos = [
        { name: 'Marc Lauder', locale: 'LDN' },
        { name: 'Andalusia', locale: 'MAR' },
        { name: 'R King', locale: 'OSL' },
        { name: 'Workon', locale: 'CPH' },
        { name: 'Toptis', locale: 'VNO' },
        { name: 'Graf Becker', locale: 'BER' },
        { name: 'Déssee Paris', locale: 'PAR' },
        { name: 'Fashion Flair', locale: 'ROM' }
    ];

    const reviews = [
        {
            name: "Marc Lauder",
            role: "Founder / Marc Lauder",
            quote: "Sparcley doesn't just build websites; they build systems that generate revenue. Their attention to detail is unlike anything we've seen in the industry.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=marclauder"
        },
        {
            name: "Erik Jensen",
            role: "CEO / Workon DK",
            quote: "The technical precision of the Sparcley team is unmatched. Our recruitment platform scaled 300% within months of the new vertical launch.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=erik"
        },
        {
            name: "Sarah Rossi",
            role: "Director / Andalusia Dream",
            quote: "Aesthetic logic is the perfect way to describe their work. Beautiful visuals backed by rigorous engineering and performance data.",
            rating: 5,
            image: "https://i.pravatar.cc/150?u=sarah"
        }
    ];

    return (
        <section className="py-32 md:py-60 relative overflow-hidden border-t border-white/5">
            {/* Architectural Grid */}
          
            <div className="site-padding relative z-10">
                {/* Section Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-32 gap-12">
                    <FadeIn direction="up">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-10 h-px bg-accent" />
                            <span className="font-mono text-[10px] tracking-[0.4em] text-accent uppercase font-bold">
                                // VALIDATED_SUCCESS
                            </span>
                        </div>
                        <h2 className="text-6xl md:text-[10vw] font-black uppercase leading-[0.8] tracking-tighter text-white">
                            TRUSTED BY <br />
                            <span className="text-stroke">LEADERS.</span>
                        </h2>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.2} className="hidden lg:block">
                        <div className="flex flex-col items-end gap-4">
                            <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-full">
                                <div className="flex gap-1 text-accent">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xs">★</span>)}
                                </div>
                                <span className="text-white/40 font-mono text-[9px] uppercase tracking-widest">5.0 Matrix Verified</span>
                            </div>
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.3em]">REPUTATION_ARCHIVE_2025</span>
                        </div>
                    </FadeIn>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
                    {reviews.map((review, index) => (
                        <FadeIn key={review.name} direction="up" delay={index * 0.1}>
                            <div className="group h-full bg-[#111] border border-white/5 p-12 relative overflow-hidden flex flex-col justify-between hover:border-accent/30 transition-all duration-700 hover:shadow-2xl hover:shadow-accent/5">
                                {/* Quote mark decoration */}
                                <div className="absolute -top-10 -right-4 text-[120px] font-black italic text-accent opacity-[0.03] select-none group-hover:opacity-[0.07] transition-opacity">"</div>
                                
                                <div className="relative z-10 mb-20">
                                    <div className="flex gap-1 mb-10">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <div key={i} className="w-1 h-4 bg-accent/40" />
                                        ))}
                                    </div>
                                    <p className="text-2xl md:text-3xl italic text-white/80 leading-tight tracking-tight font-medium">
                                        "{review.quote}"
                                    </p>
                                </div>

                                <div className="mt-auto flex items-center gap-6 relative z-10 pt-10 border-t border-white/5">
                                    <div className="w-16 h-16 rounded-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700 border border-white/10 bg-secondary">
                                        <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-tighter text-lg">{review.name}</h4>
                                        <p className="text-accent/60 font-mono text-[10px] uppercase tracking-widest">{review.role}</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            {/* Infinite Logo Marquee */}
            <div className="border-y border-white/5 bg-black py-16 relative overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute inset-0 pointer-events-none z-10 bg-linear-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
                
                <div className="flex overflow-hidden group">
                    <motion.div 
                        initial={{ x: 0 }}
                        animate={{ x: "-50%" }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="flex items-center gap-32 whitespace-nowrap px-16 shrink-0"
                    >
                        {[...clientLogos, ...clientLogos].map((logo, idx) => (
                            <div key={idx} className="flex flex-col items-center gap-2 group/logo opacity-20 hover:opacity-100 transition-all duration-500">
                                <span className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter italic">
                                    {logo.name}
                                </span>
                                <span className="font-mono text-[8px] text-accent tracking-[0.5em] font-bold">
                                    [ LOC_{logo.locale} ]
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Footer Tech Detail */}
            <div className="site-padding mt-20 flex justify-between items-center opacity-10">
                <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-white">System Status: Integrity Confirmed</div>
                <div className="font-mono text-[9px] uppercase tracking-[0.5em] text-white">© 2025 Sparcley Logic</div>
            </div>
        </section>
    );
};

export default ReviewsClients;

