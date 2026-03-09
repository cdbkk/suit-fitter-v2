import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { SuitAnimation } from "@/components/suit-animation"
import { Philosophy } from "@/components/philosophy"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Fabrics } from "@/components/fabrics"
import { Atelier } from "@/components/atelier"
import { Testimonials } from "@/components/testimonials"
import { Consultation } from "@/components/consultation"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <SuitAnimation />
      <Philosophy />
      <Services />
      <Process />
      <Fabrics />
      <Atelier />
      <Testimonials />
      <Consultation />
      <Footer />
    </main>
  )
}
