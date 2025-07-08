"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, MapPin, Calendar, Award } from "lucide-react"

const Education = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const educationData = [
    {
      degree: "Master of Science in Applied Data Analytics",
      institution: "Boston University",
      location: "Boston, MA",
      period: "September 2023 - January 2025",
      gpa: "3.8/4.0",
      status: "Completed",
      coursework: [
        "Advanced Machine Learning",
        "Deep Learning & Neural Networks",
        "Statistical Data Mining",
        "Big Data Analytics",
        "Data Visualization",
        "Computational Mathematics",
        "Data Mining"
        "Financial Data Analysis",
      ],
      achievements: ["Top 5% of Graduating Class", "ML Research Publication (In Review)"],
      color: "from-blue-500 to-purple-600",
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Manipal University Jaipur",
      location: "Jaipur, India",
      period: "August 2019 - July 2023",
      gpa: "8.21/10 (3.53/4.0)",
      status: "Completed",
      coursework: [
        "Data Structures & Algorithms",
        "Database Management Systems",
        "Machine Learning Fundamentals",
        "Statistical Analysis",
        "Cloud Computing",
        "Software Engineering",
        "Computer Networks",
        "Operating Systems",
      ],
      achievements: [
        "Graduated with Distinction",
        "Best Final Year Project Award",
        "Technical Society Research Head",
        "Hackathon Winner",
      ],
      color: "from-green-500 to-teal-600",
    },
  ]

  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20" />
      <div className="absolute inset-0 data-viz opacity-10" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">Education.load()</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-accent-pink">EDUCATION</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Academic foundation built through rigorous coursework in computer science, mathematics, and data analytics
            from world-class institutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="glass-strong rounded-3xl p-8 interactive-card relative overflow-hidden">
                <div className="absolute top-6 right-6">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-mono ${
                      edu.status === "In Progress"
                        ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {edu.status}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${edu.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-6 mb-8">
                    <div className={`p-4 rounded-2xl bg-gradient-to-br ${edu.color} shadow-lg`}>
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <p className="text-xl text-blue-400 mb-3">{edu.institution}</p>
                      <div className="flex flex-wrap gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span className="font-mono text-sm">{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="font-mono text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span className="font-mono text-sm">GPA: {edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        Key Coursework
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {edu.coursework.map((course, courseIndex) => (
                          <motion.div
                            key={course}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + courseIndex * 0.05 }}
                            className="glass rounded-lg px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                          >
                            {course}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        Achievements
                      </h4>
                      <div className="space-y-3">
                        {edu.achievements.map((achievement, achievementIndex) => (
                          <motion.div
                            key={achievement}
                            initial={{ opacity: 0, x: 20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                            className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full flex-shrink-0"></div>
                            <span className="text-sm">{achievement}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
