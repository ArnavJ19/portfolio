"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Calendar, TrendingUp, BarChart3 } from "lucide-react"

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const experiences = [
    {
      title: "Data Scientist",
      company: "Omalco Extrusions",
      location: "New Delhi, India",
      period: "June 2022 – July 2023",
      type: "Contract",
      description: [
        "Developed and implemented predictive models using statistical and machine learning techniques including gradient boosting algorithms, hypothesis testing, and DBSCAN, aimed at uncovering critical business trends and enhancing strategic planning.",
        
        "Designed and deployed interactive real-time dashboards using Power BI, resulting in a 10% improvement in manufacturing operational efficiency through enhanced visibility and timely decision-making",
        
        "Conducted comprehensive exploratory data analysis and advanced statistical modeling using R and SQL, effectively translating complex analytical findings into clear, actionable business insights, significantly contributing to data-driven strategic decisions across various departments",
      ],
      technologies: ["Power BI", "Tableau", "R", "Python", "SQL", "Azure"],
      achievements: ["10% efficiency increase", "50% reduction in manual reporting", "Executive-level presentations"],
      color: "from-blue-500 to-purple-600",
      icon: BarChart3,
    },
    {
      title: "Trade Analyst & Trader",
      company: "Jain Capital",
      location: "Jaipur, India",
      period: "May 2020 – March 2022",
      type: "Full-time",
      description: [
        "Engineered and executed sophisticated option trading strategies leveraging predictive analytics, optimization techniques, and advanced statistical models, consistently achieving ROI of 30% and maintaining an industry-leading Sharpe ratio.",

        "Developed and implemented a robust Python-based risk management framework, which significantly reduced downside exposure by 35%, thereby enhancing overall portfolio stability and risk-adjusted returns.",
        
        "Conducted in-depth quantitative analyses and developed accurate forecasting models, effectively synthesizing complex data to deliver actionable insights and strategic recommendations, directly contributing to a 21% improvement in firm profitability.",
      ],
      technologies: ["TradingView", "TradeStation", "Excel", "Python", "SQL", "PineScript"],
      achievements: ["30% ROI achieved", "21% profitability improvement", "Above-benchmark Sharpe ratio"],
      color: "from-green-500 to-teal-600",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="experience" className="py-32 relative overflow-hidden">
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
            <span className="font-mono text-sm text-blue-400">Experience.execute()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-secondary-purple">WORK EXPERIENCE</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Professional journey spanning data analytics, algorithmic trading, and quantitative research with proven
            track record of delivering measurable business impact.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="mb-12 last:mb-0"
            >
              <div className="glass-strong rounded-3xl p-6 sm:p-8 interactive-card relative overflow-hidden">
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <div
                    className={`px-3 py-1 rounded-full text-xs font-mono ${
                      exp.type === "Internship"
                        ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        : "bg-green-500/20 text-green-400 border border-green-500/30"
                    }`}
                  >
                    {exp.type}
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 hover:opacity-5 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-6 sm:mb-8">
                    <div className={`p-3 sm:p-4 rounded-2xl bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}>
                      <exp.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <p className="text-lg sm:text-xl text-blue-400 mb-3">{exp.company}</p>
                      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 flex-shrink-0" />
                          <span className="font-mono text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 flex-shrink-0" />
                          <span className="font-mono text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6 sm:space-y-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        Key Responsibilities
                      </h4>
                      <div className="space-y-3">
                        {exp.description.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: index * 0.2 + i * 0.1 }}
                            className="flex gap-3 text-gray-300 leading-relaxed"
                          >
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-sm sm:text-base">{item}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <motion.span
                              key={tech}
                              className="px-3 py-1 glass rounded-full text-sm font-mono text-blue-400"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : {}}
                              transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                              whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.2)" }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <motion.div
                              key={achievement}
                              initial={{ opacity: 0, x: 20 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: index * 0.2 + achievementIndex * 0.1 }}
                              className="flex items-center gap-3 text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </motion.div>
                          ))}
                        </div>
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

export default Experience
