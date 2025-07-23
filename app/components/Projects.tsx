"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })

  const projects = [


    {
      id: "01",
      title: "Grekko: AI Data Analytics Tool",
      description: "Intelligent data analytics platform that uses Retrieval Augmented Generation with Qwen 2.5-7B LLM to autonomously analyze uploaded datasets performing schema detection, summary statistics, visualization generation, and anomaly detection with an integrated chat interface that allows users to ask natural language questions for deeper insights",
      tech: ["Data Visualization", "Data Analytics", "LLM", "Data Insights"],
      image: "https://miro.medium.com/v2/resize:fit:4800/format:webp/1*ufzEPkymZYOdg6Nt8_-mfQ.png",
      github: "https://github.com/ArnavJ19/LLM-Data-Analytics-Tool",
      featured: true,
    },

    {
      id: "02",
      title: "GammaX: Advanced Option Pricing Tool",
      description: "An advanced Option Pricing and Analytics tool built using Python and StreamLit",
      tech: ["Python", "Streamlit", "Finance", "Options"],
      image: "/images/gammax-delta-surface.png",
      github: "https://github.com/ArnavJ19/Depression-Prediction-Using-Health-Data",
      live: "https://gammax-optionpricing.streamlit.app",
      featured: true,
    },
    
    {
      id: "03",
      title: "Reinforcement Learning Based Trading Agent",
      description:
        "Reinforcement learning agent for automated trading with 15% performance improvement over traditional strategies.",
      tech: ["Python", "TensorFlow", "RL", "Finance"],
      image: "/images/ai-trading-dashboard.jpg",
      github: "https://github.com/ArnavJ19/RL_Agent_Trading",
      featured: false,
    },
    {
      id: "04",
      title: "Portfolio Optimization using Machine Learning",
      description: "ML-powered portfolio optimization using clustering algorithms for risk-adjusted returns.",
      tech: ["Python", "Scikit-learn", "Finance", "ML"],
      image: "/images/portfolio-allocation.jpg",
      github: "https://github.com/ArnavJ19/PortfolioML",
      featured: false,
    },
    {
      id: "05",
      title: "Depressive Health Predictor",
      description: "Depression prediction model using BRFSS dataset with 75% accuracy across multiple classes.",
      tech: ["R", "Python", "Healthcare", "ML"],
      image: "/images/ai-health-brain.png",
      github: "https://github.com/ArnavJ19/Depression-Prediction-Using-Health-Data",
      featured: false,
    },

    {
      id: "06",
      title: "Time Series Analysis using Amazon Chronos",
      description: "A stark comparison between the performance of transformer-based and statistics based Time-Series Models",
      tech: ["Time Series Regression", "Transformers", "Statistics", "Data Analysis"],
      image: "https://raw.githubusercontent.com/amazon-science/chronos-forecasting/main/figures/main-figure.png",
      github: "https://github.com/ArnavJ19/Chronos",
      featured: false,
    },
  ]

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
              className={`tech-border rounded-xl overflow-hidden hover:tech-glow transition-all duration-300 group ${
                project.featured ? "lg:col-span-2" : ""
              }`}
            >
              <div className={`flex flex-col ${project.featured ? "lg:flex-row" : ""}`}>
                <div className={`relative overflow-hidden ${project.featured ? "lg:w-1/2" : ""}`}>
                  <div className="aspect-video relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index < 2}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="font-mono text-primary text-sm bg-background/80 px-2 py-1 rounded">
                        {project.id}
                      </span>
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="font-mono text-background text-xs bg-primary px-2 py-1 rounded">FEATURED</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className={`p-6 ${project.featured ? "lg:w-1/2" : ""}`}>
                  <h3 className="font-mono text-primary text-sm mb-2">{project.title}</h3>
                  <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary text-xs rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span className="font-mono text-sm">CODE</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono text-sm">LIVE</span>
                      </a>
                    )}
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

export default Projects
