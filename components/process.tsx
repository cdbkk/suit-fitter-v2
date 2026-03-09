"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const headerStaggerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } }
}

const headerChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const steps = [
  {
    id: "01",
    title: "The Consultation",
    description: "Your journey begins in our atelier. Over carefully selected refreshments, we discuss your lifestyle, wardrobe needs, and personal aesthetic. We listen, advising on cuts and cloths that elevate your narrative.",
    image: "/images/atelier.jpg"
  },
  {
    id: "02",
    title: "Precision Measurement",
    description: "Our master tailors take over 30 precise measurements, capturing the unique architecture of your posture and movement. This data forms the absolute foundation of your bespoke pattern.",
    image: "/images/measurement.jpg"
  },
  {
    id: "03",
    title: "Cloth & Character",
    description: "Browse curated collections of the world's finest fabrics. From exclusive Super 150s wools to rare cashmeres, we guide you through weights, weaves, and the subtle art of selecting linings and horn buttons.",
    image: "/images/fabrics.jpg"
  },
  {
    id: "04",
    title: "The Canvas Construction",
    description: "Meticulously constructed over weeks. The jacket is hand-basted and shaped over a floating horsehair canvas, ensuring it molds to your body naturally over time rather than losing its pristine form.",
    image: "/images/suit-detail.jpg"
  },
  {
    id: "05",
    title: "Fitting & Finality",
    description: "You return as your garment takes shape in its basted state. We refine the silhouette, making minute adjustments to the drape and pitch to ensure the suit moves seamlessly with you before final delivery.",
    image: "/images/finished-suit.jpg"
  }
]

export function Process() {
  return (
    <section id="process" className="py-10 lg:py-32 bg-background relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={headerStaggerVariants}
          className="mb-8 md:mb-24 max-w-2xl"
        >
          <motion.div
            variants={headerChildVariants}
            className="flex items-center gap-4 mb-8"
          >
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
              The Journey
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </motion.div>

          <motion.h2
            variants={headerChildVariants}
            className="font-serif text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8 uppercase"
          >
            Crafting <br />
            <span className="italic font-light lowercase text-4xl md:text-6xl text-muted-foreground block mt-2">
              sartorial excellence
            </span>
          </motion.h2>

          <motion.p
            variants={headerChildVariants}
            className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg"
          >
            A painstaking orchestration of heritage craftsmanship, transforming exceptional cloth into a garment that is undeniably and intimately yours.
          </motion.p>
        </motion.div>

        {/* Swipe hint - mobile only */}
        <div className="flex items-center gap-2 mb-8 md:hidden">
          <span className="text-xs font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Swipe to explore
          </span>
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            className="text-muted-foreground"
          >
            <path
              d="M1 6h17M13 1l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

      </div>

      {/* Mobile: Horizontal scroll carousel */}
      <div className="md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 pb-4">
          {steps.map((step, index) => (
            <MobileCard key={step.id} step={step} index={index} />
          ))}
          {/* End spacer so last card can snap to center */}
          <div className="shrink-0 w-[15vw]" />
        </div>
      </div>

      {/* Desktop: Vertical list */}
      <div className="hidden md:block max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col w-full">
          {steps.map((step, index) => (
            <DesktopStep key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>

    </section>
  )
}

function MobileCard({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="shrink-0 w-[85vw] snap-center"
    >
      <div className="relative aspect-[4/3] overflow-hidden mb-5">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover"
          sizes="85vw"
        />
        <div className="absolute top-4 left-4">
          <span className="font-serif text-5xl font-black text-white/30">
            {step.id}
          </span>
        </div>
      </div>
      <h3 className="font-serif text-2xl mb-3">
        {step.title}
      </h3>
      <p className="text-sm text-muted-foreground font-light leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  )
}

const staggerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

const desktopChildVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const desktopImageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

function DesktopStep({ step, index }: { step: typeof steps[0]; index: number }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerVariants}
      className="group flex flex-row items-stretch border-t border-foreground/10 py-16 gap-12"
    >
      {/* Number Column */}
      <motion.div variants={desktopChildVariants} className="w-1/6 flex justify-center items-start">
        <span className="font-serif text-7xl font-black text-foreground/20 group-hover:text-accent transition-colors duration-500">
          {step.id}
        </span>
      </motion.div>

      {/* Image Column */}
      <motion.div variants={desktopImageVariants} className="w-5/12 aspect-[4/3] relative overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
          sizes="40vw"
        />
      </motion.div>

      {/* Content Column */}
      <motion.div variants={desktopChildVariants} className="w-5/12 flex flex-col justify-center">
        <h3 className="font-serif text-4xl mb-4 group-hover:text-accent transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-lg text-muted-foreground font-light leading-relaxed">
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  )
}
