"use client"
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Lottie from 'lottie-react'
import welcomeAnimation from '../../assets/social/welcome.json'
import mainAnimation from '../../assets/social/main.json'
const Home = () => {
  return (
    <>
     
     <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-10 ">
      
      {/* Left Content */}
      <div className="max-w-xl text-center md:text-left">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Hello, I’m M. Hassaan Shafique
          <br /> 
          <span className="text-[#123472]">a Software Engineer</span>
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base md:text-lg mb-6">
          With 2 years of experience in building modern, optimized, and scalable web applications.
          <br />
          I specialize in <span className="font-medium text-[#123472]">React</span>, <span className="font-medium text-[#123472]">Next.js</span>, and <span className="font-medium text-[#123472]">Firebase</span>, and I’m passionate about crafting seamless user experiences and clean, maintainable code.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="/github.svg" alt="GitHub" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="/medium.png" alt="Twitter" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
            <Image src="/fiverr.svg" alt="Email" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">
            <Image src="/upwork.svg" alt="Website" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <button className="bg-[#123472] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors">
            Contact
          </button>
          <button className="bg-[#123472] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors">
            Resume
          </button>
        </div>
      </div>

      {/* Animation */}
      <div className="w-full md:w-[500px] mb-10 md:mb-0">
        <Lottie animationData={mainAnimation} loop={true} />
      </div>
    </div> 
    </>
  )
}

export default Home