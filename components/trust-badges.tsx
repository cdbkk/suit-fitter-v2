"use client"

import { motion } from "framer-motion"

const smoothEase = [0.16, 1, 0.3, 1] as const

const badges = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: "TripAdvisor",
    stat: "4.9 Stars",
    detail: "590+ Reviews"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="none">
        <text x="2" y="18" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" fill="currentColor">G</text>
        <circle cx="17" cy="8" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M15 8h4M17 6v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    label: "Google",
    stat: "5 Stars",
    detail: "310+ Reviews"
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8 md:w-10 md:h-10">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
      </svg>
    ),
    label: "Trusted Worldwide",
    stat: "15+ Countries",
    detail: "International clientele"
  }
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: smoothEase } }
}

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-background border-y border-border/30">
      <motion.div
        className="max-w-5xl mx-auto px-6 grid grid-cols-3 gap-4 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={containerVariants}
      >
        {badges.map((badge) => (
          <motion.div
            key={badge.label}
            variants={itemVariants}
            className="flex flex-col items-center text-center gap-2 md:gap-3"
          >
            <div className="text-foreground/80">
              {badge.icon}
            </div>
            <div>
              <p className="font-serif text-lg md:text-2xl font-black text-foreground leading-tight">
                {badge.stat}
              </p>
              <p className="text-[10px] md:text-xs text-foreground/50 mt-0.5">
                {badge.detail}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
