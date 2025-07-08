import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const isUser = !isAdmin && localStorage.getItem("isUser") === "true";

  const userEmail = localStorage.getItem("userEmail") || "";
  const adminEmail = localStorage.getItem("adminEmail") || "";
  const navigate = useNavigate();
  const location = useLocation();

  const isOnAdminRoute = location.pathname.startsWith("/admin") && !isAdmin;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-50 transition duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <header className={`bg-[#0B2B47] text-white flex flex-wrap items-center justify-between px-4 md:px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        
        {/* Logo & Title */}
        <div className="flex items-center space-x-2">
          <img
            src="/assets/brain9.jpg"
            alt="Brain Icon"
            className={`transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-10 h-10'}`}
          />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-bold tracking-wide uppercase text-white whitespace-nowrap transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg sm:text-xl'}`}
          >
            TumorDetect
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5 ml-auto text-sm font-medium">
          
          <Link to="/" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-home"></i><span>Home</span></Link>
          <Link to="/about" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-info-circle"></i><span>About</span></Link>

          {/* Admin Route (before admin login) */}
          {isOnAdminRoute && (
            <>
              <Link to="/admin" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user-shield"></i><span>Admin Login</span></Link>
              <Link to="/adminregister" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user-plus"></i><span>Admin Register</span></Link>
            </>
          )}

          {/* Admin Links after login */}
          {isAdmin && !isOnAdminRoute && (
  <>
    <Link to="/managecontact" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope-open-text"></i><span>MngContact</span></Link>
    <Link to="/adminfeedback" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comment-dots"></i><span>MngFeedback</span></Link>
    <Link to="/adminprediction" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-microscope"></i><span>MngPredictions</span></Link>
    <Link to="/admin-dashboard" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-users"></i><span>MngRegUsers</span></Link>
  </>
)}


          {/* User Links */}
          {isUser && (
            <>
              <Link to="/prediction" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-brain"></i><span>Prediction</span></Link>
              <Link to="/contact" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope"></i><span>Contact</span></Link>
              <Link to="/feedback" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comments"></i><span>Feedback</span></Link>
            </>
          )}

          {/* Dropdown for logged in users */}
          {(isAdmin || isUser) && (
            <div className="relative">
              <div
                className="flex items-center space-x-1 cursor-pointer hover:text-blue-300"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <img
                  src="https://storage.googleapis.com/a1aa/image/d829813f-f985-4df7-022b-bfc6684752b3.jpg"
                  alt="Avatar"
                  className="w-6 h-6 rounded-full"
                />
                <span className="text-xs">{isAdmin ? "Admin" : "User"}</span>
                <i className="fas fa-caret-down text-xs"></i>
              </div>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black border rounded shadow-lg w-44 z-50">
                  <div className="px-4 py-2 text-sm text-gray-600">
                    {isAdmin ? adminEmail : userEmail}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Public Links */}
          {!isAdmin && !isUser && !isOnAdminRoute && (
            <>
              <Link to="/contact" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope"></i><span>Contact</span></Link>
              <Link to="/feedback" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comments"></i><span>Feedback</span></Link>
              <Link to="/user" className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user"></i><span>User</span></Link>
              <Link to="/register" className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition flex items-center space-x-1"><i className="fas fa-user-plus"></i><span>Register</span></Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* You can similarly apply isOnAdminRoute logic inside mobile menu if needed */}
    </div>
  );
};

export default Nav;
