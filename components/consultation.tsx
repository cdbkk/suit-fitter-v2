"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, Check } from "lucide-react"
import { SMOOTH_EASE, staggerContainer, fadeUp } from "@/lib/animations"

const SUBMIT_DELAY_MS = 800

export function Consultation() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    preferredDate: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Demo mode: simulate network delay, no data is sent
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, SUBMIT_DELAY_MS)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="consultation" className="py-12 lg:py-28 bg-foreground text-background overscroll-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-background/40" />
              <span className="text-sm font-medium tracking-[0.3em] text-background/80 uppercase">
                Begin Your Journey
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp} className="font-serif text-4xl md:text-5xl font-light leading-tight text-background mb-6">
              Request a Private
              <span className="italic block">Consultation</span>
            </motion.h2>

            <motion.p variants={fadeUp} className="text-background/80 leading-relaxed mb-10">
              Share your details below and we will reach out to arrange your consultation.
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-4">
              <h3 className="text-sm font-medium tracking-[0.2em] text-background/70 uppercase">
                What to Expect
              </h3>
              {[
                "Personal style consultation with our senior advisor",
                "Access to our complete fabric library",
                "Precise measurements by our master tailor",
                "Transparent pricing, no hidden costs",
                "Complimentary refreshments in our fitting room"
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center bg-accent/20 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-background/90 text-sm">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-8">
              <a
                href="https://wa.me/660816771718"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 border border-background/20 text-background hover:text-accent transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Chat on WhatsApp</span>
              </a>
              <p className="text-xs text-background/50 mt-2">Preferred for international inquiries</p>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-background/10">
              <p className="text-sm text-background/70 italic">
                &ldquo;The privilege of dressing well is not merely about clothing—it is about
                presenting the best version of oneself to the world.&rdquo;
              </p>
              <p className="text-xs text-background/60 mt-2">— Daniel Taylor, Founder</p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: SMOOTH_EASE, delay: 0.15 }}
            className="touch-pan-y"
          >
            {isSubmitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 flex items-center justify-center bg-accent mx-auto mb-6">
                    <Check className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-2xl text-background mb-3">Thank You</h3>
                  <p className="text-background/80 max-w-sm">
                    Your consultation request has been received. A member of our team will
                    contact you within 24 hours.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 touch-pan-y">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-background/90 mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-background/90 mb-2">
                      Email <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      autoComplete="email"
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-background/90 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors"
                      placeholder="+66 76 XXX XXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-background/90 mb-2">
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-background/20 text-background focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-foreground">Select a service</option>
                      <option value="bespoke-suit" className="bg-foreground">Bespoke Suit</option>
                      <option value="formal-eveningwear" className="bg-foreground">Formal Eveningwear</option>
                      <option value="bespoke-shirts" className="bg-foreground">Bespoke Shirts</option>
                      <option value="wardrobe-consultation" className="bg-foreground">Wardrobe Consultation</option>
                      <option value="other" className="bg-foreground">Other</option>
                    </select>
                    <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-background/60 pointer-events-none" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6l4 4 4-4" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-background/90 mb-2">
                    Preferred Consultation Date
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formState.preferredDate}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-background/90 mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-foreground transition-colors resize-none"
                    placeholder="Tell us about your occasion, preferences, or any questions..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-medium tracking-wide hover:bg-accent/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Request Consultation
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-xs text-background/60 text-center mt-4">
                  By submitting this form, you agree to our privacy policy and consent to
                  being contacted regarding your inquiry.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
