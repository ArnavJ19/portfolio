"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import Image from "next/image"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const projects = [
    {
      id: "01",
      title: "GammaX: OPTION PRICING TOOL",
      description: "An advanced Option Pricing and Analytics tool built using Python and StreamLit",
      tech: ["Python", "Streamlit", "Finance", "Options"],
      image: "/images/gammax-delta-surface.png",
      github: "https://github.com/ArnavJ19/GammaX",
      live: "https://gammax-optionpricing.streamlit.app",
      featured: false,
    },
    {
      id: "02",
      title: "AI TRADING SYSTEM",
      description:
        "Reinforcement learning agent for automated trading with 15% performance improvement over traditional strategies.",
      tech: ["Python", "TensorFlow", "RL", "Finance"],
      image: "/images/ai-trading-dashboard.jpg",
      github: "https://github.com/ArnavJ19/RL_Agent_Trading",
      live: null,
      featured: false,
    },
    {
      id: "03",
      title: "PORTFOLIO OPTIMIZER",
      description: "ML-powered portfolio optimization using clustering algorithms for risk-adjusted returns.",
      tech: ["Python", "Scikit-learn", "Finance", "ML"],
      image: "/images/portfolio-allocation.jpg",
      github: "https://github.com/ArnavJ19/PortfolioML",
      live: null,
      featured: false,
    },
    {
      id: "04",
      title: "HEALTH PREDICTOR",
      description: "Depression prediction model using BRFSS dataset with 75% accuracy across multiple classes.",
      tech: ["R", "Python", "Healthcare", "ML"],
      image: "/images/ai-health-brain.png",
      github: "https://github.com/ArnavJ19/Depression-Prediction-Using-Health-Data",
      live: null,
      featured: false,
    },
  ]

  const handleLinkClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 tech-grid opacity-5" />

      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block font-mono text-primary text-sm mb-4">[PROJECTS.json]</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="tech-gradient">FEATURED WORK</span>
          </h2>
          <p className="text-lg text-secondary max-w-3xl mx-auto">
            A collection of innovative projects showcasing expertise in machine learning, data science, and full-stack
            development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`tech-border rounded-xl overflow-hidden hover:tech-glow transition-all duration-300 project-card interactive-card glow-blue ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ pointerEvents: "auto" }}
            >
              <div className={`flex flex-col ${project.featured ? "lg:flex-row" : ""}`}>
                <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2" : ""}`}>
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="font-mono text-primary text-sm bg-background/80 px-2 py-1 rounded">
                        {project.id}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="font-mono text-background text-xs bg-primary px-2 py-1 rounded">FEATURED</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`p-6 relative z-20 ${project.featured ? "lg:w-1/2" : ""}`}>
                  <h3 className="font-mono text-primary text-sm mb-2">{project.title}</h3>
                  <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 relative z-30">
                    {/* GitHub Link */}
                    <button
                      onClick={() => handleLinkClick(project.github)}
                      className="inline-flex items-center gap-2 text-white bg-gray-800 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 border border-gray-600 hover:border-gray-500 cursor-pointer"
                      style={{ pointerEvents: "auto", zIndex: 50 }}
                      type="button"
                    >
                      <FaGithub className="w-4 h-4" />
                      <span className="font-mono text-sm font-medium">CODE</span>
                    </button>

                    {/* Live Demo Link */}
                    {project.live && (
                      <button
                        onClick={() => handleLinkClick(project.live)}
                        className="inline-flex items-center gap-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-4 py-2 border border-blue-500 hover:border-blue-400 cursor-pointer"
                        style={{ pointerEvents: "auto", zIndex: 50 }}
                        type="button"
                      >
                        <FaExternalLinkAlt className="w-4 h-4" />
                        <span className="font-mono text-sm font-medium">LIVE</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass-strong rounded-3xl p-8 max-w-4xl mx-auto interactive-card glow-purple">
            <h3 className="text-2xl font-bold text-white mb-6">More Projects Coming Soon</h3>
            <p className="text-gray-300 mb-6">
              Currently working on several exciting projects involving deep learning, computer vision, and advanced
              analytics.
            </p>
            <button
              onClick={() => handleLinkClick("https://github.com/ArnavJ19")}
              className="btn-primary inline-flex items-center gap-3 cursor-pointer"
              style={{ pointerEvents: "auto" }}
              type="button"
            >
              <FaGithub className="w-5 h-5" />
              <span className="font-mono">VIEW_ALL_PROJECTS</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
