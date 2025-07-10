"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { FaUser, FaMapMarkerAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa"
import { LuGlobe} from "react-icons/lu"
import { IoBodyOutline } from "react-icons/io5"
import { TiLightbulb } from "react-icons/ti"
import { Brain } from 'lucide-react'
import { GiPokerHand, GiRaceCar } from "react-icons/gi"
import { IoFootball, IoMusicalNotes } from "react-icons/io5"
import Image from "next/image"

const AboutMe = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const personalInfo = [
    {
      icon: LuGlobe,
      label: "Dream Destination",
      value: "New York City, US",
      color: "text-blue-400",
    },
    {
      icon: TiLightbulb,
      label: "Life Motto",
      value: "Work Hard, Play Hard",
      color: "text-green-400",
    },
    {
      icon: IoBodyOutline,
      label: "Personality Type",
      value: "Golden Retriever energy, with a side of caffeine!",
      color: "text-purple-400",
    },
    {
      icon: Brain,
      label: "Thinking Style",
      value: "Quiet, layered, and 3 steps ahead (most days).",
      color: "text-yellow-400",
    },
  ]

  const interests = [
    {
      icon: GiPokerHand,
      label: "Poker",
      description: "I go All-In when I get Ace and Jack of Spades !",
      gradient: "from-red-500 to-black",
      glowClass: "glow-red",
    },
    {
      icon: GiRaceCar,
      label: "Formula 1",
      description: "My favourite team is Scuderia Ferrari, and Micheal Schumacher is my GOAT !",
      gradient: "from-red-600 to-orange-500",
      glowClass: "glow-orange",
    },
    {
      icon: IoFootball,
      label: "Soccer",
      description: "Manchester is Blue, forever...Go Man City #93:20",
      gradient: "from-green-500 to-blue-500",
      glowClass: "glow-green",
    },
    {
      icon: IoMusicalNotes,
      label: "Music",
      description: "House keeps me sane, Techno makes me go ballistic!",
      gradient: "from-purple-500 to-pink-500",
      glowClass: "glow-purple",
    },
  ]

  return (
    <section id="about-me" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 math-grid opacity-20" />
      <div className="absolute inset-0 data-viz opacity-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block glass px-6 py-3 rounded-full mb-6">
            <span className="font-mono text-sm text-blue-400">AboutMe.initialize()</span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
            <span className="text-accent-pink">ABOUT ME</span>
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Get to know the person behind the algorithms - my journey, passions, and what drives me to innovate in the
            world of data science.
          </p>
        </motion.div>

        {/* My Journey Section with Photo */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <div className="glass-strong rounded-3xl p-8 lg:p-12 interactive-card glow-blue">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Journey Text - Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  My Journey
                </h3>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                      I was born and raised in India, where my fascination with numbers and patterns started early. That curiosity naturally pulled me toward Computer Science, where I first experienced the thrill of turning logic into solutions — and where I stumbled into the world of data and algorithms.
                    </p>

                    <p>
                      During undergrad, I found myself increasingly drawn to financial markets. What began as casual interest soon became a full-on obsession. I spent nights building trading bots, studying price patterns, and learning how data, strategy, and unpredictability all danced together in finance.
                    </p>

                    <p>
                      Today, I’m pursuing my Master’s in Applied Data Analytics at Boston University — sharpening my skills in machine learning, analytics, and the art of extracting stories from numbers. Whether it's uncovering trends or solving real-world problems, I love giving data a voice.
                    </p>

                    <p>
                      Outside the classroom and code editors, you’ll probably find me exploring New England’s hiking trails, discovering hidden coffee spots in Boston, or planning my next spontaneous getaway. I’m a big believer in balance — between structure and spontaneity, precision and curiosity.
                    </p>

                </div>
              </motion.div>

              {/* Personal Photo - Right Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="relative"
              >
                <div className="relative">
                  <div className="w-full max-w-md mx-auto h-96 lg:h-[450px] rounded-3xl overflow-hidden glass border-4 border-white/20 shadow-2xl">
                    <Image
                      src="/images/arnav-personal-photo.jpg"
                      alt="Arnav Jain - Personal Photo"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>

                  {/* Decorative elements around the photo */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />

                  <motion.div
                    className="absolute top-1/2 -left-6 w-4 h-4 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full"
                    animate={{
                      y: [-10, 10, -10],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                </div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="mt-4 text-center text-gray-400 font-mono text-sm"
                >
                  Exploring the beautiful landscapes of New England 🍂
                </motion.p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Personal Info Cards and Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Personal Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                  className="glass-strong rounded-2xl p-6 interactive-card glow-blue"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <info.icon className={`w-5 h-5 ${info.color}`} />
                    <span className="text-gray-400 text-sm font-mono">{info.label}</span>
                  </div>
                  <p className="text-white font-semibold">{info.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Philosophy Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="space-y-6"
          >
            <div className="glass-strong rounded-3xl p-8 interactive-card philosophy-glow">
              <div className="text-center">
                <div className="text-6xl text-blue-400 mb-4">"</div>
                <blockquote className="text-lg text-white font-light italic mb-4">
                  Data is not just numbers; it's the language of the future. Every algorithm I write, every model I
                  build, is a step towards understanding the patterns that shape our world.
                </blockquote>
                <div className="text-gray-400 text-sm font-mono">- My Data Philosophy</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Interests & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Beyond the <span className="text-primary-blue">Code</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                className={`glass-strong rounded-2xl p-6 interactive-card ${interest.glowClass} text-center group`}
              >
                <div className={`p-3 bg-gradient-to-br ${interest.gradient} rounded-xl w-fit mx-auto mb-4 shadow-lg`}>
                  <interest.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-semibold mb-2 text-lg">{interest.label}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{interest.description}</p>

                {/* Subtle hover effect indicator */}
                <motion.div
                  className="mt-3 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="glass-strong rounded-3xl p-8 text-center interactive-card glow-pink"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Fun Facts About Me</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-400">500+</div>
              <div className="text-gray-400 text-sm font-mono">Cups of Coffee</div>
              <div className="text-xs text-gray-500">Fuel for late-night coding</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-gray-400 text-sm font-mono">Countries Visited</div>
              <div className="text-xs text-gray-500">Always exploring new cultures</div>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-purple-400">∞</div>
              <div className="text-gray-400 text-sm font-mono">Curiosity Level</div>
              <div className="text-xs text-gray-500">Never stop learning</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700">
            <p className="text-gray-400 text-sm">
              When I'm not building models or analyzing data, you'll find me at the poker table calculating odds,
              watching F1 races, cheering for my favorite soccer team, or discovering new music. Life's about finding
              patterns everywhere! 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutMe
