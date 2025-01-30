"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Spotlight } from "./ui/spotlight"
import { AnimatedGradient } from "./ui/animated-gradient"
import type React from "react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formState)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <Spotlight className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Get in Touch</h2>
          </AnimatedGradient>
        </motion.div>
        <motion.form
          className="max-w-lg mx-auto"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { id: "name", label: "Name", type: "text" },
            { id: "email", label: "Email", type: "email" },
            { id: "message", label: "Message", type: "textarea" },
          ].map((field) => (
            <motion.div key={field.id} className="mb-4" whileHover={{ scale: 1.02 }}>
              <label htmlFor={field.id} className="block text-gray-300 font-semibold mb-2">
                {field.label}
              </label>
              {field.type === "textarea" ? (
                <motion.textarea
                  id={field.id}
                  name={field.id}
                  value={formState[field.id as keyof typeof formState]}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-[#1A1A1A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                  whileHover={{ borderColor: "#3B82F6" }}
                  transition={{ duration: 0.3 }}
                />
              ) : (
                <motion.input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  value={formState[field.id as keyof typeof formState]}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-[#1A1A1A] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                  required
                  whileHover={{ borderColor: "#3B82F6" }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
          <motion.button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </Spotlight>
  )
}

export default Contact

