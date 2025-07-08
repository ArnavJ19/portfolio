"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin, Download } from "lucide-react"

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactLinks = [
    {
      icon: Mail,
      label: "EMAIL",
      value: "arnavj19@outlook.com",
      href: "mailto:arnavj19@outlook.com",
    },
    {
      icon: Linkedin,
      label: "LINKEDIN",
      value: "arnavj19",
      href: "https://www.linkedin.com/in/arnavj19",
    },
    {
      icon: Github,
      label: "GITHUB",
      value: "arnavj19",
      href: "https://github.com/arnavj19",
    },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20" />
      <div className="absolute inset-0 data-viz opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">Contact.connect()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-accent-pink">GET IN TOUCH</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to collaborate on innovative data science projects or discuss opportunities in machine learning and
            AI. Let's build something amazing together.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-12">Let's Connect</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {contactLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center gap-4 p-8 glass-strong rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                    <link.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <h4 className="font-mono text-blue-400 text-sm font-semibold mb-2">{link.label}</h4>
                    <p className="text-white group-hover:text-blue-400 transition-colors">{link.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.a
              href="https://arnavjresume.tiiny.site"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="btn-primary inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download className="w-5 h-5" />
              <span className="font-mono">VIEW_RESUME.pdf</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
