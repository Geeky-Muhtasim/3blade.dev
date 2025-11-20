"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Code, Layers, FolderGit2 } from 'lucide-react'
import { profile } from '@/data/profile'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function ProjectsSection() {
    const [filter, setFilter] = useState<string>('All')

    // Extract unique categories
    const categories = ['All', ...Array.from(new Set(profile.projects.map(proj => proj.category)))]

    const filteredProjects = filter === 'All'
        ? profile.projects
        : profile.projects.filter(proj => proj.category === filter)

    return (
        <section id="projects" className="py-24 lg:py-32 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp">
                    <SectionHeader
                        title="Featured Projects"
                        subtitle="A selection of my work in AI, NLP, and Software Engineering."
                    />
                </ScrollReveal>

                {/* Filter Tabs */}
                <ScrollReveal variant="fadeUp" delay={0.2}>
                    <div className="flex flex-wrap gap-4 mb-12 ml-11 justify-center md:justify-start">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    filter === category
                                        ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                                        : "bg-transparent border-border text-foreground hover:border-primary/50 hover:text-primary"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-md shadow-sm transition-all duration-300 group flex flex-col h-full hover:border-primary/30"
                            >
                                <div className="p-6 flex flex-col h-full">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-3 bg-muted rounded-lg text-primary group-hover:scale-110 transition-transform">
                                            <FolderGit2 size={24} />
                                        </div>
                                        <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                                            {project.category}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.techStack.slice(0, 4).map(tech => (
                                                <span key={tech} className="text-xs text-foreground bg-muted px-2 py-1 rounded border border-border hover:border-primary/30 transition-colors">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.techStack.length > 4 && (
                                                <span className="text-xs text-muted-foreground px-2 py-1">
                                                    +{project.techStack.length - 4}
                                                </span>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-4 pt-4 border-t border-border">
                                            {project.links.github && (
                                                <a
                                                    href={project.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <Github size={16} />
                                                    <span>Code</span>
                                                </a>
                                            )}
                                            {project.links.demo && (
                                                <a
                                                    href={project.links.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
