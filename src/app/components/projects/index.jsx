'use client';
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import Navbar from '../navbar';

const projects = [
  {
    title: 'Inventory Management System',
    image: '/inventory.png',
    description: 'A complete system to manage stock, sales, installments, and reports with Firebase and React.',
    tech: ['React', 'Firebase', 'Material UI'],
    demo: '#',
  },
  {
    title: 'De Silk Tours',
    image: '/desilktours.png',
    description: 'A responsive web platform where users can explore available tours, view detailed itineraries, and book their trips online. Designed for a seamless travel booking experience.',
    tech: ['React', 'FormsFree', 'Tailwind'],
    github: 'https://github.com/hassaan-shafique/De-Silk-Tours',
    demo: 'https://www.desilktours.com/',
  },
  {
    title: 'Peoples Blog',
    image: '/blog (2).png',
    description: 'A modern blog platform with real-time updates, user authentication, and clean UI.',
    tech: ['Next.js', 'Firebase', 'Tailwind' , 'Quill Editor'],
    github: 'https://github.com/hassaan-shafique/firebase-peoples-blog',
    demo: '#',
  },
  {
    title: 'E-Commece Website',
    image: '/ecommerce.jpg',
    description: 'A modern blog platform with real-time updates, user authentication, and clean UI.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/hassaan-shafique/MHS-Ecommerce-Store',
    demo: '#',
  },
 
  
];

const Projects = () => {
  return (
    <section id="projects" className="  px-6 py-16 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-[#123472] text-center mb-12">Projects</h2>

        <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#123472] rounded-2xl shadow-md border border-[#123472] hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-full h-78 relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-white text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white text-[#123472] text-xs px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-white hover:text-black transition-colors"
                  >
                    <Github size={18} className="mr-1" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-sm text-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={18} className="mr-1" /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-8">
  <a
    href="/allprojects"
    className="px-6 py-2 rounded-lg text-white"
    style={{ backgroundColor: '#123472' }}
  >
    View ALL Projects
  </a>
</div>


  
    </section>
  );
};

export default Projects;
