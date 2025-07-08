"use client"

import { useEffect, useRef } from "react"

const MorphingBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGradient = (x: number, y: number, radius: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      gradient.addColorStop(0, `hsla(${220 + Math.sin(time * 0.001) * 40}, 70%, 60%, 0.1)`)
      gradient.addColorStop(0.5, `hsla(${260 + Math.cos(time * 0.0015) * 40}, 70%, 50%, 0.05)`)
      gradient.addColorStop(1, "transparent")
      return gradient
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create multiple morphing blobs
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * 0.5 + Math.sin(time * 0.001 + i) * 200
        const y = canvas.height * 0.5 + Math.cos(time * 0.0008 + i) * 150
        const radius = 300 + Math.sin(time * 0.002 + i) * 100

        ctx.fillStyle = createGradient(x, y, radius)
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      time += 16
      animationId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}

export default MorphingBackground
