import React from 'react';
import ProjectCard from './ui/ProjectCard';

const Projects = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1515&q=80",
      title: "E-Learning Platform",
      description: "A comprehensive learning management system built with React and Node.js",
      category: "Web Development",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "Mobile Banking App",
      description: "Secure and user-friendly banking application for iOS and Android",
      category: "Mobile Development",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "AI-Powered Analytics",
      description: "Machine learning solution for business intelligence and data analysis",
      category: "Data Science",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with payment integration",
      category: "Web Development",
      link: "#"
    }
  ];

  return (
    <section id="projects"className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Successful Projects</h2>
          <p className="text-lg text-gray-600">
            Discover some of the amazing projects our graduates have built during their learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* <div className="mt-12 text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;