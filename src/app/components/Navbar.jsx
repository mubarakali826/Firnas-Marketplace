"use client"; // Client Component
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";

import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="mt-5  w-[100%] h-[66px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-around h-16">
          <div className="flex-shrink-0 flex items-center">
            {/* Logo */}
            <img
              className="h-[85px] w-[85px]"
              src="\assets\images\logo.png"
              alt="Logo"
            />
          </div>
          <div className="hidden md:flex space-x-8 py-6">
            {/* Navigation Links */}
            <a
              href="#"
              className="text-[#0B5D51] font-bold hover:text-[#0a483f]"
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#0B5D51] font-bold hover:text-[#0a483f]"
            >
              Products
            </a>
            <a
              href="#"
              className="text-[#0B5D51] font-bold hover:text-[#0a483f]"
            >
              Services
            </a>
            <a
              href="#"
              className="text-[#0B5D51] font-bold hover:text-[#0a483f]"
            >
              Smart RFQ
            </a>
            <a
              href="#"
              className="text-[#0B5D51] font-bold hover:text-[#0a483f]"
            >
              Smart Contract
            </a>
          </div>
          <div className="flex items-center  space-x-4">
            <div className="flex gap-10">
              <button className="bg-[#0B5D51]  text-white w-[159.82px] h-[49px] rounded-[6px]  hover:bg-[#0a483f]">
                Get Started
              </button>
              {/* Search and Profile Icons */}
              <div className="flex gap-6">
              <button className="text-gray-800 hover:text-gray-600">
                  <CiSearch size={30} className="text-[#0B5D51]"/>{" "}
              </button>
              <button className="text-gray-800 hover:text-gray-600">
                <FaUserCircle size={25} className="text-[#0B5D51]"/>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    // <nav className="bg-gray-800 p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="text-white text-lg font-bold">
    //       <Link href="/">MyApp</Link>
    //     </div>
    //     <ul className="flex space-x-4">
    //       <li>
    //         <Link href="/auth/signup" className="text-gray-300 hover:text-white">
    //           Sign Up
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/auth/login" className="text-gray-300 hover:text-white">
    //           Login
    //         </Link>
    //       </li>
    //       {/* Add more links */}
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default Navbar;
