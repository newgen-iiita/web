import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-black p-4 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          MyApp
        </div>
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            Home
          </li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            About
          </li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            Services
          </li>
          <li className="hover:text-blue-300 transition-colors duration-300 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
