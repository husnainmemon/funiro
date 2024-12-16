import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Logo Section */}
      <div className="flex justify-between items-center space-x-2">
        <div className="text-gold text-2xl font-bold" ><img src="images/logo-1.png" alt="" /></div>
        <span className="text-3xl text font-bold text-black">Furniro</span>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-700">
        <li className="hover:text-gray-900 cursor-pointer">Home</li>
        <li className="hover:text-gray-900 cursor-pointer"><Link href="/shop">Shop</Link></li>
        <li className="hover:text-gray-900 cursor-pointer">Blog</li>
        <li className="hover:text-gray-900 cursor-pointer">Contact</li>
      </ul>

      {/* Icons Section */}
      <div className="flex items-center space-x-6 text-gray-700">
        <button className="hover:text-gray-900">
          <svg xmlns="images/imageoutline.png" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 20.364a1.5 1.5 0 010-2.121L20.364 3.121a1.5 1.5 0 112.121 2.121L7.243 20.364a1.5 1.5 0 01-2.122 0z" />
          </svg>
        </button>

        <button className="hover:text-gray-900">
          <svg xmlns="images/image" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9.75h.008v.008h-.008V9.75zm-.008 4.25h.008v.008h-.008v-.008zM2.25 21h19.5m-9.75-4.25a4.5 4.5 0 100-9 4.5 4.5 0 000 9z" />
          </svg>
        </button>

        <button className="hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9.75a6.75 6.75 0 11-13.5 0 6.75 6.75 0 0113.5 0z" />
          </svg>
        </button>

        <button className="hover:text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h3m12 0h3m-6 18H9m-6-6h3m12 0h3M9 3v18m6-18v18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default Navbar