import Hero from "./components/Hero"
import AboutMe from "./components/AboutMe"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Certifications from "./components/Certifications"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutMe />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Blog />
      <Contact />
      <Footer />
    </main>
  )
}
