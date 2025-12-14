import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const navigate = useNavigate();

  const handleRoleClick = (role) => {
    setShowLoginDropdown(false);
    setIsMenuOpen(false); // Close mobile menu if open

    if (role === "admin") navigate("/admin");
    else if (role === "donor") navigate("/donor");
    else navigate("/receiver");
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-none px-16 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-3">
          <div className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-full text-white font-bold text-xl">
            BD
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold text-red-700">
              Blood<span className="text-gray-800">Donation</span>
            </span>
            <span className="text-xs text-gray-500 -mt-1">Save Lives Together</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-14 text-lg font-medium items-center">
          <Link to="/" className="hover:text-red-600 transition">Home</Link>
          <Link to="/about" className="hover:text-red-600 transition">About</Link>
          <Link to="/donate" className="hover:text-red-600 transition">Donate</Link>
          <Link to="/volunteer" className="hover:text-red-600 transition">Volunteer</Link>
          <Link to="/contact" className="hover:text-red-600 transition">Contact</Link>

          {/* Login Dropdown for Desktop */}
          <div className="relative">
            <button
              onClick={() => setShowLoginDropdown(!showLoginDropdown)}
              className="hover:text-red-600 transition"
            >
              Login ▼
            </button>
            {showLoginDropdown && (
              <ul className="absolute right-0 mt-2 bg-white shadow-lg border rounded w-32 z-10 text-black">
                <li
                  onClick={() => handleRoleClick("admin")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Admin
                </li>
                <li
                  onClick={() => handleRoleClick("donor")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Donor
                </li>
                <li
                  onClick={() => handleRoleClick("receiver")}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Receiver
                </li>
              </ul>
            )}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-600 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <nav className="flex flex-col items-center space-y-4 py-4 text-lg font-medium">
            <Link to="/" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Home</Link>
            <Link to="/about" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">About</Link>
            <Link to="/donate" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Donate</Link>
            <Link to="/volunteer" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Volunteer</Link>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="hover:text-red-600">Contact</Link>

            {/* Login Dropdown for Mobile */}
            <div className="relative w-full text-center">
              <button
                onClick={() => setShowLoginDropdown(!showLoginDropdown)}
                className="hover:text-red-600 w-full"
              >
                Login ▼
              </button>
              {showLoginDropdown && (
                <ul className="absolute mt-2 bg-white shadow-lg border rounded w-full z-10 text-black">
                  <li
                    onClick={() => handleRoleClick("admin")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Admin
                  </li>
                  <li
                    onClick={() => handleRoleClick("donor")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Donor
                  </li>
                  <li
                    onClick={() => handleRoleClick("receiver")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    Receiver
                  </li>
                </ul>
              )}
            </div>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
