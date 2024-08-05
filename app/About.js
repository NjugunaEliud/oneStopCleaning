import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-100 flex">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 gap-12">
        <img 
          src="/hero-bg.png" 
          alt="One Stop Cleaning Ltd" 
          className="w-5/12 h-auto" 
        />
        <div className="w-7/12">
          <h2 className="text-3xl font-bold mb-4">About One Stop Cleaning Ltd</h2>
          <p className="mb-4">
            One Stop Cleaning Ltd is your trusted partner for all your cleaning needs. With years of experience and a dedicated team of professionals, we provide top-notch cleaning services for both residential and commercial properties.
          </p>
          <p className="mb-4">
            Our mission is to deliver exceptional cleaning results while maintaining the highest standards of customer service. We use eco-friendly products and state-of-the-art equipment to ensure your space is not only clean but also safe and healthy.
          </p>
          <p>
            Whether you need regular maintenance cleaning or a one-time deep clean, One Stop Cleaning Ltd is here to exceed your expectations.
          </p>
          <p className="mt-4">
            Located at Pamki House, Nyeri.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;