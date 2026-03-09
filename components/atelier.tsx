"use client"

import Image from "next/image"

export function Atelier() {
  return (
    <section id="atelier" className="py-24 lg:py-40 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Top Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl font-black tracking-tight mb-6 uppercase">
              The Atelier
            </h2>
            <p className="text-xl md:text-2xl text-background/70 font-light leading-relaxed">
              An oasis of calm in Bangkok's premier district. Where tradition is honored, and your sartorial narrative begins.
            </p>
          </div>
          <div className="w-full lg:w-auto">
            <address className="not-italic text-sm md:text-base text-background/80 leading-loose flex flex-col lg:text-right font-light">
              <span>999 Ploenchit Road</span>
              <span>Lumpini, Pathumwan</span>
              <span>Bangkok 10330, Thailand</span>
            </address>
          </div>
        </div>

        {/* Artistic Image Composition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-24 md:mb-32">
          <div className="md:col-span-8 aspect-[16/9] relative overflow-hidden group">
            <Image
              src="/images/atelier.jpg"
              alt="Suit Fitter atelier interior"
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="(max-width: 768px) 100vw, 66vw"
            />
          </div>
          <div className="md:col-span-4 aspect-[3/4] relative overflow-hidden hidden md:block mt-24 group">
            <Image
              src="/images/hero-tailor.jpg"
              alt="Master Workshop"
              fill
              className="object-cover filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]"
              sizes="33vw"
            />
          </div>
        </div>

        {/* Contact info minimalist grid */}
        <div className="grid md:grid-cols-3 gap-12 pt-16 border-t border-background/20">
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-8">Inquiries</span>
            <div className="space-y-4 font-light text-lg">
              <p>+66 2 656 1234</p>
              <p className="text-background/50">WhatsApp: +66 81 234 5678</p>
              <a href="mailto:atelier@suit-fitter.com" className="block hover:text-accent transition-colors pt-4">
                atelier@suit-fitter.com
              </a>
            </div>
          </div>
          <div>
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
          </div>
          <div>
            <span className="text-xs tracking-[0.2em] uppercase text-background/50 block mb-8">Engage</span>
            <div className="space-y-6 font-light text-lg">
              <a href="#consultation" className="block hover:text-accent transition-colors">Book a Consultation</a>
              <a href="#services" className="block hover:text-accent transition-colors">View the Collection</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
