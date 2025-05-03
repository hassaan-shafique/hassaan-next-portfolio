'use client';
import React from 'react';

const experiences = [
  {
    company: 'Ivory Solutions',
    role: 'Software Developer',
    duration: 'Jan 2024 - Present',
    description: [
      'Architected and implemented highly responsive and reusable user interfaces using React.',
      'Established and enforced coding standards and best practices.',
      'Created Work Breakdown Structures (WBS) for sprint planning.',
      'Collaborated with UI/UX designers and backend developers.',
      'Optimized performance using React Profiler, Lighthouse, Chrome DevTools.',
      'Documented architecture, reusable components, and best practices.',
    ],
  },
  {
    company: 'CARE',
    role: 'Front-end Developer',
    duration: 'Jul 2023 - Sep 2023',
    description: [
      'Implemented Firebase Authentication for user login.',
      'Created dynamic product listings.',
      'Built a feature-rich Todo List app.',
    ],
  },
  {
    company: 'WORK',
    role: 'Customer Service Representative',
    duration: 'Feb 2021 - Jul 2021',
    description: [
      'Specialized in Home Insurance campaigns.',
      'Explained policies and handled customer queries.',
      'Enhanced voice and written communication.',
      'Achieved English fluency and professional service.',
    ],
  },
  {
    company: 'Shark Technologies',
    role: 'Customer Service Representative',
    duration: 'Dec 2018 - Jun 2019',
    description: [
      'Handled outbound sales calls (auto/home insurance & solar).',
      'Addressed concerns and increased conversions.',
      'Adapted quickly to changing sales strategies.',
      'Efficiently handled high call volume.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="px-6 py-16 bg-white">
      <div className="max-w-10xl mx-auto relative">
        <h2 className="text-5xl font-bold text-center text-[#123472] mb-20">Experience</h2>

       
        <div className="absolute top-12  left-1/4 transform -translate-x-1/3 h-full w-1 bg-[#123472]" />

        <div className="flex flex-col gap-20 relative z-10">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex flex-col items-center group">
          
              <div className="w-full sm:w-1/2 p-4">
                <div className="bg-[#123472] text-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm mb-3 italic">
                    {exp.role} | {exp.duration}
                  </p>
                  <ul className="list-disc pl-5 sm:pl-0 sm:pr-5 space-y-1 text-md">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

           
              <div className="absolute left-1/4 transform -translate-x-1/17 w-6 h-6 rounded-br-4xl bg-[#123472]  z-20 shadow-md" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
