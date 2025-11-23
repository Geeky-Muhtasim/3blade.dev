"use client"

import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function EducationSection() {
    return (
        <section id="education" className="py-24 lg:py-32 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <SectionHeader
                    title="Education"
                    subtitle="Academic background and scholarly achievements."
                    className="mb-16"
                />

                <div className="space-y-8">
                    {profile.education.map((edu, index) => (
                        <ScrollReveal
                            key={index}
                            variant="fadeUp"
                            delay={index * 0.1}
                            width="100%"
                        >
                            <div className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-colors relative overflow-hidden group shadow-sm">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                                <div className="flex flex-col md:flex-row gap-6 justify-between items-start relative z-10">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <GraduationCap className="text-primary" size={28} />
                                            <h3 className="text-2xl font-heading font-bold text-foreground">
                                                {edu.degree}
                                            </h3>
                                        </div>
                                        <p className="text-xl text-muted-foreground font-medium mb-4">
                                            {edu.institution}
                                        </p>

                                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={16} className="text-primary" />
                                                {edu.period}
                                            </div>
                                        </div>

                                        {edu.thesis && (
                                            <div className="mb-6 bg-muted/50 p-4 rounded-lg border border-border">
                                                <h4 className="text-primary font-bold text-sm uppercase tracking-wider mb-1">
                                                    Thesis
                                                </h4>
                                                <p className="text-foreground font-medium mb-1">{edu.thesis.title}</p>
                                                <p className="text-muted-foreground text-sm">{edu.thesis.description}</p>
                                            </div>
                                        )}
                                    </div>

                                    <div className="w-full md:w-1/3 space-y-6">
                                        {edu.coursework && (
                                            <div>
                                                <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-3">
                                                    Key Coursework
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.coursework.map((course, i) => (
                                                        <span key={i} className="px-2.5 py-1 bg-muted text-foreground text-xs rounded-md border border-border">
                                                            {course}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {edu.achievements && (
                                            <div>
                                                <h4 className="text-muted-foreground text-sm font-bold uppercase tracking-wider mb-3">
                                                    Activities
                                                </h4>
                                                <ul className="space-y-2">
                                                    {edu.achievements.map((achievement, i) => (
                                                        <li key={i} className="text-foreground text-sm flex items-start gap-2">
                                                            <span className="text-primary mt-1">•</span>
                                                            {achievement}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    )
}
