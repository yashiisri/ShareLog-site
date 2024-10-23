import React from 'react';
import './FooterSection.css'; // Import a CSS file for styling
import logo from '../assests/logo.png'; // Correct the path and import the logo
import { FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; // Import social media icons

function FooterSection() {
  return (
    <div className="footer-section">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
          <div className="company-info">
          <h1 className="company-name">
  <span className="share">Share</span><span className="log">Log</span>
</h1>
<p> <strong>Make Better Mistakes</strong></p>

            
            { <p className="description">
              Trading journal for Stock, Forex,<br /> Options, Futures, Futures Options, and Crypto day traders.
            </p> }
            <div className="social-icons">
              <FaTwitter className="social-icon" />
              <FaYoutube className="social-icon" />
              <FaInstagram className="social-icon" />
            </div>
          </div>
        </div>
        <div className="nav-links">
          <div className="nav-column">
            <h3>About</h3>
            <ul>
              <li><a href="#about-us">About Us</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#sign-up">Sign Up</a></li>
              <li><a href="#login">Login</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#software-updates">Software Updates</a></li>
              <li><a href="#risk-disclosure">Risk Disclosure</a></li>
              <li><a href="#privacy-policy">Privacy Policy</a></li>
              <li><a href="#billing-cancellation">Billing, Cancellation, and Refund Policy</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>Solutions</h3>
            <ul>
              <li><a href="#spreadsheet-trading">Spreadsheet Trading Journal</a></li>
              <li><a href="#option-trading">Option Trading Journal</a></li>
              <li><a href="#stock-trading">Stock Trading Journal</a></li>
              <li><a href="#crypto-trading">Crypto Trading Journal</a></li>
              <li><a href="#referral-program">Referral Program</a></li>
            </ul>
          </div>
          <div className="nav-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#supported-brokers">Supported Brokers / Exchanges / Applications</a></li>
              <li><a href="#journal-tutorials">Journal Tutorials</a></li>
              <li><a href="#replay-tutorials">Replay Tutorials</a></li>
              <li><a href="#help-center">Help Center</a></li>
              <li><a href="#how-to">How-To</a></li>
              <li><a href="#contact-us">Contact Us</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
