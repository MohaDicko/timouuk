import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { SmoothScroll } from "@/components/smooth-scroll"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Timouuk - Boutique de Mode à Bamako",
  description:
    "Découvrez notre collection exclusive de Habaya, accessoires, chaussures, sacs, montres et parfums en vrac. Boutique de mode à Bamako, Mali.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
        <Analytics />
      </body>
    </html>
  )
}
