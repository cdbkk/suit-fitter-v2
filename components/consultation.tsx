"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="consultation" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Content */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-background/40" />
              <span className="text-sm font-medium tracking-[0.3em] text-background/80 uppercase">
                Begin Your Journey
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-background mb-6">
              Request a Private
              <span className="italic block">Consultation</span>
            </h2>

            <p className="text-background/80 leading-relaxed mb-10">
              Your bespoke journey begins with a conversation. Share your details below, and a 
              member of our team will personally reach out to arrange your consultation at a 
              time that suits you.
            </p>

            {/* What to Expect */}
            <div className="space-y-4">
              <h3 className="text-sm font-medium tracking-[0.2em] text-background/70 uppercase">
                What to Expect
              </h3>
              
              {[
                "A personal style consultation with our senior advisor",
                "Access to our complete fabric library and design options",
                "Precise body measurements by our master tailor",
                "Transparent pricing with no hidden costs",
                "Complimentary refreshments in our private fitting room"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center bg-accent/20 mt-0.5">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-background/90 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Decorative Element */}
            <div className="mt-12 pt-8 border-t border-background/10">
              <p className="text-sm text-background/70 italic">
                &ldquo;The privilege of dressing well is not merely about clothing—it is about 
                presenting the best version of oneself to the world.&rdquo;
              </p>
              <p className="text-xs text-background/60 mt-2">— Khun Somchai Rattanakit, Founder</p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-background/90 mb-2">
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email & Phone */}
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
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none transition-colors"
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
                      value={formState.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none transition-colors"
                      placeholder="+66 XX XXX XXXX"
                    />
                  </div>
                </div>

                {/* Service Interest */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-background/90 mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formState.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background focus:border-accent focus:outline-none transition-colors appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-foreground">Select a service</option>
                    <option value="bespoke-suit" className="bg-foreground">Bespoke Suit</option>
                    <option value="formal-eveningwear" className="bg-foreground">Formal Eveningwear</option>
                    <option value="bespoke-shirts" className="bg-foreground">Bespoke Shirts</option>
                    <option value="wardrobe-consultation" className="bg-foreground">Wardrobe Consultation</option>
                    <option value="other" className="bg-foreground">Other</option>
                  </select>
                </div>

                {/* Preferred Date */}
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
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background focus:border-accent focus:outline-none transition-colors"
                  />
                </div>

                {/* Message */}
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
                    className="w-full px-4 py-3 bg-transparent border border-background/20 text-background placeholder:text-background/60 focus:border-accent focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your occasion, preferences, or any questions..."
                  />
                </div>

                {/* Submit Button */}
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
          </div>
        </div>
      </div>
    </section>
  )
}
