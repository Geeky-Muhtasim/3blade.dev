"use client"

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'
import { containerVariants, getStaggerDelay } from '@/lib/animations'
import { Particles } from './ui/Particles'

export default function SkillsSection() {
    return (
        <section id="skills" className="py-24 lg:py-32 relative">
            {/* Subtle Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent pointer-events-none" />
            
            {/* Particle Effects */}
            <Particles count={4} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" className="mb-12" width="100%">
                    <SectionHeader
                        title="Technical Arsenal"
                        subtitle="Tools and technologies I use to bring ideas to life."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
                    {Object.entries(profile.skills).map(([category, skills], index) => (
                        <ScrollReveal
                            key={category}
                            variant="fadeUp"
                            delay={index * 0.1}
                            width="100%"
                        >
                            <motion.div 
                                className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-all shadow-sm h-full flex flex-col"
                                whileHover={{ 
                                    y: -4,
                                    boxShadow: "0 8px 25px rgba(34, 197, 94, 0.1)"
                                }}
                            >
                            <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                                <motion.span 
                                    className="w-1 h-6 bg-primary rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"
                                    initial={{ height: 0 }}
                                    whileInView={{ height: "1.5rem" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                />
                                {category}
                            </h3>

                            <motion.div 
                                className="flex flex-wrap gap-2 flex-grow content-start"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {skills.map((skill) => (
                                    <motion.span
                                        key={skill}
                                        variants={{
                                            hidden: { opacity: 0, scale: 0.8 },
                                            visible: { opacity: 1, scale: 1 }
                                        }}
                                        whileHover={{ 
                                            scale: 1.1,
                                            borderColor: "hsl(var(--primary))",
                                            boxShadow: "0 0 10px rgba(34, 197, 94, 0.3)"
                                        }}
                                        className="px-3 py-1.5 bg-muted text-foreground text-sm rounded-md border border-border transition-colors cursor-default"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* Divider Line */}
                            <motion.div 
                                className="border-t border-border mt-6 pt-2 w-full"
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                style={{ transformOrigin: "left" }}
                            />
                        </motion.div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
