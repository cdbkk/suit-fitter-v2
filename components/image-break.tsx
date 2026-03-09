"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const childVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

export function ImageBreak() {
  return (
    <div className="relative h-[35vh] lg:h-[50vh] w-full overflow-hidden">
      <motion.div
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/suit-detail.jpg"
          alt="Suit detail craftsmanship"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-foreground/60" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.blockquote
          variants={childVariants}
          className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-background italic leading-relaxed max-w-3xl"
        >
          &ldquo;The details are not the details. They make the design.&rdquo;
        </motion.blockquote>
        <motion.cite
          variants={childVariants}
          className="mt-6 text-background/60 text-sm tracking-[0.2em] uppercase not-italic"
        >
          — Charles Eames
        </motion.cite>
      </motion.div>
    </div>
  )
}
