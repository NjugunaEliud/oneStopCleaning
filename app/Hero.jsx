import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-gray-900 h-screen">
      <img src="/hero-bg.pngs" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-50" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">One Stop Cleaning Ltd</h1>
          <p className="text-xl md:text-2xl text-white mb-8">Your trusted cleaning partner</p>
          {/* <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Get a Quote
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;