"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Navbar = () => {
  // State to toggle mobile menu
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <> 
      <nav style={{ backgroundColor: "#123472" }} className='w-full h-16 flex items-center justify-between px-7'>
        {/* Logo/Brand */}
        <div className='text-2xl font-bold text-white'>
          Hassaan's Portfolio
        </div>

       
        <div className='hidden md:flex md:space-x-6 mr-30 font-bold '>
          <Link href="/" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Home</Link>
          <Link href="#about" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>About</Link>
          <Link href="#skills" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Skills</Link>
          <Link href="#projects" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Projects</Link>
          <Link href="#experience" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Experience</Link>
          <Link href="#education" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Education</Link>
          <Link href="#blogs" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Blogs</Link>
          <Link href="#certifications" className='text-white hover:text-gray-300 px-3 py-2 rounded-md'>Certifications</Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className='md:hidden' onClick={toggleMenu}>
          <button className='text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-[#123472]`}>
        <Link href="/" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Home</Link>
        <Link href="#about" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>About</Link>
        <Link href="#skills" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Skills</Link>
        <Link href="#projects" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Projects</Link>
        <Link href="#experience" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Experience</Link>
        <Link href="#education" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Education</Link>
        <Link href="#blogs" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Blogs</Link>
        <Link href="#certifications" className='text-white hover:text-gray-300 px-3 py-2 rounded-md block'>Certifications</Link>
      </div>
    </>
  )
}

export default Navbar
