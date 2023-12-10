import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-gray-900 border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img src="https://cdn-icons-png.flaticon.com/512/5465/5465816.png" className="h-8" alt="Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Studentasmentor</span>
        </div>

        {/* Search Bar */}
        <div className="relative hidden md:block mr-8cm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-4 md:hidden">
          <li>
            <Link to="/Login" className="text-gray-900 dark:text-white">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 21l-12-18h24z" />
              </svg>
            </Link>
          </li>
        </ul>

        <ul className="flex items-center space-x-4 hidden md:flex">
          <li>
            <Link to="/Home" className="text-gray-900 dark:text-white hover:text-blue-500">
              <b>Home</b>
            </Link>
          </li>
          <li>
            <Link to="/About" className="text-gray-900 dark:text-white hover:text-blue-500">
              <b>About</b>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-900 dark:text-white hover:text-blue-500">
              <b>Service</b>
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="text-gray-900 dark:text-white hover:text-blue-500">
              <b>Contact</b>
            </Link>
          </li>
          <li>
            <Link to="/Login" className="text-gray-900 dark:text-white hover:text-blue-500">
              <b>Login</b>
            </Link>
          </li>
        </ul>

        {/* Profile Button */}
        <button
          type="button"
          className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          <img className="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png" alt="user photo" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
