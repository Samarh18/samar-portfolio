'use client'
import { motion, useReducedMotion, Variants, Transition } from 'framer-motion'
import { ReactNode } from 'react'

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.95 },
  show:   { opacity: 1, y: 0,  scale: 1 },
}

const containerVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const spring: Transition = { type: 'spring', stiffness: 420, damping: 36, mass: 0.8 }
const ease: Transition   = { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] as any }

export function FadeUp({ children, delay = 0, className, style }: { children: ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  const t: Transition = reduced ? { duration: 0 } : { ...ease, delay }
  return (
    <motion.div className={className} style={style} variants={fadeUpVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.15 }} transition={t}>
      {children}
    </motion.div>
  )
}

export function StaggerGroup({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  return (
    <motion.div className={className} style={style} variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.1 }} transition={reduced ? { duration: 0 } : undefined}>
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className, style }: { children: ReactNode; className?: string; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  const t: Transition = reduced ? { duration: 0 } : ease
  return (
    <motion.div className={className} style={style} variants={fadeUpVariants} transition={t}>
      {children}
    </motion.div>
  )
}

export function HeroEntrance({ children, delay = 0, style }: { children: ReactNode; delay?: number; style?: React.CSSProperties }) {
  const reduced = useReducedMotion()
  const t: Transition = reduced ? { duration: 0 } : { ...spring, delay }
  return (
    <motion.div style={style} initial={reduced ? false : { opacity: 0, y: 22, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={t}>
      {children}
    </motion.div>
  )
}
