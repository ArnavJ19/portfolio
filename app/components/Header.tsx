"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A0A0A] shadow-lg" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          Arnav Jain
        </Link>
        <ul className="flex space-x-6">
          {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
            <li key={item}>
              <Link href={`#${item.toLowerCase()}`} className="text-gray-300 hover:text-white transition-colors">
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

export default Header

