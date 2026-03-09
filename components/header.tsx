"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const firstLinkRef = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight * 0.9)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Escape key closes menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown)
    }
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  // Focus trap: focus first link when opening, button when closing
  useEffect(() => {
    if (isOpen) {
      requestAnimationFrame(() => {
        firstLinkRef.current?.focus()
      })
    } else if (menuButtonRef.current && document.activeElement !== menuButtonRef.current) {
      menuButtonRef.current?.focus()
    }
  }, [isOpen])

  const closeMenu = useCallback(() => setIsOpen(false), [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/30 transition-[transform,opacity] duration-700 ease-[0.21,0.47,0.32,0.98] ${isScrolled ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
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
            <div className="relative w-40 h-9 lg:w-44 lg:h-10 flex items-center justify-center">
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
            ref={menuButtonRef}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
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
      <div
        id="mobile-nav"
        role="dialog"
        aria-label="Mobile navigation"
        aria-modal={isOpen}
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 bg-background/95 backdrop-blur-3xl' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-6rem)] gap-10">
          <Link ref={firstLinkRef} href="#philosophy" onClick={closeMenu} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Philosophy</Link>
          <Link href="#services" onClick={closeMenu} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Services</Link>
          <Link href="#atelier" onClick={closeMenu} className="text-xl font-serif text-foreground hover:text-accent transition-colors">Atelier</Link>
          <Link href="#consultation" onClick={closeMenu} className="mt-8 px-10 py-4 border border-foreground text-foreground text-sm uppercase tracking-widest hover:border-accent hover:text-accent transition-colors">Book Consultation</Link>
        </nav>
      </div>
    </header>
  )
}
