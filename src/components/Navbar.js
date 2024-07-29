import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../Context/Authcontext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="ZD_Corner Logo" />
          <span className="self-center md:text-2xl sm:text-lg text-sm font-semibold whitespace-nowrap text-white">ZD_Corner</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm sm:px-4 sm:py-2 px-3 py-1.5 text-center bg-blue-600 hover:bg-blue-700">
            Get started
          </button>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`} id="navbar-cta">
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
            <li>
              <Link to="/" onClick={closeMenu} className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent" aria-current="page">
                Home
              </Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to="/orders" onClick={closeMenu} className="block py-2 px-3 md:p-0 rounded md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700">
                  My Orders
                </Link>
              </li>
            )}
            {!isAuthenticated ? (
              <>
                <li>
                  <Link to="/login" onClick={closeMenu} className="block py-2 px-3 md:px-3 md:py-1.5 rounded hover:bg-blue-500 text-white bg-blue-700 border-gray-700">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/signup" onClick={closeMenu} className="block py-2 px-3 md:px-3 md:py-1.5 rounded hover:bg-blue-500 text-white bg-blue-700 border-gray-700">
                    Signup
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() => {
                    logout();
                    closeMenu();
                  }}
                  className="block py-2 px-3 md:px-3 md:py-1.5 rounded hover:bg-blue-500 text-white bg-blue-700 border-gray-700"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
