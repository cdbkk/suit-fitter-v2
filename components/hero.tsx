"use client"

import { motion } from "framer-motion"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

// Timeline:
// 0.0 - 1.0s  Logo draws in (centered on screen)
// 1.0 - 1.1s  Brief pause
// 1.1 - 1.7s  Logo slides up to final position
// 1.8s         Content fades in
// 2.0s         Location text
// 2.1s         CTAs
// 2.5s         Border frames

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background px-6 overflow-hidden selection:bg-foreground selection:text-background">

      {/* Logo — draws centered, then slides up */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        animate={{ y: [0, 0, "-18vh"], scale: [1.15, 1.15, 0.8] }}
        transition={{
          duration: 1.7,
          times: [0, 0.6, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <svg viewBox="0 0 500 150" className="w-[80vw] max-w-md md:max-w-xl text-foreground overflow-visible" fill="none">
          {/* SUIT */}
          <motion.text
            x="30" y="85" fontFamily="'Playfair Display', Georgia, serif" fontSize="64" letterSpacing="1"
            stroke="currentColor" strokeWidth="0.5"
            initial={{ strokeDasharray: "300 300", strokeDashoffset: 300, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1, fill: "currentColor" }}
            transition={{
              strokeDashoffset: { duration: 0.7, delay: 0.1, ease: "easeInOut" },
              fillOpacity: { duration: 0.3, delay: 0.7 }
            }}
          >
            SUIT
          </motion.text>

          {/* Bowtie */}
          <g transform="translate(195, 60)">
            <motion.polygon
              points="0,-20 0,20 25,0" stroke="#8426C1" strokeWidth="1"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1, fill: "#8426C1" }}
              transition={{
                pathLength: { duration: 0.5, delay: 0.2, ease: "easeInOut" },
                fillOpacity: { duration: 0.25, delay: 0.6 }
              }}
            />
            <motion.polygon
              points="50,-20 50,20 25,0" stroke="#8426C1" strokeWidth="1"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1, fill: "#8426C1" }}
              transition={{
                pathLength: { duration: 0.5, delay: 0.3, ease: "easeInOut" },
                fillOpacity: { duration: 0.25, delay: 0.7 }
              }}
            />
            <motion.circle
              cx="25" cy="0" r="4" fill="#8426C1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.8, type: "spring" }}
            />
          </g>

          {/* FITTER */}
          <motion.text
            x="260" y="85" fontFamily="'Playfair Display', Georgia, serif" fontSize="64" letterSpacing="1"
            stroke="currentColor" strokeWidth="0.5"
            initial={{ strokeDasharray: "350 350", strokeDashoffset: 350, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1, fill: "currentColor" }}
            transition={{
              strokeDashoffset: { duration: 0.7, delay: 0.15, ease: "easeInOut" },
              fillOpacity: { duration: 0.3, delay: 0.75 }
            }}
          >
            FITTER
          </motion.text>

          {/* phuket tag */}
          <g transform="translate(365, 80) rotate(4)">
            <motion.rect
              x="0" y="0" width="105" height="42" rx="4" fill="#B342DD"
              initial={{ scale: 0, opacity: 0, transformOrigin: "center" }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9, type: "spring", bounce: 0.4 }}
            />
            <motion.text
              x="52.5" y="28" fontFamily="'Playfair Display', Georgia, serif" fontStyle="italic" fontSize="24" textAnchor="middle" fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, delay: 1.0 }}
            >
              phuket
            </motion.text>
          </g>
        </svg>
      </motion.div>

      {/* Main Content — appears AFTER logo has fully settled */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 pt-[22vh] md:pt-[26vh]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.8, ease: EASE }}
      >
        <h1 className="font-serif leading-[0.9] text-foreground tracking-tight mb-4 md:mb-6 flex flex-col items-center w-full">
          <span className="block text-5xl md:text-8xl lg:text-[9rem] font-black">
            Bespoke
          </span>
          <span className="block italic font-light text-3xl md:text-6xl lg:text-[6.5rem] mt-1 md:mt-2 text-foreground/80 tracking-normal">
            Tailoring
          </span>
        </h1>

        {/* Location */}
        <motion.p
          className="text-[10px] md:text-sm tracking-[0.2em] uppercase text-foreground/50 font-sans mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.0, ease: EASE }}
        >
          Patong Beach, Phuket
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1, ease: EASE }}
        >
          <a
            href="#consultation"
            className="bg-foreground text-background px-8 py-3.5 text-xs tracking-[0.25em] uppercase font-sans transition-colors duration-500 hover:bg-accent hover:text-accent-foreground"
          >
            Book Consultation
          </a>
          <a
            href="#services"
            className="text-xs tracking-[0.25em] uppercase text-foreground/70 font-sans transition-colors duration-500 hover:text-foreground group flex items-center gap-2"
          >
            View Collection
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Decorative Border Frames */}
      <motion.div
        className="absolute inset-4 lg:inset-8 border border-foreground/10 pointer-events-none z-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 2, ease: EASE }}
      />
      <motion.div
        className="absolute inset-[17px] lg:inset-[33px] border border-foreground/5 pointer-events-none z-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.7, duration: 2, ease: EASE }}
      />
    </section>
  )
}
