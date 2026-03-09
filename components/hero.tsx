"use client"

import { motion } from "framer-motion"

const EASE = [0.21, 0.47, 0.32, 0.98] as const
const DRAW_EASE = [0.65, 0, 0.35, 1] as const

// Timeline (2.7s logo draw):
// 0.0s         Logo container fades in from invisible
// 0.0 - 0.2s   Thin horizontal line draws across center
// 0.2 - 0.7s  "SUIT" letters stroke in one by one
// 0.5 - 1.3s  Bowtie triangles draw and fill
// 0.8 - 1.6s  "FITTER" letters stroke in one by one
// 1.4 - 1.6s  Center knot pops
// 1.7 - 2.0s  "phuket" tag swings in
// 2.0 - 2.1s  Brief hold
// 2.1 - 2.7s  Logo scales down and slides up
// 2.8s         Content fades in
// 3.0s         Location text
// 3.1s         CTAs
// 3.5s         Border frames

const SUIT_LETTERS = [
  { char: "S", x: 30, delay: 0.2, dashLen: 180 },
  { char: "U", x: 62, delay: 0.33, dashLen: 160 },
  { char: "I", x: 100, delay: 0.46, dashLen: 100 },
  { char: "T", x: 120, delay: 0.56, dashLen: 140 },
]

const FITTER_LETTERS = [
  { char: "F", x: 260, delay: 0.8, dashLen: 150 },
  { char: "I", x: 293, delay: 0.9, dashLen: 100 },
  { char: "T", x: 310, delay: 1.0, dashLen: 140 },
  { char: "T", x: 340, delay: 1.1, dashLen: 140 },
  { char: "E", x: 370, delay: 1.2, dashLen: 150 },
  { char: "R", x: 403, delay: 1.3, dashLen: 160 },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-background px-6 overflow-hidden selection:bg-foreground selection:text-background">

      {/* Logo — starts invisible, fades in, draws, then slides up */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 1],
          y: [0, 0, 0, "-25vh"],
          scale: [1.15, 1.15, 1.15, 0.8],
        }}
        transition={{
          duration: 2.7,
          times: [0, 0.02, 0.78, 1],
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <svg viewBox="0 0 500 150" className="w-[85vw] max-w-lg md:max-w-2xl text-foreground overflow-visible" fill="none">

          {/* Decorative line that draws first */}
          <motion.line
            x1="25" y1="95" x2="470" y2="95"
            stroke="currentColor"
            strokeWidth="0.3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 0.3, 0] }}
            transition={{
              pathLength: { duration: 1.4, delay: 0.0, ease: DRAW_EASE },
              opacity: { duration: 2.0, times: [0, 0.1, 1], ease: "easeOut" },
            }}
          />

          {/* SUIT — letter by letter stroke draw */}
          {SUIT_LETTERS.map((letter) => (
            <motion.text
              key={`suit-${letter.char}-${letter.x}`}
              x={letter.x}
              y="85"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="64"
              letterSpacing="1"
              stroke="currentColor"
              strokeWidth="0.8"
              initial={{
                strokeDasharray: `${letter.dashLen} ${letter.dashLen}`,
                strokeDashoffset: letter.dashLen,
                fillOpacity: 0,
              }}
              animate={{
                strokeDashoffset: 0,
                fillOpacity: 1,
                fill: "currentColor",
              }}
              transition={{
                strokeDashoffset: {
                  duration: 0.45,
                  delay: letter.delay,
                  ease: DRAW_EASE,
                },
                fillOpacity: {
                  duration: 0.3,
                  delay: letter.delay + 0.4,
                  ease: "easeOut",
                },
              }}
            >
              {letter.char}
            </motion.text>
          ))}

          {/* Bowtie — draws with a cinematic sequence */}
          <g transform="translate(195, 60)">
            {/* Left triangle */}
            <motion.polygon
              points="0,-20 0,20 25,0"
              stroke="#8426C1"
              strokeWidth="1.2"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1, fill: "#8426C1" }}
              transition={{
                pathLength: { duration: 0.55, delay: 0.5, ease: DRAW_EASE },
                fillOpacity: { duration: 0.35, delay: 1.0, ease: "easeOut" },
              }}
            />
            {/* Right triangle */}
            <motion.polygon
              points="50,-20 50,20 25,0"
              stroke="#8426C1"
              strokeWidth="1.2"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              animate={{ pathLength: 1, fillOpacity: 1, fill: "#8426C1" }}
              transition={{
                pathLength: { duration: 0.55, delay: 0.65, ease: DRAW_EASE },
                fillOpacity: { duration: 0.35, delay: 1.1, ease: "easeOut" },
              }}
            />
            {/* Center knot — pops after triangles fill */}
            <motion.circle
              cx="25"
              cy="0"
              r="4"
              fill="#8426C1"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1.4, 1], opacity: 1 }}
              transition={{
                duration: 0.4,
                delay: 1.4,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            />
          </g>

          {/* FITTER — letter by letter stroke draw */}
          {FITTER_LETTERS.map((letter) => (
            <motion.text
              key={`fitter-${letter.char}-${letter.x}`}
              x={letter.x}
              y="85"
              fontFamily="'Playfair Display', Georgia, serif"
              fontSize="64"
              letterSpacing="1"
              stroke="currentColor"
              strokeWidth="0.8"
              initial={{
                strokeDasharray: `${letter.dashLen} ${letter.dashLen}`,
                strokeDashoffset: letter.dashLen,
                fillOpacity: 0,
              }}
              animate={{
                strokeDashoffset: 0,
                fillOpacity: 1,
                fill: "currentColor",
              }}
              transition={{
                strokeDashoffset: {
                  duration: 0.45,
                  delay: letter.delay,
                  ease: DRAW_EASE,
                },
                fillOpacity: {
                  duration: 0.3,
                  delay: letter.delay + 0.4,
                  ease: "easeOut",
                },
              }}
            >
              {letter.char}
            </motion.text>
          ))}

          {/* phuket tag — swings in */}
          <g transform="translate(365, 80) rotate(4)">
            <motion.rect
              x="0"
              y="0"
              width="105"
              height="42"
              rx="4"
              fill="#B342DD"
              initial={{ scale: 0, opacity: 0, rotate: -20 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              style={{ transformOrigin: "0% 0%" }}
              transition={{
                duration: 0.5,
                delay: 1.7,
                type: "spring",
                stiffness: 220,
                damping: 14,
              }}
            />
            <motion.text
              x="52.5"
              y="28"
              fontFamily="'Playfair Display', Georgia, serif"
              fontStyle="italic"
              fontSize="24"
              textAnchor="middle"
              fill="white"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 1.9, ease: "easeOut" }}
            >
              phuket
            </motion.text>
          </g>
        </svg>
      </motion.div>

      {/* Main Content — appears AFTER logo has fully settled */}
      <motion.div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center relative z-10 pt-[10vh] md:pt-[12vh]"
        style={{ opacity: 0 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 2.8, ease: EASE }}
      >
        <h1 className="font-serif leading-none text-foreground tracking-tight mb-6 md:mb-8 flex flex-col items-center w-full">
          <span className="block text-5xl md:text-8xl lg:text-[8.5rem] font-bold">
            Tailored in Phuket.
          </span>
          <span className="block italic font-light text-4xl md:text-7xl lg:text-[7rem] mt-2 md:mt-4 text-foreground/80 tracking-normal">
            Worn Everywhere.
          </span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="text-xs md:text-sm tracking-[0.2em] uppercase text-foreground/60 font-sans mb-8 md:mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.0, ease: EASE }}
        >
          900+ five-star reviews. 800+ fabrics. One perfect fit.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.1, ease: EASE }}
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
        transition={{ delay: 3.5, duration: 2, ease: EASE }}
      />
      <motion.div
        className="absolute inset-[17px] lg:inset-[33px] border border-foreground/5 pointer-events-none z-0 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.7, duration: 2, ease: EASE }}
      />
    </section>
  )
}
