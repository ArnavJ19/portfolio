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
      title: "AI TRADING SYSTEM",
      description:
        "Reinforcement learning agent for automated trading with 15% performance improvement over traditional strategies.",
      tech: ["Python", "TensorFlow", "RL", "Finance"],
      image:
        "https://private-user-images.githubusercontent.com/167051692/368427930-6a8d4d64-c58c-4c44-a873-5323c9cace51.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5NTIwNTgsIm5iZiI6MTc1MTk1MTc1OCwicGF0aCI6Ii8xNjcwNTE2OTIvMzY4NDI3OTMwLTZhOGQ0ZDY0LWM1OGMtNGM0NC1hODczLTUzMjNjOWNhY2U1MS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwOFQwNTE1NThaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1jM2E1MThiNTZlYjMwYzBiNTc1YTZmZGRjNGNiY2EwOTk4MDcwYWQxN2QyODJjNGFjYWYwMDIwMTVjYTE0NmM4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.OVAu_9fMAgKo8elDlXTCtcrxx3fjqYG4EPpYrN0oPhk",
      github: "https://github.com/ArnavJ19/RL_Agent_Trading",
      featured: false,
    },
    {
      id: "02",
      title: "PORTFOLIO OPTIMIZER",
      description: "ML-powered portfolio optimization using clustering algorithms for risk-adjusted returns.",
      tech: ["Python", "Scikit-learn", "Finance", "ML"],
      image:
        "https://private-user-images.githubusercontent.com/167051692/408430776-59099db9-7421-44b8-aeb0-3a08a7b00e95.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5NTE5MDEsIm5iZiI6MTc1MTk1MTYwMSwicGF0aCI6Ii8xNjcwNTE2OTIvNDA4NDMwNzc2LTU5MDk5ZGI5LTc0MjEtNDRiOC1hZWIwLTNhMDhhN2IwMGU5NS5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwOFQwNTEzMjFaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NThkNzBlM2U2ZmM3YTZlMmI5NmYzMTIyOWJjZGEwYzY5ODk3Njc3YTliMWM5YjZjMWI5ODA1OWFmMTdiYzE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.z0fKRzvggMqxX6e_spmp_oUhqBiJblDRhLxJkKA02TU",
      github: "https://github.com/ArnavJ19/PortfolioML",
      featured: false,
    },
    {
      id: "03",
      title: "HEALTH PREDICTOR",
      description: "Depression prediction model using BRFSS dataset with 75% accuracy across multiple classes.",
      tech: ["R", "Python", "Healthcare", "ML"],
      image: "https://assets.marketware.com/app/uploads/2021/01/28130046/Healthcare-Analytics-101.svg",
      github: "https://github.com/ArnavJ19/Depression-Prediction-Using-Health-Data",
      featured: false,
    },
    {
      id: "04",
      title: "GammaX: Option Pricing Tool",
      description: "An advanced Option Pricing and Analytics tool built using Python and StreamLit",
      tech: ["Python", "Streamlit", "Finance", "Options"],
      image: "https://private-user-images.githubusercontent.com/167051692/463421544-01698a2f-dc08-490e-9296-c9b0f07eb5f0.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTE5NTIyMTQsIm5iZiI6MTc1MTk1MTkxNCwicGF0aCI6Ii8xNjcwNTE2OTIvNDYzNDIxNTQ0LTAxNjk4YTJmLWRjMDgtNDkwZS05Mjk2LWM5YjBmMDdlYjVmMC5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzA4JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcwOFQwNTE4MzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iYmU0YTMzNDdiM2VjNzA4N2U1MWQyOTRiZGQzZmE1OGM4MWUwNzVmZWQwMjlmNWFmMjkwMzVhMzllMmYxNDNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.q6aq5vLY7ol6kBSNkyAEpMJLQSZliugcvl90Tp-0nfY",
      github: "https://github.com/ArnavJ19/Depression-Prediction-Using-Health-Data",
      live: "https://gammax-optionpricing.streamlit.app",
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
