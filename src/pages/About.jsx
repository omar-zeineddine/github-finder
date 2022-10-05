import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl mb-4 text-center">Github Finder</h1>
      <p className="mb-4 text-2xl font-light text-center px-4">
        A React app to search GitHub profiles and see profile details.
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
    </div>
  );
};

export default About;
