"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export function SuitAnimation() {
    const containerRef = useRef<HTMLDivElement>(null)

    // We track the scroll progress through a tall container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    })

    // Map scroll progress to path length (0 to 1)
    // We start drawing a bit after the section enters, and finish drawing before it leaves
    const pathLength = useTransform(scrollYProgress, [0.1, 0.8], [0, 1])

    // Fade in the text as the drawing completes
    const textOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1])
    const textY = useTransform(scrollYProgress, [0.7, 0.9], [20, 0])

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Background Grid Pattern (Subtle Blueprint Vibe) */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

                <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center z-10 px-6">
                    <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        stroke="currentColor"
                        className="w-full h-full max-h-[70vh] text-foreground stroke-[0.3] md:stroke-[0.2]"
                        style={{
                            filter: "drop-shadow(0px 0px 8px rgba(0,0,0,0.1))"
                        }}
                    >
                        {/* Center Reference Line (Chalk/Measuring) */}
                        <motion.line
                            x1="50" y1="5"
                            x2="50" y2="95"
                            style={{ pathLength }}
                            strokeDasharray="1 1"
                            className="text-foreground/30"
                        />

                        {/* Horizontal Measuring Lines */}
                        <motion.line x1="20" y1="20" x2="80" y2="20" style={{ pathLength }} strokeDasharray="0.5 2" className="text-foreground/20" />
                        <motion.line x1="30" y1="50" x2="70" y2="50" style={{ pathLength }} strokeDasharray="0.5 2" className="text-foreground/20" />
                        <motion.line x1="25" y1="80" x2="75" y2="80" style={{ pathLength }} strokeDasharray="0.5 2" className="text-foreground/20" />

                        {/* Master Tailor's Collar & Neck */}
                        <motion.path
                            d="M 40 15 C 40 25, 50 35, 50 35 C 50 35, 60 25, 60 15"
                            style={{ pathLength }}
                            strokeLinecap="round"
                        />

                        {/* Shoulders */}
                        <motion.path
                            d="M 15 25 Q 40 15 50 15 Q 60 15 85 25"
                            style={{ pathLength }}
                            className="stroke-[0.4] md:stroke-[0.3]"
                            strokeLinecap="round"
                        />

                        {/* Left Armhole & Torso Silhouette */}
                        <motion.path
                            d="M 15 25 C 15 35, 25 45, 25 55 C 25 70, 20 85, 20 95"
                            style={{ pathLength }}
                            strokeLinecap="round"
                        />

                        {/* Right Armhole & Torso Silhouette */}
                        <motion.path
                            d="M 85 25 C 85 35, 75 45, 75 55 C 75 70, 80 85, 80 95"
                            style={{ pathLength }}
                            strokeLinecap="round"
                        />

                        {/* Left Lapel Detail */}
                        <motion.path
                            d="M 40 25 L 35 45 L 45 55 L 50 65"
                            style={{ pathLength }}
                            strokeLinejoin="round"
                        />
                        {/* Right Lapel Detail */}
                        <motion.path
                            d="M 60 25 L 65 45 L 55 55 L 50 65"
                            style={{ pathLength }}
                            strokeLinejoin="round"
                        />

                        {/* Jacket Hem / Bottom Cut */}
                        <motion.path
                            d="M 20 95 Q 50 100 50 85 Q 50 100 80 95"
                            style={{ pathLength }}
                            strokeLinecap="round"
                        />

                        {/* Stylized Button Marks */}
                        <motion.circle cx="50" cy="55" r="0.8" style={{ pathLength }} fill="currentColor" />
                        <motion.circle cx="50" cy="65" r="0.8" style={{ pathLength }} fill="currentColor" />

                        {/* Pocket Welts */}
                        <motion.line x1="25" y1="60" x2="35" y2="58" style={{ pathLength }} />
                        <motion.line x1="75" y1="60" x2="65" y2="58" style={{ pathLength }} />

                        {/* Breast Pocket */}
                        <motion.line x1="60" y1="35" x2="70" y2="33" style={{ pathLength }} />

                    </svg>
                </div>

                {/* Narrative Text that appears upon completion */}
                <motion.div
                    style={{ opacity: textOpacity, y: textY }}
                    className="absolute bottom-24 left-0 right-0 text-center px-6 z-20"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] font-light text-foreground/50 block mb-4">
                        The Anatomy of Perfection
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-black text-foreground">
                        Crafted from <br className="md:hidden" />
                        <span className="italic font-light text-foreground/70 tracking-normal">a single line</span>
                    </h2>
                </motion.div>
            </div>
        </section>
    )
}
