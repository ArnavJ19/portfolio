"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [cursorText, setCursorText] = useState("")

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const handleMouseEnter = (e: Event) => {
      setIsHovering(true)
      const target = e.target as HTMLElement
      const text = target.getAttribute("data-cursor-text")
      if (text) setCursorText(text)
    }

    const handleMouseLeave = () => {
      setIsHovering(false)
      setCursorText("")
    }

    const handleMouseDown = () => setIsHovering(true)
    const handleMouseUp = () => setIsHovering(false)

    document.addEventListener("mousemove", moveCursor)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .cursor-hover')
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
  }, [cursorX, cursorY])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          scale: { duration: 0.15 },
          opacity: { duration: 0.15 },
        }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 w-12 h-12 pointer-events-none z-[9998] border-2 border-white/30 rounded-full"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: isVisible ? 0.6 : 0,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.15 },
        }}
      />

      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9997] bg-white text-black px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
          }}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: -40 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
        >
          {cursorText}
        </motion.div>
      )}
    </>
  )
}

export default CustomCursor
