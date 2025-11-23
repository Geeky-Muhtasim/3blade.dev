"use client"

import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Github, Linkedin, Twitter, GraduationCap } from 'lucide-react'
import { profile } from '@/data/profile'
import { useState } from 'react'
import SectionHeader from './SectionHeader'
import { ScrollReveal } from './ScrollReveal'

export default function ContactSection() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission logic here
        console.log('Form submitted:', formState)
        alert('Message sent! (This is a demo)')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-24 lg:py-32 relative">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <ScrollReveal variant="fadeUp" width="100%">
                    <SectionHeader
                        title="Get In Touch"
                        subtitle="Let's collaborate or just say hi."
                    />
                </ScrollReveal>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Contact Info */}
                    <ScrollReveal
                        variant="slideRight"
                        delay={0.2}
                        width="100%"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-6">
                            Let's Build Something Amazing
                        </h3>
                        <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <a href={`mailto:${profile.email}`} className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <Mail size={24} />
                                </div>
                                <span className="text-lg">{profile.email}</span>
                            </a>
                            <div className="flex items-center gap-4 text-muted-foreground group">
                                <div className="p-3 bg-muted rounded-lg group-hover:bg-primary/10 transition-colors">
                                    <MapPin size={24} />
                                </div>
                                <span className="text-lg">{profile.location}</span>
                            </div>
                        </div>

                        <div className="mt-12">
                            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
                                Connect with me
                            </h4>
                            <div className="flex gap-4">
                                <a
                                    href={profile.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-white hover:bg-primary transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20"
                                    aria-label="GitHub"
                                >
                                    <Github size={24} />
                                </a>
                                <a
                                    href={profile.socials.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-white hover:bg-[#0077b5] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={24} />
                                </a>
                                {profile.socials.twitter && (
                                    <a
                                        href={profile.socials.twitter}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-white hover:bg-[#1DA1F2] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-500/20"
                                        aria-label="Twitter"
                                    >
                                        <Twitter size={24} />
                                    </a>
                                )}
                                <a
                                    href={profile.socials.scholar}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-white hover:bg-[#4285F4] transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"
                                    aria-label="Google Scholar"
                                >
                                    <GraduationCap size={24} />
                                </a>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal
                        variant="slideLeft"
                        delay={0.4}
                        width="100%"
                    >
                        <div className="bg-card/50 border border-border rounded-2xl p-8 md:p-10 relative overflow-hidden">
                            {/* Decorative glow */}
                            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-muted-foreground"
                                        placeholder="Roronoa Zoro"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-muted-foreground"
                                        placeholder="zoro@strawhats.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-muted-foreground resize-none"
                                        placeholder="I want to become the world's greatest swordsman..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                                >
                                    <Send size={20} />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    )
}
