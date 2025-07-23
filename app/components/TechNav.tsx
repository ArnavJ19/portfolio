"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const TechNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "about-me", label: "ABOUT ME" },
    { id: "about", label: "EXPERTISE" },
    { id: "projects", label: "PROJECTS" },
    { id: "blog", label: "BLOGS" },
    { id: "skills", label: "SKILLS" },
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "education", label: "EDUCATION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "contact", label: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      try {
        // Get all sections with error handling
        const sections = navItems
          .map((item) => {
            const element = document.getElementById(item.id)
            if (!element) return null

            const rect = element.getBoundingClientRect()
            const offsetTop = scrollPosition + rect.top

            return {
              id: item.id,
              offsetTop,
              height: rect.height,
              element,
            }
          })
          .filter(Boolean)

        if (sections.length === 0) return

        // Find the current section with better logic
        let currentSection = sections[0] // Default to first section

        for (let i = 0; i < sections.length; i++) {
          const section = sections[i]
          if (!section) continue

          const sectionTop = section.offsetTop - 150 // Larger offset for better detection

          if (scrollPosition >= sectionTop) {
            currentSection = section
          } else {
            break
          }
        }

        if (currentSection && currentSection.id !== activeSection) {
          setActiveSection(currentSection.id)
        }
      } catch (error) {
        console.error("Error in scroll handler:", error)
      }
    }

    // Throttle scroll events for better performance
    let ticking = false
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    // Add scroll listener
    window.addEventListener("scroll", throttledScroll, { passive: true })

    // Initial call with delay to ensure DOM is ready
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [activeSection, navItems])

  const scrollToSection = useCallback(
    (sectionId: string) => {
      try {
        // Close mobile menu first
        setIsOpen(false)

        // Wait a bit for menu to close, then scroll
        setTimeout(
          () => {
            const element = document.getElementById(sectionId)

            if (!element) {
              console.warn(`Element with id "${sectionId}" not found`)
              return
            }

            // Calculate the offset position
            const headerHeight = 80
            const elementRect = element.getBoundingClientRect()
            const absoluteElementTop = elementRect.top + window.pageYOffset
            const targetPosition = absoluteElementTop - headerHeight

            // Use both methods for better compatibility
            try {
              // Method 1: Modern smooth scroll
              window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
              })
            } catch (error) {
              // Method 2: Fallback for older browsers
              console.warn("Smooth scroll not supported, using fallback")
              window.scrollTo(0, targetPosition)
            }

            // Update active section immediately for better UX
            setActiveSection(sectionId)
          },
          isOpen ? 300 : 0,
        )
      } catch (error) {
        console.error("Error scrolling to section:", error)
      }
    },
    [isOpen],
  )

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav")
      const button = document.getElementById("mobile-menu-button")

      if (isOpen && nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  // Handle logo click
  const handleLogoClick = useCallback(() => {
    scrollToSection("hero")
  }, [scrollToSection])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong border-b border-white/20 backdrop-blur-xl" : "glass border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 lg:h-16">
            {/* Logo */}
            <motion.button
              onClick={handleLogoClick}
              className="font-mono text-primary-blue font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-md px-2 py-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Go to home section"
            >
              ARNAV.DEV
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-2 xl:px-3 py-1.5 font-mono text-xs transition-all duration-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={`Go to ${item.label.toLowerCase()} section`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-blue-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              id="mobile-nav"
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-14 left-4 right-4 z-50 glass-strong rounded-2xl border border-white/20 lg:hidden max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="p-4">
                <div className="grid grid-cols-1 gap-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full text-left p-3 font-mono text-sm transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 ${
                        activeSection === item.id
                          ? "text-blue-400 bg-blue-400/10 border border-blue-400/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                      aria-label={`Go to ${item.label.toLowerCase()} section`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {activeSection === item.id && (
                          <motion.div
                            className="w-2 h-2 bg-blue-400 rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1 }}
                          />
                        )}
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Mobile Menu Footer */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-center text-xs font-mono text-gray-500">Navigate • Explore • Connect</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default TechNav
