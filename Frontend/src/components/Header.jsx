import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/Authcontext.jsx";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const navigate = useNavigate();
  const { user, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setShowUserDropdown(false);
    setIsMenuOpen(false);
    navigate("/");
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

          {/* Conditional Rendering based on Authentication */}
          {isAuthenticated && user ? (
            // Authenticated User - Show username and logout
            <div className="relative">
              <button
                onClick={() => setShowUserDropdown(!showUserDropdown)}
                className="flex items-center space-x-2 hover:text-red-600 transition"
              >
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {user.username?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                </div>
                <span>{user.username || user.email}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* User Dropdown */}
              {showUserDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg border rounded-lg z-10">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm font-semibold text-gray-700">{user.username}</p>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <p className="text-xs text-red-600 font-medium mt-1">
                      {user.userType || user.user_type}
                    </p>
                  </div>
                  <Link
                    to={`/${user.userType?.toLowerCase() || user.user_type?.toLowerCase()}/dashboard`}
                    onClick={() => setShowUserDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/profile"
                    onClick={() => setShowUserDropdown(false)}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600 font-semibold"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // Not Authenticated - Show Login and Signup buttons
            <>
              <Link 
                to="/login" 
                className="px-5 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link 
                to="/register" 
                className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                Sign Up
              </Link>
            </>
          )}
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

            {/* Mobile - Conditional Rendering */}
            {isAuthenticated && user ? (
              // Authenticated User - Mobile
              <>
                <div className="border-t pt-4 w-full text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.username?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-700">{user.username}</p>
                      <p className="text-xs text-red-600">{user.userType || user.user_type}</p>
                    </div>
                  </div>
                </div>
                <Link
                  to={`/${user.userType?.toLowerCase() || user.user_type?.toLowerCase()}/dashboard`}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition w-40 text-center"
                >
                  Dashboard
                </Link>
                <Link
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-2 border-2 border-gray-400 text-gray-700 rounded-lg hover:bg-gray-100 transition w-40 text-center"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-8 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-40"
                >
                  Logout
                </button>
              </>
            ) : (
              // Not Authenticated - Mobile
              <>
                <Link 
                  to="/login" 
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-2 border-2 border-red-600 text-red-600 rounded-lg hover:bg-red-600 hover:text-white transition w-40 text-center"
                >
                  Login
                </Link>
                <Link 
                  to="/register" 
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition w-40 text-center"
                >
                  Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;