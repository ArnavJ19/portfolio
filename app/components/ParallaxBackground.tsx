"use client"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

const ParallaxBackground = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const opacityBg = useTransform(scrollYProgress, [0, 1], [0.5, 0])

  return (
    <motion.div
      ref={ref}
      className="fixed inset-0 z-[-1]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        y: backgroundY,
        opacity: opacityBg,
      }}
    />
  )
}

export default ParallaxBackground
