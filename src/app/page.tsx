
import React from 'react'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Skills from './components/skills'
import Projects from './components/projects'
import Experience from './components/experience'
import Blog from './components/blogs'
import Certificate from "./components/certificate"
import  Contact  from './components/contact'
import  Footer  from './components/footer'
const Main = () => {
  return (
    <>
    <div className=''> 
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Projects/>
    <Experience/>
    <Blog/>
    <Certificate/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default Main

