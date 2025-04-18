'use client';
import React from 'react';

const certifications = [
  {
    title: 'React Developer Certificate',
    institution: 'Coursera',
    image: '/path/to/react-certification.jpg', // Add the image URL for the certificate here
  },
  {
    title: 'Full Stack Web Development',
    institution: 'Udemy',
    image: '/path/to/fullstack-certification.jpg', // Add the image URL for the certificate here
  },
  {
    title: 'JavaScript Mastery',
    institution: 'edX',
    image: '/path/to/js-certification.jpg', // Add the image URL for the certificate here
  },
  {
    title: 'JavaScript Mastery',
    institution: 'edX',
    image: '/path/to/js-certification.jpg', // Add the image URL for the certificate here
  },
  // Add more certifications as needed
];

const Certification = () => {
  return (
    <section id="certification" className="px-6 py-16 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#123472] mb-12">My Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-[#123472] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{certification.title}</h3>
              <p className="text-sm italic mb-2">{certification.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
