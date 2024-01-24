// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-column">
            <h2> HEALTHY🩺FIT</h2>
            <ul>
              <li><a href="#">Product</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Company</h2>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Services</h2>
            <ul>
              <li><a href="#">Elbow Pain</a></li>
              <li><a href="#">Wrist Pain</a></li>
              <li><a href="#">Nerve Pain</a></li>
              <li><a href="#">Hand Pain</a></li>
              <li><a href="#">Pelvic Pain</a></li>
              <li><a href="#">All Services</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h2>Conditions</h2>
            <ul>
              <li><a href="#">Spondylosis</a></li>
              <li><a href="#">ACL Tear</a></li>
              <li><a href="#">Achilles Tendonitis</a></li>
              <li><a href="#">Plantar Fasciitis</a></li>
              <li><a href="#">All Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HEALTHY🩺FIT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
