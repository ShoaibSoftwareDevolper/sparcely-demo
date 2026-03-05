"use client"
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = () => {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        // Fast progress increment to reach 100 within ~6 seconds, leaving 1s for the exit animation
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                const diff = Math.random() * 2;
                return Math.min(prev + diff, 100);
            });
        }, 100);

        const counterInterval = setInterval(() => {
            setCounter(prev => {
                if (prev >= 100) {
                    clearInterval(counterInterval);
                    return 100;
                }
                return prev + 1;
            });
        }, 60); // Roughly 6 seconds to reach 100

        const timeout = setTimeout(() => {
            setIsLoading(false);
            // After 7 seconds total, we hide the screen
        }, 7000);

        return () => {
            clearInterval(interval);
            clearInterval(counterInterval);
            clearTimeout(timeout);
        };
    }, []);

    const words = ["CREATIVITY", "PRECISION", "INNOVATION", "SPARCELY"];

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[99999] bg-background flex flex-col items-center justify-center overflow-hidden"
                    initial={{ opacity: 1 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                >
                    {/* Background Grid Accent */}
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                    </div>

                    {/* Main Content */}
                    <div className="relative z-10 flex flex-col items-center">
                        {/* Shimmering Logo/Word */}
                        <div className="mb-12 overflow-hidden h-20 flex items-center justify-center">
                            <motion.div
                                animate={{
                                    y: [0, -80, -160, -240],
                                }}
                                transition={{
                                    duration: 6,
                                    times: [0, 0.3, 0.6, 0.9],
                                    ease: "easeInOut",
                                    repeat: 0
                                }}
                                className="flex flex-col items-center"
                            >
                                {words.map((word, i) => (
                                    <h2 key={i} className="text-4xl md:text-6xl font-bold tracking-tighter text-white h-20 flex items-center">
                                        {word}
                                    </h2>
                                ))}
                            </motion.div>
                        </div>

                        {/* Progress Container */}
                        <div className="w-64 md:w-96 relative">
                            {/* Number Counter */}
                            <div className="absolute -top-10 right-0 flex items-baseline">
                                <span className="text-6xl md:text-8xl font-black text-white/5 italic select-none">
                                    {Math.floor(counter)}
                                </span>
                                <span className="text-xs font-mono text-accent ml-2 uppercase tracking-widest">
                                    Initializing...
                                </span>
                            </div>

                            {/* Progress Bar Track */}
                            <div className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden relative">
                                {/* Animated Progress Fill */}
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-accent"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.1 }}
                                />

                                {/* Moving Glow */}
                                <motion.div
                                    className="absolute top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                                    animate={{
                                        left: ["-20%", "120%"]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                            </div>

                            {/* Status Text */}
                            <div className="mt-4 flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-muted uppercase">
                                <span>Sparcley System v1.0.4</span>
                                <motion.span
                                    animate={{ opacity: [1, 0.3, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    Loading Assets...
                                </motion.span>
                            </div>
                        </div>
                    </div>

                    {/* Geometric Accents */}
                    <div className="absolute bottom-10 left-10 w-32 h-32 border-l border-b border-white/5 pointer-events-none" />
                    <div className="absolute top-10 right-10 w-32 h-32 border-r border-t border-white/5 pointer-events-none" />

                    {/* Bottom Scanning Line */}
                    <motion.div
                        className="absolute bottom-0 left-0 w-full h-[1px] bg-accent/20"
                        animate={{
                            bottom: ["0%", "100%"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
