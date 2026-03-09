"use client"

const items = [
  "BESPOKE TAILORING",
  "SAVILE ROW TRADITION",
  "HAND-CUT PATTERNS",
  "FULL CANVAS CONSTRUCTION",
  "MASTER CRAFTSMANSHIP",
]

function MarqueeContent({ prefix }: { prefix: string }) {
  return (
    <>
      {items.map((item) => (
        <span key={`${prefix}-${item}`} className="flex items-center gap-6">
          <span>{item}</span>
          <span className="text-accent">·</span>
        </span>
      ))}
    </>
  )
}

export function Marquee() {
  return (
    <div className="bg-foreground py-4 overflow-hidden whitespace-nowrap">
      <div className="inline-flex gap-6 text-background text-xs tracking-[0.3em] uppercase font-medium marquee-track">
        <MarqueeContent prefix="a" />
        <MarqueeContent prefix="b" />
      </div>
    </div>
  )
}
