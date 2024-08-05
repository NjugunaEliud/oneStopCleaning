"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Email, LocationOn, Phone } from '@mui/icons-material';
import ContactModal from './ContactModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`bg-white z-10 py-4 items-center mb-10 fixed top-0 w-full transition-shadow duration-300 ${hasShadow ? 'shadow-lg' : ''}`}>
      <div className="w-full  mx-auto px-10">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <span className="font-poppins font-semibold text-gray-500 text-xl md:text-xl lg:text-xl ">One Stop Cleaning Ltd</span>
            </Link>
          </div>
          <div className="flex items-center flex-row ">
            <div className="hidden md:flex md:flex-row space-x-4">
              <Link href="/" className="font-poppins text-gray-600   px-3 py-2 border-b-2 border-gray-500 rounded-md text-sm font-medium transition duration-300">Home</Link>
              <Link href="#about" className="font-poppins text-gray-600   hover:border-b-2 hover:border-gray-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</Link>
              <Link href="#gallery" className="font-poppins text-gray-600   hover:border-b-2 hover:border-gray-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Gallery</Link>
              <Link href="#contact" className="font-poppins text-gray-600   hover:border-b-2 hover:border-gray-500 px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</Link>
            </div>
            <div className='ml-5'>
              <Link href="#" onClick={openModal} className='ml-5'> <Email className='text-green-400' /> </Link>
              <Link href="#" onClick={openModal} className='ml-5'> <Phone className='text-green-400' /> </Link>
              <Link href="#" onClick={openModal} className='ml-5'> <LocationOn className='text-green-400' /> </Link>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
              <svg className="w-6 h-6 text-gray-500 hover:text-gray-900"
                fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <ContactModal isOpen={isOpen} onRequestClose={closeModal} />
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="font-poppins text-gray-600 hover:bg-blue-500  block px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</Link>
          <Link href="#about" className="font-poppins text-gray-600 hover:bg-blue-500  block px-3 py-2 rounded-md text-base font-medium transition duration-300">About</Link>
          <Link href="#gallery" className="font-poppins text-gray-600 hover:bg-blue-500  block px-3 py-2 rounded-md text-base font-medium transition duration-300">Gallery</Link>
          <Link href="#contact" className="font-poppins text-gray-600 hover:bg-blue-500  block px-3 py-2 rounded-md text-base font-medium transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
