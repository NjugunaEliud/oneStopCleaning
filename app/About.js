import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 flex">
      <div className="w-full md:mx-auto md:flex-row flex-col flex py-14 md:justify-between md:px-4 md:gap-4">
       <div className="md:w-1/2 w-full flex md:px-20  md:justify-center px-5">
         <div className='md:w-3/4 w-full'>
         <h2 className="md:text-3xl text-xl font-bold mb-4 ">About One Stop Cleaning Ltd</h2>
         <div className='w-4/12 mb-14  border-b-8 pb-4 border-green-500 '><></></div>
          <p className="mb-4 text-gray-700">
            One Stop Cleaning Ltd is your trusted partner for all your cleaning needs. With years of experience and a dedicated team of professionals, we provide top-notch cleaning services for both residential and commercial properties.
          </p>
          <p className="mb-4 text-gray-700">
            Our mission is to deliver exceptional cleaning results while maintaining the highest standards of customer service. We use eco-friendly products and state-of-the-art equipment to ensure your space is not only clean but also safe and healthy.
          </p>
          <p className='text-gray-700'>
            Whether you need regular maintenance cleaning or a one-time deep clean, One Stop Cleaning Ltd is here to exceed your expectations.
          </p>
          <p className="mt-4 text-gray-700">
            Located at Pamki House, Nyeri.
          </p>
         </div>
        </div>
       <div className='md:w-1/2 w-full'>
       <img 
          src="/hero-bg.png" 
          alt="One Stop Cleaning Ltd" 
          className=" md:w-3/4 w-full" 
          style={{height:'500px'}}
        />
       </div>
   
      </div>
    </section>
  );
};

export default About;