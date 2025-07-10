"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaChevronDown, FaPlay, FaDownload, FaCode, FaBrain, FaDatabase } from "react-icons/fa"

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  const roles = [
    "Data Scientist",
    "ML Engineer",
    "AI Researcher",
    "Quantitative Analyst",
    "Options Trader",
    "Data Analyst",
  ]

  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting && displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000)
        } else if (isDeleting && displayText === "") {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        } else if (isDeleting) {
          setDisplayText(currentText.substring(0, displayText.length - 1))
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole, roles])

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-30" />
      <div className="absolute inset-0 data-viz opacity-20" />

      <div className="absolute inset-0">
        {[
          // Machine Learning & Statistics
          { eq: "∂L/∂θ = 0", x: "8%", y: "15%" },
          { eq: "P(A|B) = P(B|A)P(A)/P(B)", x: "85%", y: "12%" },
          { eq: "∇f(x) = 0", x: "12%", y: "75%" },
          { eq: "E[X] = ∑xP(x)", x: "88%", y: "78%" },
          { eq: "σ² = E[(X-μ)²]", x: "5%", y: "45%" },
          { eq: "log(p/(1-p)) = β₀ + β₁x", x: "92%", y: "40%" },

          // Deep Learning & Neural Networks
          { eq: "y = σ(Wx + b)", x: "15%", y: "25%" },
          { eq: "∂C/∂w = δₗaₗ₋₁", x: "78%", y: "25%" },
          { eq: "h_t = tanh(W_h·h_{t-1} + W_x·x_t)", x: "10%", y: "60%" },
          { eq: "α = softmax(e^{z_i}/Σe^{z_j})", x: "82%", y: "55%" },

          // Optimization & Calculus
          { eq: "θ_{t+1} = θ_t - α∇J(θ)", x: "20%", y: "35%" },
          { eq: "∫_{-∞}^{∞} e^{-x²/2} dx = √(2π)", x: "75%", y: "65%" },
          { eq: "lim_{n→∞} (1 + 1/n)ⁿ = e", x: "18%", y: "85%" },
          { eq: "∂²f/∂x² > 0 ⟹ convex", x: "85%", y: "85%" },

          // Linear Algebra & Matrix Operations
          { eq: "Ax = λx", x: "25%", y: "20%" },
          { eq: "A = UΣVᵀ", x: "70%", y: "20%" },
          { eq: "det(A) = Σ(-1)^{i+j}a_{ij}M_{ij}", x: "8%", y: "30%" },
          { eq: "||x||₂ = √(x₁² + x₂² + ... + xₙ²)", x: "88%", y: "30%" },

          // Information Theory & Entropy
          { eq: "H(X) = -Σp(x)log₂p(x)", x: "22%", y: "50%" },
          { eq: "I(X;Y) = H(X) - H(X|Y)", x: "72%", y: "50%" },
          { eq: "KL(P||Q) = Σp(x)log(p(x)/q(x))", x: "15%", y: "65%" },

          // Time Series & Finance
          { eq: "R_t = μ + σε_t", x: "80%", y: "35%" },
          { eq: "ARIMA(p,d,q)", x: "25%", y: "70%" },
          { eq: "VaR_α = -F⁻¹(α)", x: "75%", y: "70%" },

          // Additional Advanced Equations
          { eq: "∇·F = ∂P/∂x + ∂Q/∂y + ∂R/∂z", x: "12%", y: "40%" },
          { eq: "∮_C F·dr = ∬_S (∇×F)·n dS", x: "85%", y: "60%" },
          { eq: "Γ(n) = (n-1)!", x: "30%", y: "80%" },
          { eq: "ζ(s) = Σ_{n=1}^∞ 1/nˢ", x: "70%", y: "80%" },
          { eq: "∇²u = ∂²u/∂x² + ∂²u/∂y²", x: "20%", y: "55%" },
          { eq: "F(ω) = ∫_{-∞}^∞ f(t)e^{-iωt}dt", x: "78%", y: "45%" },
        ].map((eq, i) => (
          <motion.div
            key={i}
            className="absolute equation opacity-30 select-none text-xs sm:text-sm lg:text-base"
            style={{ left: eq.x, top: eq.y }}
            animate={{
              opacity: [0.15, 0.4, 0.15],
              scale: [0.95, 1.05, 0.95],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 6 + (i % 3),
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          >
            {eq.eq}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-3 glass px-4 sm:px-6 py-2 sm:py-3 rounded-full">
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full status-online"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            />
            <span className="font-mono text-xs sm:text-sm text-white">System Online • Ready for Analysis</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 lg:mb-8"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none">
            <motion.div
              className="block text-white mb-2 lg:mb-4"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              ARNAV
            </motion.div>
            <motion.div className="block text-primary-blue" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              JAIN
            </motion.div>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-6 lg:mb-8"
        >
          <div className="font-mono text-lg sm:text-xl md:text-2xl lg:text-3xl h-8 sm:h-10 lg:h-12 flex items-center justify-center">
            <span className="text-blue-500 mr-2">{">"}</span>
            <span className="text-white">{displayText}</span>
            <motion.span
              className="text-blue-500 ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
            >
              |
            </motion.span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto mb-8 lg:mb-12 leading-relaxed px-4"
        >
          Transforming complex datasets into strategic insights through advanced machine learning, statistical modeling,
          and algorithmic innovation. Building intelligent systems that drive data-driven decision making.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 lg:mb-16"
        >
          <motion.button
            onClick={scrollToNext}
            className="btn-primary inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaPlay className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">Explore My Work</span>
          </motion.button>

          <motion.a
            href="https://arnavjresume.tiiny.site"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center justify-center gap-3 px-6 py-3 lg:px-8 lg:py-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaDownload className="w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-sm lg:text-base">Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="grid grid-cols-3 gap-4 lg:gap-8 max-w-xl lg:max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          {[
            { icon: FaCode, value: "10+", label: "ML Projects", color: "text-blue-500" },
            { icon: FaDatabase, value: "50+", label: "Datasets Analyzed", color: "text-yellow-500" },
            { icon: FaBrain, value: "3+", label: "Years Experience", color: "text-purple-500" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-strong rounded-xl lg:rounded-2xl p-4 lg:p-6 interactive-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className={`w-6 h-6 lg:w-8 lg:h-8 ${stat.color} mx-auto mb-2 lg:mb-3`} />
              <div className="text-xl lg:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-xs lg:text-sm text-gray-400 font-mono">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button
          onClick={scrollToNext}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="group"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs sm:text-sm text-gray-400 group-hover:text-white transition-colors">
              Scroll to explore
            </span>
            <FaChevronDown className="w-5 h-5 lg:w-6 lg:h-6 text-blue-500" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
