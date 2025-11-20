"use client"

import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Sword, Book, Shield, Globe } from 'lucide-react'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function ExperienceSection() {
    // Helper to get thematic icon
    const getIcon = (role: string, org: string) => {
        if (role.includes('Cyber') || role.includes('Security')) return <Shield size={20} />
        if (role.includes('Research') || org.includes('University')) return <Book size={20} />
        if (org.includes('Omdena')) return <Globe size={20} />
        return <Sword size={20} />
    }

    return (
        <section id="experience" className="py-24 lg:py-32 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" className="mb-16">
                    <SectionHeader
                        title="Experience"
                        subtitle="My academic and professional journey."
                        className="text-center items-center flex flex-col"
                    />
                </ScrollReveal>

                <div className="relative">
                    {/* Vertical Line with Glow */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 shadow-[0_0_12px_rgba(34,197,94,0.4)] transform -translate-x-1/2" />

                    <div className="space-y-12">
                        {profile.experience.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    "relative flex flex-col md:flex-row gap-8",
                                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                                )}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-background border-2 border-primary rounded-full transform -translate-x-1/2 mt-6 z-10 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(34,197,94,0.6)]">
                                    {getIcon(exp.role, exp.organization)}
                                </div>

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
                                            "flex items-center gap-2 text-muted-foreground mb-4 text-sm",
                                            index % 2 === 0 ? "" : "md:justify-end"
                                        )}>
                                            <Briefcase size={14} />
                                            <span>{exp.organization}</span>
                                            <span>•</span>
                                            <span>{exp.location}</span>
                                        </div>

                                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                                            {exp.description}
                                        </p>

                                        <ul className={cn(
                                            "space-y-2",
                                            index % 2 === 0 ? "" : "md:items-end flex flex-col"
                                        )}>
                                            {exp.responsibilities.slice(0, 2).map((resp, i) => (
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
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
