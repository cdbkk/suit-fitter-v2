"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling down 90% of the viewport height
      setIsScrolled(window.scrollY > window.innerHeight * 0.9)
    }
    window.addEventListener("scroll", handleScroll)
    // Run once on mount to set initial state correctly
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Use a stark black text on a transparent-to-frost glass navbar
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30 transition-all duration-700 ease-[0.21,0.47,0.32,0.98] ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
      }`}>
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-16">
        <div className="flex items-center justify-between h-14 lg:h-24">

          {/* Desktop Navigation (Left) */}
          <nav className="hidden lg:flex items-center gap-12 w-1/3">
            <Link
              href="#philosophy"
              className="text-xs uppercase tracking-[0.2em] font-light text-foreground/70 hover:text-accent transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="#services"
              className="text-xs uppercase tracking-[0.2em] font-light text-foreground/70 hover:text-accent transition-colors"
            >
              Services
            </Link>
          </nav>

          {/* Centered Logo */}
          <Link href="/" className="flex items-center justify-center w-1/3 mt-1">
            <div className="relative w-44 h-10 lg:w-40 lg:h-8 flex items-center justify-center">
              <Image
                src="/assets/official-logo.svg"
                alt="Suit Fitter Logo"
                fill
                className="object-contain transition-all duration-500 dark:invert"
              />
            </div>
          </Link>

          {/* Desktop Actions (Right) */}
          <div className="hidden lg:flex items-center justify-end gap-12 w-1/3">
            <Link
              href="#atelier"
              className="text-xs uppercase tracking-[0.2em] font-light text-foreground/70 hover:text-accent transition-colors"
            >
              Atelier
            </Link>
            <Link
              href="#consultation"
              className="group relative px-6 py-3 overflow-hidden border border-foreground/20 text-xs uppercase tracking-[0.2em] font-light transition-colors hover:border-accent"
            >
              <span className="relative z-10 group-hover:text-accent font-medium transition-colors">Book</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-accent/10"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <span className="relative w-6 h-4 flex flex-col justify-between">
              <span
                className={`block w-full h-[1.5px] bg-foreground origin-center transition-all duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-foreground transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`block w-full h-[1.5px] bg-foreground origin-center transition-all duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-background/95 backdrop-blur-3xl' : 'max-h-0 opacity-0'
        }`}>
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-6rem)] gap-10">
          <Link href="#philosophy" onClick={() => setIsOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Philosophy</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Services</Link>
          <Link href="#atelier" onClick={() => setIsOpen(false)} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Atelier</Link>
          <Link href="#consultation" onClick={() => setIsOpen(false)} className="mt-8 px-10 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">Book Consultation</Link>
        </nav>
      </div>
    </header>
  )
}
