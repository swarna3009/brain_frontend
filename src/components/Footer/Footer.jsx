import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h3>Brain Tumor Detection</h3>
          <p>Empowering healthcare with AI for early and accurate diagnosis.</p>
        </div>

        <div className="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/prediction">Detection</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section footer-contact">
          <h4>Contact</h4>
          <p>Email: support@btdetect.ai</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: AI Health Lab, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Brain Tumor Detection. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
