"use client"

import React from 'react'
import { motion } from 'framer-motion'

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
    return (
        <div className={`mb-12 md:text-center ${className}`}>
            <div className="flex flex-row items-center justify-start md:justify-center gap-3 sm:gap-4 mb-4">
                {/* Animated Green Bar with Extension Effect */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    whileInView={{ height: "2rem", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                        duration: 0.5,
                        ease: "easeOut"
                    }}
                    className="relative w-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                >
                    {/* Pulsing glow effect */}
                    <motion.div
                        className="absolute inset-0 bg-primary rounded-full"
                        animate={{
                            boxShadow: [
                                "0 0 8px rgba(34,197,94,0.4)",
                                "0 0 16px rgba(34,197,94,0.6)",
                                "0 0 8px rgba(34,197,94,0.4)",
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
                
                {/* Title with Blade Shine Effect */}
                <div className="relative overflow-hidden">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                        {title}
                    </h2>
                    
                    {/* Blade Shine Sweep */}
                    <motion.div
                        initial={{ x: "-200%" }}
                        whileInView={{ x: "200%" }}
                        viewport={{ once: true }}
                        transition={{ 
                            duration: 1.2,
                            delay: 0.3,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 bottom-0 w-12 bg-gradient-to-r from-transparent via-primary/30 to-transparent skew-x-[-20deg] pointer-events-none"
                        style={{
                            filter: "blur(8px)",
                        }}
                    />
                </div>
            </div>
            {subtitle && (
                <motion.p 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-foreground/70 text-base sm:text-lg md:text-xl max-w-3xl md:mx-auto"
                >
                    {subtitle}
                </motion.p>
            )}
        </div>
    )
}
