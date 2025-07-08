"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const EnhancedCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [cursorVariant, setCursorVariant] = useState("default")

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  const trailRef = useRef<Array<{ x: number; y: number }>>([])

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)

      // Add to trail
      trailRef.current.push({ x: e.clientX, y: e.clientY })
      if (trailRef.current.length > 10) {
        trailRef.current.shift()
      }
    }

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.matches('button, a, [role="button"], .cursor-hover')) {
        setIsHovering(true)
        setCursorVariant("button")
        const text = target.getAttribute("data-cursor-text")
        if (text) setCursorText(text)
      } else if (target.matches("input, textarea")) {
        setIsHovering(true)
        setCursorVariant("text")
        setCursorText("Type here")
      } else if (target.matches(".interactive-card")) {
        setIsHovering(true)
        setCursorVariant("card")
        setCursorText("Explore")
      }
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorVariant("default")
      setCursorText("")
    }

    const handleMouseDown = () => {
      setIsClicking(true)
      setCursorVariant("clicking")
    }

    const handleMouseUp = () => {
      setIsClicking(false)
      setCursorVariant(isHovering ? "button" : "default")
    }

    // Add event listeners
    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll(
      'a, button, [role="button"], .cursor-hover, input, textarea, .interactive-card',
    )

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", moveCursor)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [cursorX, cursorY, isHovering])

  const getCursorSize = () => {
    switch (cursorVariant) {
      case "button":
        return { width: 60, height: 60 }
      case "text":
        return { width: 4, height: 24 }
      case "card":
        return { width: 80, height: 80 }
      case "clicking":
        return { width: 24, height: 24 }
      default:
        return { width: 32, height: 32 }
    }
  }

  const getCursorColor = () => {
    switch (cursorVariant) {
      case "button":
        return "rgba(0, 122, 255, 0.8)"
      case "text":
        return "rgba(255, 255, 255, 0.9)"
      case "card":
        return "rgba(88, 86, 214, 0.6)"
      case "clicking":
        return "rgba(255, 45, 146, 0.8)"
      default:
        return "rgba(255, 255, 255, 0.8)"
    }
  }

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          ...getCursorSize(),
          backgroundColor: getCursorColor(),
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="w-full h-full rounded-full" style={{ backgroundColor: getCursorColor() }} />
      </motion.div>

      {/* Cursor trail */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] border-2 border-white/30 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 48,
          height: 48,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 0.4 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
      />

      {/* Cursor text */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap border border-white/20"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: -50 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
        >
          {cursorText}
        </motion.div>
      )}

      {/* Particle effects on click */}
      {isClicking && (
        <div className="fixed top-0 left-0 pointer-events-none z-[9996]">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full"
              style={{
                x: cursorXSpring,
                y: cursorYSpring,
              }}
              initial={{ scale: 0, opacity: 1 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [1, 0.5, 0],
                x: Math.cos((i * Math.PI * 2) / 6) * 30,
                y: Math.sin((i * Math.PI * 2) / 6) * 30,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default EnhancedCursor
