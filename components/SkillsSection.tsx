"use client"

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 lg:py-32 relative">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" className="mb-12" width="100%">
                    <SectionHeader
                        title="Technical Arsenal"
                        subtitle="Tools and technologies I use to bring ideas to life."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {Object.entries(profile.skills).map(([category, skills], index) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card border border-border rounded-lg p-6 hover:border-primary/20 transition-colors shadow-sm"
                        >
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <span className="w-1 h-6 bg-primary rounded-full" />
                                {category}
                            </h3>

                            <div className="flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md border border-border hover:border-primary/30 transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Divider Line */}
                            <div className="border-t border-border mt-6 pt-2 w-full" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
