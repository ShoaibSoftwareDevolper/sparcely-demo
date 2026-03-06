"use client";
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

/* ── Simplified continent coordinate outlines (lon/lat pairs) ── */
const CONTINENTS = [
    // North America
    [[-168, 72], [-140, 72], [-130, 65], [-120, 60], [-115, 50], [-100, 50], [-85, 47], [-80, 40], [-70, 30], [-60, 18], [-70, 10], [-85, 10], [-90, 16], [-97, 20], [-105, 22], [-118, 28], [-120, 35], [-125, 48], [-130, 55], [-140, 58], [-168, 60], [-168, 72]],
    // South America
    [[-82, 10], [-70, 12], [-60, 6], [-50, -5], [-35, -8], [-35, -25], [-55, -35], [-68, -55], [-75, -50], [-80, -40], [-80, -20], [-82, 10]],
    // Europe
    [[-10, 36], [10, 36], [28, 38], [35, 40], [40, 45], [35, 52], [28, 58], [18, 65], [8, 57], [2, 51], [-5, 48], [-10, 43], [-10, 36]],
    // Africa
    [[-18, 15], [-5, 5], [5, -2], [15, -30], [28, -35], [45, -25], [52, -10], [55, 10], [45, 12], [42, 20], [36, 22], [35, 32], [25, 37], [10, 37], [0, 30], [-5, 20], [-18, 15]],
    // Asia (simplified - mainland)
    [[25, 70], [60, 75], [105, 75], [140, 72], [145, 55], [135, 35], [130, 25], [120, 18], [105, 10], [100, 2], [100, 10], [90, 22], [85, 28], [72, 22], [60, 22], [50, 30], [40, 38], [35, 45], [35, 52], [28, 58], [40, 65], [55, 68], [80, 72], [25, 70]],
    // Japan islands (small)
    [[130, 30], [132, 35], [140, 40], [142, 43], [135, 44], [130, 35], [130, 30]],
    // Australia
    [[114, -32], [125, -15], [138, -12], [142, -10], [150, -22], [155, -28], [152, -37], [148, -38], [140, -38], [130, -33], [121, -30], [114, -32]],
    // Greenland (simplified)
    [[-52, 82], [-20, 83], [-15, 75], [-20, 70], [-30, 65], [-48, 65], [-54, 70], [-52, 82]],
    // UK (simplified)
    [[-5, 50], [2, 51], [2, 52], [0, 57], [-4, 58], [-5, 56], [-3, 52], [-5, 50]],
];

const STUDIOS = [
    { label: 'LONDON', lat: 51.5, lon: -0.12, flag: '🇬🇧', coords: '51.5074° N, 0.1278° W' },
    { label: 'VILNIUS', lat: 54.7, lon: 25.28, flag: '🇱🇹', coords: '54.6872° N, 25.2797° E' },
];

const toRad = d => d * Math.PI / 180;

function project3D(lat, lon, rotY) {
    const phi = toRad(90 - lat);
    const theta = toRad(lon + rotY);
    const x = Math.sin(phi) * Math.cos(theta);
    const y = Math.cos(phi);
    const z = Math.sin(phi) * Math.sin(theta);
    return { x, y, z, visible: z > -0.1 };
}

function drawGlobe(ctx, rotY, W, H) {
    const cx = W / 2, cy = H / 2;
    const R = Math.min(W, H) / 2 - 10;
    ctx.clearRect(0, 0, W, H);

    // ── Sphere base ──
    const bg = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.3, R * 0.1, cx, cy, R);
    bg.addColorStop(0, '#1c1c1c');
    bg.addColorStop(1, '#080808');
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = bg;
    ctx.fill();

    // ── Grid lines ──
    ctx.save();
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.clip();

    // Meridians
    for (let lon = 0; lon < 360; lon += 30) {
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 3) {
            const p = project3D(lat, lon, rotY);
            const px = cx + p.x * R, py = cy - p.y * R;
            const facingOpacity = Math.max(0, p.z);
            if (first) { ctx.moveTo(px, py); first = false; }
            else ctx.lineTo(px, py);
        }
        const normalised = ((lon + rotY) % 360 + 360) % 360;
        const opacity = 0.04 + 0.12 * Math.max(0, Math.cos(toRad(normalised)));
        ctx.strokeStyle = `rgba(231,116,21,${opacity})`;
        ctx.lineWidth = 0.7;
        ctx.stroke();
    }

    // Parallels
    for (const lat of [-60, -30, 0, 30, 60]) {
        ctx.beginPath();
        let first = true;
        for (let lon2 = 0; lon2 <= 360; lon2 += 3) {
            const p = project3D(lat, lon2, rotY);
            const px = cx + p.x * R, py = cy - p.y * R;
            if (first) { ctx.moveTo(px, py); first = false; }
            else ctx.lineTo(px, py);
        }
        ctx.strokeStyle = 'rgba(231,116,21,0.06)';
        ctx.lineWidth = 0.7;
        ctx.stroke();
    }

    // ── Continent Fills ──
    for (const continent of CONTINENTS) {
        // Sort by avg z to skip hidden side
        let totalZ = 0;
        for (const [lon2, lat] of continent) {
            const p = project3D(lat, lon2, rotY);
            totalZ += p.z;
        }
        ctx.beginPath();
        let first = true;
        let prevVisible = false;
        for (const [lon2, lat] of continent) {
            const p = project3D(lat, lon2, rotY);
            const px = cx + p.x * R, py = cy - p.y * R;
            if (first) { ctx.moveTo(px, py); first = false; prevVisible = p.visible; }
            else {
                if (p.visible || prevVisible) ctx.lineTo(px, py);
                else ctx.moveTo(px, py);
                prevVisible = p.visible;
            }
        }
        ctx.closePath();
        ctx.fillStyle = 'rgba(231,116,21,0.12)';
        ctx.fill();
        ctx.strokeStyle = 'rgba(231,116,21,0.35)';
        ctx.lineWidth = 0.6;
        ctx.stroke();
    }

    ctx.restore();

    // ── Studio Location Dots ──
    for (const s of STUDIOS) {
        const p = project3D(s.lat, s.lon, rotY);
        if (p.z < 0) continue; // Behind globe
        const px = cx + p.x * R;
        const py = cy - p.y * R;
        const scale = 0.5 + 0.5 * p.z;
        const t = Date.now() / 1000;
        const pulse = 0.5 + 0.5 * Math.sin(t * 3);

        // Outer glow ring (pulsing)
        const outerR = (12 + pulse * 8) * scale;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, outerR);
        glow.addColorStop(0, `rgba(231,116,21,${0.5 * scale})`);
        glow.addColorStop(1, 'rgba(231,116,21,0)');
        ctx.beginPath();
        ctx.arc(px, py, outerR, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Middle ring
        ctx.beginPath();
        ctx.arc(px, py, 6 * scale, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(231,116,21,${0.7 * scale})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, 3.5 * scale, 0, Math.PI * 2);
        ctx.fillStyle = '#e77415';
        ctx.fill();
    }

    // ── Sphere rim ──
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(231,116,21,0.2)';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // ── Specular shine ──
    const shine = ctx.createRadialGradient(cx - R * 0.35, cy - R * 0.35, 0, cx - R * 0.2, cy - R * 0.2, R * 0.8);
    shine.addColorStop(0, 'rgba(255,255,255,0.08)');
    shine.addColorStop(0.5, 'rgba(255,255,255,0.02)');
    shine.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.beginPath();
    ctx.arc(cx, cy, R, 0, Math.PI * 2);
    ctx.fillStyle = shine;
    ctx.fill();
}

const Globe = () => {
    const canvasRef = useRef(null);
    const rafRef = useRef(null);
    const rotYRef = useRef(20);

    const animate = useCallback(() => {
        rotYRef.current = (rotYRef.current + 0.08) % 360;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        drawGlobe(ctx, rotYRef.current, canvas.width, canvas.height);
        rafRef.current = requestAnimationFrame(animate);
    }, []);

    useEffect(() => {
        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [animate]);

    return (
        <div className="relative">
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-[80px] scale-75 translate-y-10" />
            <canvas
                ref={canvasRef}
                width={450}
                height={450}
                className="relative z-10 w-full max-w-[450px] mx-auto"
            />
        </div>
    );
};

const StudioCard = ({ studio, meta }) => {
    if (!studio || !meta) return null;
    return (
        <div className="space-y-8 group">
            <div className="space-y-3">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{meta.flag}</span>
                    <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-accent">{meta.label}</span>
                </div>
                <h3 className="text-4xl font-black uppercase tracking-[-0.03em] leading-none text-white">{meta.label}</h3>
                <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest block">{meta.coords}</span>
            </div>

            <div className="h-px bg-white/5 group-hover:bg-accent/30 transition-colors duration-500" />

            <div className="space-y-5">
                <div className="flex gap-4 items-start">
                    <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <p className="text-sm text-white/50 leading-relaxed font-medium">{studio.address}</p>
                </div>
                <div className="flex gap-4 items-center">
                    <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href={`mailto:${studio.email}`} className="text-sm text-white/50 hover:text-accent transition-colors font-medium">{studio.email}</a>
                </div>
                <div className="flex gap-4 items-center">
                    <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                    <a href={`tel:${studio.phone}`} className="text-sm text-white/50 hover:text-accent transition-colors font-medium">{studio.phone}</a>
                </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
                <span className="w-2 h-2 bg-accent animate-pulse" />
                {/* <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">Online Now</span> */}
            </div>
        </div>
    );
};

const StudioLocations = ({ studios }) => {
    return (
        <section className="site-padding py-40 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}
            />

            <div className="max-w-[1600px] mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 mb-28">
                    <div>
                        <span className="text-accent font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">// Global Presence</span>
                        <h2 className="text-6xl md:text-[7vw] font-black uppercase tracking-[-0.04em] leading-[0.9] text-white">
                            Our <br />
                            <span className="text-stroke" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.25)', color: 'transparent' }}>Studios.</span>
                        </h2>
                    </div>
                    <p className="text-xl text-white/30 font-medium max-w-sm leading-relaxed">
                        Two strategic outposts. One global mission.
                    </p>
                </div>

                {/* Globe + Cards */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="lg:col-span-3 border border-white/5 bg-white/[0.01] p-10 self-start"
                    >
                        <StudioCard studio={studios?.[0]} meta={STUDIOS[0]} />
                    </motion.div>

                    <div className="lg:col-span-6 flex items-center justify-center py-12 lg:py-0">
                        <Globe />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
                        className="lg:col-span-3 border border-white/5 bg-white/[0.01] p-10 self-start"
                    >
                        <StudioCard studio={studios?.[1]} meta={STUDIOS[1]} />
                    </motion.div>
                </div>

                {/* Coordinate footer */}
                <div className="mt-24 pt-10 border-t border-white/5 flex flex-wrap items-center justify-between gap-6">
                    {STUDIOS.map((s) => (
                        <span key={s.label} className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/15 flex items-center gap-3">
                            <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
                            {s.label} // {s.coords}
                        </span>
                    ))}
                    <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-white/10">
                        WGS84 · UTC+0 / UTC+2
                    </span>
                </div>
            </div>
        </section>
    );
};

export default StudioLocations;
