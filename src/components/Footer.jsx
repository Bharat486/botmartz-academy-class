import React from 'react';
import './Footer.css';

export default function Footer({ onEnrollClick }) {
  return (
    <footer className="site-footer">
      {/* Pre-footer Call to Action Bar */}
      <div className="footer-cta-bar">
        <div className="container footer-cta-inner">
          <div className="cta-text">
            <h2>Ready to Launch Your Tech Career?</h2>
            <p>Join 50,000+ students already transforming their careers. Enroll in the next batch today.</p>
          </div>
          <div className="cta-actions">
            <button className="btn btn-primary" onClick={onEnrollClick}>
              Start Learning Today
            </button>
            <a href="#all-courses" className="btn btn-outline">
              View All Courses
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <a href="#" className="footer-logo-link">
              <img src="/logo.png" alt="BOTMARTZ AI Solutions" className="footer-logo" />
            </a>
            <p className="footer-tagline">
              The next-generation platform for tech education. Live classes, expert mentors, verified certificates.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="LinkedIn" className="social-icon">in</a>
              <a href="#" aria-label="YouTube" className="social-icon">yt</a>
              <a href="#" aria-label="GitHub" className="social-icon">gh</a>
              <a href="#" aria-label="Discord" className="social-icon">dc</a>
              <a href="#" aria-label="X / Twitter" className="social-icon">𝕏</a>
            </div>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4 className="footer-heading">COURSES</h4>
            <ul className="footer-nav">
              <li><a href="#dsa-cohort">Full Stack Development</a></li>
              <li><a href="#genai">AI & Machine Learning</a></li>
              <li><a href="#all-courses">DevOps & Cloud</a></li>
              <li><a href="#all-courses">Cybersecurity</a></li>
              <li><a href="#all-courses">UI/UX Engineering</a></li>
              <li><a href="#all-courses">Blockchain & Web3</a></li>
            </ul>
          </div>

          {/* Platform */}
          <div className="footer-col">
            <h4 className="footer-heading">PLATFORM</h4>
            <ul className="footer-nav">
              <li><a href="#learning-hub">Live Classes</a></li>
              <li><a href="#learning-hub">Student Dashboard</a></li>
              <li><a href="#mentors">Mentor Connect</a></li>
              <li><a href="#platform-features">Recordings</a></li>
              <li><a href="#platform-features">Certificates</a></li>
              <li><a href="#pricing">Scholarships</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <h4 className="footer-heading">COMPANY</h4>
            <ul className="footer-nav">
              <li><a href="#trust">About Us</a></li>
              <li><a href="#corporate-training">Careers</a></li>
              <li><a href="#testimonials">Student Reviews</a></li>
              <li><a href="#contact">Help & Contact</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 BOTMARTZ AI Solutions Pvt Ltd. All rights reserved.
          </p>
          <div className="footer-badge">
            <span>Built for the next generation of engineers 🚀</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
