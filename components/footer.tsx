import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="relative w-56 h-12 -ml-2">
                <Image
                  src="/assets/official-logo.svg"
                  alt="Suit Fitter Logo"
                  fill
                  className="object-contain dark:invert object-left"
                />
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The art of bespoke tailoring, where centuries of tradition meet contemporary elegance
              in the heart of Bangkok.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] text-foreground uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-4">
              {["Philosophy", "Services", "Process", "Atelier"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] text-foreground uppercase mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {["Bespoke Suits", "Formal Eveningwear", "Bespoke Shirts", "Alterations", "Wardrobe Consultation"].map((item) => (
                <li key={item}>
                  <Link
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-medium tracking-[0.2em] text-foreground uppercase mb-6">
              Contact
            </h4>
            <address className="not-italic space-y-4 text-sm text-muted-foreground">
              <p>
                3rd Floor, Gaysorn Village<br />
                999 Ploenchit Road<br />
                Bangkok 10330, Thailand
              </p>
              <p>
                <a href="tel:+6626561234" className="hover:text-foreground transition-colors">
                  +66 2 656 1234
                </a>
              </p>
              <p>
                <a href="mailto:atelier@suit-fitter.com" className="hover:text-foreground transition-colors">
                  atelier@suit-fitter.com
                </a>
              </p>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Suit Fitter. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Thai-inspired decorative pattern at very bottom */}
      <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary" />
    </footer>
  )
}
