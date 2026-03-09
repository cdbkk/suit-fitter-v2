import type { Metadata } from 'next'
import { Playfair_Display, Outfit } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { MotionProvider } from '@/components/motion-provider'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  weight: ['400', '900'] // 900 for high-contrast headings
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
  weight: ['300', '400', '500'] // 300 for clean, light body text
});

export const metadata: Metadata = {
  title: 'Suit Fitter | Bespoke Tailoring in Phuket',
  description: 'Experience the pinnacle of bespoke tailoring in Patong Beach, Phuket. Hand-crafted suits with master craftsmanship, premium fabrics, and timeless elegance.',
  metadataBase: new URL('https://suit.clearpath.cx'),
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Suit Fitter | Bespoke Tailoring in Phuket',
    description: 'Tailored in Phuket. Worn Everywhere. 900+ five-star reviews.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Suit Fitter',
    images: [
      {
        url: '/og-image.jpg?v=3',
        width: 1200,
        height: 630,
        alt: 'Suit Fitter - Bespoke Tailoring in Phuket',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Suit Fitter | Bespoke Tailoring in Phuket',
    description: 'Tailored in Phuket. Worn Everywhere. 900+ five-star reviews.',
    images: ['/og-image.jpg?v=3'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${playfair.variable} font-sans antialiased text-foreground bg-background`}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-foreground focus:text-background focus:px-4 focus:py-2 focus:text-sm">
          Skip to content
        </a>
        <MotionProvider>
          {children}
        </MotionProvider>
        <Analytics />
      </body>
    </html>
  )
}
