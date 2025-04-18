'use client';
import React from 'react';
import Image from 'next/image';

const skills = [
  { name: 'HTML', icon: '/skills/html.svg' },
  { name: 'CSS', icon: '/skills/css.svg' },
  { name: 'JavaScript', icon: '/skills/javascript.svg' },
  { name: 'React', icon: '/skills/react.svg' },
  { name: 'Next.js', icon: '/skills/nextjs.svg' },
  { name: 'Tailwind CSS', icon: '/skills/tailwind.svg' },
  { name: 'Firebase', icon: '/skills/firebase.svg' },
  { name: 'Git', icon: '/skills/git.svg' },
  { name: 'GitHub', icon: '/skills/github.svg' },
  { name: 'Material UI', icon: '/skills/materialui.svg' },
  { name: 'Figma', icon: '/skills/figma.svg' },
];

const Skills = () => {
  return (
    <section id="skills" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#123472] mb-12">
          My Skillset
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#123472]  border shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition duration-300 ease-in-out"
            >
              <div className="w-16 h-16 mx-auto mb-4">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <p className="text-base font-semibold text-white">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
