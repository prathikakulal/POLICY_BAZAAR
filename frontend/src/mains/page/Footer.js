import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="apollo-footer">
      <div className="footer-top">
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Buy Medicines</a></li>
            <li><a href="#">Book Lab Test</a></li>
            <li><a href="#">Find Doctors</a></li>
            <li><a href="#">Health Insurance</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a href="#"><span>📘</span></a>
            <a href="#"><span>🐦</span></a>
            <a href="#"><span>📸</span></a>
            <a href="#"><span>▶️</span></a>
          </div>
        </div>
        <div className="footer-section">
          <h4>Download App</h4>
          <div className="app-badges">
            <img src="/assets/google-play-badge.png" alt="Google Play" />
            <img src="/assets/app-store-badge.png" alt="App Store" />
          </div>
        </div>
      </div>

      <div className="footer-middle">
        <img src="/assets/payment-methods.png" alt="Payments" className="payment-methods" />
        <img src="/assets/secure-seal.png" alt="Secure" className="secure-badge" />
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Apollo 24|7. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
