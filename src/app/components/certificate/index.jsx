'use client';
import React from 'react';

const certifications = [
  {
    title: 'Programming with JavaScript',
    institution: 'Meta',
    image: '/certificate/javascript-certificate.png', 
  },
  {
    title: 'Software Architecture & Design of Modern Large Scale Systems',
    institution: 'Udemy',
    image: '/path/to/fullstack-certification.jpg', // Add the image URL for the certificate here
  },
  {
    title: 'The Complete Full Stack Web Developnment BootCamp',
    institution: 'Udemy',
    image: '/path/to/js-certification.jpg', // Add the image URL for the certificate here
  },
  {
    title: 'Foundations of User Experience (UX) Design',
    institution: 'Coursera',
    image: '/certificate/ux-certificate.png', // Add the image URL for the certificate here
  },
  // Add more certifications as needed
];

const Certification = () => {
  return (
    <section id="certifications" className="px-6 py-16 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#123472] mb-12">My Certifications</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {certifications.map((certification, index) => (
            <div
              key={index}
              className="bg-[#123472] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden bg-white flex items-center justify-center">
  <img
    src={certification.image}
    alt={certification.title}
    className="w-full h-full object-contain"
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
