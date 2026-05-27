import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`n7-navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Logo */}
          <a href="#home" className="navbar-logo">N7</a>

          {/* Desktop Nav */}
          <div className="navbar-links d-none d-lg-flex">
            <div className="nav-dropdown">
              <button className="nav-link-btn">
                SOLUTIONS <i className="bi bi-chevron-down ms-1"></i>
              </button>
              <div className="dropdown-menu-custom">
                <a href="#solutions">Core Banking CB7</a>
                <a href="#solutions">Digital Banking N7</a>
                <a href="#solutions">Open Banking</a>
                <a href="#solutions">Loan Origination System</a>
                <a href="#solutions">Loan Management System</a>
              </div>
            </div>
            <div className="nav-dropdown">
              <button className="nav-link-btn">
                RESOURCES <i className="bi bi-chevron-down ms-1"></i>
              </button>
              <div className="dropdown-menu-custom">
                <a href="#insights">Insights</a>
                <a href="#case-studies">Case Studies</a>
              </div>
            </div>
            <button className="nav-link-btn">ABOUT US</button>
          </div>

          {/* CTA */}
          <div className="d-none d-lg-flex">
            <a href="#demo" className="btn-n7-outline nav-cta">REQUEST DEMO</a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="hamburger d-lg-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
            <span className={menuOpen ? 'open' : ''}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
            <a href="#insights" onClick={() => setMenuOpen(false)}>Resources</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#demo" className="btn-n7-primary mt-3" onClick={() => setMenuOpen(false)}>
              REQUEST DEMO
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
