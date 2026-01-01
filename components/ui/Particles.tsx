"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Particle {
    id: number
    x: number
    y: number
    size: number
    duration: number
    delay: number
}

interface ParticlesProps {
    count?: number
    color?: string
    className?: string
}

export function Particles({ count = 5, color = "primary", className = "" }: ParticlesProps) {
    const [particles, setParticles] = useState<Particle[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Check if mobile
        setIsMobile(window.innerWidth < 768)
        
        // Don't render particles on mobile
        if (window.innerWidth < 768) return

        // Generate random particles
        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100, // percentage
            y: Math.random() * 100,
            size: Math.random() * 3 + 1, // 1-4px
            duration: Math.random() * 2 + 1, // 1-3s
            delay: Math.random() * 0.5,
        }))
        
        setParticles(newParticles)
    }, [count])

    // Don't render on mobile
    if (isMobile) return null

    const colorClasses = {
        primary: "bg-primary",
        white: "bg-white",
        green: "bg-primary",
    }

    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary}`}
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        boxShadow: "0 0 10px rgba(34, 197, 94, 0.6)",
                    }}
                    initial={{ 
                        opacity: 0, 
                        scale: 0,
                        y: 0,
                    }}
                    animate={{
                        opacity: [0, 1, 1, 0],
                        scale: [0, 1, 1, 0],
                        y: [0, -50, -100],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        ease: "easeOut",
                    }}
                />
            ))}
        </div>
    )
}

// Simpler ambient particles for background
export function AmbientParticles({ count = 20 }: { count?: number }) {
    const [particles, setParticles] = useState<Particle[]>([])
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
        if (window.innerWidth < 768) return

        const newParticles: Particle[] = Array.from({ length: count }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 2 + 0.5,
            duration: Math.random() * 5 + 3,
            delay: Math.random() * 2,
        }))
        
        setParticles(newParticles)
    }, [count])

    if (isMobile) return null

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-primary"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        filter: "blur(1px)",
                    }}
                    animate={{
                        opacity: [0.2, 0.8, 0.2],
                        scale: [1, 1.5, 1],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    )
}

