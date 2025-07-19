'use client'

import dynamic from 'next/dynamic'

const Navbar = dynamic(() => import('./components/navbar'), { ssr: false })
const Home = dynamic(() => import('./components/home'), { ssr: false })
const About = dynamic(() => import('./components/about'), { ssr: false })
const Skills = dynamic(() => import('./components/skills'), { ssr: false })
const Projects = dynamic(() => import('./components/projects'), { ssr: false })
const Experience = dynamic(() => import('./components/experience'), { ssr: false })
const Blog = dynamic(() => import('./components/blogs'), { ssr: false })
const Certificate = dynamic(() => import('./components/certificate'), { ssr: false })
const Contact = dynamic(() => import('./components/contact'), { ssr: false })
const Footer = dynamic(() => import('./components/footer'), { ssr: false })

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Blog />
      <Certificate />
      <Contact />
      <Footer />
    </>
  )
}

export default App


