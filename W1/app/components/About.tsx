"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Spotlight } from "./ui/spotlight"
import { AnimatedGradient } from "./ui/animated-gradient"

const About = () => {
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
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">About Me</h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            "I'm a graduate student pursuing a Master of Science in Applied Data Analytics at Boston University, with a strong foundation in Computer Science and Communication Engineering from Manipal University Jaipur. My academic journey has equipped me with a robust skill set in statistical analysis, machine learning, and data visualization.",
            "With experience as a Proprietary Trader at Jain Capital, I've honed my skills in financial analysis and high-frequency trading. I'm passionate about leveraging data to drive insights and solve complex problems across various domains, including finance, technology, and healthcare.",
            "I'm constantly exploring new techniques and tools in data science and machine learning, aiming to stay at the forefront of this rapidly evolving field. I'm excited about the potential of data analytics to make a positive impact and drive informed decision-making in businesses and organizations.",
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-gray-300 mb-6"
              whileHover={{ scale: 1.05, color: "#60A5FA" }}
              transition={{ duration: 0.3 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </Spotlight>
  )
}

export default About

