import React from "react";
import { motion } from 'framer-motion';
import "./Navbar.css"; 
import { Link } from 'react-router-dom';// For Poppins font if not using Tailwind config

const Navbar = () => {
  return (
    <div className="bg-white text-gray-800 font-poppins">
       
     <motion.div
            className="bg-white font-quicksand"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
      {/* Banner */}
      <section
        className="relative bg-black bg-opacity-80 text-white py-16 px-6 sm:px-12 md:px-20"
        style={{ backgroundColor: "#0f2f2f" }}
      >
        <img
          src="https://storage.googleapis.com/a1aa/image/7a13c41d-f55e-41f8-dcdb-2143c16968db.jpg"
          alt="Background brain"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          width={1200}
          height={200}
          aria-hidden="true"
        />
        <div className="relative max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-2">About US</h2>
          <nav className="text-sm text-green-500 font-medium">
            Home / <span className="text-green-600">About Us</span>
          </nav>
        </div>
      </section>
</motion.div>
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
        {/* Left Side Text */}
        <motion.div
                    className="bg-white font-quicksand"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
        <div className="flex-1 max-w-xl">
          <p className="text-xs text-green-600 mb-2 flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-600 inline-block"></span>
            Introduction
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 leading-tight mb-6">
            Brain <span className="text-green-600">Tumor</span> Detection using Deep Learning | CNN
          </h1>
          <div className="text-xs text-gray-600 font-semibold mb-4">Technology Used:</div>
          <ul className="space-y-3 text-gray-700 text-sm font-medium">
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600"></i>
              HTML/CSS/JS/Bootstrap
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600"></i>
              Python Django
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600"></i>
              Sqlite Database
            </li>
            <li className="flex items-center gap-2">
              <i className="fas fa-check-circle text-green-600"></i>
              Deep Learning | CNN
            </li>
          </ul>
          <Link to="/prediction">
          <button className="mt-8 bg-green-600 text-white text-sm font-semibold px-6 py-2 rounded-md hover:bg-green-700 transition">
            Start Prediction
          </button>
          </Link>
        </div>
</motion.div>
        {/* Right Side Image */}
        <div className="flex-1 relative max-w-md md:max-w-lg">
          <motion.div
                    className="bg-white font-quicksand"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  >
          <div className="border-2 border-green-600 p-1">
            <img
              src="https://storage.googleapis.com/a1aa/image/162f2aeb-09e3-406c-4fe2-9e384a5a756a.jpg"
              alt="Illustration of a brain with icons representing detection"
              className="w-full h-auto object-cover"
              width={600}
              height={400}
            />
          </div>
          </motion.div>
        </div>
        
      </div>
    </div>
  );
};

export default Navbar;
