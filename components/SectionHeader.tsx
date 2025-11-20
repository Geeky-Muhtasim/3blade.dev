import React from 'react'

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeader({ title, subtitle, className = "" }: SectionHeaderProps) {
    return (
        <div className={`mb-12 ${className}`}>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                <div className="h-[2px] w-12 sm:w-8 bg-primary shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground tracking-tight">
                    {title}
                </h2>
            </div>
            {subtitle && (
                <p className="text-foreground/70 text-base sm:text-lg md:text-xl max-w-3xl">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
