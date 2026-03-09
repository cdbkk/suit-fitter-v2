"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export function Philosophy() {
  const { ref, isVisible } = useScrollReveal()

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } }
  }

  return (
    <section id="philosophy" className="py-32 lg:py-48 bg-background relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">

          {/* Left Side - Typography & Narrative */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-6 mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] font-light text-foreground/50">
                Chapter I
              </span>
              <div className="h-[1px] w-12 bg-foreground/20" />
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="font-serif text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.85] text-foreground tracking-tighter mb-10"
            >
              <span className="block text-xl md:text-2xl font-light mb-4 tracking-widest uppercase text-foreground/40 italic">
                Our Philosophy
              </span>
              <span className="block">Tradition</span>
              <span className="block italic text-foreground/80 font-light">&</span>
              <span className="block text-accent">Mastery.</span>
            </motion.h2>

            <motion.div variants={fadeUpVariants} className="space-y-6 text-sm lg:text-base font-light text-foreground/70 leading-relaxed max-w-md">
              <p>
                At Suit Fitter, a truly exceptional suit is not merely worn—it becomes
                an intimately personal extension of its owner.
              </p>
              <p>
                Our atelier stands at the prestigious crossroads of two great tailoring
                traditions: the rigid, architectural elegance of London&apos;s Savile Row, and the obsessive,
                meticulous hand-finishing techniques passed down through generations of Thai master craftsmen.
              </p>
              <p className="pt-4 font-medium text-foreground text-xs uppercase tracking-[0.2em]">
                Every stitch holds intention.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Editorial Image Collage */}
          <div className="lg:col-span-7 relative h-[80vh] min-h-[600px] w-full mt-12 lg:mt-0">
            <motion.div
              className="absolute top-0 right-0 w-[80%] h-[75%] z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Image
                src="/images/atelier.jpg"
                alt="Inside the Suit Fitter Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20 border-8 border-background bg-background"
              initial={{ opacity: 0, y: 50 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Image
                src="/images/measurement.jpg"
                alt="Master tailor taking precise measurements"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />
            </motion.div>

            {/* Subtle decorative typography overlapping images */}
            <motion.div
              className="absolute top-[20%] -left-8 z-30 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <span className="font-serif text-[8rem] font-black text-foreground/5 leading-none">
                01
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
