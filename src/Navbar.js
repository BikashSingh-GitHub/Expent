import React from 'react';
import { FaUserCircle, FaBell } from 'react-icons/fa';
import logo from './logo.png';

function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-900 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src={logo} alt="Logo" className="w-auto h-10 mr-2" />
      </div>
      <ul className="flex justify-center flex-grow">
        <li className="mr-6">
          <a href="/" className="text-white hover:text-gray-400">Home</a>
        </li>
        <li className="mr-6">
          <a href="/dashboard" className="text-white hover:text-gray-400">Dashboard</a>
        </li>
        <li className="mr-6">
          <a href="/vendors" className="text-white hover:text-gray-400">Vendors</a>
        </li>
        <li className="mr-6">
          <a href="/project" className="text-white hover:text-gray-400">Project</a>
        </li>
      </ul>
      <div className="flex items-center">
        <div className="flex items-center">
          <FaBell className="text-white mr-4" />
          <div className="relative w-8 h-8 mr-4">
            <FaUserCircle className="text-white absolute top-0 left-0 w-full h-full" />
            <div className="bg-white opacity-50 rounded-full w-full h-full absolute top-0 left-0"></div>
          </div>
        </div>
        <div className="text-white mr-4">
          <p className="font-semibold">Smith Jones </p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
