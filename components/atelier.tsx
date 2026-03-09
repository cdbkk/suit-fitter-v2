"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
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

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
}

const imageDelayedVariants: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 },
  },
}

export function Atelier() {
  return (
    <section id="atelier" className="py-10 lg:py-32 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-12 mb-12 md:mb-24"
        >
          <motion.div variants={childVariants} className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase">
              The Atelier
            </h2>
            <p className="text-xl md:text-2xl text-background/70 font-light leading-relaxed">
              Where tradition is honored, and your sartorial narrative begins.
            </p>
          </motion.div>
          <motion.div variants={childVariants} className="w-full lg:w-auto">
            <address className="not-italic text-sm md:text-base text-background/80 leading-loose flex flex-col lg:text-right font-light">
              <span>178/5 Thaweewong Road</span>
              <span>Patong Beach, Kathu</span>
              <span>Phuket 83150, Thailand</span>
            </address>
          </motion.div>
        </motion.div>

        {/* Artistic Image Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-16 md:mb-24">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-8 aspect-[3/2] md:aspect-[16/9] relative overflow-hidden group"
          >
            <Image
              src="/images/atelier.jpg"
              alt="Suit Fitter atelier interior"
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </motion.div>
          <motion.div
            variants={imageDelayedVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="md:col-span-4 aspect-[3/4] relative overflow-hidden hidden md:block mt-24 group"
          >
            <Image
              src="/images/measurement.jpg"
              alt="Master tailor at work"
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="33vw"
            />
          </motion.div>
        </div>

        {/* Contact info minimalist grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-12 pt-16 border-t border-background/20"
        >
          <motion.div variants={childVariants}>
            <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-8">Inquiries</span>
            <div className="space-y-4 font-light text-lg">
              <p>+66 76 344 567</p>
              <p className="text-background/50">WhatsApp: +66 98 765 4321</p>
              <a href="mailto:atelier@suit-fitter.com" className="block hover:text-accent transition-colors pt-4">
                atelier@suit-fitter.com
              </a>
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-8">Hours</span>
            <div className="space-y-4 font-light text-lg text-background/80 pr-8">
              <div className="flex justify-between border-b border-background/10 pb-4">
                <span>Mon - Fri</span>
                <span>10:00 - 19:00</span>
              </div>
              <div className="flex justify-between border-b border-background/10 pb-4">
                <span>Saturday</span>
                <span>10:00 - 18:00</span>
              </div>
              <div className="flex justify-between pt-2 text-background/50">
                <span>Sunday</span>
                <span>By Appointment</span>
              </div>
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-8">Engage</span>
            <div className="space-y-6 font-light text-lg">
              <a href="#consultation" className="block hover:text-accent transition-colors">Book a Consultation</a>
              <a href="#services" className="block hover:text-accent transition-colors">View the Collection</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
