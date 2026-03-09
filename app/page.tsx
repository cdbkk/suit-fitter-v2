import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Philosophy } from "@/components/philosophy"
import { Marquee } from "@/components/marquee"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Fabrics } from "@/components/fabrics"
import { ImageBreak } from "@/components/image-break"
import { Atelier } from "@/components/atelier"
import { Testimonials } from "@/components/testimonials"
import { TrustBadges } from "@/components/trust-badges"
import { Consultation } from "@/components/consultation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Philosophy />
      <Marquee />
      <Services />
      <Process />
      <Fabrics />
      <ImageBreak />
      <Atelier />
      <Testimonials />
      <TrustBadges />
      <Consultation />
      <Footer />
    </main>
  )
}
