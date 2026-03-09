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

const imageRevealVariants = {
  hidden: { scale: 1.03, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.9, ease: smoothEase } }
}

const noopVariants = {
  hidden: {},
  visible: {},
}

const services = [
  {
    title: "Bespoke Suits",
    description: "Hand-cut and constructed to your unique anatomy, utilizing the world's finest cloth.",
    price: "From ฿95,000",
    features: ["Full canvas construction", "Hand-sewn buttonholes", "Working surgeon's cuffs", "Personalized monogram"],
    image: "/images/finished-suit.jpg"
  },
  {
    title: "Formal Eveningwear",
    description: "Tuxedos and dinner jackets for galas, weddings, and occasions demanding perfection.",
    price: "From ฿120,000",
    features: ["Silk lapels & facings", "Grosgrain waistband", "Mother of pearl buttons", "Satin-lined sleeves"],
    image: "/images/suit-detail.jpg"
  },
  {
    title: "Bespoke Shirts & Ties",
    description: "Hand-cut from Egyptian cotton and Italian linen, finished with single-needle stitching.",
    price: "From ฿8,500",
    features: ["Single-needle stitching", "Mother of pearl buttons", "Gusset reinforcement", "Personalized collar style"],
    image: "/images/fabrics.jpg"
  }
]

export function Services() {
  return (
    <section id="services" className="pt-16 lg:pt-32 pb-0 bg-background overflow-hidden relative border-t border-border/30">

      {/* Intro Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 mb-10 lg:mb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={containerVariants}
          className="flex flex-col items-center text-center"
        >
          <motion.div variants={fadeUpVariants} className="flex items-center gap-6 mb-6 lg:mb-8">
            <span className="text-[10px] uppercase tracking-[0.4em] font-light text-foreground/50">
              Chapter II
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUpVariants}
            className="font-serif text-4xl md:text-7xl font-black leading-[0.85] text-foreground tracking-tighter"
          >
            Garments of
            <span className="block italic text-foreground/70 font-light mt-2 lg:mt-4">Distinction</span>
          </motion.h2>
        </motion.div>
      </div>

      {/* Mobile: Compact stacked cards */}
      <div className="lg:hidden px-6 space-y-6 pb-12">
        {services.map((service, index) => (
          <MobileServiceCard key={service.title} service={service} index={index + 1} />
        ))}
      </div>

      {/* Desktop: Alternating full-width blocks */}
      <div className="hidden lg:flex flex-col w-full">
        {services.map((service, index) => {
          const isEven = index % 2 === 0

          return (
            <ServiceBlock
              key={service.title}
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

function MobileServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: smoothEase }}
      className="relative overflow-hidden"
    >
      {/* Image */}
      <div className="relative h-[45vw] w-full overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover"
          sizes="100vw"
        />
        <span className="absolute bottom-3 left-4 font-serif text-4xl text-foreground/20 font-black">
          0{index}
        </span>
      </div>

      {/* Content */}
      <div className="pt-4 pb-2">
        <h3 className="font-serif text-2xl font-black text-foreground mb-2 leading-none">
          {service.title}
        </h3>
        <p className="font-light text-sm text-foreground/70 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features as inline tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.map((feature) => (
            <span key={feature} className="text-[11px] uppercase tracking-[0.15em] text-foreground/60 border border-foreground/10 px-2.5 py-1">
              {feature}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between border-t border-foreground/10 pt-4">
          <div>
            <span className="block text-[9px] uppercase tracking-[0.3em] text-foreground/40 mb-0.5">Starting</span>
            <span className="font-serif text-xl text-foreground">{service.price}</span>
          </div>
          <a
            href="#consultation"
            className="text-xs uppercase tracking-[0.2em] font-medium text-accent hover:text-foreground transition-colors"
          >
            Enquire &rarr;
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function ServiceBlock({ service, index, isEven }: { service: typeof services[0], index: number, isEven: boolean }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={noopVariants}
      className="w-full relative min-h-[70vh] flex items-center"
    >
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-2 gap-24 items-center">

        {/* Content Side */}
        <div className={`px-16 flex flex-col justify-center ${isEven ? 'order-1 items-end text-right' : 'order-2 items-start text-left'} relative z-20`}>
          <motion.div
            variants={containerVariants}
            className="max-w-lg w-full"
          >
            {/* Numbering */}
            <motion.div variants={fadeUpVariants} className={`mb-8 ${isEven ? 'flex justify-end' : 'flex justify-start'}`}>
              <span className="font-serif text-6xl text-foreground/20 font-black">
                0{index}
              </span>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <h3 className="font-serif text-4xl lg:text-5xl font-black text-foreground mb-6 leading-none">
                {service.title}
              </h3>
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <p className="font-light text-sm lg:text-base text-foreground/70 leading-relaxed mb-10">
                {service.description}
              </p>
            </motion.div>

            {/* Micro Details (Features) */}
            <motion.div variants={fadeUpVariants} className={`flex flex-col gap-3 mb-8 ${isEven ? 'items-end' : 'items-start'}`}>
              {service.features.map((feature) => (
                <div key={feature} className={`flex items-center gap-4 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className="w-3 h-[1px] bg-accent" />
                  <span className="text-sm uppercase tracking-[0.2em] text-foreground/70 font-medium">
                    {feature}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Price & Book */}
            <motion.div variants={fadeUpVariants} className={`flex items-center gap-8 ${isEven ? 'justify-end' : 'justify-start'} border-t border-foreground/10 pt-6 mt-8`}>
              <div>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-foreground/40 mb-1">Starting Investment</span>
                <span className="font-serif text-3xl text-foreground">{service.price}</span>
              </div>
              <a
                href="#consultation"
                className="text-xs uppercase tracking-[0.2em] font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                Enquire &rarr;
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Image Side */}
        <div className={`relative h-[85vh] w-full ${isEven ? 'order-2' : 'order-1'} overflow-hidden`}>
          <motion.div
            className="absolute inset-0"
            variants={imageRevealVariants}
          >
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>

      </div>
    </motion.div>
  )
}
