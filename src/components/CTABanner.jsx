import React from 'react';
import './CTABanner.css';

const CTABanner = () => (
  <section className="cta-section-wrapper section-py">
    <div className="container">
      <div className="cta-banner">
        {/* BG decorative N7 text */}
        <div className="cta-bg-text" aria-hidden="true">N7</div>
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <h2 className="cta-title">
              Take the full advantage of<br />going paper-less now.
            </h2>
            <p className="cta-subtitle">
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
    </div>
  </section>
);

export default CTABanner;
