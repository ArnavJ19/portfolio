"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Senior Data Scientist",
      company: "Microsoft",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Arnav's analytical skills and innovative approach to machine learning problems are exceptional. His ability to translate complex data insights into actionable business strategies is remarkable.",
      rating: 5,
      project: "Predictive Analytics Platform",
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      company: "TechStart Inc.",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Working with Arnav was a game-changer for our data infrastructure. His expertise in building scalable ML pipelines helped us reduce processing time by 70% while improving accuracy.",
      rating: 5,
      project: "ML Pipeline Optimization",
    },
    {
      name: "Prof. David Kumar",
      role: "Professor of Computer Science",
      company: "Boston University",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Arnav consistently demonstrates deep understanding of statistical methods and machine learning algorithms. His research contributions and academic performance are outstanding.",
      rating: 5,
      project: "Academic Research",
    },
    {
      name: "Lisa Thompson",
      role: "Product Manager",
      company: "DataCorp",
      image: "/placeholder.svg?height=80&width=80",
      content:
        "Arnav's data visualization skills and ability to communicate complex findings to non-technical stakeholders made our project a huge success. Highly recommended!",
      rating: 5,
      project: "Business Intelligence Dashboard",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20" />
      <div className="absolute inset-0 data-viz opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">Testimonials.render()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-primary-blue">CLIENT FEEDBACK</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            What colleagues, professors, and clients say about working with me on data science and machine learning
            projects.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-strong rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              <div className="absolute top-6 left-6">
                <Quote className="w-12 h-12 text-blue-400/30" />
              </div>

              <div className="relative z-10">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-1 mb-6">
                    {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <blockquote className="text-xl sm:text-2xl text-white leading-relaxed mb-8 font-light">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                      <p className="text-blue-400 font-medium">{testimonials[currentIndex].role}</p>
                      <p className="text-gray-400 text-sm">{testimonials[currentIndex].company}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-gray-400 text-sm font-mono">Project:</div>
                      <div className="text-white text-sm">{testimonials[currentIndex].project}</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-3 glass-strong rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-5 h-5 text-blue-400" />
              </motion.button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-blue-400" : "bg-gray-600 hover:bg-gray-500"
                    }`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-3 glass-strong rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-5 h-5 text-blue-400" />
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-4 glass rounded-2xl border transition-all duration-300 text-left ${
                  index === currentIndex
                    ? "border-blue-400/50 bg-blue-400/10"
                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-white text-sm font-medium">{testimonial.name}</h5>
                    <p className="text-gray-400 text-xs">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-xs line-clamp-2">{testimonial.content}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
  </section>
  )
}

export default Testimonials
