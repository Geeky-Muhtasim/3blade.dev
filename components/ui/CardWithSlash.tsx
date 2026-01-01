"use client"

import { motion } from "framer-motion"
import { ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface CardWithSlashProps {
    children: ReactNode
    className?: string
    slashOnHover?: boolean
    glowIntensity?: "low" | "medium" | "high"
}

export function CardWithSlash({
    children,
    className = "",
    slashOnHover = true,
    glowIntensity = "medium",
}: CardWithSlashProps) {
    const [isHovered, setIsHovered] = useState(false)

    const glowClasses = {
        low: "group-hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]",
        medium: "group-hover:shadow-[0_0_20px_rgba(34,197,94,0.15)]",
        high: "group-hover:shadow-[0_0_30px_rgba(34,197,94,0.25)]",
    }

    return (
        <motion.div
            className={cn(
                "group relative overflow-hidden transition-all duration-300",
                glowClasses[glowIntensity],
                className
            )}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ y: -4 }}
        >
            {/* Sword Slash Effect */}
            {slashOnHover && isHovered && (
                <motion.div
                    className="absolute inset-0 z-10 pointer-events-none"
                    initial={{ x: "-120%", y: "120%" }}
                    animate={{ x: "120%", y: "-120%" }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    <div
                        className="absolute inset-0 rotate-[-15deg] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                        style={{
                            width: "200%",
                            height: "2px",
                            top: "50%",
                            left: "-50%",
                            boxShadow: "0 0 20px rgba(34, 197, 94, 0.6)",
                        }}
                    />
                    {/* Secondary trail */}
                    <div
                        className="absolute inset-0 rotate-[-15deg] bg-gradient-to-r from-transparent via-white/40 to-transparent"
                        style={{
                            width: "200%",
                            height: "1px",
                            top: "50%",
                            left: "-50%",
                            marginTop: "2px",
                        }}
                    />
                </motion.div>
            )}

            {/* Blade Shimmer Border Effect */}
            <motion.div
                className="absolute inset-0 rounded-lg pointer-events-none"
                animate={
                    isHovered
                        ? {
                              boxShadow: [
                                  "0 0 0 1px rgba(34, 197, 94, 0)",
                                  "0 0 0 1px rgba(34, 197, 94, 0.3)",
                                  "0 0 0 1px rgba(34, 197, 94, 0)",
                              ],
                          }
                        : {}
                }
                transition={{
                    duration: 1.5,
                    repeat: isHovered ? Infinity : 0,
                    ease: "easeInOut",
                }}
            />

            {/* Content */}
            <div className="relative z-0">{children}</div>
        </motion.div>
    )
}

// Simpler version for smaller elements
export function CardWithGlow({
    children,
    className = "",
}: {
    children: ReactNode
    className?: string
}) {
    return (
        <motion.div
            className={cn(
                "transition-all duration-200",
                className
            )}
            whileHover={{
                scale: 1.02,
                boxShadow: "0 0 15px rgba(34, 197, 94, 0.2)",
            }}
        >
            {children}
        </motion.div>
    )
}

