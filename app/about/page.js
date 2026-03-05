// import React from 'react';
// import data from '@/app/api/data.js';
// import FadeIn from '../components/ui/FadeIn';

// const AboutPage = () => {
//     const about = data.pages.about;

//     return (
//         <div className="pt-32 min-h-screen bg-background text-foreground">
//             {/* Hero Section - MASSIVE SCALE */}
//             <section className="section-padding flex flex-col items-center text-center relative overflow-hidden">
//                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
//                 <FadeIn direction="up">
//                     <div className="max-w-7xl relative">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-16 block italic underline decoration-accent/30 underline-offset-20">Genesis / Digital Frontier</span>
//                         <h1 className="text-7xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] mb-12">
//                             {about.heading.split(' ').slice(0, 1)} <br />
//                             <span className="text-stroke tracking-normal">{about.heading.split(' ').slice(1).join(' ')}</span>
//                         </h1>
//                         <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
//                     </div>
//                 </FadeIn>
//             </section>

//             {/* Content Section - RHYTHMIC SPLIT */}
//             <section className="section-padding grid grid-cols-1 lg:grid-cols-2 gap-48 items-center overflow-hidden">
//                 <FadeIn direction="left">
//                     <div className="relative aspect-square group shadow-3xl">
//                         <div className="absolute -inset-10 bg-accent/5 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//                         <div className="absolute inset-0 bg-secondary overflow-hidden rounded-[80px] border border-white/5 group-hover:border-accent/30 transition-all duration-1000">
//                             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-100"></div>
//                             <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
//                         </div>
//                     </div>
//                 </FadeIn>
//                 <div className="flex flex-col justify-center relative">
//                      <div className="absolute -top-32 -left-32 text-[20vw] font-black text-white/2 select-none pointer-events-none italic uppercase leading-none">Values</div>
//                     <FadeIn direction="right">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[0.8em] mb-12 block italic">Strategic Ethos</span>
//                         <h2 className="text-5xl md:text-8xl font-black uppercase mb-16 tracking-tighter leading-[0.85] italic">
//                             {about.subheading}
//                         </h2>
//                     </FadeIn>
//                     <FadeIn direction="right" delay={0.1}>
//                         <p className="text-3xl text-muted/60 leading-tight mb-20 font-medium italic border-l-2 border-accent pl-12">
//                             {about.description}
//                         </p>
//                     </FadeIn>
//                     <FadeIn direction="right" delay={0.2}>
//                         <div className="p-16 bg-white/2 backdrop-blur-3xl border border-white/10 rounded-[48px] relative overflow-hidden group/quote">
//                            <div className="absolute top-0 left-0 w-1 h-0 bg-accent group-hover/quote:h-full transition-all duration-1000" />
//                             <p className="text-2xl italic font-medium leading-relaxed text-white/80">
//                                 "{about.philosophy}"
//                             </p>
//                         </div>
//                     </FadeIn>
//                 </div>
//             </section>

//             {/* Why Choose Us - LIQUID GRID */}
//             <section className="section-padding bg-secondary/30 relative border-y border-white/5 overflow-hidden">
//                 <div className="absolute top-0 right-1/4 w-[60vw] h-full bg-accent/2 blur-[250px] pointer-events-none rounded-full" />
//                 <FadeIn direction="up">
//                     <div className="max-w-4xl mb-40">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-8 block italic">Engine of Success</span>
//                         <h2 className="text-7xl md:text-[10vw] font-black uppercase leading-[0.85] tracking-tighter">
//                             High <span className="text-stroke tracking-normal">Outcome</span> <br /> Structures.
//                         </h2>
//                     </div>
//                 </FadeIn>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-[40px] overflow-hidden">
//                     {about.whyChooseUs.map((value, index) => (
//                         <FadeIn key={index} direction="up" delay={index * 0.1}>
//                             <div className="bg-background/40 backdrop-blur-3xl p-20 flex flex-col gap-16 group hover:bg-black transition-all duration-700 min-h-[450px] relative overflow-hidden">
//                                 <span className="text-9xl font-black text-white/1 group-hover:text-accent/5 absolute -right-4 -bottom-4 transition-colors duration-1000 italic leading-none">{index + 1}</span>
//                                 <div className="p-8 w-fit bg-accent/10 border border-accent/20 rounded-2xl group-hover:bg-accent group-hover:text-white transition-all duration-700">
//                                     <span className="text-xl font-black italic">!</span>
//                                 </div>
//                                 <p className="text-3xl font-bold uppercase leading-tight tracking-tighter text-white/90 group-hover:text-accent transition-colors duration-500 italic relative z-10">{value}</p>
//                             </div>
//                         </FadeIn>
//                     ))}
//                 </div>
//             </section>

//             {/* Benefits - ULTRA IMPACT SCALE */}
//             <section className="section-padding overflow-hidden">
//                 <div className="flex flex-col gap-48">
//                     {about.benefits.map((benefit, index) => (
//                         <FadeIn key={index} direction="up" delay={index * 0.1}>
//                             <div className="flex flex-col md:flex-row items-end gap-16 group cursor-default">
//                                 <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-10 transition-all group-hover:tracking-[2em] group-hover:text-white duration-1000 whitespace-nowrap">0{index + 1} / Performance</span>
//                                 <h3 className="text-7xl md:text-[14vw] font-black uppercase leading-[0.75] tracking-tighter group-hover:text-stroke transition-all duration-1000 flex-1">{benefit}</h3>
//                             </div>
//                             <div className="w-full h-px bg-white/5 mt-16 group-hover:bg-accent transition-colors duration-1000" />
//                         </FadeIn>
//                     ))}
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AboutPage;
const AboutPage = () => {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
};

export default AboutPage;
