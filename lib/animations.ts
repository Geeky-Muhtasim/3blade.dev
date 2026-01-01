/**
 * Centralized Animation Configuration System
 * Zoro-themed portfolio animations with consistent timing and mobile optimization
 */

import { Variants } from "framer-motion"

// Detect if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

// Detect mobile devices
export const isMobile = () => {
  if (typeof window === "undefined") return false
  return window.innerWidth < 768
}

// Check for reduced motion preference
export const shouldReduceMotion = () => {
  return prefersReducedMotion()
}

// Standard animation configuration
export const animationConfig = {
  // Timing
  duration: {
    fast: 0.3,
    normal: 0.5,
    slow: 0.8,
    verySlow: 1.2,
  },
  
  // Delays
  delay: {
    none: 0,
    short: 0.1,
    medium: 0.2,
    long: 0.3,
  },
  
  // Stagger
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.15,
  },
  
  // Viewport settings for scroll-triggered animations
  viewport: {
    once: true,
    amount: 0.2,
    margin: "-50px",
  },
  
  // Easing
  ease: {
    smooth: "easeOut" as const,
    bouncy: [0.34, 1.56, 0.64, 1] as const,
    sharp: [0.4, 0, 0.2, 1] as const,
  },
}

// Mobile-optimized configuration (reduced complexity)
export const mobileAnimationConfig = {
  ...animationConfig,
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    verySlow: 0.8,
  },
  viewport: {
    once: true,
    amount: 0.1,
    margin: "-20px",
  },
}

// Get appropriate config based on device and user preferences
export const getAnimationConfig = () => {
  if (shouldReduceMotion()) {
    // Return zero-duration animations for accessibility
    return {
      ...animationConfig,
      duration: { fast: 0, normal: 0, slow: 0, verySlow: 0 },
      stagger: { fast: 0, normal: 0, slow: 0 },
    }
  }
  return isMobile() ? mobileAnimationConfig : animationConfig
}

// Safe animation wrapper that respects user preferences
export const createSafeVariants = (variants: Variants): Variants => {
  if (shouldReduceMotion()) {
    // Return instant variants with no animation
    return {
      hidden: variants.visible,
      visible: variants.visible,
    }
  }
  return variants
}

/**
 * Standard Animation Variants
 */

// Fade Up (most common)
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: animationConfig.duration.normal,
      ease: "easeOut" as any,
    }
  },
}

// Fade In
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: "easeOut" as any,
    }
  },
}

// Scale In
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: "easeOut" as any,
    }
  },
}

// Slide Right
export const slideRightVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: animationConfig.duration.normal,
      ease: "easeOut" as any,
    }
  },
}

// Slide Left
export const slideLeftVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: {
      duration: animationConfig.duration.normal,
      ease: "easeOut" as any,
    }
  },
}

/**
 * Zoro-Themed Variants
 */

// Slash In (diagonal entry like a sword slash)
export const slashInVariants: Variants = {
  hidden: { 
    opacity: 0, 
    x: -100, 
    y: 100,
    rotate: -15,
  },
  visible: { 
    opacity: 1, 
    x: 0, 
    y: 0,
    rotate: 0,
    transition: {
      duration: animationConfig.duration.slow,
      ease: [0.4, 0, 0.2, 1] as any,
    }
  },
}

// Blade Draw (horizontal sweep)
export const bladeDrawVariants: Variants = {
  hidden: { 
    scaleX: 0,
    originX: 0,
  },
  visible: { 
    scaleX: 1,
    transition: {
      duration: animationConfig.duration.normal,
      ease: [0.4, 0, 0.2, 1] as any,
    }
  },
}

// Haki Pulse (energy pulse from center)
export const hakiPulseVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.5,
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: animationConfig.duration.slow,
      ease: [0.34, 1.56, 0.64, 1] as any,
    }
  },
}

// Three Sword Style (staggered sequence)
export const threeSwordStyleVariants: Variants = {
  hidden: { 
    scaleX: 0,
    opacity: 0,
  },
  visible: (custom: number) => ({ 
    scaleX: 1,
    opacity: 1,
    transition: {
      delay: custom * animationConfig.stagger.normal,
      duration: animationConfig.duration.fast,
      ease: [0.4, 0, 0.2, 1] as any,
    }
  }),
}

/**
 * Hover/Interaction Variants
 */

// Card hover effect (lift + glow)
export const cardHoverVariants = {
  rest: { 
    y: 0,
    scale: 1,
  },
  hover: { 
    y: -4,
    scale: 1.01,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    }
  },
}

// Button hover effect
export const buttonHoverVariants = {
  rest: { 
    scale: 1,
  },
  hover: { 
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    }
  },
  tap: { 
    scale: 0.95,
  },
}

// Sword Slash hover animation
export const swordSlashVariants: Variants = {
  initial: { 
    x: "-120%",
    opacity: 0,
  },
  animate: { 
    x: "120%",
    opacity: [0, 1, 1, 0],
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    }
  },
}

/**
 * Container variants for staggered children animations
 */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animationConfig.stagger.normal,
      delayChildren: animationConfig.delay.short,
    },
  },
}

export const containerVariantsFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: animationConfig.stagger.fast,
    },
  },
}

/**
 * Timeline Draw Animation
 */
export const timelineDrawVariants: Variants = {
  hidden: { 
    height: 0,
    opacity: 0,
  },
  visible: { 
    height: "100%",
    opacity: 1,
    transition: {
      duration: animationConfig.duration.verySlow,
      ease: "easeInOut",
    }
  },
}

/**
 * Utility Functions
 */

// Get stagger delay for index
export const getStaggerDelay = (index: number, speed: 'fast' | 'normal' | 'slow' = 'normal') => {
  return index * animationConfig.stagger[speed]
}

// Create custom viewport settings
export const createViewport = (once = true, margin = "-50px", amount: number | "some" | "all" = 0.2) => ({
  once,
  margin,
  amount,
})

// Spring animation preset
export const springConfig = {
  type: "spring" as const,
  stiffness: 300,
  damping: 30,
}

// Smooth spring (less bouncy)
export const smoothSpringConfig = {
  type: "spring" as const,
  stiffness: 200,
  damping: 25,
}

