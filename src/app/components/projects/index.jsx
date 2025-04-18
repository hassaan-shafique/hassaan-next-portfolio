'use client';
import React from 'react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Inventory Management System',
    image: '/inventory.png',
    description: 'A complete system to manage stock, sales, installments, and reports with Firebase and React.',
    tech: ['React', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/inventory-system',
    demo: '#',
  },
  {
    title: 'Task Management Tool',
    image: '/taskflow.png',
    description: 'Helps users track daily tasks, manage projects, and maintain productivity efficiently.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/task-manager',
    demo: '#',
  },
  {
    title: 'Blog Posting Website',
    image: '/blog (2).png',
    description: 'A modern blog platform with real-time updates, user authentication, and clean UI.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/blog-website',
    demo: '#',
  },
  {
    title: 'E-Commece Website',
    image: '/ecommerce.jpg',
    description: 'A modern blog platform with real-time updates, user authentication, and clean UI.',
    tech: ['Next.js', 'Firebase', 'Tailwind'],
    github: 'https://github.com/yourusername/blog-website',
    demo: '#',
  },
  // Add more projects as needed
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
              <div className="w-full h-48 relative">
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
    </section>
  );
};

export default Projects;
