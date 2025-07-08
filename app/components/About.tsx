"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, Database, Code2, TrendingUp, Target, DollarSign } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">About.analyze()</span>
          </div>

          <h2 className="text-6xl md:text-7xl font-bold mb-8">
            <span className="text-primary-blue">EXPERTISE</span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Passionate about transforming complex data challenges into elegant solutions through mathematical precision,
            algorithmic innovation, and strategic thinking.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Brain,
              title: "Machine Learning",
              description: "Building predictive models using supervised and unsupervised learning, feature engineering, and model optimization for real-world applications.",
            },
            {
              icon: Database,
              title: "Data Engineering",
              description: "Designing scalable data pipelines, orchestrating ETL workflows, and architecting infrastructure for efficient data processing and analytics.",
            },

            {
              icon: DollarSign,
              title: "Quant Trad",
              description:
                "Algorithmic trading strategies powered by quantitative models, market microstructure analysis, and real-time risk management.",
            },

            {
              icon: TrendingUp,
              title: "Analytics",
              description: "Extracting actionable insights from data through statistical analysis, data visualization, and business intelligence to drive informed decision-making.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-strong rounded-3xl p-8 interactive-card relative overflow-hidden group"
            >
              <div className="relative z-10">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg mb-6 w-fit">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-strong rounded-3xl p-12 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="font-mono text-sm text-gray-400">philosophy.md</span>
            </div>

            <div className="font-mono text-sm text-gray-400 mb-6">
              <span className="text-blue-400">$</span> cat data_philosophy.txt
            </div>

            <blockquote className="text-2xl text-white leading-relaxed mb-8 font-light">
              "In the intersection of mathematics, technology, and human insight lies the power to transform raw data
              into strategic intelligence. Every algorithm tells a story, every model reveals a pattern, and every
              insight drives innovation forward."
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400 font-mono text-sm">Ready to solve complex challenges</span>
              </div>
              <div className="text-right">
                <div className="text-white font-semibold">Arnav Jain</div>
                <div className="text-gray-400 text-sm">Data Scientist & ML Engineer</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
