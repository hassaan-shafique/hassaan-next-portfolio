import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#123472] text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Brand */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">Muhammad Hassaan Shafique</h2>
          <p className="text-sm text-gray-300">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Center: Navigation */}
        <ul className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-gray-300 transition-all">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-300 transition-all">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-300 transition-all">Projects</a>
          </li>
          <li>
            <a href="#blog" className="hover:text-gray-300 transition-all">Blogs</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-300 transition-all">Contact</a>
          </li>
        </ul>

        {/* Right: Social Links */}
        <div className="flex gap-4">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaLinkedin size={20} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaTwitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
