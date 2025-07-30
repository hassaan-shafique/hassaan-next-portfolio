"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import mainAnimation from '../../assets/social/main.json'

const Home = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse  lg:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-16 gap-10">
        
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/1 text-center lg:text-left">
          <h1 className="text-3xl  text-black sm:text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Hello, I’m  <br/>M. Hassaan Shafique
            <br />
            <span className="text-[#04399b]">Software Engineer</span>
          </h1>

          <p className="text-black text-base sm:text-lg xl:text-xl mb-6 leading-relaxed">
            With 2 years of experience in building modern, optimized, and scalable web applications.
            <br />
            I specialize in <span className="font-medium text-[#04399b]">React</span>, <span className="font-medium text-[#04399b]">Next.js</span>, and <span className="font-medium text-[#04399b]">Firebase</span>, and I’m passionate about crafting seamless user experiences and clean, maintainable code.
          </p>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start flex-wrap gap-4 mb-6">
            <a href="https://github.com/hassaan-shafique" target="_blank" rel="noopener noreferrer">
              <Image src="/socials/github.svg" alt="GitHub" width={40} height={40} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.linkedin.com/in/m-hassaan-shafique-558479212/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://medium.com/@hassaanshafique398" target="_blank" rel="noopener noreferrer">
              <Image src="/medium.png" alt="Medium" width={40} height={40} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.fiverr.com/sellers/hassaanshafique/edit" target="_blank" rel="noopener noreferrer">
              <Image src="/socials/fiverr.svg" alt="Fiverr" width={40} height={40} className="hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.upwork.com/freelancers/~017aa4bff4acd7fe70?mp_source=share" target="_blank" rel="noopener noreferrer">
              <Image src="/socials/upwork.svg" alt="Upwork" width={40} height={40} className="hover:scale-110 transition-transform" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex justify-center lg:justify-start flex-wrap gap-4">
            <a href="#contact" className="bg-[#123472] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors">
              Contact
            </a>
            <a href="/Muhammad-Hassaan-Shafique-CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#123472] cursor-pointer text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors">
                Resume
              </button>
            </a>
          </div>
        </div>

        
        <div className="w-full lg:w-1/2 max-w-[600px] xl:max-w-[700px]">
          <Lottie animationData={mainAnimation} loop={true} />
        </div>
      </div>
    </div>
  )
}

export default Home
