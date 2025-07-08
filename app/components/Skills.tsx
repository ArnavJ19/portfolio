"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Skills = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "Python", level: 95, color: "bg-blue-500" },
        { name: "R", level: 88, color: "bg-green-500" },
        { name: "SQL", level: 92, color: "bg-purple-500" },
        { name: "Java", level: 82, color: "bg-yellow-500" },
        { name: "C++", level: 87, color: "bg-orange-500" },
      ],
    },
    {
      title: "ML/AI Frameworks",
      icon: "🤖",
      skills: [
        { name: "TensorFlow", level: 92, color: "bg-orange-500" },
        { name: "PyTorch", level: 88, color: "bg-red-500" },
        { name: "Scikit-learn", level: 96, color: "bg-blue-500" },
        { name: "Pandas", level: 94, color: "bg-green-500" },
        { name: "NumPy", level: 91, color: "bg-purple-500" },
      ],
    },
    {
      title: "Data & Cloud",
      icon: "☁️",
      skills: [
        { name: "Apache Spark", level: 85, color: "bg-orange-500" },
        { name: "AWS", level: 80, color: "bg-yellow-500" },
        { name: "Azure", level: 88, color: "bg-cyan-500" },
        { name: "MongoDB", level: 83, color: "bg-green-500" },
        { name: "PostgreSQL", level: 94, color: "bg-purple-500" },
      ],
    },
    {
      title: "Analytics & Visualization",
      icon: "📊",
      skills: [
        { name: "Tableau", level: 91, color: "bg-purple-500" },
        { name: "Power BI", level: 95, color: "bg-yellow-500" },
        { name: "Excel", level: 93, color: "bg-green-500" },
        { name: "SPSS", level: 76, color: "bg-red-500" },
        { name: "R-Studio", level: 90, color: "bg-blue-500" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
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
            <span className="font-mono text-sm text-blue-400">Skills.compile()</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-secondary-purple">TECH STACK</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning machine learning, data engineering, cloud computing, and advanced analytics
            with proven expertise across multiple domains.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-strong rounded-3xl p-8"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="text-4xl">{category.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                  <p className="text-gray-400 font-mono text-sm">{category.skills.length} technologies mastered</p>
                </div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-white font-medium text-lg">{skill.name}</span>
                      <span className="font-mono text-blue-400 text-sm font-bold">{skill.level}%</span>
                    </div>

                    <div className="skill-bar">
                      <motion.div
                        className={`skill-bar-fill ${skill.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1.5,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          ease: [0.25, 0.46, 0.45, 0.94],
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
