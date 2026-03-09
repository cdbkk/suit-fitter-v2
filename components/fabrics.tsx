"use client"

import Image from "next/image"
import { motion, type Variants } from "framer-motion"

const fabricHouses = [
  {
    name: "Holland & Sherry",
    location: "London, England",
    specialty: "Heritage British cloths, Super 180s wools"
  },
  {
    name: "Loro Piana",
    location: "Quarona, Italy",
    specialty: "Cashmere, vicuña, and premium wool blends"
  },
  {
    name: "Scabal",
    location: "Brussels, Belgium",
    specialty: "Diamond Chip, precious metal woven fabrics"
  },
  {
    name: "Dormeuil",
    location: "Paris, France",
    specialty: "Amadeus, Tonik, and Iconik collections"
  }
]

const fabricTypes = [
  {
    name: "Super 150s Wool",
    description: "The gold standard for business suiting. Soft with excellent drape and recovery."
  },
  {
    name: "Cashmere Blends",
    description: "Softness and warmth for cooler climates and evening wear."
  },
  {
    name: "Silk & Linen",
    description: "Breathable elegance for tropical climates and warm-weather sophistication."
  },
  {
    name: "Mohair",
    description: "Lustrous and resilient. Adds brilliance to dinner jackets and formal wear."
  }
]

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 1.03 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
}

const staggerVariants: Variants = {
  visible: { transition: { staggerChildren: 0.1 } },
}

export function Fabrics() {
  return (
    <section className="py-10 lg:py-32 bg-card">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerVariants}
            >
              <motion.div variants={fadeUpVariants} className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-accent" />
                <span className="text-sm font-medium tracking-[0.3em] text-accent uppercase">
                  Our Fabrics
                </span>
              </motion.div>

              <motion.h2 variants={fadeUpVariants} className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-6">
                The World&apos;s Finest
                <span className="italic text-accent block">Cloths & Mills</span>
              </motion.h2>

              <motion.p variants={fadeUpVariants} className="text-muted-foreground leading-relaxed mb-12">
                Sourced from the world&apos;s most prestigious mills. Houses that have woven for royalty
                and discerning gentlemen for generations.
              </motion.p>
            </motion.div>

            {/* Fabric Types */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerVariants}
              className="space-y-6"
            >
              {fabricTypes.map((type) => (
                <motion.div key={type.name} variants={fadeUpVariants} className="flex gap-4 p-4 bg-background/50 border border-border/50">
                  <div className="w-1 bg-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Image & Mills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerVariants}
            className="space-y-8"
          >
            {/* Fabric Image */}
            {/* TODO: Replace /images/fabrics.jpg — current image shows a forest, not fabric. Source a proper fabric swatch/roll photo. */}
            <motion.div variants={imageVariants} className="relative h-80 overflow-hidden">
              <Image
                src="/images/fabrics.jpg"
                alt="Curated fabric collection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </motion.div>

            {/* Partner Mills */}
            <motion.div variants={fadeUpVariants}>
              <h3 className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Our Partner Mills
              </h3>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={staggerVariants}
                className="grid grid-cols-2 gap-4"
              >
                {fabricHouses.map((house) => (
                  <motion.div
                    key={house.name}
                    variants={fadeUpVariants}
                    className="p-4 border border-border hover:border-accent/50 transition-colors group"
                  >
                    <h4 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                      {house.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{house.location}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{house.specialty}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Fabric Count Note */}
            <motion.div variants={fadeUpVariants} className="flex items-center gap-4 p-6 bg-accent/10 border border-accent/20">
              <div className="text-center">
                <span className="font-serif text-4xl text-accent">800+</span>
                <p className="text-xs text-muted-foreground mt-1">Fabric Swatches</p>
              </div>
              <div className="w-px h-16 bg-accent/30" />
              <p className="text-sm text-muted-foreground flex-1">
                Over 800 swatches, updated seasonally from each partner mill.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
