import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Animated Banner Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100 p-24 md:p-32 lg:p-40 xl:p-48 text-center min-h-[80vh] flex items-center justify-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-0 w-24 h-24 bg-purple-300 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-0 left-20 w-16 h-16 bg-purple-400 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            PROJECTS
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore my collection of innovative projects showcasing expertise in
            modern web technologies and creative problem-solving
          </p>
          <Link
            to="/projects"
            className="inline-block bg-purple-600 text-white py-4 px-8 rounded-full text-lg font-bold transition duration-300 transform hover:scale-105 hover:bg-purple-700 shadow-lg"
          >
            Go to Projects →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Work;
