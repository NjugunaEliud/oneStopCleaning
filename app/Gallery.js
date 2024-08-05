// components/Gallery.js
"use client";
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true
  };

  return (
    <section id="gallery" className="py-16">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Work</h2>
      <Slider {...settings}>
        <div className="relative">
          <img src="/image1.jpg" alt="Cleaning Service 1" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Professional Cleaning</p>
        </div>
        <div className="relative">
          <img src="/image2.jpg" alt="Cleaning Service 2" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Residential Cleaning</p>
        </div>
        <div className="relative">
          <img src="/image3.jpg" alt="Cleaning Service 3" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Commercial Cleaning</p>
        </div>
        <div className="relative">
          <img src="/image4.jpg" alt="Cleaning Service 4" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Commercial Cleaning</p>
        </div>
        <div className="relative">
          <img src="/image5.jpg" alt="Cleaning Service 5" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Commercial Cleaning</p>
        </div>
        <div className="relative">
          <img src="/hero-bg.png" alt="Cleaning Service 6" className="h-96 object-cover w-full rounded-lg" />
          <p className="text-center mt-2">Commercial Cleaning</p>
        </div>
      </Slider>
    </div>
  </section>
  );
};

export default Gallery;