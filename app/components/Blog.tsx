"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaCalendarAlt, FaClock, FaArrowRight, FaTag } from "react-icons/fa"
import Image from "next/image"

const Blog = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const articles = [
    {
      id: 1,
      title: "Exploratory Data Analysis 101: A Step-by-Step Guide for Beginners",
      excerpt:
        "A comprehensive beginner's guide to exploratory data analysis, covering essential techniques, tools, and best practices for uncovering insights from your data.",
      content:
        "Learn the fundamentals of EDA including data cleaning, visualization techniques, statistical summaries, and how to identify patterns and anomalies in your datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2025-03-0",
      readTime: "12 min read",
      category: "Data Science",
      tags: ["EDA", "Data Analysis", "Python", "Pandas", "Visualization"],
      featured: true,
      platform: "Medium",
      url: "https://medium.com/@arnavjain1615/exploratory-data-analysis-101-a-step-by-step-guide-for-beginners-dbf84f319f27",
    },
    {
      id: 2,
      title: "Wall Street Bled, I Gained: Lessons from Market Volatility",
      excerpt:
        "Personal insights and lessons learned from navigating volatile financial markets, including risk management strategies and psychological aspects of trading.",
      content:
        "A candid reflection on trading experiences during market downturns, covering risk management, emotional discipline, and strategic decision-making in uncertain times.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2025-04-04",
      readTime: "8 min read",
      category: "Finance",
      tags: ["Trading", "Risk Management", "Finance", "Market Analysis"],
      featured: false,
      platform: "LinkedIn",
      url: "https://www.linkedin.com/pulse/wall-street-bled-i-gained-arnav-jain-gelyc/?trackingId=fDin9J9Hp3rieVD7bXS6Bw%3D%3D",
    },
    {
      id: 3,
      title: "Scalable vs. Statistical: A Time-Series Forecasting Comparison Between Amazon Chronos and AutoARIMA",
      excerpt: "Implementing LSTM and Transformer models for accurate prediction of financial and business metrics.",
      content:
        "Time-series forecasting is a cornerstone of predictive analytics in sectors such as energy, finance, and supply chain management. In this study, we evaluate the performance of Amazon’s Chronos, a scalable neural network-based forecasting model, and AutoARIMA, a classical statistical method, on a real-world energy dataset.",
      image:
        "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2025-07-21",
      readTime: "10 min read",
      category: "Time Series Analysis",
      tags: ["Time Series", "Transformers", "Forecasting", "Statistics"],
      featured: false,
      platform: "Medium",
      url: "https://medium.com/@arnavjain1615/scalable-vs-statistical-a-time-series-forecasting-comparison-between-amazon-chronos-and-autoarima-df479e17a443",
    },
    {
      id: 4,
      title: "Building Scalable Data Pipelines with Apache Spark",
      excerpt:
        "A comprehensive guide to designing and implementing robust data processing pipelines for big data applications.",
      content:
        "Learn how to optimize Spark jobs, handle data skew, and implement efficient ETL processes for large-scale data processing.",
      image:
        "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      date: "2024-01-10",
      readTime: "10 min read",
      category: "Data Engineering",
      tags: ["Spark", "Big Data", "ETL", "Python"],
      featured: false,
      platform: "Medium",
      url: "#",
    },
  ]

  return (
    <section id="blog" className="py-32 relative overflow-hidden">
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
            <span className="font-mono text-sm text-blue-400">Blog.fetch()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-secondary-purple">LATEST ARTICLES</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Insights, tutorials, and thoughts on machine learning, data science, and the latest trends in AI technology.
          </p>
        </motion.div>

        {articles
          .filter((article) => article.featured)
          .map((article) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-16"
            >
              <div className="glass-strong rounded-3xl overflow-hidden interactive-card glow-pink">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-auto">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-mono">FEATURED</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-mono ${
                          article.platform === "Medium"
                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                            : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                        }`}
                      >
                        {article.platform}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span className="font-mono">{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaClock className="w-4 h-4" />
                        <span className="font-mono">{article.readTime}</span>
                      </div>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-mono">
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{article.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{article.excerpt}</p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 glass rounded-full text-xs font-mono text-blue-400 flex items-center gap-1"
                        >
                          <FaTag className="w-3 h-3" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Read on {article.platform}
                      <FaArrowRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles
            .filter((article) => !article.featured)
            .map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="glass-strong rounded-3xl overflow-hidden interactive-card glow-blue"
              >
                <div className="relative h-48">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-mono ${
                        article.platform === "Medium"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {article.platform}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <FaCalendarAlt className="w-3 h-3" />
                      <span className="font-mono">{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      <span className="font-mono">{article.readTime}</span>
                    </div>
                  </div>

                  <span className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-mono mb-3 inline-block">
                    {article.category}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3 leading-tight">{article.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{article.excerpt}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-1 glass rounded-full text-xs font-mono text-blue-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-white transition-colors text-sm font-medium flex items-center gap-2"
                    whileHover={{ x: 5 }}
                  >
                    Read on {article.platform}
                    <FaArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            className="btn-secondary inline-flex items-center gap-3"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Articles
            <FaArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Blog
