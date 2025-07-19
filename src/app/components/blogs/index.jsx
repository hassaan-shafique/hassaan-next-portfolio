'use client';
import React from 'react';

const blogs = [
  {
    title: 'Understanding Microservices and Monolithic Architecture',
    platform: 'Medium',
    description: 'A deep dive into Services Microsevices and Monolithic Architectue.',
    link: 'https://medium.com/@hassaanshafique398/understanding-microservices-and-monolithic-architectures-when-to-choose-which-2802c8fed957',
    image: '/blogs/microvsmono.png', 
  },
  {
    title: 'Firebase Authentication',
    platform: 'Medium',
    description: 'Exploring the features of Firebase Secure Authentication .',
    link: 'https://medium.com/@hassaanshafique398/master-firebase-with-react-from-basics-to-building-secure-user-authentication-signup-login-62188b9c864a',
    image: '/blogs/firebase.png', 
  },
  {
    title: 'Still Using Media Queries?',
    platform: 'Medium',
    description: 'A comprehensive guide to Media Queries And Container Queries.',
    link: 'https://medium.com/@hassaanshafique398/still-using-media-queries-0426268dee12',
    image: '/blogs/media.png', 
  },
  {
    title: 'Mastering Git: A Complete Beginner-to-Advanced Guide for Developers',
    platform: 'Medium',
    description: 'A comprehensive guide to using Tailwind CSS in modern web development.',
    link: 'https://medium.com/your-profile/tailwind-css-game-changer-for-styling',
    image: '/blogs/gitblog.png', 
  },
  // Add more blogs as needed
];

const Blog = () => {
  return (
    <section id="blog" className="px-6 py-16 bg-white">
      <div className="max-w-8xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#123472] mb-12">My Blogs</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-[#123472] text-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-48 relative mb-4 rounded-lg overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-2">{blog.title}</h3>
              <p className="text-sm italic mb-2">{blog.platform}</p>
              <p className="text-gray-200 mb-4">{blog.description}</p>

              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-200 underline"
              >
                Read Full Article
              </a>
            </div>
          ))}
        </div>
        <a 
           href= "https://medium.com/@hassaanshafique398"
           target='_blank'
           className='underline text-blue-800 flex justify-center mt-12'
           > 
        <div className='text-blue-800 text-2xl '> View More</div>
        </a>
      </div>

     
     
    
    </section>
  );
};

export default Blog;
