"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const AnimatedBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = container.getBoundingClientRect()

      const x = (clientX - left) / width
      const y = (clientY - top) / height

      container.style.setProperty("--mouse-x", `${x}`)
      container.style.setProperty("--mouse-y", `${y}`)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="moving-background">
      <motion.svg
        viewBox="0 0 1000 1000"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <motion.path
          d="M0,500 Q250,0 500,500 T1000,500"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          animate={{
            d: [
              "M0,500 Q250,0 500,500 T1000,500",
              "M0,500 Q250,1000 500,500 T1000,500",
              "M0,500 Q250,0 500,500 T1000,500",
            ],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--gradient-start)" />
            <stop offset="50%" stopColor="var(--gradient-middle)" />
            <stop offset="100%" stopColor="var(--gradient-end)" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  )
}

export default AnimatedBackground
