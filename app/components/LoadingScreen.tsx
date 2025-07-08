"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="absolute inset-0 math-grid opacity-20" />

          <div className="text-center">
            <motion.div
              className="mb-12"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="text-6xl md:text-8xl font-bold">
                <motion.span
                  className="text-primary-blue"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(0, 122, 255, 0.3)",
                      "0 0 40px rgba(0, 122, 255, 0.6)",
                      "0 0 20px rgba(0, 122, 255, 0.3)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  ARNAV
                </motion.span>
              </h1>
            </motion.div>

            <div className="w-80 max-w-sm mx-auto mb-8">
              <div className="glass rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm font-mono text-gray-400">
                <span>Loading...</span>
                <span>{Math.round(progress)}%</span>
              </div>
            </div>

            <motion.div
              className="font-mono text-sm text-gray-400"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
            >
              Initializing portfolio systems...
            </motion.div>

            <div className="absolute inset-0 pointer-events-none">
              {["∑", "∫", "∂", "π", "λ", "σ"].map((symbol, i) => (
                <motion.div
                  key={symbol}
                  className="absolute text-2xl text-blue-400 opacity-30"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 360],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3 + i,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.5,
                  }}
                >
                  {symbol}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default LoadingScreen
