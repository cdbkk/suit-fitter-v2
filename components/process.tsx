"use client"

import Image from "next/image"
import { motion } from "framer-motion"

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
    <section id="process" className="py-24 lg:py-40 bg-background relative z-10 w-full overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-24 md:mb-32 max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-xs font-medium tracking-[0.3em] text-accent uppercase">
              The Journey
            </span>
            <div className="h-px w-12 bg-accent/50" />
          </div>

          <h2 className="font-serif text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-8 uppercase">
            Crafting <br />
            <span className="italic font-light lowercase text-4xl md:text-6xl text-muted-foreground block mt-2">
              sartorial excellence
            </span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed max-w-lg">
            A painstaking orchestration of heritage craftsmanship, transforming exceptional cloth into a garment that is undeniably and intimately yours.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col w-full">
          {steps.map((step, index) => (
            <ProcessStep key={step.id} step={step} index={index} />
          ))}
        </div>

      </div>
    </section>
  )
}

function ProcessStep({ step, index }: { step: typeof steps[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="group flex flex-col md:flex-row items-stretch border-t border-foreground/10 py-12 md:py-16 gap-8 md:gap-12"
    >
      {/* Number Column */}
      <div className="md:w-1/6 flex md:justify-center md:items-start">
        <span className="font-serif text-6xl md:text-7xl font-black text-foreground/20 group-hover:text-accent transition-colors duration-500">
          {step.id}
        </span>
      </div>

      {/* Image Column */}
      <div className="w-full md:w-5/12 aspect-[4/3] relative overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-110"
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>

      {/* Content Column */}
      <div className="md:w-5/12 flex flex-col justify-center">
        <h3 className="font-serif text-3xl md:text-4xl mb-4 group-hover:text-accent transition-colors duration-500">
          {step.title}
        </h3>
        <p className="text-base md:text-lg text-muted-foreground font-light leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}
