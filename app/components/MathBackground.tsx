"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const MathBackground = () => {
  const [symbols, setSymbols] = useState<Array<{ id: number; symbol: string; x: number; delay: number }>>([])

  const mathSymbols = [
    // Greek Letters
    "α",
    "β",
    "γ",
    "δ",
    "ε",
    "ζ",
    "η",
    "θ",
    "ι",
    "κ",
    "λ",
    "μ",
    "ν",
    "ξ",
    "ο",
    "π",
    "ρ",
    "σ",
    "τ",
    "υ",
    "φ",
    "χ",
    "ψ",
    "ω",
    "Α",
    "Β",
    "Γ",
    "Δ",
    "Ε",
    "Ζ",
    "Η",
    "Θ",
    "Ι",
    "Κ",
    "Λ",
    "Μ",
    "Ν",
    "Ξ",
    "Ο",
    "Π",
    "Ρ",
    "Σ",
    "Τ",
    "Υ",
    "Φ",
    "Χ",
    "Ψ",
    "Ω",

    // Mathematical Operators
    "∑",
    "∫",
    "∂",
    "∇",
    "∞",
    "∆",
    "∏",
    "∐",
    "∪",
    "∩",
    "⊂",
    "⊃",
    "⊆",
    "⊇",
    "∈",
    "∉",
    "∀",
    "∃",
    "∄",
    "∴",
    "∵",

    // Comparison & Logic
    "≈",
    "≠",
    "≤",
    "≥",
    "≡",
    "≢",
    "≅",
    "≇",
    "≪",
    "≫",
    "∝",
    "∼",
    "≃",
    "≄",
    "⊥",
    "∥",
    "∧",
    "∨",
    "¬",
    "⊕",
    "⊗",

    // Set Theory & Relations
    "⊂",
    "⊃",
    "⊆",
    "⊇",
    "∪",
    "∩",
    "∅",
    "ℕ",
    "ℤ",
    "ℚ",
    "ℝ",
    "ℂ",
    "ℙ",
    "⊤",
    "⊥",
    "⊢",
    "⊨",
    "⊬",
    "⊭",

    // Calculus & Analysis
    "∫",
    "∮",
    "∯",
    "∰",
    "∱",
    "∲",
    "∳",
    "∂",
    "∇",
    "∆",
    "□",
    "◊",
    "∘",
    "∙",
    "⋅",
    "×",
    "÷",
    "±",
    "∓",
    "√",
    "∛",
    "∜",

    // Functions & Expressions
    "f(x)",
    "g(x)",
    "h(x)",
    "F(x)",
    "G(x)",
    "H(x)",
    "∂f/∂x",
    "∂²f/∂x²",
    "df/dx",
    "d²f/dx²",
    "∂y/∂x",
    "∂z/∂t",
    "lim",
    "max",
    "min",
    "sup",
    "inf",
    "log",
    "ln",
    "exp",
    "sin",
    "cos",
    "tan",
    "sec",
    "csc",
    "cot",
    "sinh",
    "cosh",
    "tanh",
    "arcsin",
    "arccos",
    "arctan",
    "arg",
    "Re",
    "Im",
    "det",
    "tr",
    "rank",

    // Powers & Indices
    "x²",
    "x³",
    "x⁴",
    "x⁵",
    "xⁿ",
    "y²",
    "z²",
    "a²",
    "b²",
    "c²",
    "r²",
    "t²",
    "eˣ",
    "e^x",
    "2ˣ",
    "10ˣ",
    "x₁",
    "x₂",
    "x₃",
    "xₙ",
    "y₁",
    "y₂",
    "z₁",
    "a₁",
    "b₁",
    "c₁",
    "r₁",
    "t₁",
    "θ₁",
    "φ₁",
    "λ₁",
    "μ₁",

    // Matrices & Vectors
    "⟨x,y⟩",
    "⟨u,v⟩",
    "‖x‖",
    "‖v‖",
    "‖A‖",
    "|x|",
    "|y|",
    "|z|",
    "⟨⟩",
    "⟦⟧",
    "⌊x⌋",
    "⌈x⌉",
    "⌊⌋",
    "⌈⌉",

    // Probability & Statistics
    "P(A)",
    "P(B)",
    "P(A|B)",
    "P(A∩B)",
    "P(A∪B)",
    "E[X]",
    "Var(X)",
    "Cov(X,Y)",
    "σ²",
    "μ",
    "σ",
    "ρ",
    "χ²",
    "N(μ,σ²)",
    "Φ(x)",
    "φ(x)",
    "F(x)",
    "f(x)",
    "λ",
    "β",
    "α",
    "γ",
    "δ",
    "ε",
    "ζ",
    "η",
    "θ",

    // Special Functions
    "Γ(x)",
    "Γ(n)",
    "B(x,y)",
    "ζ(s)",
    "Li(x)",
    "Ei(x)",
    "Si(x)",
    "Ci(x)",
    "erf(x)",
    "erfc(x)",

    // Topology & Geometry
    "∂M",
    "∂Ω",
    "∂D",
    "∇f",
    "∇²f",
    "∇·F",
    "∇×F",
    "div F",
    "curl F",
    "grad f",
    "∮",
    "∯",
    "∰",

    // Number Theory
    "gcd(a,b)",
    "lcm(a,b)",
    "φ(n)",
    "τ(n)",
    "σ(n)",
    "ω(n)",
    "Ω(n)",
    "μ(n)",
    "ζ(s)",
    "L(s,χ)",

    // Complex Analysis
    "z",
    "w",
    "ζ",
    "Re(z)",
    "Im(z)",
    "|z|",
    "arg(z)",
    "z*",
    "z̄",
    "∮_C",
    "Res(f,z₀)",
    "∂/∂z",
    "∂/∂z̄",

    // Differential Equations
    "y'",
    "y''",
    "y'''",
    "y⁽ⁿ⁾",
    "∂u/∂t",
    "∂²u/∂x²",
    "∂²u/∂t²",
    "∇²u",
    "Δu",
    "□u",

    // Linear Algebra
    "det(A)",
    "tr(A)",
    "rank(A)",
    "null(A)",
    "dim(V)",
    "span{v₁,v₂}",
    "ker(T)",
    "im(T)",
    "A⁻¹",
    "Aᵀ",
    "A*",

    // Discrete Math
    "⌊log₂ n⌋",
    "⌈log₂ n⌉",
    "n!",
    "C(n,k)",
    "P(n,k)",
    "(n choose k)",
    "Fₙ",
    "Lₙ",
    "Bₙ",
    "Cₙ",

    // Physics & Engineering
    "∇·E",
    "∇×B",
    "∂B/∂t",
    "∮E·dl",
    "∯D·dA",
    "ℏ",
    "ħ",
    "c",
    "G",
    "k_B",
    "N_A",
    "e",
    "m_e",
    "m_p",

    // Additional Symbols
    "⊕",
    "⊗",
    "⊙",
    "⊘",
    "⊚",
    "⊛",
    "⊜",
    "⊝",
    "⊞",
    "⊟",
    "⊠",
    "⊡",
    "⋄",
    "⋅",
    "∘",
    "∗",
    "⋆",
    "⋇",
    "⋈",
    "⋉",
    "⋊",
    "⟂",
    "⟃",
    "⟄",
    "⟅",
    "⟆",
    "⟇",
    "⟈",
    "⟉",
    "⟊",
    "⟋",
    "⟌",
    "⟍",
    "⟎",
    "⟏",
    "⟐",
    "⟑",
    "⟒",
    "⟓",
    "⟔",
    "⟕",
    "⊰",
    "⊱",
    "⊲",
    "⊳",
    "⊴",
    "⊵",
    "⊶",
    "⊷",
    "⊸",
    "⊹",
    "⊺",
    "⊻",
    "⊼",
    "⊽",
    "⊾",
    "⊿",
    "⋀",
    "⋁",
    "⋂",
    "⋃",
  ]

  useEffect(() => {
    const generateSymbols = () => {
      const newSymbols = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        symbol: mathSymbols[Math.floor(Math.random() * mathSymbols.length)],
        x: Math.random() * 100,
        delay: Math.random() * 30,
      }))
      setSymbols(newSymbols)
    }

    generateSymbols()
    const interval = setInterval(generateSymbols, 45000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {symbols.map((item) => (
        <motion.div
          key={item.id}
          className="absolute text-lg md:text-xl lg:text-2xl font-serif"
          style={{
            left: `${item.x}%`,
            color: `rgba(0, 122, 255, ${0.08 + Math.random() * 0.15})`,
            fontSize: `${14 + Math.random() * 8}px`,
          }}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.8, 0.8, 0],
            rotate: 360,
            scale: [0.8, 1.2, 1, 0.8],
          }}
          transition={{
            duration: 35 + Math.random() * 15,
            delay: item.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Additional layer with different timing */}
      {symbols.slice(0, 25).map((item, index) => (
        <motion.div
          key={`layer2-${item.id}`}
          className="absolute text-sm md:text-base lg:text-lg font-serif"
          style={{
            left: `${(item.x + 50) % 100}%`,
            color: `rgba(88, 86, 214, ${0.06 + Math.random() * 0.12})`,
            fontSize: `${12 + Math.random() * 6}px`,
          }}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.6, 0.6, 0],
            rotate: -360,
            scale: [1, 0.8, 1.1, 0.9],
          }}
          transition={{
            duration: 40 + Math.random() * 20,
            delay: item.delay + 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {mathSymbols[Math.floor(Math.random() * mathSymbols.length)]}
        </motion.div>
      ))}

      {/* Third layer for even more density */}
      {symbols.slice(0, 15).map((item, index) => (
        <motion.div
          key={`layer3-${item.id}`}
          className="absolute text-xs md:text-sm font-serif"
          style={{
            left: `${(item.x + 25) % 100}%`,
            color: `rgba(255, 45, 146, ${0.05 + Math.random() * 0.1})`,
            fontSize: `${10 + Math.random() * 4}px`,
          }}
          initial={{ y: "100vh", opacity: 0, rotate: 0 }}
          animate={{
            y: "-10vh",
            opacity: [0, 0.5, 0.5, 0],
            rotate: 180,
            scale: [0.9, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 50 + Math.random() * 25,
            delay: item.delay + 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        >
          {mathSymbols[Math.floor(Math.random() * mathSymbols.length)]}
        </motion.div>
      ))}
    </div>
  )
}

export default MathBackground
