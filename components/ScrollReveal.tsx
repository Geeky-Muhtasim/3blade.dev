"use client"

import { motion, useInView, UseInViewOptions } from "framer-motion"
import { useRef } from "react"
import {
    fadeUpVariants,
    fadeInVariants,
    scaleInVariants,
    slideRightVariants,
    slideLeftVariants,
    slashInVariants,
    hakiPulseVariants,
    animationConfig,
    getAnimationConfig,
} from "@/lib/animations"

interface ScrollRevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft" | "slashIn" | "hakiPulse"
    className?: string
    viewport?: UseInViewOptions
}

export function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    duration,
    variant = "fadeUp",
    className = "",
    viewport
}: ScrollRevealProps) {
    const ref = useRef(null)
    const config = getAnimationConfig()
    
    // Use provided viewport or default from config
    const viewportSettings: UseInViewOptions = viewport || {
        once: config.viewport.once,
        margin: config.viewport.margin as any,
        amount: config.viewport.amount as any,
    }
    
    const isInView = useInView(ref, viewportSettings)

    const variants = {
        fadeUp: fadeUpVariants,
        fadeIn: fadeInVariants,
        scaleIn: scaleInVariants,
        slideRight: slideRightVariants,
        slideLeft: slideLeftVariants,
        slashIn: slashInVariants,
        hakiPulse: hakiPulseVariants,
    }

    // Use provided duration or default from config
    const animDuration = duration ?? config.duration.normal

    return (
        <motion.div
            ref={ref}
            variants={variants[variant]}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ 
                duration: animDuration, 
                delay, 
                ease: config.ease.smooth 
            }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}
