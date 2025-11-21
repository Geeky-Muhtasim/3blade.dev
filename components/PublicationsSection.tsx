"use client"

import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Code, Database, ExternalLink, ChevronDown, ChevronUp, Calendar, MapPin } from 'lucide-react'
import { profile } from '@/data/profile'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function PublicationsSection() {
    const [filter, setFilter] = useState<string>('All')
    const [expandedId, setExpandedId] = useState<string | null>(null)

    const filteredPublications = filter === 'All'
        ? profile.publications
        : profile.publications.filter(pub => pub.type === filter)

    const toggleAbstract = (id: string) => {
        setExpandedId(expandedId === id ? null : id)
    }

    return (
        <section id="research" className="py-24 lg:py-32 relative">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" width="100%">
                    <SectionHeader
                        title="Research & Publications"
                        subtitle="Exploring the frontiers of NLP, Interpretability, and AI Security."
                    />
                </ScrollReveal>

                {/* Filter Tabs */}
                <ScrollReveal variant="fadeUp" delay={0.2} width="100%">
                    <div className="flex flex-wrap gap-4 mb-12 justify-start md:justify-center">
                        {['All', 'Conference', 'Journal', 'Workshop', 'Extended Abstract', 'Preprint'].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={cn(
                                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border",
                                    filter === type
                                        ? "bg-primary/10 border-primary text-primary shadow-[0_0_10px_rgba(34,197,94,0.2)]"
                                        : "bg-transparent border-border text-foreground hover:border-primary/50 hover:text-primary"
                                )}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                </ScrollReveal>

                {/* Publications Grid */}
                <div className="grid grid-cols-1 gap-8">
                    <AnimatePresence mode='popLayout'>
                        {filteredPublications.map((pub) => (
                            <motion.div
                                layout
                                key={pub.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className={cn(
                                    "group relative bg-card border rounded-lg overflow-hidden hover:shadow-md shadow-sm transition-all duration-200",
                                    pub.authors.includes(profile.name) && (pub.authors[0] === profile.name || pub.authors[0] === profile.shortName)
                                        ? "border-primary/50 border-l-4 border-l-primary"
                                        : "border-border hover:border-primary/30"
                                )}
                            >
                                <div className="p-6 md:p-7">
                                    <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex flex-wrap gap-3 mb-3 items-center">
                                                {/* Type Badge */}
                                                <span className={cn(
                                                    "px-3 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 shadow-sm",
                                                    pub.type === 'Conference' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                        pub.type === 'Journal' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' :
                                                            pub.type === 'Workshop' ? 'bg-purple-500/10 text-purple-500 border-purple-500/20' :
                                                                pub.type === 'Extended Abstract' ? 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' :
                                                                    'bg-primary/10 text-primary border-primary/20'
                                                )}>
                                                    <span className={cn("w-1.5 h-1.5 rounded-full",
                                                        pub.type === 'Conference' ? 'bg-blue-500' :
                                                            pub.type === 'Journal' ? 'bg-amber-500' :
                                                                pub.type === 'Workshop' ? 'bg-purple-500' :
                                                                    pub.type === 'Extended Abstract' ? 'bg-cyan-500' :
                                                                        'bg-primary'
                                                    )} />
                                                    {pub.type}
                                                </span>

                                                {/* Year Badge */}
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/50 text-secondary-foreground border border-border flex items-center gap-1.5">
                                                    <Calendar size={12} />
                                                    {pub.year}
                                                </span>

                                                {/* Venue Badge */}
                                                <span className="px-3 py-1 rounded-full text-xs font-medium bg-secondary/30 text-muted-foreground border border-border/50 flex items-center gap-1.5 text-wrap" title={pub.venue}>
                                                    <MapPin size={12} className="flex-shrink-0" />
                                                    <span>{pub.venue}</span>
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                {pub.title}
                                            </h3>

                                            <p className="text-muted-foreground text-sm mb-4 italic">
                                                {pub.authors.join(', ')}
                                            </p>

                                            <div className="flex flex-wrap gap-4 mt-4">
                                                {(pub.links as any).pdf && (
                                                    <a href={(pub.links as any).pdf} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <FileText size={16} /> PDF
                                                    </a>
                                                )}
                                                {(pub.links as any).arxiv && (
                                                    <a href={(pub.links as any).arxiv} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <FileText size={16} /> ArXiv
                                                    </a>
                                                )}
                                                {(pub.links as any).publisher && (
                                                    <a href={(pub.links as any).publisher} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <ExternalLink size={16} /> Publisher
                                                    </a>
                                                )}
                                                {(pub.links as any).code && (
                                                    <a href={(pub.links as any).code} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <Code size={16} /> Code
                                                    </a>
                                                )}
                                                {(pub.links as any).demo && (
                                                    <a href={(pub.links as any).demo} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <ExternalLink size={16} /> Demo
                                                    </a>
                                                )}
                                                {(pub.links as any).dataset && (
                                                    <a href={(pub.links as any).dataset} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                                                        <Database size={16} /> Dataset
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            onClick={() => toggleAbstract(pub.id)}
                                            className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                                            aria-label="Toggle abstract"
                                        >
                                            {expandedId === pub.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                        </button>
                                    </div>

                                    <AnimatePresence>
                                        {expandedId === pub.id && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="mt-6 pt-6 border-t border-border">
                                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                                        {pub.abstract}
                                                    </p>
                                                    {pub.tags && (
                                                        <div className="flex flex-wrap gap-2 mt-4">
                                                            {pub.tags.map(tag => (
                                                                <span key={tag} className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded border border-border">
                                                                    #{tag}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    )}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
