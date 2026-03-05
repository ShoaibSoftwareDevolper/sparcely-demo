// "use client"
// import React from 'react';
// import data from '@/app/api/data.js';
// import FadeIn from '../components/ui/FadeIn';

// const ContactPage = () => {
//     const contact = data.pages.contact;

//     return (
//         <div className="pt-32 min-h-screen bg-background text-foreground">
//             {/* Header - MASSIVE IMPACT */}
//             <section className="section-padding relative overflow-hidden flex flex-col items-center">
//                 <div className="absolute top-0 left-1/4 w-[60vw] h-full bg-accent/5 blur-[200px] pointer-events-none rounded-full" />
//                 <FadeIn direction="up">
//                     <div className="max-w-7xl relative text-center mb-48">
//                         <span className="text-accent text-[10px] font-bold uppercase tracking-[1.5em] mb-16 block italic underline decoration-accent/30 underline-offset-20">Engagement / Kinetic Consultation</span>
//                         <h1 className="text-7xl md:text-[15vw] font-black uppercase tracking-tighter leading-[0.8] mb-16">
//                             Initiate <br />
//                             <span className="text-stroke tracking-normal">Pulse.</span>
//                         </h1>
//                         <p className="text-2xl md:text-5xl italic text-muted/60 max-w-5xl mx-auto font-medium leading-tight">
//                             {contact.subheading}
//                         </p>
//                     </div>
//                 </FadeIn>
//             </section>

//             <section className="section-padding">
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-48 items-start relative z-10">
//                     {/* Form - LIQUID GLASS SHARP */}
//                     <FadeIn direction="left">
//                         <div className="flex flex-col gap-20 p-16 bg-white/2 backdrop-blur-[100px] border border-white/5 rounded-[60px] shadow-3xl hover:border-accent/30 transition-all duration-1000 group">
//                             <form className="flex flex-col gap-16 p-8">
//                                 <div className="group/field relative">
//                                     <label className="text-[10px] uppercase font-black tracking-[0.6em] text-muted/40 group-focus-within/field:text-accent transition-colors block mb-6 italic">Identity / Personal / Brand</label>
//                                     <input 
//                                         type="text" 
//                                         placeholder="Identity Identifier" 
//                                         className="w-full bg-transparent border-b border-white/10 py-10 focus:outline-none focus:border-accent transition-all text-4xl font-black italic tracking-tighter placeholder:text-white/5"
//                                     />
//                                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-focus-within/field:w-full transition-all duration-1000" />
//                                 </div>

//                                 <div className="group/field relative">
//                                     <label className="text-[10px] uppercase font-black tracking-[0.6em] text-muted/40 group-focus-within/field:text-accent transition-colors block mb-6 italic">Digital / Electronic / Mail</label>
//                                     <input 
//                                         type="email" 
//                                         placeholder="protocol@identity.com" 
//                                         className="w-full bg-transparent border-b border-white/10 py-10 focus:outline-none focus:border-accent transition-all text-4xl font-black italic tracking-tighter placeholder:text-white/5"
//                                     />
//                                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-focus-within/field:w-full transition-all duration-1000" />
//                                 </div>

//                                 <div className="group/field relative">
//                                     <label className="text-[10px] uppercase font-black tracking-[0.6em] text-muted/40 group-focus-within/field:text-accent transition-colors block mb-6 italic">Objective / Targeted Service</label>
//                                     <select className="w-full bg-transparent border-b border-white/10 py-10 focus:outline-none focus:border-accent transition-all text-4xl font-black italic tracking-tighter appearance-none text-white/20 group-focus-within/field:text-white cursor-pointer group-hover/field:text-accent/60">
//                                         <option className="bg-background text-lg font-bold">Web Architecture</option>
//                                         <option className="bg-background text-lg font-bold">Digital Care</option>
//                                         <option className="bg-background text-lg font-bold">CRM System</option>
//                                         <option className="bg-background text-lg font-bold">E-Commerce Ecosystem</option>
//                                     </select>
//                                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-focus-within/field:w-full transition-all duration-1000" />
//                                     <div className="absolute right-0 bottom-12 text-accent/40 group-focus-within/field:text-accent select-none pointer-events-none text-2xl">↓</div>
//                                 </div>

//                                 <div className="group/field relative">
//                                     <label className="text-[10px] uppercase font-black tracking-[0.6em] text-muted/40 group-focus-within/field:text-accent transition-colors block mb-6 italic">Intelligence / Briefing / Message</label>
//                                     <textarea 
//                                         rows="4"
//                                         placeholder="Expound project parameters" 
//                                         className="w-full bg-transparent border-b border-white/10 py-10 focus:outline-none focus:border-accent transition-all text-3xl font-black italic tracking-tighter resize-none placeholder:text-white/5 leading-tight"
//                                     ></textarea>
//                                     <div className="absolute bottom-0 left-0 w-0 h-1 bg-accent group-focus-within/field:w-full transition-all duration-1000" />
//                                 </div>

//                                 <button className="relative group/btn overflow-hidden bg-white/5 border border-white/10 px-24 py-12 rounded-full self-start mt-12 transition-all duration-700 hover:border-accent group-hover:scale-105 active:scale-95">
//                                     <span className="relative z-10 text-[10px] font-black uppercase tracking-[1em] text-white italic group-hover/btn:text-black transition-colors duration-700">Send Directive →</span>
//                                     <div className="absolute inset-0 bg-accent translate-y-full group-hover/btn:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)]" />
//                                 </button>
//                             </form>
//                         </div>
//                     </FadeIn>

//                     {/* Info - HIGH IMPACT DATA */}
//                     <div className="flex flex-col gap-32">
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
//                             {contact.details.studios.map((studio, index) => (
//                                 <FadeIn key={index} direction="right" delay={index * 0.1}>
//                                     <div className="flex flex-col gap-8 group/card p-12 bg-white/2 border border-white/5 rounded-[40px] hover:bg-white/5 hover:border-accent/20 transition-all duration-700 relative overflow-hidden h-full">
//                                         <div className="absolute -right-4 -top-4 text-7xl font-black text-white/2 group-hover/card:text-accent/5 transition-all italic select-none">0{index + 1}</div>
//                                         <div className="relative z-10 flex flex-col gap-6">
//                                             <span className="text-accent text-[10px] font-black uppercase tracking-[0.5em] mb-2 italic flex items-center gap-4">
//                                                 <div className="w-8 h-px bg-accent/30" />
//                                                 {studio.country} Base
//                                             </span>
//                                             <h3 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter text-white group-hover/card:text-accent transition-colors italic">{studio.address}</h3>
//                                             <div className="flex flex-col gap-4 text-muted/60 font-medium italic border-l border-white/10 pl-8 mt-4">
//                                                 <a href={`mailto:${studio.email}`} className="hover:text-accent transition-all text-xl tracking-tight">{studio.email}</a>
//                                                 <a href={`tel:${studio.phone}`} className="hover:text-accent transition-all text-xl tracking-tight">{studio.phone}</a>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </FadeIn>
//                             ))}
//                         </div>

//                         <FadeIn direction="up" delay={0.2}>
//                             <div className="p-20 bg-secondary/30 backdrop-blur-[100px] border border-white/5 rounded-[60px] relative overflow-hidden group/id hover:border-accent/30 transition-all duration-1000 shadow-3xl">
//                                 <div className="absolute -right-10 -bottom-10 text-[20vw] font-black text-white/1 group-hover/id:text-accent/5 transition-all duration-1000 pointer-events-none italic select-none leading-none">SPARCELY</div>
//                                 <h4 className="text-accent text-[10px] font-black uppercase tracking-[1em] mb-16 block italic underline decoration-accent/20 underline-offset-10">Corporate Entity Profile</h4>
//                                 <div className="flex flex-col gap-10 relative z-10 max-w-2xl">
//                                     <div className="flex justify-between items-end border-b border-white/5 pb-8 group-hover/id:border-accent/10 transition-colors">
//                                         <span className="text-muted/40 text-[10px] uppercase font-black tracking-[0.4em] leading-none italic">Legal Registration</span>
//                                         <span className="font-black text-2xl uppercase text-right leading-none tracking-tighter text-white italic">{contact.details.companyName}</span>
//                                     </div>
//                                     <div className="flex justify-between items-end border-b border-white/5 pb-8 group-hover/id:border-accent/10 transition-colors">
//                                         <span className="text-muted/40 text-[10px] uppercase font-black tracking-[0.4em] leading-none italic">System Identifier</span>
//                                         <span className="font-black text-2xl uppercase text-right leading-none tracking-tighter text-white italic">{contact.details.companyCode}</span>
//                                     </div>
//                                     <div className="flex justify-between items-start pt-4">
//                                         <span className="text-muted/40 text-[10px] uppercase font-black tracking-[0.4em] leading-none italic">Operational Cycle</span>
//                                         <span className="font-black text-3xl md:text-5xl uppercase text-right leading-[0.85] tracking-tighter text-white italic">
//                                             {contact.details.workingHours.days}<br/>
//                                             <span className="text-accent text-stroke-accent/40">{contact.details.workingHours.from}—{contact.details.workingHours.to}</span>
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         </FadeIn>

//                         <div className="flex flex-wrap gap-12 mt-12 bg-white/2 p-12 rounded-full border border-white/5 w-fit">
//                              {Object.entries(contact.details.socialMedia).map(([key, value], index) => value && (
//                                 <FadeIn key={key} direction="up" delay={0.4 + (index * 0.05)}>
//                                     <a href="#" className="flex items-center gap-6 text-[9px] font-black uppercase tracking-[0.5em] text-muted/60 hover:text-accent transition-all group/soc italic">
//                                         <span className="group-hover:tracking-[1em] transition-all duration-700">{key}</span>
//                                         <div className="w-8 h-px bg-white/10 group-hover:bg-accent group-hover:w-16 transition-all duration-700" />
//                                     </a>
//                                 </FadeIn>
//                              ))}
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* Map Placeholder - MASSIVE IMPACT */}
//             <FadeIn direction="up">
//                 <section className="mt-48 h-[80vh] bg-secondary border-t border-white/5 flex items-center justify-center relative overflow-hidden group/map cursor-crosshair">
//                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=3548&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale group-hover/map:opacity-30 group-hover/map:grayscale-0 group-hover/map:scale-105 transition-all duration-[2s] scale-110" />
//                     <div className="absolute inset-0 bg-accent/2 opacity-0 group-hover/map:opacity-100 transition-opacity duration-1000" />
//                     <div className="relative z-10 flex flex-col items-center gap-12">
//                         <div className="w-48 h-48 rounded-full border border-accent/20 flex items-center justify-center relative group-hover/map:border-accent transition-all duration-1000">
//                              <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping group-hover/map:animate-pulse" />
//                             <div className="w-6 h-6 bg-accent rounded-full shadow-[0_0_50px_rgba(255,90,0,0.8)]" />
//                         </div>
//                         <div className="text-center flex flex-col gap-6">
//                             <p className="text-accent uppercase tracking-[2em] font-black text-sm italic ml-[2em]">Geospatial / Pulse / Locked</p>
//                             <h2 className="text-8xl md:text-[12vw] font-black text-white/5 group-hover/map:text-white/10 transition-all duration-1000 uppercase italic leading-none pointer-events-none select-none">Global Coverage</h2>
//                         </div>
//                     </div>

//                     {/* Liquid Grid Overlays */}
//                     <div className="absolute inset-0 pointer-events-none">
//                         <div className="absolute top-0 left-0 w-full h-px bg-white/5" />
//                         <div className="absolute top-1/4 left-0 w-full h-px bg-white/5" />
//                         <div className="absolute top-2/4 left-0 w-full h-px bg-white/5" />
//                         <div className="absolute top-3/4 left-0 w-full h-px bg-white/5" />
//                         <div className="absolute top-0 left-1/4 h-full w-px bg-white/5" />
//                         <div className="absolute top-0 left-2/4 h-full w-px bg-white/5" />
//                         <div className="absolute top-0 left-3/4 h-full w-px bg-white/5" />
//                     </div>
//                 </section>
//             </FadeIn>
//         </div>
//     );
// };

// export default ContactPage;

const ContactPage = () => {
    return (
        <div>
            <h1>Contact</h1>
        </div>
    );
};

export default ContactPage; 