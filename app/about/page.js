"use client";
import React, { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

/* ═══════════════════════════════════════════════
   CANVAS: Software Creation Visualization
   Draws an animated dependency graph / neural net
   representing the process of building software.
═══════════════════════════════════════════════ */

const LAYERS = [
    { label: 'DISCOVERY', nodes: 2, color: 'rgba(231,116,21,0.9)' },
    { label: 'ARCHITECTURE', nodes: 4, color: 'rgba(231,116,21,0.7)' },
    { label: 'DEVELOPMENT', nodes: 6, color: 'rgba(231,116,21,0.5)' },
    { label: 'TESTING', nodes: 4, color: 'rgba(231,116,21,0.7)' },
    { label: 'DEPLOYMENT', nodes: 2, color: 'rgba(231,116,21,0.9)' },
];

function buildGraph(W, H) {
    const layers = [];
    const padX = W * 0.08;
    const usableW = W - padX * 2;
    const usableH = H - 80;
    const startY = 50;

    LAYERS.forEach((layer, li) => {
        const x = padX + (li / (LAYERS.length - 1)) * usableW;
        const nodes = [];
        for (let ni = 0; ni < layer.nodes; ni++) {
            const yFrac = layer.nodes === 1 ? 0.5 : ni / (layer.nodes - 1);
            const y = startY + yFrac * usableH;
            nodes.push({ x, y, r: 5, phase: Math.random() * Math.PI * 2, speed: 0.8 + Math.random() * 0.6, li, ni });
        }
        layers.push({ ...layer, x, nodes });
    });

    // Build edges: connect each node to all nodes in next layer
    const edges = [];
    for (let li = 0; li < layers.length - 1; li++) {
        for (const src of layers[li].nodes) {
            for (const dst of layers[li + 1].nodes) {
                edges.push({ src, dst, phase: Math.random() * Math.PI * 2, speed: 0.5 + Math.random() });
            }
        }
    }
    return { layers, edges };
}

function drawSoftwareViz(ctx, graph, t, W, H) {
    ctx.clearRect(0, 0, W, H);

    const { layers, edges } = graph;

    // ── Edges ──
    for (const edge of edges) {
        const { src, dst, phase, speed } = edge;
        const progress = (Math.sin(t * speed * 0.001 + phase) + 1) / 2;

        // Static edge line
        ctx.beginPath();
        ctx.moveTo(src.x, src.y);
        // Bezier with midpoint ctrl
        const cx1 = src.x + (dst.x - src.x) * 0.4;
        const cy1 = src.y;
        const cx2 = src.x + (dst.x - src.x) * 0.6;
        const cy2 = dst.y;
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, dst.x, dst.y);
        ctx.strokeStyle = 'rgba(231,116,21,0.07)';
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Animated pulse packet along the edge
        const px = bezierPoint(src.x, cx1, cx2, dst.x, progress);
        const py = bezierPoint(src.y, cy1, cy2, dst.y, progress);
        const packetGlow = ctx.createRadialGradient(px, py, 0, px, py, 8);
        packetGlow.addColorStop(0, 'rgba(231,116,21,0.8)');
        packetGlow.addColorStop(1, 'rgba(231,116,21,0)');
        ctx.beginPath();
        ctx.arc(px, py, 8, 0, Math.PI * 2);
        ctx.fillStyle = packetGlow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#e77415';
        ctx.fill();
    }

    // ── Nodes ──
    for (const layer of layers) {
        for (const node of layer.nodes) {
            const pulse = 0.6 + 0.4 * Math.sin(t * node.speed * 0.001 + node.phase);
            const r = node.r * (0.9 + 0.3 * pulse);

            // Outer glow
            const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, r * 4);
            glow.addColorStop(0, `rgba(231,116,21,${0.3 * pulse})`);
            glow.addColorStop(1, 'rgba(231,116,21,0)');
            ctx.beginPath();
            ctx.arc(node.x, node.y, r * 4, 0, Math.PI * 2);
            ctx.fillStyle = glow;
            ctx.fill();

            // Ring
            ctx.beginPath();
            ctx.arc(node.x, node.y, r * 1.8, 0, Math.PI * 2);
            ctx.strokeStyle = `rgba(231,116,21,${0.3 * pulse})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Core
            ctx.beginPath();
            ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
            ctx.fillStyle = '#e77415';
            ctx.fill();
        }
    }

    // ── Layer Labels ──
    ctx.save();
    for (const layer of layers) {
        const topY = layer.nodes.reduce((m, n) => Math.min(m, n.y), Infinity);
        ctx.fillStyle = 'rgba(231,116,21,0.5)';
        ctx.font = '600 9px monospace';
        ctx.letterSpacing = '0.4em';
        ctx.textAlign = 'center';
        ctx.fillText(layer.label, layer.x, topY - 20);
    }
    ctx.restore();
}

function bezierPoint(p0, p1, p2, p3, t) {
    const mt = 1 - t;
    return mt * mt * mt * p0 + 3 * mt * mt * t * p1 + 3 * mt * t * t * p2 + t * t * t * p3;
}

const SoftwareViz = () => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const graphRef = useRef(null);

    const animate = useCallback((t) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        if (!graphRef.current) {
            graphRef.current = buildGraph(canvas.width, canvas.height);
        }
        const ctx = canvas.getContext('2d');
        drawSoftwareViz(ctx, graphRef.current, t, canvas.width, canvas.height);
        rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [animate]);

    return (
        <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-accent/5 blur-[80px] scale-75" />
            <canvas
                ref={canvasRef}
                width={680}
                height={400}
                className="relative z-10 w-full h-full"
            />
        </div>
    );
};

/* ═══════════════════════════════════════════════
   ABOUT HERO
═══════════════════════════════════════════════ */
const AboutHeroNew = ({ heading, subheading }) => {
    return (
        <section className="relative pt-[350px] pb-20 overflow-hidden bg-[#0b0b0b]">
            {/* Grid */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-[0.03]"
                style={{ backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            />

            {/* Ghost BG */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0 overflow-hidden">
                <motion.h2
                    initial={{ opacity: 0 }} animate={{ opacity: 0.025 }}
                    transition={{ duration: 2 }}
                    className="text-[30vw] font-black uppercase tracking-tighter leading-none text-white select-none whitespace-nowrap"
                >
                    ABOUT
                </motion.h2>
            </div>

            <div className="site-padding relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-end">
                    {/* LEFT */}
                    <div className="lg:col-span-7 flex flex-col">
                        <div className="flex items-center gap-4 mb-10">
                            <motion.span initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">// ABOUT_SPARCLEY</motion.span>
                            <div className="h-px w-20 bg-white/10" />
                            <motion.span initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-white/30 font-mono text-[10px] tracking-[0.4em] uppercase">EST. 2009</motion.span>
                        </div>

                        <div className="overflow-hidden mb-4">
                            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                                className="text-7xl md:text-[9vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                                We Build <br />
                                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>Digital</span>
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-14">
                            <motion.h1 initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.9, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
                                className="text-7xl md:text-[9vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-accent">
                                Excellence.
                            </motion.h1>
                        </div>

                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                            className="flex flex-col md:flex-row items-start md:items-center gap-10">
                            <p className="text-xl text-white/40 max-w-sm font-medium leading-relaxed">{subheading}. Driven by precision and a relentless pursuit of quality.</p>
                            <Link href="/contact" className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] border border-white/20 text-white/60 hover:border-accent hover:text-accent transition-all duration-300 px-8 py-4 group">
                                Work With Us <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* RIGHT: Metadata */}
                    <div className="lg:col-span-5 hidden lg:flex flex-col items-end justify-end gap-10 pb-2">
                        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex flex-col gap-8 items-end">
                            {[['15+', 'Years Active'], ['200+', 'Projects Shipped'], ['2', 'Global Studios'],].map(([val, label]) => (
                                <div key={label} className="flex flex-col items-end">
                                    <span className="text-5xl font-black text-accent leading-none">{val}</span>
                                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em] mt-1">{label}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Bottom line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            {/* Corner HUD */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-white/5 z-20 hidden lg:block" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-white/5 z-20 hidden lg:block" />
            {/* Side metadata */}
            <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-12 z-30 items-center">
                <span className="vertical-text text-[9px] font-mono uppercase tracking-[0.5em] text-white/20">London Based Agency</span>
                <div className="w-px h-24 bg-white/10" />
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════════════
   PROCESS VISUALIZATION SECTION
═══════════════════════════════════════════════ */
const ProcessSection = ({ whyChooseUs }) => {
    return (
        <section className="site-padding py-40 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Left: Viz */}
                    <div className="lg:col-span-7">
                        <div className="flex items-center gap-4 mb-4">
                            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase">// BUILD_PROCESS</span>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <h2 className="text-5xl md:text-[4vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white mb-16">
                            How We <br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>Create.</span>
                        </h2>
                        <div className='h-5'></div>
                        {/* Canvas Visualization */}
                        <div className="border border-white/5 bg-white/[0.01] p-4 relative overflow-hidden" style={{ height: 380 }}>
                            <div className="absolute top-3 left-4 flex items-center gap-3 z-10">
                                <div className="flex gap-1.5">
                                    {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 bg-accent/60" />)}
                                </div>
                                <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/20">SPARCLEY_ENGINE_V2.0 // LIVE</span>
                            </div>
                            <div className="w-full h-full pt-8">
                                <SoftwareViz />
                            </div>
                        </div>
                    </div>

                    {/* Right: Strengths */}
                    <div className="lg:col-span-5 space-y-0">
                        <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase block mb-10">// CORE_STRENGTHS</span>
                        {whyChooseUs.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.08, duration: 0.6 }}
                                className="group flex items-start gap-8 py-8 border-b border-white/5 hover:border-accent/20 transition-colors"
                            >
                                <span className="text-[10px] font-mono text-white/20 mt-1 w-8 flex-shrink-0">0{idx + 1}</span>
                                <p className="text-lg font-bold text-white/60 group-hover:text-white uppercase tracking-tight leading-tight transition-colors">{item}</p>
                                <ArrowUpRight className="w-4 h-4 text-white/10 group-hover:text-accent ml-auto mt-1 flex-shrink-0 transition-colors" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════════════
   IDENTITY SECTION
═══════════════════════════════════════════════ */
const IdentitySection = ({ description, philosophy, benefits }) => {
    return (
        <section className="site-padding py-40 bg-background border-t border-white/5">
            <div className="max-w-[1600px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left label */}
                    <div className="lg:col-span-4 border-r border-white/5 pr-16 flex flex-col justify-between">
                        <div>
                            <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase block mb-12">// OUR_IDENTITY</span>
                            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                                Who <br />We <br />
                                <span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>Are.</span>
                            </h2>
                        </div>
                        <div className="mt-20 hidden lg:block">
                            <div className="w-16 h-px bg-accent mb-4" />
                            <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">SPARCLEY STUDIO // LONDON</span>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="lg:col-span-8 pl-0 lg:pl-20 pt-16 lg:pt-0 space-y-20">
                        <p className="text-2xl md:text-4xl font-medium text-white leading-[1.2]">{description}</p>

                        <div className="border-l border-accent/30 pl-10">
                            <p className="text-xl text-white/40 italic font-light leading-relaxed">&ldquo;{philosophy}&rdquo;</p>
                            <div className="flex items-center gap-4 mt-6">
                                <div className="w-8 h-px bg-white/10" />
                                <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">Design Philosophy</span>
                            </div>
                        </div>

                        {/* Benefits */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/5">
                            {benefits.map((b, i) => (
                                <div key={i} className="p-10 border-r border-b border-white/5 last:border-r-0 group hover:bg-white/[0.02] transition-colors">
                                    <span className="w-2 h-2 bg-accent block mb-6 animate-pulse" />
                                    <p className="text-2xl font-black uppercase tracking-tight text-white group-hover:text-accent transition-colors">{b}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════════════
   MISSION SECTION (redesigned)
═══════════════════════════════════════════════ */
const MissionSectionNew = ({ mission }) => {
    return (
        <section className="site-padding py-40 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 blur-[120px] pointer-events-none" />
            <div className="max-w-[1600px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-28">
                    <div>
                        <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">// CORE_PROTOCOLS</span>
                        <h2 className="text-6xl md:text-[7vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                            Mission <br /><span style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>&amp; Vision.</span>
                        </h2>
                    </div>
                    <span className="text-[9px] font-mono text-white/20 uppercase tracking-[0.4em]">SPARCLEY_ENGINE_V1.0</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-t border-white/5">
                    {mission.map((point, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group border-r border-b border-white/5 p-14 relative overflow-hidden hover:bg-white/[0.02] transition-colors"
                        >
                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-0 w-full h-1 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                            <div className="flex justify-between items-start mb-10">
                                <span className="text-[60px] font-black leading-none text-white/5 group-hover:text-accent/20 transition-colors font-mono">0{idx + 1}</span>
                                <span className="text-[8px] font-mono text-white/20 uppercase tracking-widest border border-white/5 px-3 py-1">ACTIVE_PROTOCOL</span>
                            </div>
                            <p className="text-2xl md:text-3xl font-bold text-white leading-tight uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-500">{point}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

/* ═══════════════════════════════════════════════
   ASSEMBLED ABOUT PAGE
═══════════════════════════════════════════════ */
import data from '@/app/api/data.js';

const AboutPage = () => {
    const aboutData = data.pages.about;
    const companyData = data.company;

    return (
        <div className="flex flex-col bg-background">
            <div className="h-15 md:h-20" />
            <AboutHeroNew heading={aboutData.heading} subheading={aboutData.subheading} />

            <div className="h-24 md:h-40" />

            <ProcessSection whyChooseUs={aboutData.whyChooseUs} />

            <div className="h-24 md:h-40" />

            <IdentitySection description={aboutData.description} philosophy={aboutData.philosophy} benefits={aboutData.benefits} />

            <div className="h-24 md:h-40" />

            <MissionSectionNew mission={companyData.mission} />

            <div className="h-32 md:h-40" />
        </div>
    );

};

export default AboutPage;
