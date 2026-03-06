"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Mail, Phone, Clock } from 'lucide-react';

const ContactSection = ({ details }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Web Development',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [focused, setFocused] = useState(null);

    const services = ["Web Development", "E-Commerce", "Digital Care", "CRM", "Branding"];

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
    };

    return (
        <section id="contact-form" className="site-padding py-40 bg-background border-t border-white/5 relative overflow-hidden">
            {/* Architectural Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />

            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* LEFT: Info Panel */}
                    <div className="space-y-20">
                        <div className="space-y-8">
                            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">// STAGE_01 — BRIEF</span>
                            <h2 className="text-6xl md:text-[5vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                                Start the <br /><span className="text-stroke" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)', color: 'transparent' }}>Dialogue.</span>
                            </h2>
                            <p className="text-xl text-white/40 font-medium leading-relaxed max-w-md">
                                We respond to every inquiry within 24 business hours. No generic replies — a dedicated strategist will review your brief.
                            </p>
                        </div>

                        {/* Contact Info Rows */}
                        <div className="space-y-0 border-t border-white/5">
                            {details && [
                                { icon: <Mail className="w-4 h-4" />, label: 'Electronic Mail', value: details.studios[0].email, href: `mailto:${details.studios[0].email}` },
                                { icon: <Phone className="w-4 h-4" />, label: 'Voice Line', value: details.studios[0].phone, href: `tel:${details.studios[0].phone}` },
                                { icon: <Clock className="w-4 h-4" />, label: 'Working Hours', value: `${details.workingHours.days}, ${details.workingHours.from}–${details.workingHours.to}`, href: null },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-8 py-7 border-b border-white/5 group">
                                    <span className="text-accent">{item.icon}</span>
                                    <div className="flex-1">
                                        <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] block mb-1">{item.label}</span>
                                        {item.href ? (
                                            <a href={item.href} className="text-base font-bold text-white/60 hover:text-accent transition-colors uppercase tracking-wide">{item.value}</a>
                                        ) : (
                                            <span className="text-base font-bold text-white/60 uppercase tracking-wide">{item.value}</span>
                                        )}
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-white/10 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: 3D Floating Form Card */}
                    <div className="flex items-center justify-center lg:justify-end perspective-[1200px]">
                        <div
                            style={{
                                transformStyle: "preserve-3d",
                                transform: "rotateY(-8deg) rotateX(4deg)",
                            }}
                            className="w-full max-w-[560px] bg-accent"
                        >
                            <motion.div
                                initial={{ transform: "translateZ(8px) translateY(-2px)" }}
                                animate={{ transform: "translateZ(24px) translateY(-6px)" }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 3,
                                    ease: "easeInOut",
                                }}
                                className="relative w-full border-2 border-b-4 border-r-4 border-white/40 border-l-white/10 border-t-white/10 bg-[#0f0f0f] p-10"
                            >
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.form
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.98 }}
                                            onSubmit={handleSubmit}
                                            className="space-y-10"
                                        >
                                            {/* Form Header */}
                                            <div className="flex items-center gap-3 pb-8 border-b border-white/5">
                                                <div className="flex gap-1.5">
                                                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-accent/60" />)}
                                                </div>
                                                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">PROJECT_BRIEF // SECURE_FORM</span>
                                            </div>

                                            {/* Name + Email */}
                                            <div className="grid grid-cols-2 gap-8">
                                                {[
                                                    { name: 'name', label: 'Identity', type: 'text', placeholder: 'Full Name' },
                                                    { name: 'email', label: 'E-Mail', type: 'email', placeholder: 'your@email.com' },
                                                ].map(field => (
                                                    <div key={field.name} className="relative">
                                                        <label className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent block mb-3">{field.label}</label>
                                                        <input
                                                            type={field.type}
                                                            name={field.name}
                                                            required
                                                            value={formData[field.name]}
                                                            onChange={handleChange}
                                                            onFocus={() => setFocused(field.name)}
                                                            onBlur={() => setFocused(null)}
                                                            placeholder={field.placeholder}
                                                            className={`w-full bg-white/3 border-b py-3 text-base font-medium focus:outline-none transition-colors placeholder:text-white/10 ${focused === field.name ? 'border-accent text-white' : 'border-white/10 text-white/60'}`}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Service Selector */}
                                            <div>
                                                <label className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent block mb-4">Service Category</label>
                                                <div className="grid grid-cols-3 gap-0 border border-white/5">
                                                    {services.map(s => (
                                                        <button
                                                            key={s} type="button"
                                                            onClick={() => setFormData({ ...formData, service: s })}
                                                            className={`p-3 text-[9px] font-bold uppercase tracking-widest border border-white/5 transition-all ${formData.service === s ? 'bg-accent text-white' : 'text-white/30 hover:bg-white/5'}`}
                                                        >
                                                            {s}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent block mb-3">Project Brief</label>
                                                <textarea
                                                    name="message"
                                                    required
                                                    rows={3}
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    onFocus={() => setFocused('message')}
                                                    onBlur={() => setFocused(null)}
                                                    placeholder="Describe your vision..."
                                                    className={`w-full bg-transparent border-b py-3 text-base font-medium focus:outline-none resize-none transition-colors placeholder:text-white/10 ${focused === 'message' ? 'border-accent text-white' : 'border-white/10 text-white/60'}`}
                                                />
                                            </div>

                                            {/* Submit */}
                                            <button
                                                type="submit"
                                                className="group w-full flex items-center justify-between px-8 py-6 bg-accent text-white border border-accent hover:bg-transparent hover:text-accent transition-all duration-500 relative overflow-hidden"
                                            >
                                                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Transmit Brief</span>
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                                <div className="absolute inset-0 bg-white/10 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500" />
                                            </button>
                                        </motion.form>
                                    ) : (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            className="min-h-[500px] flex flex-col items-start justify-center gap-8"
                                        >
                                            <div className="flex gap-1.5">
                                                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />)}
                                            </div>
                                            <h3 className="text-6xl font-black uppercase tracking-tight leading-none">BRIEF<br /><span className="text-accent">RECEIVED.</span></h3>
                                            <p className="text-white/40 font-medium text-lg leading-relaxed max-w-xs">A project strategist is reviewing your submission and will be in contact soon.</p>
                                            <button onClick={() => setIsSubmitted(false)} className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/30 border-b border-white/20 pb-1 hover:text-accent hover:border-accent transition-colors">Submit Another →</button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
