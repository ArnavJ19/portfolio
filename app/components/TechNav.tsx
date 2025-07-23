"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

const TechNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { id: "hero", label: "HOME" },
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "education", label: "EDUCATION" },
    { id: "certifications", label: "CERTIFICATIONS" },
    { id: "blog", label: "BLOG" },
    { id: "contact", label: "CONTACT" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)

      // Get all sections
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

      // Find the current section
      const currentSection = sections.find((section, index) => {
        if (!section) return false

        const nextSection = sections[index + 1]
        const sectionTop = section.offsetTop - 100 // Offset for header
        const sectionBottom = nextSection ? nextSection.offsetTop - 100 : document.body.scrollHeight

        return scrollPosition >= sectionTop && scrollPosition < sectionBottom
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
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

    window.addEventListener("scroll", throttledScroll, { passive: true })
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", throttledScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsOpen(false)
    }
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.getElementById("mobile-nav")
      const button = document.getElementById("mobile-menu-button")

      if (isOpen && nav && button && !nav.contains(event.target as Node) && !button.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
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

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-strong border-b border-white/20 backdrop-blur-xl" : "glass border-b border-white/10"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => scrollToSection("hero")}
              className="font-mono text-primary-blue font-bold text-lg sm:text-xl hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ARNAV.DEV
            </motion.button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 xl:px-4 py-2 font-mono text-xs xl:text-sm transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? "text-blue-400 bg-blue-400/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
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
              className="lg:hidden p-2 text-blue-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10"
              aria-label="Toggle mobile menu"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
              className="fixed top-16 left-4 right-4 z-50 glass-strong rounded-2xl border border-white/20 lg:hidden max-h-[calc(100vh-6rem)] overflow-y-auto"
            >
              <div className="p-6">
                <div className="grid grid-cols-1 gap-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`w-full text-left p-4 font-mono text-sm transition-all duration-300 rounded-xl ${
                        activeSection === item.id
                          ? "text-blue-400 bg-blue-400/10 border border-blue-400/20"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
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
                <div className="mt-6 pt-6 border-t border-white/10">
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
