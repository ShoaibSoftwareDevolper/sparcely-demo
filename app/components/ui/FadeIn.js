"use client"
import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = React.memo(({ children, delay = 0, direction = 'up', distance = 20, className = "", style = {} }) => {
    const directions = {
        up: { y: distance },
        down: { y: -distance },
        left: { x: distance },
        right: { x: -distance },
    };

    return (
        <motion.div
            initial={{ opacity: 0, ...directions[direction] }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay, 
                ease: [0.25, 0.1, 0.25, 1.0] 
            }}
            className={`will-change-[transform,opacity] ${className}`}
            style={{ ...style, transform: 'translateZ(0)' }}
        >
            {children}
        </motion.div>
    );
});

FadeIn.displayName = 'FadeIn';

export default FadeIn;
