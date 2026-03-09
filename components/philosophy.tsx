"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const smoothEase = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: smoothEase } }
}

const imageVariants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: smoothEase } }
}

const slideUpImageVariants = {
  hidden: { opacity: 0, y: 30, scale: 1.03 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, delay: 0.2, ease: smoothEase } }
}

const decorativeVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.5, ease: smoothEase } }
}

export function Philosophy() {
  return (
    <section id="philosophy" className="py-10 lg:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">

          {/* Left Side - Typography & Narrative */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeUpVariants} className="flex items-center gap-6 mb-6 lg:mb-12">
              <span className="text-[10px] uppercase tracking-[0.4em] font-light text-foreground/50">
                Chapter I
              </span>
              <div className="h-[1px] w-12 bg-foreground/20" />
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="font-serif text-4xl md:text-7xl lg:text-[6rem] font-black leading-[0.85] text-foreground tracking-tighter mb-6 lg:mb-10"
            >
              <span className="block text-xl md:text-2xl font-light mb-4 tracking-widest uppercase text-foreground/40 italic">
                Our Philosophy
              </span>
              <span className="block">Tradition</span>
              <span className="block italic text-foreground/80 font-light">&</span>
              <span className="block text-accent">Mastery.</span>
            </motion.h2>

            <motion.div variants={fadeUpVariants} className="space-y-6 text-base lg:text-lg font-light text-foreground/70 leading-relaxed max-w-md">
              <p>
                A truly exceptional suit is not merely worn. It becomes a personal extension of its owner.
              </p>
              <p>
                Our atelier blends the architectural elegance of Savile Row with the meticulous hand-finishing
                of Thai master craftsmen, passed down through generations.
              </p>
              <p className="pt-4 font-medium text-foreground text-xs uppercase tracking-[0.2em]">
                Every stitch holds intention.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Editorial Image Collage */}
          <div className="lg:col-span-7 relative h-[40vh] lg:h-[60vh] min-h-[280px] lg:min-h-[450px] w-full mt-8 lg:mt-0">
            <motion.div
              className="absolute top-0 right-0 w-[80%] h-[75%] z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={imageVariants}
            >
              <Image
                src="/images/atelier.jpg"
                alt="Inside the Suit Fitter Atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 45vw"
              />
            </motion.div>

            <motion.div
              className="absolute bottom-0 left-0 w-[55%] h-[55%] z-20 border-8 border-background bg-background"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={slideUpImageVariants}
            >
              <Image
                src="/images/measurement.jpg"
                alt="Master tailor taking precise measurements"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 55vw, 25vw"
              />
            </motion.div>

            {/* Subtle decorative typography overlapping images */}
            <motion.div
              className="absolute top-[20%] -left-8 z-30 hidden lg:block"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={decorativeVariants}
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
