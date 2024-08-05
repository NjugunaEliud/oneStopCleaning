// components/Navbar.js
"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex">
              <span className="font-poppins font-semibold text-gray-800 text-xl md:text-2xl lg:text-3xl">One Stop Cleaning Ltd</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="font-poppins text-gray-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Home</Link>
              <Link href="#about" className="font-poppins text-gray-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">About</Link>
              <Link href="#gallery" className="font-poppins text-gray-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Gallery</Link>
              <Link href="#contact" className="font-poppins text-gray-600 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300">Contact</Link>
              <Link href="#contact"> </Link>
  
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
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/" className="font-poppins text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Home</Link>
          <Link href="#about" className="font-poppins text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">About</Link>
          <Link href="#gallery" className="font-poppins text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Gallery</Link>
          <Link href="#contact" className="font-poppins text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;