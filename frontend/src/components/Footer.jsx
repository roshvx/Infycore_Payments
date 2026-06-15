import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container footer-grid">
        {/* Brand Column */}
        <div className="footer-brand">
          <h3>
            <i className="fas fa-shield-halved text-orange"></i>
            <span className="italic-black">Infycore Payments</span>
          </h3>
          <p>
            Building secure payment orchestrations, high-performance checkout APIs, and reliable settlement structures tailored for modern digital business ecosystems.
          </p>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="footer-title">Products</h4>
          <ul className="footer-links">
            <li><Link to="/products">Payment Gateway</Link></li>
            <li><Link to="/products">UPI & QR</Link></li>
            <li><Link to="/products">Payout Links</Link></li>
            <li><Link to="/products">Payin Links</Link></li>
          </ul>
        </div>

        {/* Legal Column */}
        <div>
          <h4 className="footer-title">Legal</h4>
          <ul className="footer-links">
            <li><Link to="/#">Privacy Policy</Link></li>
            <li><Link to="/#">Terms of Use</Link></li>
            <li><Link to="/#">Compliance</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        © 2026 Infycore Payments Pvt. lmt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
