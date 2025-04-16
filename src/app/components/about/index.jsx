'use client'
import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="px-6 py-12 bg-black">
      <div className="max-w-6xl mx-auto">
        <hr className="mb-20 border-gray-700" />

        <div className="flex flex-col md:flex-row items-center gap-10">
        
          <div className="flex-1">
            <h2 className="text-[#123472] font-bold text-4xl mb-6">About Me</h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                👋 Hi, I’m <strong>Muhammad Hassaan Shafique</strong>, a passionate Frontend Developer with over <strong>1.3 years</strong> of experience, currently working at <strong>Ivory Solutions</strong>.
              </p>
              <p>
                I specialize in building clean, responsive, and user-friendly web applications using modern tools like <strong>React</strong>, <strong>Next.js</strong>, <strong>Firebase</strong>, and <strong>Tailwind CSS</strong>.
              </p>
              <p>
                My journey started with a 3-month internship at <strong>CARE</strong>, where I worked on the frontend of an E-commerce platform and gained hands-on experience with React and Firebase.
              </p>
              <p>
                At Ivory Solutions, I've collaborated closely with backend teams on multiple projects, sharpening my skills in UI development, teamwork, and problem-solving.
              </p>

              <div>
                <p className="font-semibold text-[#123472] mt-4">💼 Projects I've Worked On:</p>
                <ul className="list-disc list-inside">
                  <li>📦 <strong>Inventory Management System</strong> – Manage stock, sales, and reports efficiently.</li>
                  <li>✅ <strong>Task Management System</strong> – Track tasks, deadlines, and progress with ease.</li>
                  <li>✍️ <strong>Blog Posting Website</strong> – Blog platform with user auth and real-time content updates.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-[#123472] mt-4">🧠 Skills I’ve Gained:</p>
                <ul className="list-disc list-inside">
                  <li><strong>Frontend:</strong> HTML, CSS, JavaScript, React, Next.js</li>
                  <li><strong>Styling:</strong> Tailwind CSS, Material UI</li>
                  <li><strong>Backend / DB:</strong> Firebase</li>
                  <li><strong>Collaboration:</strong> Agile practices, working with backend teams</li>
                </ul>
              </div>

              <p>
                I'm always eager to learn, grow, and take on new challenges. Whether it's crafting smooth user experiences or building scalable features, I love turning ideas into reality through code.
              </p>
            </div>
          </div>

          
          <div className="flex-shrink-0">
            <Image
              src="/image.jpg"
              width={320}
              height={320}
              alt="About Image"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
