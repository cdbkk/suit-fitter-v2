"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    quote: "After decades of tailoring experiences across London, Hong Kong, and Milan, I can confidently say that Suit Fitter represents the pinnacle of the craft. The attention to detail is extraordinary—they understood nuances about fit that I had never been able to articulate.",
    name: "James Richardson",
    title: "Managing Director, Private Equity",
    location: "Singapore"
  },
  {
    quote: "My wedding suit from Suit Fitter was nothing short of perfection. The team guided me through every decision with patience and expertise. Months later, the suit still draws compliments at every event.",
    name: "Tanawat Pongsakorn",
    title: "Tech Entrepreneur",
    location: "Bangkok"
  },
  {
    quote: "As someone who has worn bespoke for 30 years, I recognize exceptional work when I see it. The canvas construction, the hand-finishing, the fit—everything speaks to true craftsmanship. This is tailoring as it should be.",
    name: "David Chen",
    title: "Senior Partner, Law Firm",
    location: "Hong Kong"
  },
  {
    quote: "I was skeptical about finding Savile Row-quality tailoring in Thailand, but Suit Fitter exceeded every expectation. The fabric selection is world-class, and the construction is impeccable. I now fly in specifically for my fittings.",
    name: "Michael Hartmann",
    title: "Investment Banker",
    location: "Frankfurt"
  }
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section className="py-12 lg:py-24 bg-foreground text-background">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-sm font-medium tracking-[0.3em] text-accent uppercase">
              Testimonials
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>

          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-background">
            Words from Our
            <span className="italic text-accent block">Distinguished Patrons</span>
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto" role="region" aria-label="Client testimonials">
          <div className="relative">
            {/* Quote Icon */}
            <Quote className="w-16 h-16 text-accent/20 absolute -top-4 -left-4 lg:-left-12" />

            {/* Testimonial Content */}
            <div aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 px-4 lg:px-12"
              >
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-background leading-relaxed italic mb-8">
                  &ldquo;{testimonials[current].quote}&rdquo;
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-px bg-accent" />
                  <div>
                    <p className="font-medium text-background">{testimonials[current].name}</p>
                    <p className="text-sm text-background/60">
                      {testimonials[current].title} · {testimonials[current].location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-background/20">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={testimonials[index].name}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 transition-all ${index === current
                      ? "w-8 bg-accent"
                      : "bg-accent/30 hover:bg-accent/50"
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-12 h-12 flex items-center justify-center border border-background/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 flex items-center justify-center border border-background/20 hover:border-accent hover:text-accent transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
