import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer className="footer-section">
    <div className="container">
      {/* Top: CTA */}
      <div className="footer-cta">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="footer-cta-title">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="footer-cta-sub">
              CB7 helps your financial institution improve the client experience,
              automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="col-lg-6 d-flex justify-content-lg-end gap-3 flex-wrap">
            <a href="#contact" className="btn-n7-outline">CONTACT US</a>
            <a href="#demo" className="btn-n7-primary">REQUEST DEMO</a>
          </div>
        </div>
      </div>

      <hr className="divider-glow my-0" />

      {/* Main Footer */}
      <div className="footer-main">
        <div className="row g-5">
          {/* Logo */}
          <div className="col-lg-3">
            <div className="footer-logo">N7</div>
          </div>

          {/* Addresses */}
          <div className="col-lg-9">
            <div className="row g-4">
              {[
                { city: 'London', addr: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.' },
                { city: 'Dubai', addr: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates' },
                { city: 'London', addr: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India' },
              ].map((loc, i) => (
                <div className="col-md-4" key={i}>
                  <div className="footer-city">{loc.city}</div>
                  <p className="footer-addr">{loc.addr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <hr className="divider-glow my-5" />

        {/* Links */}
        <div className="row g-4">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="footer-col-title">Solutions</div>
                {['Core Banking CB7','Digital Banking N7','Open Banking','Loan Origination System','Loan Management System','Digital Transformation'].map(l=>(
                  <a key={l} href="#solutions" className="footer-link">
                    {l} <i className="bi bi-arrow-right"></i>
                  </a>
                ))}
              </div>
              <div className="col-md-4">
                <div className="footer-col-title">N7 Banking</div>
                {['About Us','Solutions','Contact','Company','Careers','Insights','Core Team','Brand Center'].map(l=>(
                  <a key={l} href="#" className="footer-link">
                    {l} <i className="bi bi-arrow-right"></i>
                  </a>
                ))}
              </div>
              <div className="col-md-4">
                <div className="footer-col-title">Our Socials</div>
                {['LinkedIn','X'].map(l=>(
                  <a key={l} href="#" className="footer-link">
                    {l} <i className="bi bi-arrow-right"></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]</p>
      </div>
    </div>
  </footer>
);

export default Footer;
