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
  
  // Always show admin menu if route includes /admin
  const isOnAdminRoute = location.pathname.startsWith("/admin");

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

  const commonLinks = (
    <>
      <Link to="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-home"></i><span>Home</span></Link>
      <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-info-circle"></i><span>About</span></Link>
    </>
  );

  const publicLinks = (
    <>
      <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope"></i><span>Contact</span></Link>
      <Link to="/feedback" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comments"></i><span>Feedback</span></Link>
      <Link to="/user" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user"></i><span>User</span></Link>
      <Link to="/register" onClick={() => setMobileMenuOpen(false)} className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full transition flex items-center space-x-1"><i className="fas fa-user-plus"></i><span>Register</span></Link>
    </>
  );

  const adminLinks = (
    <>
      <Link to="/managecontact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope-open-text"></i><span>MngContact</span></Link>
      <Link to="/adminfeedback" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comment-dots"></i><span>MngFeedback</span></Link>
      <Link to="/adminprediction" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-microscope"></i><span>MngPredictions</span></Link>
      <Link to="/admin-dashboard" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-users"></i><span>MngRegUsers</span></Link>
    </>
  );

  const userLinks = (
    <>
      <Link to="/prediction" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-brain"></i><span>Prediction</span></Link>
      <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-envelope"></i><span>Contact</span></Link>
      <Link to="/feedback" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-comments"></i><span>Feedback</span></Link>
    </>
  );

  const beforeAdminLoginLinks = (
    <>
      <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user-shield"></i><span>Admin Login</span></Link>
      <Link to="/adminregister" onClick={() => setMobileMenuOpen(false)} className="hover:text-blue-300 flex items-center space-x-1"><i className="fas fa-user-plus"></i><span>Admin Register</span></Link>
    </>
  );

  return (
    <div className={`fixed top-0 left-0 right-0 w-full z-50 transition duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <header className={`bg-[#0B2B47] text-white flex flex-wrap items-center justify-between px-4 md:px-6 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/assets/brain9.jpg" alt="Brain Icon" className={`transition-all duration-300 ${isScrolled ? 'w-6 h-6' : 'w-10 h-10'}`} />
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className={`font-bold tracking-wide uppercase text-white whitespace-nowrap transition-all duration-300 ${isScrolled ? 'text-sm' : 'text-lg sm:text-xl'}`}
          >
            TumorDetect
          </motion.h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-5 ml-auto text-sm font-medium">
          {commonLinks}
          {isOnAdminRoute && !isAdmin && beforeAdminLoginLinks}
          {isAdmin && adminLinks}
          {isUser && userLinks}
          {!isAdmin && !isUser && !isOnAdminRoute && publicLinks}

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
                <div className="absolute right-0 mt-2 bg-white text-black border rounded shadow-lg w-52 max-w-xs z-50">
                  <div className="px-4 py-2 text-sm text-gray-600 break-words truncate">{isAdmin ? adminEmail : userEmail}</div>
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
        </nav>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B2B47] text-white px-4 py-4 space-y-4 text-sm">
          {commonLinks}
          {isOnAdminRoute && !isAdmin && beforeAdminLoginLinks}
          {isAdmin && adminLinks}
          {isUser && userLinks}
          {!isAdmin && !isUser && !isOnAdminRoute && publicLinks}

          {(isAdmin || isUser) && (
            <div className="border-t border-white pt-2">
              <div className="text-xs text-white mb-2 break-words truncate max-w-full">{isAdmin ? adminEmail : userEmail}</div>
              <button
                onClick={handleLogout}
                className="text-left w-full px-3 py-1 bg-red-600 rounded hover:bg-red-700"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
