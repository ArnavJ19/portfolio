"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const MathBackground = () => {
  const [symbols, setSymbols] = useState<Array<{ id: number; symbol: string; x: number; delay: number }>>([])

  const mathSymbols = [
    "∑",
    "∫",
    "∂",
    "∇",
    "∞",
    "π",
    "λ",
    "μ",
    "σ",
    "Ω",
    "α",
    "β",
    "γ",
    "δ",
    "ε",
    "θ",
    "ρ",
    "φ",
    "ψ",
    "χ",
    "≈",
    "≠",
    "≤",
    "≥",
    "∈",
    "∉",
    "∪",
    "∩",
    "⊂",
    "⊃",
    "∀",
    "∃",
    "∴",
    "∵",
    "⟨",
    "⟩",
    "‖",
    "⊥",
    "∝",
    "∼",
    "f(x)",
    "∂y/∂x",
    "lim",
    "max",
    "min",
    "log",
    "ln",
    "sin",
    "cos",
    "tan",
    "√",
    "∛",
    "x²",
    "x³",
    "eˣ",
  ]

  useEffect(() => {
    const generateSymbols = () => {
      const newSymbols = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        x: Math.random() * 100,
        delay: Math.random() * 20,
      }))
      setSymbols(newSymbols)
    }

    generateSymbols()
    const interval = setInterval(generateSymbols, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-2xl font-serif"
          style={{
            left: `${item.x}%`,
            color: `rgba(0, 122, 255, ${0.1 + Math.random() * 0.2})`,
          }}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 1, 1, 0],
            rotate: 360,
          }}
          transition={{
            duration: 25 + Math.random() * 10,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}
    </div>
  )
}

export default MathBackground
