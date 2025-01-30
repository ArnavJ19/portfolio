"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { Share2 } from "lucide-react"
import { Spotlight } from "./ui/spotlight"
import { AnimatedGradient } from "./ui/animated-gradient"

const projects = [
  {
    title: "AI Trading Agent",
    description:
      "Developed a trading agent using Reinforcement Learning to adapt to market conditions dynamically. Outperformed the Buy-and-Hold strategy by 15% in cumulative returns on backtesting with S&P 500 data.",
    image: "/projects/ai-trading.jpg",
    link: "https://github.com/yourusername/ai-trading-agent",
    technologies: ["Python", "TensorFlow", "Gymnasium", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    title: "Spotify User Engagement Analysis",
    description:
      "Analyzed Spotify listening history to identify user behavior patterns. Developed KPIs and created interactive dashboards for meaningful insights.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vgfohQFcptafUibOdZLlZxTNvlAV1b.png",
    link: "https://github.com/yourusername/spotify-user-engagement",
    technologies: ["Power BI", "DAX", "Power Query", "Excel"],
  },
  {
    title: "Trade Analysis Dashboard",
    description:
      "Analyzed US-India trade data to identify patterns, key export-import categories, and trade balance trends. Developed KPIs and designed interactive dashboards.",
    image: "/projects/trade-analysis.jpg",
    link: "https://github.com/yourusername/trade-analysis-dashboard",
    technologies: ["Tableau", "SQL", "Excel"],
  },
  {
    title: "Depressive Disorder Prediction",
    description:
      "Developed a Machine Learning model using BRFSS 2021 dataset to predict depressive disorders. Achieved 75% TPR for both classes through extensive data analysis.",
    image: "/projects/depression-prediction.jpg",
    link: "https://github.com/yourusername/depressive-disorder-prediction",
    technologies: ["R", "Python", "Matplotlib", "Seaborn", "Plotly"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Projects</h2>
          </AnimatedGradient>
          <p className="text-gray-400">Some of the notable projects I've built:</p>
        </motion.div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="flex flex-col lg:flex-row gap-8 items-center bg-[#1A1A1A] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-2" : ""}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="rounded-xl shadow-2xl"
                />
              </motion.div>
              <div className={`lg:w-1/2 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ color: "#60A5FA" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-6"
                  whileHover={{ color: "#9CA3AF" }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                      whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  View Project
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Spotlight>
  )
}

export default Projects

