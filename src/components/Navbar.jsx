import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/volleyvision_logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMobileMenu}>
          <img src={logo} alt="VolleyVision" className="navbar-logo-img" />
          <span className="navbar-brand-text">VolleyVision</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="navbar-nav desktop-nav">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${isActiveLink('/') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">Home</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`nav-link ${isActiveLink('/about') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">About</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/predict" 
              className={`nav-link ${isActiveLink('/predict') ? 'nav-link-active' : ''}`}
            >
              <span className="nav-link-text">Predict</span>
              <span className="nav-link-indicator"></span>
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'mobile-menu-btn-active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'mobile-nav-open' : ''}`}>
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link 
                to="/" 
                className={`mobile-nav-link ${isActiveLink('/') ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                to="/about" 
                className={`mobile-nav-link ${isActiveLink('/about') ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link 
                to="/predict" 
                className={`mobile-nav-link ${isActiveLink('/predict') ? 'mobile-nav-link-active' : ''}`}
                onClick={closeMobileMenu}
              >
                Predict
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;