'use client';
import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return (
    <section id="contact" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto bg-[#123472] text-white rounded-2xl p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left: Form */}
          <form  action="https://formspree.io/f/xpwlqawg"
  method="POST" className="space-y-5">
            <div>
              <label className="block mb-1">Name</label>
              <input
              name='name'
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
              name='email'
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Service</label>
              <input
              name='services'
                type="text"
                placeholder="Service you need"
                className="w-full p-3 rounded-lg bg-white text-black"
              />
            </div>

            <div>
              <label className="block mb-1">Description</label>
              <textarea
              name='description'
                rows={4}
                placeholder="Tell me more..."
                className="w-full p-3 rounded-lg bg-white text-black"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-white cursor-pointer text-[#123472] font-semibold px-6 py-3 rounded-lg hover:bg-gray-400 transition-all duration-300"
            >
              Submit
            </button>
          </form>

          {/* Right: Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
              <p className="mb-4">
                <span className="font-semibold">Email:</span>{' '}
                <a href="mailto:your@email.com" className="underline hover:text-gray-300">
                  hassaanshafique398@gmail.com
                </a>
              </p>
             
              <Image 
  src="/contact/contactsBlack.svg"
  width={250}
  height={250}
  alt="contact"
  className="mx-auto mt-6 object-contain"
/>


            </div>
          

            <div>
              <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a href="https://github.com/yourusername" target="_blank" className="hover:text-gray-300">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" className="hover:text-gray-300">
                  LinkedIn
                </a>
                <a href="https://twitter.com/yourusername" target="_blank" className="hover:text-gray-300">
                  Twitter
                </a>
                {/* Add more if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
