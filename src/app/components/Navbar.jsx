"use client"; // Client Component

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link href="/">MyApp</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/auth/signup" className="text-gray-300 hover:text-white">
              Sign Up
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="text-gray-300 hover:text-white">
              Login
            </Link>
          </li>
          {/* Add more links */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
