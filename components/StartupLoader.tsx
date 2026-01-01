"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function StartupLoader() {
    const [text, setText] = useState("INITIALIZING...")
    const [showContent, setShowContent] = useState(false)

    // Glitch effect for text
    useEffect(() => {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*"
        let interval: NodeJS.Timeout

        // Start glitching after the cut (approx 0.8s)
        const startGlitch = setTimeout(() => {
            const glitch = () => {
                let iterations = 0
                const target = "INITIALIZING..."

                interval = setInterval(() => {
                    setText(target.split("").map((letter, index) => {
                        if (index < iterations) {
                            return target[index]
                        }
                        return chars[Math.floor(Math.random() * chars.length)]
                    }).join(""))

                    if (iterations >= target.length) {
                        clearInterval(interval)
                    }

                    iterations += 1 / 3
                }, 30)
            }
            glitch()
        }, 800)

        // Show main content (sword etc) after the flash
        const showTimer = setTimeout(() => {
            setShowContent(true)
        }, 600)

        return () => {
            clearTimeout(startGlitch)
            clearTimeout(showTimer)
            if (interval) clearInterval(interval)
        }
    }, [])

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background overflow-hidden"
            style={{ backgroundColor: "hsl(var(--background))" }}
        >
            {/* Background Grid - Darker for contrast */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#14532d05_1px,transparent_1px),linear-gradient(to_bottom,#14532d05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />

            {/* ENERGY GATHER - Subtle center glow before slash */}
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: [0, 0.5, 0], scale: [0, 2] }}
                transition={{ duration: 0.4, times: [0, 0.5, 1] }}
                className="absolute w-20 h-20 bg-primary/30 blur-3xl rounded-full z-10"
            />

            {/* THE EMERALD ENERGY SLASH */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full md:w-[150%] md:h-[150%] rotate-[-15deg]">
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        <linearGradient id="slashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="20%" stopColor="hsl(var(--primary))" style={{ stopColor: "hsl(var(--primary))" }} />
                            <stop offset="50%" stopColor="white" />
                            <stop offset="80%" stopColor="hsl(var(--primary))" style={{ stopColor: "hsl(var(--primary))" }} />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>

                    {/* The Slash Path - Tapered Crescent */}
                    <motion.path
                        d="M -20,120 Q 50,50 120,-20"
                        fill="none"
                        stroke="url(#slashGradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        filter="url(#glow)"
                        initial={{ pathLength: 0, opacity: 0, strokeWidth: 0 }}
                        animate={{
                            pathLength: [0, 1.2],
                            opacity: [0, 1, 1, 0],
                            strokeWidth: [0, 4, 1, 0]
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "circOut",
                            delay: 0.3
                        }}
                    />

                    {/* Secondary Energy Arcs */}
                    <motion.path
                        d="M -10,110 Q 45,55 110,-10"
                        fill="none"
                        stroke="hsl(var(--primary))"
                        strokeWidth="0.5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: [0, 1], opacity: [0, 0.5, 0] }}
                        transition={{ duration: 0.5, delay: 0.35 }}
                    />
                </svg>
            </div>

            {/* IMPACT PARTICLES */}
            {[...Array(12)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                    animate={{
                        x: (Math.random() - 0.5) * 500,
                        y: (Math.random() - 0.5) * 500,
                        opacity: [0, 1, 0],
                        scale: [0, Math.random() * 1.5, 0]
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.45,
                        ease: "easeOut"
                    }}
                    className="absolute w-1 h-1 bg-primary rounded-full blur-[1px] z-20"
                />
            ))}

            {/* SCREEN SHAKE & FLASH */}
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{
                    x: [0, -10, 10, -5, 5, 0], // Shake
                    opacity: [0, 0.5, 0] // Flash
                }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="absolute inset-0 bg-primary/20 z-40 mix-blend-overlay"
            />

            {/* Main Content Container */}
            {showContent && (
                <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">

                    {/* Shockwave Ring */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0, borderWidth: "10px" }}
                        animate={{ scale: 2, opacity: 0, borderWidth: "0px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="absolute inset-0 border-primary rounded-full z-10"
                    />

                    {/* Rotating Tech Rings */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, rotate: 360 }}
                        transition={{ duration: 10, ease: "linear", opacity: { duration: 0.5 } }}
                        className="absolute inset-0 border border-dashed border-primary/20 rounded-full"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1, rotate: -360 }}
                        transition={{ duration: 15, ease: "linear", opacity: { duration: 0.5 } }}
                        className="absolute inset-12 border border-dotted border-primary/20 rounded-full"
                    />

                    {/* Katana - SNAP Reveal */}
                    <motion.div
                        initial={{ x: -20, y: 20, opacity: 0, scale: 0.9 }}
                        animate={{
                            x: [0, -5, 5, -2, 2, 0],
                            y: [0, 5, -5, 2, -2, 0],
                            opacity: 1,
                            scale: 1
                        }}
                        transition={{
                            duration: 0.4,
                            ease: "backOut",
                        }}
                        className="relative w-48 h-48 md:w-64 md:h-64 z-20"
                    >
                        <Image
                            src="/katana.png"
                            alt="Loading..."
                            fill
                            className="object-contain drop-shadow-[0_0_30px_rgba(34,197,94,0.4)]"
                            priority
                        />
                        {/* Blade Shine */}
                        <motion.div
                            initial={{ left: "-100%", opacity: 0 }}
                            animate={{ left: "200%", opacity: [0, 1, 0] }}
                            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                            className="absolute top-0 bottom-0 w-20 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"
                        />
                    </motion.div>

                    {/* Text - Decodes in */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute -bottom-16 left-0 right-0 text-center"
                    >
                        <div className="flex flex-col items-center gap-2">
                            <span className="text-primary font-heading text-2xl tracking-[0.3em] font-bold text-glow">
                                {text}
                            </span>
                            <motion.div
                                initial={{ width: 0, opacity: 0 }}
                                animate={{ width: "100px", opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="h-0.5 bg-primary/50"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </motion.div>
    )
}