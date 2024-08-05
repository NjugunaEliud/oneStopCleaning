import React from 'react';

const Hero = () => {
  return (
    <div className="relative mt-20 bg-gray-900 h-96" style={{ height: '700px' }}>
      <img src="/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0 flex items-center justify-center md:justify-end lg:justify-end md:px-0 px-2">
        <div className="text-start w-full md:w-1/2 md:pl-20 md:mr-20 flex flex-col justify-center items-center md:items-start">
          <div className="mb-6 md:pl-20 text-center md:text-left">
            <h1 className="text-xl md:text-3xl md:text-4xl font-bold text-white mb-1">One Stop Cleaning Ltd</h1>
            <div className="w-4/12  border-b-8 pb-4 border-green-500 mx-auto md:mx-0"></div>
          </div>
          <p className="text-md md:text-xl text-white mb-8 text-center md:text-left">Your trusted cleaning partner</p>
          {/* <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Get a Quote
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
