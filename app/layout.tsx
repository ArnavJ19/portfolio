import type React from "react"
import "./globals.css"
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import type { Metadata } from "next"
import TechNav from "./components/TechNav"
import ScrollToTop from "./components/ScrollToTop"
import LoadingScreen from "./components/LoadingScreen"
import MathBackground from "./components/MathBackground"
import ParticleSystem from "./components/ParticleSystem"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["300", "400", "500", "600", "700"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Arnav Jain",
  description: "Portfolio of Arnav Jain - Data Scientist, Machine Learning Engineer, and AI Researcher",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-[#0A0A0A] text-white antialiased font-sans">
        <LoadingScreen />
        <MathBackground />
        <ParticleSystem />
        <TechNav />
        <ScrollToTop />
        <main className="pt-16 relative z-10">{children}</main>
      </body>
    </html>
  )
}
