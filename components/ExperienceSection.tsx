"use client"

import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { Briefcase, GraduationCap, Sword, Book, Shield, Globe, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'
import { useRef } from 'react'

export default function ExperienceSection() {
    const containerRef = useRef<HTMLDivElement>(null)
    
    // Track scroll progress through the experience section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    })
    
    // Smooth spring animation for the timeline
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })
    
    // Transform progress to height percentage
    const timelineHeight = useTransform(springProgress, [0, 1], ["0%", "100%"])
    
    // Helper to get thematic icon
    const getIcon = (role: string, org: string) => {
        if (role.includes('Cyber') || role.includes('Security')) return <Shield size={20} />
        if (role.includes('Research') || org.includes('University')) return <Book size={20} />
        if (org.includes('Omdena')) return <Globe size={20} />
        return <Sword size={20} />
    }

    return (
        <section id="experience" className="py-24 lg:py-32 relative" ref={containerRef}>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" className="mb-12" width="100%">
                    <SectionHeader
                        title="Experience"
                        subtitle="My professional journey and contributions."
                    />
                </ScrollReveal>

                <div className="relative">
                    {/* Static Background Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border/40 transform -translate-x-1/2" />
                    
                    {/* Animated Vertical Line with Glow - Draws as you scroll */}
                    <motion.div 
                        className="absolute left-4 md:left-1/2 top-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 shadow-[0_0_12px_rgba(34,197,94,0.4)] transform -translate-x-1/2 origin-top"
                        style={{ height: timelineHeight }}
                    />

                    <div className="space-y-12">
                        {profile.experience.map((exp, index) => (
                            <ScrollReveal
                                key={exp.id}
                                variant="fadeUp"
                                delay={index * 0.1}
                                width="100%"
                            >
                                <div
                                    className={cn(
                                        "relative flex flex-col md:flex-row gap-8",
                                        index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    )}
                                >
                                {/* Timeline Node */}
                                <motion.div 
                                    className="absolute left-4 md:left-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 mt-6 z-10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(34,197,94,0.6)]"
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: 0.2,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    whileHover={{ 
                                        scale: 1.2,
                                        boxShadow: "0 0 25px rgba(34,197,94,0.8)"
                                    }}
                                >
                                    {getIcon(exp.role, exp.organization)}
                                </motion.div>

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                                    <div className={cn(
                                        "bg-card border border-border rounded-lg p-6 hover:shadow-md shadow-sm transition-all group",
                                        index % 2 === 0 ? "text-left" : "md:text-right text-left"
                                    )}>
                                        {/* Date Badge */}
                                        <div className={cn(
                                            "inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded mb-3 border border-primary/20",
                                            index % 2 === 0 ? "" : "md:ml-auto"
                                        )}>
                                            {exp.period}
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                                            {exp.role}
                                        </h3>

                                        <div className={cn(
                                            "flex flex-col gap-1.5 text-muted-foreground mb-4 text-sm",
                                            index % 2 === 0 ? "items-start" : "md:items-end items-start"
                                        )}>
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={14} className="flex-shrink-0" />
                                                <span className="font-medium text-foreground/80">{exp.organization}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MapPin size={14} className="flex-shrink-0" />
                                                <span>{exp.location}</span>
                                            </div>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <ul className={cn(
                                            "space-y-2",
                                            index % 2 === 0 ? "" : "md:items-end flex flex-col"
                                        )}>
                                            {exp.responsibilities.map((resp, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                    <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                                                    <span>{resp}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side */}
                                <div className="hidden md:block md:w-1/2" />
                            </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
