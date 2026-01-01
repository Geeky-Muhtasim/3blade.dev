"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { Github, Linkedin, Mail, BookOpen, Brain, Network, Eye, Shield } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { profile } from '@/data/profile'
import { ScrollReveal } from './ScrollReveal'
import { useRef } from 'react'

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null)
    
    // Parallax scroll effect
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end start"]
    })
    
    // Transform values for parallax layers
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    
    return (
        <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            {/* Background Elements with Parallax */}
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_#ffffff,_#f0f7f3)] dark:bg-zoro-gradient opacity-90 z-0" 
            />
            <motion.div 
                style={{ y: backgroundY }}
                className="absolute inset-0 dark:bg-slash-pattern opacity-20 z-0" 
            />

            {/* Content Container */}
            <motion.div 
                style={{ y: contentY }}
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        <div>
                            <ScrollReveal variant="slideRight" delay={0.1}>
                                <p className="text-primary font-medium mb-2 tracking-wider">
                                    HI, I'M
                                </p>
                            </ScrollReveal>

                            <ScrollReveal variant="fadeUp" delay={0.2}>
                                <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-4 leading-tight">
                                    {profile.name}
                                </h1>
                            </ScrollReveal>

                            {/* Sword Slash Divider */}
                            <ScrollReveal variant="scaleIn" delay={0.3} width="100%" className="flex justify-center lg:justify-start">
                                <div className="h-[3px] w-24 bg-gradient-to-r from-primary to-transparent rounded-full mt-4 mb-6"></div>
                            </ScrollReveal>

                            <ScrollReveal variant="fadeUp" delay={0.3}>
                                <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
                                    {profile.title}
                                </h2>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal variant="fadeUp" delay={0.4}>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                                Building safer, more interpretable AI systems through natural language processing and machine learning research.
                            </p>
                        </ScrollReveal>

                        {/* Buttons */}
                        <ScrollReveal variant="fadeUp" delay={0.5}>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <Link href="#research">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-8 py-3 bg-primary text-primary-foreground font-bold rounded hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 border border-primary overflow-hidden group"
                                    >
                                        <span className="relative z-10">View Research</span>
                                        {/* Ripple effect on hover */}
                                        <motion.span
                                            className="absolute inset-0 bg-white/20"
                                            initial={{ scale: 0, opacity: 0.5 }}
                                            whileHover={{ scale: 2, opacity: 0 }}
                                            transition={{ duration: 0.6 }}
                                        />
                                    </motion.button>
                                </Link>
                                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="relative px-8 py-3 bg-transparent text-primary font-bold rounded border border-primary hover:bg-primary/10 transition-colors overflow-hidden group"
                                    >
                                        <span className="relative z-10">Download CV</span>
                                        {/* Border glow on hover */}
                                        <motion.span
                                            className="absolute inset-0 border-2 border-primary rounded"
                                            animate={{
                                                boxShadow: [
                                                    "0 0 0 rgba(34, 197, 94, 0)",
                                                    "0 0 15px rgba(34, 197, 94, 0.4)",
                                                    "0 0 0 rgba(34, 197, 94, 0)",
                                                ]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        />
                                    </motion.button>
                                </a>
                            </div>
                        </ScrollReveal>

                        {/* Social Icons */}
                        <ScrollReveal variant="fadeUp" delay={0.6}>
                            <div className="flex gap-6 justify-center lg:justify-start pt-4">
                                <SocialIcon href={profile.socials.github} icon={<Github />} label="GitHub" />
                                <SocialIcon href={profile.socials.linkedin} icon={<Linkedin />} label="LinkedIn" />
                                <SocialIcon href={profile.socials.scholar} icon={<BookOpen />} label="Google Scholar" />
                                <SocialIcon href={`mailto:${profile.email}`} icon={<Mail />} label="Email" />
                            </div>
                        </ScrollReveal>

                        {/* Stats */}
                        <ScrollReveal variant="fadeIn" delay={0.7}>
                            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border mt-8">
                                <StatItem count={profile.stats.publications} label="Publications" />
                                <StatItem count={profile.stats.projects} label="Projects" />
                                <StatItem count={profile.stats.yearsExperience} label="Years Exp." />
                            </div>
                        </ScrollReveal>
                    </div>

                    {/* Image/Visual Content with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ scale: imageScale }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative mx-auto flex justify-center items-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                            {/* Rotating Rings/Swords Effect - Different speeds for depth */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                            />
                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-4 border border-primary/20 rounded-full"
                            />

                            {/* Profile Image Container */}
                            <div className="absolute inset-6 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-primary/20 bg-card">
                                <Image
                                    src="/profile_pic.png"
                                    alt={profile.name}
                                    fill
                                    className="object-cover scale-110"
                                    style={{ objectPosition: 'center 10%' }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Research Interests - Full Width */}
                <ScrollReveal variant="fadeUp" delay={0.8}>
                    <div className="mt-16 mb-20">
                        <h3 className="text-lg font-bold text-foreground mb-6 flex items-center justify-center gap-2">
                            <span className="w-1 h-5 bg-primary rounded-full" />
                            Research Interests
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
                            {profile.researchInterests.map((interest, index) => (
                                <ScrollReveal
                                    key={index}
                                    variant="scaleIn"
                                    delay={0.1 * index}
                                    width="100%"
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-muted/30 border border-border rounded-lg p-6 hover:border-primary/30 hover:shadow-md transition-all cursor-default text-center h-full flex flex-col"
                                    >
                                    <div className="flex flex-col items-center gap-4 flex-grow justify-center">
                                        <div className="text-primary">
                                            {getResearchIcon(interest.icon)}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-foreground text-base mb-2">
                                                {interest.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {interest.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </ScrollReveal>
            </motion.div>
        </section>
    )
}

function getResearchIcon(iconName: string) {
    const iconMap: { [key: string]: React.ReactNode } = {
        brain: <Brain size={24} />,
        network: <Network size={24} />,
        eye: <Eye size={24} />,
        shield: <Shield size={24} />
    }
    return iconMap[iconName] || <Brain size={24} />
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <motion.a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5, color: 'hsl(var(--primary))' }}
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label={label}
        >
            {icon}
        </motion.a>
    )
}

function StatItem({ count, label }: { count: number; label: string }) {
    return (
        <div className="text-center lg:text-left">
            <h4 className="text-3xl font-heading font-bold text-foreground">
                {count}+
            </h4>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">{label}</p>
        </div>
    )
}
