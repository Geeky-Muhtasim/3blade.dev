"use client"

import { motion, useInView, UseInViewOptions } from "framer-motion"
import { useRef } from "react"

interface ScrollRevealProps {
    children: React.ReactNode
    width?: "fit-content" | "100%"
    delay?: number
    duration?: number
    variant?: "fadeUp" | "fadeIn" | "scaleIn" | "slideRight" | "slideLeft"
    className?: string
    viewport?: UseInViewOptions
    staggerChildren?: number
}

export function ScrollReveal({
    children,
    width = "fit-content",
    delay = 0,
    duration = 0.5,
    variant = "fadeUp",
    className = "",
    viewport = { once: true, margin: "-50px" }
}: ScrollRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, viewport)

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
        },
        fadeIn: {
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
        },
        scaleIn: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        },
        slideRight: {
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
        },
        slideLeft: {
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 }
        }
    }

    return (
        <motion.div
            ref={ref}
            variants={variants[variant]}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration, delay, ease: "easeOut" }}
            className={className}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}
