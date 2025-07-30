"use client";

import React, { useState } from "react";

const AllProjects = () => {
  const [filter, setFilter] = useState("front-end");

  const allProjects = [
    {
      id: 1,
      title: "To-Do App",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 2,
      title: "De Silk Tours",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 3,
      title: "Paragons",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 4,
      title: "Tic Tac Toe",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 5,
      title: "Weather App",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 6,
      title: "Amazon Clone ",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },
    {
      id: 7,
      title: "Netflix Clone ",
      description: "Simple to-do list with CRUD",
      type: "front-end",
    },

    {
      id: 8,
      title: "Inventory Manangnment KCW",
      description: "React + Tailwind personal portfolio",
      type: "full-stack",
    },
    {
      id: 9,
      title: "E-Commerce Website",
      description: "React + Tailwind personal portfolio",
      type: "full-stack",
    },
    {
      id: 10,
      title: "Expense Calculator",
      description: "React + Tailwind personal portfolio",
      type: "full-stack",
    },
    {
      id: 11,
      title: "Task Managnment App",
      description: "React + Tailwind personal portfolio",
      type: "full-stack",
    },
    {
      id: 12,
      title: "Blog Posting Website",
      description: "React + Tailwind personal portfolio",
      type: "full-stack",
    },
    {
      id: 13,
      title: "E-Commerce Admin Panel",
      description: "Dashboard with charts and user roles",
      type: "analytics",
    },
    {
      id: 14,
      title: "Inventory Management System",
      description: "Track sales, stock, and vendors",
      type: "machine",
    },
  ];

  const filteredProjects = allProjects.filter(
    (project) => project.type === filter
  );

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
        <div className="">
          <a
            href="/"
            className="inline-block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Back to Home
          </a>
        </div>
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          All Projects
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {[
            { label: "Front-end Projects", value: "front-end" },
            { label: "Full Stack Projects", value: "full-stack" },
            { label: "Data Analytics Projects", value: "analytics" },
            { label: "Machine Learning Projects", value: "machine" },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              style={{
                backgroundColor: filter === value ? "#123472" : undefined,
              }}
              className={`px-6 py-2 rounded-lg text-white transition ${
                filter !== value ? "bg-gray-400" : ""
              } hover:[background-color:#123472]`}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProjects;
