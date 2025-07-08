"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Home, User, Code, Award, GraduationCap, Briefcase, Mail, BadgeIcon as Certificate } from "lucide-react"

const FloatingNav = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isVisible, setIsVisible] = useState(true)
  const [hoveredTab, setHoveredTab] = useState<string | null>(null)

  const navItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: Award },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "certifications", label: "Certifications", icon: Certificate },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY

      const sections = navItems.map((item) => {
        const element = document.getElementById(item.id)
        if (!element) return { id: item.id, top: 0, bottom: 0 }

        const rect = element.getBoundingClientRect()
        return {
          id: item.id,
          top: rect.top,
          bottom: rect.bottom,
        }
      })

      const viewportCenter = window.innerHeight / 2
      let closestSection = sections[0]
      let closestDistance = Math.abs(closestSection.top - viewportCenter)

      sections.forEach((section) => {
        const distance = Math.abs(section.top - viewportCenter)
        if (distance < closestDistance && section.top <= viewportCenter && section.bottom >= 0) {
          closestSection = section
          closestDistance = distance
        }
      })

      if (closestSection) {
        setActiveSection(closestSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-max"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl" />

            <div className="relative glass-strong rounded-2xl p-2 border border-white/20 shadow-2xl">
              <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onMouseEnter={() => setHoveredTab(item.id)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={`relative rounded-xl p-3 text-sm font-medium transition-all duration-300 flex items-center justify-center min-w-[48px] flex-shrink-0 ${
                      activeSection === item.id ? "text-white" : "text-gray-400 hover:text-white"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeBackground"
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-xl border border-white/30"
                        transition={{ type: "spring", duration: 0.6 }}
                      />
                    )}

                    {hoveredTab === item.id && activeSection !== item.id && (
                      <motion.div
                        className="absolute inset-0 bg-white/10 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      />
                    )}

                    <motion.div
                      className="relative z-10"
                      animate={{
                        rotate: activeSection === item.id ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <item.icon className="w-5 h-5" />
                    </motion.div>

                    <AnimatePresence>
                      {hoveredTab === item.id && (
                        <motion.div
                          className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm text-white px-3 py-1 rounded-lg text-xs whitespace-nowrap border border-white/20"
                          initial={{ opacity: 0, y: 10, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.8 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.label}
                          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/90" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                ))}
              </div>

              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default FloatingNav
