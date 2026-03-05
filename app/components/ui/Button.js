"use client"
import React from 'react';
import Link from 'next/link';

const Button = ({
    href,
    children,
    variant = 'primary',
    className = '',
    icon,
    onClick,
    external = false
}) => {
    const isLink = !!href;

    // Core next-gen styles: Minimal, sharp, and architectural
    const baseStyles = "relative group inline-flex items-center justify-center font-bold uppercase text-[11px] tracking-[0.2em] transition-all duration-500 overflow-hidden py-5 px-10 border border-white/10";

    const variants = {
        primary: "bg-white text-black border-white",
        outline: "bg-transparent text-white",
        ghost: "bg-transparent text-white/40 border-none px-0 py-2 hover:text-white",
        accent: "bg-accent text-white border-accent",
    };

    const content = (
        <>
            {/* The "Next-Gen" Fill Layer */}
            {variant !== 'ghost' && (
                <div className="absolute inset-0 bg-accent -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.22,1,0.36,1] z-0" />
            )}

            {/* Content Layer */}
            <div className="relative z-10 flex items-center gap-4">
                {/* Optional Technical Prefix */}
                <span className="font-mono text-[9px] opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    //
                </span>

                <span className="group-hover:text-white transition-colors duration-500">
                    {children}
                </span>

                {icon && (
                    <span className="text-accent group-hover:text-white transition-colors duration-500 text-[14px]">
                        {icon}
                    </span>
                )}
            </div>

            {/* Architectural Border Highlight */}
            {variant !== 'ghost' && (
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-700 delay-150 z-20" />
            )}
        </>
    );

    if (isLink) {
        if (external) {
            return (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseStyles} ${variants[variant]} ${className}`}
                >
                    {content}
                </a>
            );
        }
        return (
            <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {content}
        </button>
    );
};

export default Button;
