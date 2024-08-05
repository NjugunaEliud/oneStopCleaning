import React from 'react';

const Hero = () => {
  return (
    <div className="relative mt-20 bg-gray-900 h-96 justify-end" style={{height:'700px'}}>
      <img src="/hero-bg.png" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover opacity-25" />
      <div className="absolute inset-0  md:px-0 px-2  flex mr-20 items-center justify-center md:justify-end  lg:justify-end ">
        <div className="text-start md:w-1/2 w-full md:pl-20  md:mr-20">
         <div className='mb-6 md:pl-20'>
         <h1 className="md:text-4xl text-xl  md:text-3xl font-bold  text-white mb-1">One Stop Cleaning Ltd</h1>
         <div className='w-4/12 md:pl-20  border-b-8 pb-4 border-green-500 '><></></div>
         </div>
          <p className="text-md md:text-xl md:pl-20 text-white mb-8">Your trusted cleaning partner</p>
          {/* <a href="#contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300">
            Get a Quote
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;