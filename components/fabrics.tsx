"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

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
    description: "The gold standard for business suiting. Luxuriously soft with excellent drape and recovery."
  },
  {
    name: "Cashmere Blends",
    description: "Unparalleled softness and warmth. Ideal for cooler climates and evening wear."
  },
  {
    name: "Silk & Linen",
    description: "Breathable elegance for Bangkok's climate. Perfect for warm-weather sophistication."
  },
  {
    name: "Mohair",
    description: "A lustrous, resilient fiber that adds brilliance to dinner jackets and formal wear."
  }
]

export function Fabrics() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <div ref={ref} className={isVisible ? 'reveal visible' : 'reveal'}>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                Our Fabrics
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-6">
              The World&apos;s Finest
              <span className="italic text-primary block">Cloths & Mills</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-12">
              We source exclusively from the world&apos;s most prestigious mills—houses that have
              woven fabrics for royalty, heads of state, and discerning gentlemen for generations.
              Each bolt that enters our atelier meets exacting standards of quality, hand, and heritage.
            </p>
            </div>

            {/* Fabric Types */}
            <div className="space-y-6">
              {fabricTypes.map((type, index) => (
                <div key={index} className="flex gap-4 p-4 bg-background/50 border border-border/50">
                  <div className="w-1 bg-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{type.name}</h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image & Mills */}
          <div className="space-y-8">
            {/* Fabric Image */}
            <div className="relative h-80 overflow-hidden">
              <Image
                src="/images/fabrics.jpg"
                alt="Premium suit fabrics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
            </div>

            {/* Partner Mills */}
            <div>
              <h3 className="text-sm font-medium tracking-[0.2em] text-muted-foreground uppercase mb-6">
                Our Partner Mills
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {fabricHouses.map((house, index) => (
                  <div 
                    key={index} 
                    className="p-4 border border-border hover:border-primary/50 transition-colors group"
                  >
                    <h4 className="font-serif text-lg text-foreground group-hover:text-primary transition-colors">
                      {house.name}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">{house.location}</p>
                    <p className="text-xs text-muted-foreground mt-2 italic">{house.specialty}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Fabric Count Note */}
            <div className="flex items-center gap-4 p-6 bg-primary/10 border border-primary/20">
              <div className="text-center">
                <span className="font-serif text-4xl text-primary">800+</span>
                <p className="text-xs text-muted-foreground mt-1">Fabric Swatches</p>
              </div>
              <div className="w-px h-16 bg-primary/30" />
              <p className="text-sm text-muted-foreground flex-1">
                Our library encompasses over 800 fabric swatches, regularly updated with the 
                latest seasonal collections from each partner mill.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
