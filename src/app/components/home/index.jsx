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
      
    
      <div className="max-w-xl text-center md:text-left">
     
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Hello, I’m M. Hassaan Shafique
          <br /> 
          <span className="text-[#04399b]">a Software Engineer</span>
        </h1>

       
        <p className="text-gray-400 text-base md:text-lg mb-6">
          With 2 years of experience in building modern, optimized, and scalable web applications.
          <br />
          I specialize in <span className="font-medium text-[#04399b]">React</span>, <span className="font-medium text-[#04399b]">Next.js</span>, and <span className="font-medium text-[#04399b]">Firebase</span>, and I’m passionate about crafting seamless user experiences and clean, maintainable code.
        </p>

        <div className="flex justify-center md:justify-start space-x-6 mb-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="socials/github.svg" alt="GitHub" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <Image src="/medium.png" alt="Twitter" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
            <Image src="socials/fiverr.svg" alt="Email" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
          <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">
            <Image src="socials/upwork.svg" alt="Website" width={40} height={40} className="hover:scale-110 transition-transform" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex justify-center md:justify-start space-x-6">
          <button className="bg-[#123472] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors">
            Contact
          </button>
          <a href="/Muhammad-Hassaan-Shafique-CV.pdf" target="_blank" rel="noopener noreferrer">
  <button className="bg-[#123472] text-white px-6 py-2 rounded-full shadow-md hover:bg-[#0f2a5e] transition-colors cursor-pointer">
    Resume
  </button>
</a>

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