import React from "react";
import { motion } from 'framer-motion';
import "./Home.css"; // Optional if you're importing fonts separately
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white text-gray-900 font-quicksand">
      {/* Top info bar */}
      <motion.div
            className="bg-white font-quicksand"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
      <div className="flex justify-between items-center text-xs text-gray-500 px-4 py-1 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <i className="fas fa-map-marker-alt"></i>
          <span>123 ABC Street, XYZ ***</span>
          <span className="hidden sm:inline">|</span>
          <span className="hidden sm:inline">Mon - Fri: 09.00 AM - 09.00 PM</span>
        </div>
        <div className="flex items-center space-x-4 text-right">
          <div className="hidden sm:flex items-center space-x-1">
            <i className="fas fa-phone-alt"></i>
            <span>+91 12345*****</span>
          </div>
          <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-gray-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
       
      </div>

     

      {/* Main Content */}
       <main className="flex flex-col md:flex-row max-w-7xl mx-auto mt-6 px-4 md:px-0">
       
        <section className="w-full md:w-1/2 bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white px-4 py-8 sm:px-6 sm:py-10 md:p-14 flex flex-col justify-center space-y-6 sm:space-y-8 rounded-lg shadow-2xl mx-auto">
  <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight tracking-wide drop-shadow-lg text-center md:text-left">
    Brain Tumor Detection
  </h1>

  <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start items-center sm:space-x-5 space-y-3 sm:space-y-0">
    <Link to="/prediction" className="w-full sm:w-auto">
      <button
        type="button"
        className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-lg transition transform hover:-translate-y-0.5"
      >
        Start Prediction
      </button>
    </Link>
    <button
      type="button"
      className="w-full sm:w-auto border border-white text-white text-sm font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-white hover:text-black transition transform hover:-translate-y-0.5"
    >
      View History
    </button>
  </div>

  <p className="text-sm sm:text-base leading-relaxed max-w-md text-gray-300 drop-shadow-md text-center md:text-left mx-auto md:mx-0">
    Upload your brain scan images and let the system detect the presence of a tumor with precision.
    <br className="hidden sm:block" />
    Review your past predictions easily.
  </p>
</section>

        <section className="md:w-1/2">
          <img
            src="https://storage.googleapis.com/a1aa/image/0ebc9bc3-43d7-4042-4226-8db0a00836ea.jpg"
            alt="Doctor in white coat holding a glowing brain hologram in hand with dark background"
            className="w-full h-auto object-cover"
          />
        </section>
      
      </main>
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

export default Home;
