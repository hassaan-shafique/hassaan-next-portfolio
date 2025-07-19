'use client'
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section  id ="about" className="px-4 sm:px-6 md:px-10 lg:px-16 py-12 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <hr className="mb-16 border-gray-300" />

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
          
          {/* Left: Content */}
          <div className="flex-1">
            <h2 className="text-[#123472] font-bold text-3xl sm:text-4xl mb-6">About Me</h2>

            <div className="space-y-5 text-base sm:text-lg leading-relaxed">
              <p>
                I’m <strong>Muhammad Hassaan Shafique</strong>, a dedicated Frontend Developer with over <strong>1.3 years</strong> of industry experience. Currently, I am contributing to dynamic, real-world projects at <strong>Ivory Solutions</strong>.
              </p>

              <p>
                My expertise lies in building fast, responsive, and intuitive user interfaces using modern technologies like <strong>React</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>Firebase</strong>.
              </p>

              <p>
                I began my journey with a 3-month internship at <strong>CARE</strong>, where I helped develop the frontend of an e-commerce platform. This experience laid the foundation for my professional growth.
              </p>

              <p>
                At Ivory Solutions, I’ve had the opportunity to collaborate closely with cross-functional teams, contributing to scalable products and refining my problem-solving, debugging, and UI optimization skills.
              </p>

              {/* Projects */}
              <div>
                <p className="font-semibold text-[#123472] mt-4">Key Projects:</p>
                <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
                  <li><strong>Inventory Management System:</strong> Efficient stock, sales, and reporting platform.</li>
                  <li><strong>Task Management System:</strong> End-to-end task tracking and productivity tool.</li>
                  <li><strong>Blog Website:</strong> A real-time blogging platform with user authentication and content publishing.</li>
                </ul>
              </div>

              {/* Skills */}
              <div>
                <p className="font-semibold text-[#123472] mt-4">Technical Skills:</p>
                <ul className="list-disc list-inside ml-2 mt-2 space-y-1">
                  <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js</li>
                  <li><strong>Styling:</strong> Tailwind CSS, Material UI</li>
                  <li><strong>Backend & Database:</strong> Firebase (Authentication, Firestore, Storage)</li>
                  <li><strong>Workflow:</strong> Git, Agile methodologies, collaborative development</li>
                </ul>
              </div>

              <p>
                I'm passionate about writing clean, scalable code and continuously enhancing user experiences. I'm always eager to explore new technologies and grow both technically and professionally.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          {/* Right: Image */}
  <div className="flex-shrink-0 md:ml-10">
    <div className="w-[280px] sm:w-[360px] md:w-[420px] lg:w-[500px] xl:w-[520px] rounded-2xl overflow-hidden shadow-xl border-2 border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <Image
        src="/hassaan.jpg"
        width={520}
        height={520}
        alt="Muhammad Hassaan Shafique"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

        </div>
      </div>
    </section>
  );
};

export default About;
