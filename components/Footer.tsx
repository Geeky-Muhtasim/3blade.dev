"use client"

import { Github, Linkedin, Mail, Twitter, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { profile } from '@/data/profile'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-secondary dark:bg-card border-t border-border pt-16 pb-8 relative overflow-hidden">
            {/* Decorative Top Divider (Sword Style) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 group mb-4">
                            <span className="text-2xl font-heading font-bold text-foreground group-hover:text-primary transition-colors">
                                3SWORD<span className="text-primary">.DEV</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Forging intelligent systems with precision and purpose. Exploring the intersection of NLP, Security, and Software Engineering.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-foreground font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['Research', 'Projects', 'Experience', 'Skills', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item.toLowerCase()}`}
                                        className="text-muted-foreground hover:text-primary text-sm transition-colors"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="text-foreground font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <SocialLink href={profile.socials.github} icon={<Github size={20} />} label="GitHub" />
                            <SocialLink href={profile.socials.linkedin} icon={<Linkedin size={20} />} label="LinkedIn" />
                            <SocialLink href={profile.socials.scholar} icon={<BookOpen size={20} />} label="Scholar" />
                            <SocialLink href={`mailto:${profile.email}`} icon={<Mail size={20} />} label="Email" />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted-foreground text-sm text-center md:text-left">
                        &copy; {currentYear} {profile.name}. All rights reserved.
                    </p>
                    <p className="text-muted-foreground text-xs flex items-center gap-1">
                        <span>Nothing happened</span>
                        <span className="text-primary">-</span>
                        <span className="italic">Roronoa Zoro</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
            aria-label={label}
        >
            {icon}
        </a>
    )
}
