'use client';
import React from 'react';

const blogs = [
  {
    title: 'Understanding React Hooks',
    platform: 'Medium',
    description: 'A deep dive into React Hooks and how they simplify state management.',
    link: 'https://medium.com/your-profile/understanding-react-hooks',
    image: '/path/to/react-hooks-image.jpg', // Add the image URL here
  },
  {
    title: 'Next.js: The Future of React Development',
    platform: 'Dev.to',
    description: 'Exploring the features of Next.js and how it enhances React development.',
    link: 'https://dev.to/your-profile/next-js-the-future-of-react-development',
    image: '/path/to/nextjs-image.jpg', // Add the image URL here
  },
  {
    title: 'Tailwind CSS: A Game Changer for Styling',
    platform: 'Medium',
    description: 'A comprehensive guide to using Tailwind CSS in modern web development.',
    link: 'https://medium.com/your-profile/tailwind-css-game-changer-for-styling',
    image: '/path/to/tailwind-css-image.jpg', // Add the image URL here
  },
  {
    title: 'Tailwind CSS: A Game Changer for Styling',
    platform: 'Medium',
    description: 'A comprehensive guide to using Tailwind CSS in modern web development.',
    link: 'https://medium.com/your-profile/tailwind-css-game-changer-for-styling',
    image: '/path/to/tailwind-css-image.jpg', // Add the image URL here
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
      </div>
    </section>
  );
};

export default Blog;
