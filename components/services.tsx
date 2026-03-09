"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    title: "Bespoke Suits",
    description: "The absolute pinnacle of tailoring artistry. Completely hand-cut and constructed to your unique anatomical architecture, utilizing the world's finest cloth.",
    price: "From ฿95,000",
    features: ["Full canvas construction", "Hand-sewn buttonholes", "Working surgeon's cuffs", "Personalized monogram"],
    image: "/images/finished-suit.jpg"
  },
  {
    title: "Formal Eveningwear",
    description: "Tuxedos and dinner jackets crafted with obsessive attention to detail. Designed for galas, weddings, and distinguished occasions demanding absolute perfection.",
    price: "From ฿120,000",
    features: ["Silk lapels & facings", "Grosgrain waistband", "Mother of pearl buttons", "Satin-lined sleeves"],
    image: "/images/suit-detail.jpg"
  },
  {
    title: "Bespoke Shirts & Ties",
    description: "The foundational layer of elegance. Hand-cut from the finest Egyptian cotton and Italian linen, finished with meticulous, single-needle stitching.",
    price: "From ฿8,500",
    features: ["Single-needle stitching", "Mother of pearl buttons", "Gusset reinforcement", "Personalized collar style"],
    image: "/images/fabrics.jpg"
  }
]

export function Services() {
  const { ref: headerRef, isVisible: isHeaderVisible } = useScrollReveal()

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] as const } }
  }

  return (
    <section id="services" className="pt-24 lg:pt-32 pb-0 bg-background overflow-hidden relative border-t border-border/30">

      {/* Intro Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-24 lg:mb-32">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={isHeaderVisible ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpVariants} className="flex items-center gap-6 mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-light text-foreground/50">
              Chapter II
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="font-serif text-5xl md:text-7xl font-black leading-[0.85] text-foreground tracking-tighter"
          >
            Garments of
            <span className="block italic text-foreground/70 font-light mt-4">Distinction</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Alternating Services */}
      <div className="flex flex-col w-full">
        {services.map((service, index) => {
          const isEven = index % 2 === 0

          return (
            <ServiceBlock
              key={index}
              service={service}
              index={index + 1}
              isEven={isEven}
            />
          )
        })}
      </div>
    </section>
  )
}

function ServiceBlock({ service, index, isEven }: { service: typeof services[0], index: number, isEven: boolean }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className="w-full relative min-h-screen flex items-center mb-32 lg:mb-0">
      <div className="w-full max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Content Side */}
        <div className={`px-6 lg:px-16 flex flex-col justify-center order-2 ${isEven ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2 lg:items-start lg:text-left'} py-12 lg:py-0 relative z-20`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-lg w-full"
          >
            {/* Numbering */}
            <div className={`mb-12 ${isEven ? 'flex justify-end' : 'flex justify-start'}`}>
              <span className="font-serif text-6xl text-foreground/20 font-black">
                0{index}
              </span>
            </div>

            <h3 className="font-serif text-4xl lg:text-5xl font-black text-foreground mb-6 leading-none">
              {service.title}
            </h3>

            <p className="font-light text-sm lg:text-base text-foreground/60 leading-relaxed mb-10">
              {service.description}
            </p>

            {/* Micro Details (Features) */}
            <div className={`flex flex-col gap-4 mb-12 ${isEven ? 'items-end' : 'items-start'}`}>
              {service.features.map((feature, idx) => (
                <div key={idx} className={`flex items-center gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-1 h-1 rounded-full bg-accent" />
                  <span className="text-xs uppercase tracking-[0.2em] text-foreground/70 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Price & Book */}
            <div className={`flex items-center gap-8 ${isEven ? 'justify-end' : 'justify-start'} border-t border-foreground/10 pt-8 mt-12`}>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-1">Starting Investment</span>
                <span className="font-serif text-2xl text-foreground">{service.price}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className={`relative h-[60vh] lg:h-screen w-full order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'} overflow-hidden`}>
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={isVisible ? { scale: 1 } : { scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
          {/* Subtle overlay gradient to merge harsh edges into the background if needed, or left raw for print style */}
        </div>

      </div>
    </div>
  )
}
