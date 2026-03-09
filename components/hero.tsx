"use client"

import { motion } from "framer-motion"

const EASE = [0.21, 0.47, 0.32, 0.98] as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background px-6 overflow-hidden selection:bg-foreground selection:text-background">

      {/* Original Brand Logo Animation */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none"
        initial={{ y: "15vh", scale: 1.25 }}
        animate={{ y: "-20vh", scale: 0.85 }}
        transition={{ duration: 1.4, delay: 2.8, ease: [0.76, 0, 0.24, 1] }}
      >
        <svg viewBox="0 0 500 150" className="w-[85vw] max-w-lg md:max-w-xl text-foreground overflow-visible" fill="none">
          {/* SUIT */}
          <motion.text
            x="30" y="85" fontFamily="Times New Roman, Times, serif" fontSize="64" letterSpacing="1"
            stroke="currentColor" strokeWidth="0.5"
            initial={{ strokeDasharray: "300 300", strokeDashoffset: 300, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1, fill: "currentColor" }}
            transition={{
              strokeDashoffset: { duration: 1.5, delay: 0.2, ease: "easeInOut" },
              fillOpacity: { duration: 0.8, delay: 1.5 }
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
                pathLength: { duration: 1.0, delay: 0.6, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 1.6 }
              }}
            />
            <motion.polygon
              points="50,-20 50,20 25,0" stroke="#8426C1" strokeWidth="1"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1, fill: "#8426C1" }}
              transition={{
                pathLength: { duration: 1.0, delay: 0.8, ease: "easeInOut" },
                fillOpacity: { duration: 0.5, delay: 1.8 }
              }}
            />
            <motion.circle
              cx="25" cy="0" r="4" fill="#8426C1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.0, type: "spring" }}
            />
          </g>

          {/* FITTER */}
          <motion.text
            x="260" y="85" fontFamily="Times New Roman, Times, serif" fontSize="64" letterSpacing="1"
            stroke="currentColor" strokeWidth="0.5"
            initial={{ strokeDasharray: "350 350", strokeDashoffset: 350, fillOpacity: 0 }}
            animate={{ strokeDashoffset: 0, fillOpacity: 1, fill: "currentColor" }}
            transition={{
              strokeDashoffset: { duration: 1.5, delay: 0.5, ease: "easeInOut" },
              fillOpacity: { duration: 0.8, delay: 1.8 }
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
              transition={{ duration: 0.5, delay: 2.2, type: "spring", bounce: 0.4 }}
            />
            <motion.text
              x="52.5" y="28" fontFamily="Brush Script MT, Bradley Hand, cursive" fontStyle="italic" fontSize="28" textAnchor="middle" fill="white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 2.4 }}
            >
              phuket
            </motion.text>
          </g>
        </svg>

      </motion.div>

      {/* Main Content — appears AFTER logo settles */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 pt-[28vh]"
        initial={{ opacity: 0, y: 40, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1.2, delay: 3.5, ease: EASE }}
      >
        <h1 className="font-serif leading-[0.9] text-foreground tracking-tight mb-6 flex flex-col items-center w-full">
          <span className="block text-7xl md:text-8xl lg:text-[9rem] font-black">
            Bespoke
          </span>
          <span className="block italic font-light text-5xl md:text-6xl lg:text-[6.5rem] mt-2 text-foreground/80 tracking-normal">
            Tailoring
          </span>
        </h1>

        {/* Location */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/50 font-sans mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.0, ease: EASE }}
        >
          Patong Beach, Phuket
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex items-center gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 4.3, ease: EASE }}
        >
          <a
            href="#consultation"
            className="border border-foreground px-8 py-3.5 text-xs tracking-[0.25em] uppercase text-foreground font-sans transition-colors duration-500 hover:bg-foreground hover:text-background"
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
        transition={{ delay: 4.8, duration: 2, ease: EASE }}
      />
      <motion.div
        className="absolute inset-[17px] lg:inset-[33px] border border-foreground/5 pointer-events-none z-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5.0, duration: 2, ease: EASE }}
      />
    </section>
  )
}
