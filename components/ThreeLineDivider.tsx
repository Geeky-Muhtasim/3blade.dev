"use client"

import { motion } from "framer-motion"
import { threeSwordStyleVariants, animationConfig } from "@/lib/animations"

export default function ThreeLineDivider() {
    return (
        <div className="flex gap-2 items-center justify-center my-8">
            {[0, 1, 2].map((index) => (
                <motion.div
                    key={index}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={threeSwordStyleVariants}
                    className="w-12 h-[2px] bg-primary origin-left shadow-[0_0_8px_rgba(34,197,94,0.6)]"
                    style={{ transformOrigin: "left" }}
                />
            ))}
        </div>
    )
}
