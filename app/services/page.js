// import React from 'react';
// import Link from 'next/link';
// import data from '@/app/api/data.js';
// import FadeIn from '../components/ui/FadeIn';

// const ServicesPage = () => {
//     const services = data.pages.services;

//     const servicesList = [
//         {
//             key: 'webDevelopment',
//             data: services.webDevelopment,
//             slug: 'webDev',
//             image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
//         },
//         {
//             key: 'completeDigitalCare',
//             data: services.completeDigitalCare,
//             slug: 'digitalCare',
//             image: "https://images.unsplash.com/photo-1551288049-bbbda536639a?q=80&w=2070&auto=format&fit=crop"
//         },
//         {
//             key: 'crm',
//             data: services.crm,
//             slug: 'crm',
//             image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
//         }
//     ];

//     return (
//         <div className="pt-32 min-h-screen bg-background text-foreground">
//             <section className="section-padding overflow-hidden">
//                 <FadeIn direction="up">
//                     <div className="mb-40 relative">
//                         <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[150px] rounded-full pointer-events-none" />
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[0.8em] mb-12 block italic">Ecosystem / Capabilities</span>
//                         <h1 className="text-7xl md:text-[12vw] font-black uppercase tracking-tighter leading-[0.85] mb-12">
//                             Infinite <br />
//                             <span className="text-stroke tracking-normal">Solutions.</span>
//                         </h1>
//                         <p className="text-2xl md:text-4xl text-muted/60 leading-relaxed max-w-4xl font-medium italic border-l-2 border-accent pl-12">
//                             We engineer high-performance digital architectures that transform business complexity into competitive advantage through surgical precision.
//                         </p>
//                     </div>
//                 </FadeIn>

//                 <div className="flex flex-col gap-64">
//                     {servicesList.map((service, index) => (
//                         <div key={service.key} className="group relative grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
//                             <FadeIn direction={index % 2 === 0 ? "left" : "right"} className={index % 2 !== 0 ? 'lg:order-2' : ''}>
//                                 <div className="relative aspect-video lg:aspect-4/3 overflow-hidden rounded-[60px] border border-white/5 group-hover:border-accent/20 transition-all duration-700 shadow-3xl">
//                                     <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" style={{ backgroundImage: `url('${service.image}')` }}></div>
//                                     <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                                     <div className="absolute top-12 left-12 text-accent text-8xl font-black italic opacity-5 group-hover:opacity-20 transition-opacity select-none">0{index + 1}</div>
//                                 </div>
//                             </FadeIn>

//                             <FadeIn direction={index % 2 === 0 ? "right" : "left"}>
//                                 <div className="flex flex-col gap-12 relative">
//                                     <span className="text-accent text-[10px] font-bold uppercase tracking-[0.8em] mb-4">Vertical Strategy</span>
//                                     <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] group-hover:text-accent transition-all duration-500 italic">{service.data.title}</h2>
//                                     <p className="text-2xl text-muted/60 leading-relaxed font-medium italic max-w-xl">{service.data.subtitle}</p>

//                                     <div className="flex flex-wrap gap-4">
//                                         {(service.data.features || []).slice(0, 4).map((feature, fIndex) => (
//                                             <span key={fIndex} className="text-[9px] font-black uppercase tracking-[0.4em] px-8 py-4 bg-white/5 border border-white/10 rounded-full backdrop-blur-3xl group-hover:border-accent/30 transition-all">
//                                                 {feature.split(/ – | - /)[0]}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     <Link
//                                         href={`/services/${service.slug}`}
//                                         className="inline-flex items-center gap-10 text-[10px] font-bold uppercase tracking-[0.5em] text-white/60 hover:text-accent mt-12 group/link transition-colors"
//                                     >
//                                         <span>Discover Ecosystem</span>
//                                         <div className="w-16 h-px bg-white/10 group-hover/link:w-32 group-hover/link:bg-accent transition-all duration-700" />
//                                     </Link>
//                                 </div>
//                             </FadeIn>
//                             <div className="absolute -bottom-32 left-0 w-full h-px bg-white/5" />
//                         </div>
//                     ))}
//                 </div>
//             </section>

//             {/* Price Transparency - LIQUID CTA */}
//             <section className="bg-secondary/30 relative py-48 overflow-hidden border-t border-white/5 group/cta">
//                 <div className="absolute bottom-0 right-0 w-[60vw] h-[60vw] bg-accent/5 blur-[250px] pointer-events-none rounded-full" />
//                 <FadeIn direction="up">
//                     <div className="text-center max-w-6xl mx-auto flex flex-col items-center gap-16 relative z-10 px-[12%]">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[1em] mb-4 block animate-pulse">Absolute Transparency</span>
//                         <h2 className="text-6xl md:text-[10vw] font-black uppercase text-white tracking-tighter leading-[0.85]">
//                             Zero <br /> <span className="text-stroke tracking-normal group-hover/cta:text-white transition-colors duration-1000">Complexity.</span>
//                         </h2>
//                         <p className="text-2xl md:text-3xl text-muted/60 max-w-4xl mx-auto leading-relaxed font-medium italic">
//                             Every engagement is built on surgical precision, clear valuation, and radical accountability. We reject mediocrity in favor of pure performance.
//                         </p>
//                         <Link href="/contact" className="relative group/btn inline-flex overflow-hidden bg-accent px-20 py-10 rounded-full shadow-3xl">
//                             <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.6em] text-white">Initiate Consultation</span>
//                             <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500" />
//                             <span className="absolute inset-0 flex items-center justify-center translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 text-black z-20 font-bold uppercase text-[10px] tracking-[0.6em]">
//                                 Initiate Consultation
//                             </span>
//                         </Link>
//                     </div>
//                 </FadeIn>
//             </section>
//         </div>
//     );
// };

// export default ServicesPage;

const ServicesPage = () => {
    return (
        <div>
            <h1>Services Page</h1>
        </div>
    );
};

export default ServicesPage;