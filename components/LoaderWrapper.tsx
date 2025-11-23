"use client"

import { useState, useEffect } from "react"
import StartupLoader from "./StartupLoader"
import { AnimatePresence } from "framer-motion"

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2500) // 2.5 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            <AnimatePresence mode="wait">
                {isLoading && <StartupLoader key="loader" />}
            </AnimatePresence>

            {!isLoading && (
                <div className="animate-in fade-in duration-700 slide-in-from-bottom-4">
                    {children}
                </div>
            )}
        </>
    )
}
