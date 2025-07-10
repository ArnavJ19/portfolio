"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaAward, FaExternalLinkAlt, FaCalendarAlt, FaCheckCircle } from "react-icons/fa"

const Certifications = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const certificationsData = [
    {
      name: "Neural Networks and Deep Learning",
      issuer: "DeepLearning.AI",
      platform: "Coursera",
      date: "January 2022",
      credentialId: "U9FLNF4ZVCMW",
      description:
        "Comprehensive specialization covering deep learning fundamentals, neural network architectures, and practical implementation using TensorFlow and Python.",
      skills: ["Deep Learning", "Neural Networks", "TensorFlow", "Python", "Backpropagation"],
      viewUrl: "https://www.coursera.org/account/accomplishments/verify/U9FLNF4ZVCMW",
      color: "from-blue-500 to-indigo-600",
      verified: true,
    },
    {
      name: "Generative AI: Introduction and Applications",
      issuer: "IBM",
      platform: "Coursera",
      date: "January 2025",
      credentialId: "T45BHRED8TF1",
      description:
        "Advanced course covering generative AI technologies, large language models, prompt engineering, and practical applications in business contexts.",
      skills: ["Generative AI", "LLMs", "Prompt Engineering", "AI Ethics", "Business Applications"],
      viewUrl: "https://www.coursera.org/account/accomplishments/verify/T45BHRED8TF1",
      color: "from-purple-500 to-pink-600",
      verified: true,
    },
    {
      name: "Python for Data Science, AI & Development",
      issuer: "IBM",
      platform: "Coursera",
      date: "January 2025",
      credentialId: "SY4H6ROLHRKE",
      description:
        "Comprehensive Python programming course focused on data science applications, machine learning libraries, and AI development frameworks.",
      skills: ["Python", "Data Science", "Pandas", "NumPy", "Machine Learning", "API Development"],
      viewUrl: "https://www.coursera.org/account/accomplishments/verify/SY4H6ROLHRKE",
      color: "from-green-500 to-teal-600",
      verified: true,
    },
  ]

  return (
    <section id="certifications" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 math-grid opacity-20" />
      <div className="absolute inset-0 data-viz opacity-10" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">Certifications.validate()</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-primary-blue">CERTIFICATIONS</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional certifications from industry leaders, validating expertise in cutting-edge technologies and
            methodologies in AI, machine learning, and data science.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-3xl p-6 interactive-card glow-blue relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header with verification badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${cert.color} shadow-lg flex-shrink-0`}>
                      <FaAward className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 pr-4">
                      <h3 className="text-lg font-bold text-white mb-1 leading-tight">{cert.name}</h3>
                      <p className="text-blue-400 font-semibold text-sm">{cert.issuer}</p>
                      <p className="text-gray-400 text-xs font-mono">{cert.platform}</p>
                    </div>
                  </div>

                  {/* Verification badge */}
                  {cert.verified && (
                    <div className="flex-shrink-0">
                      <div className="flex items-center gap-1 bg-green-500/20 text-green-400 px-2 py-1 rounded-full border border-green-500/30">
                        <FaCheckCircle className="w-3 h-3" />
                        <span className="text-xs font-mono">Verified</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Date and credential */}
                <div className="flex items-center gap-4 mb-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span className="font-mono">{cert.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">{cert.description}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-2 py-1 glass rounded-full text-xs font-mono text-blue-400"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Credential ID */}
                <div className="mb-6 p-3 glass rounded-lg">
                  <div className="text-xs text-gray-400 font-mono mb-1">Credential ID</div>
                  <div className="text-sm font-mono text-white">{cert.credentialId}</div>
                </div>

                {/* View certificate button */}
                <motion.a
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full inline-flex items-center justify-center gap-2 text-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaExternalLinkAlt className="w-4 h-4" />
                  View Certificate
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-strong rounded-3xl p-8 max-w-4xl mx-auto interactive-card glow-purple">
            <h3 className="text-2xl font-bold text-white mb-6">Professional Validation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">3</div>
                <div className="text-gray-400 text-sm font-mono">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
                <div className="text-gray-400 text-sm font-mono">Verified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">16</div>
                <div className="text-gray-400 text-sm font-mono">Skills Validated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400 mb-2">2025</div>
                <div className="text-gray-400 text-sm font-mono">Latest Cert</div>
              </div>
            </div>

            {/* Certification timeline */}
            <div className="mt-8 pt-6 border-t border-gray-700">
              <h4 className="text-lg font-semibold text-white mb-4">Certification Timeline</h4>
              <div className="flex justify-center">
                <div className="flex items-center gap-4 text-sm font-mono text-gray-400">
                  <span>2022</span>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Deep Learning</span>
                  <div className="w-8 h-px bg-gray-600"></div>
                  <span>2025</span>
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Generative AI + Python</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
