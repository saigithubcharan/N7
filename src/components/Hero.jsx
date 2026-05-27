import React from 'react';
import './Hero.css';
import ladyImage from "../assets/lady.jpg"

const Hero = () => {
  return (
    <section className="hero-section section-py" id="home">
      {/* Background glow blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>

      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left Content */}
          <div className="col-lg-6 col-xl-5">
            <div className="hero-content animate-fade-left">
              <h1 className="hero-title">
                The new foundation<br />of modern banking
              </h1>
              <p className="hero-subtitle">
                We drive innovation and growth, provide seamless customer
                experience and operational excellence
              </p>
              <div className="hero-buttons">
                <a href="#demo" className="btn-n7-primary">REQUEST DEMO</a>
                <a href="#contact" className="btn-n7-outline">CONTACT US</a>
              </div>
            </div>
          </div>

          {/* Right: Dashboard UI */}
          <div className="col-lg-6 col-xl-7">
            <div className="hero-visual animate-fade-right">
              {/* Main image placeholder */}
              <div className="hero-main-img">
              {/* <div className="glow"></div> */}
              {/* <div className="glow"></div> */}
                <img
                  src={ladyImage}
                  alt="Banking user"
                  className="hero-person-img"
                />
              </div>
              {/* Floating dashboard card */}
              <div className="hero-card hero-card-balance">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="hero-avatar"></div>
                  <div>
                    <div className="hero-card-name">Toni Kross</div>
                    <div className="hero-card-sub">Good Morning</div>
                  </div>
                  <i className="bi bi-bell ms-auto hero-card-bell"></i>
                </div>
                <div className="hero-card-label">Total balance</div>
                <div className="hero-card-amount">$42,295.00 USD</div>
                <div className="hero-card-actions">
                  <div className="hero-action-item">
                    <i className="bi bi-arrow-up-right-square"></i>
                    <span>Fund Transfer</span>
                  </div>
                  <div className="hero-action-item">
                    <i className="bi bi-plus-circle"></i>
                    <span>Add Money</span>
                  </div>
                  <div className="hero-action-item">
                    <i className="bi bi-grid-3x3-gap"></i>
                    <span>More</span>
                  </div>
                </div>
              </div>
              {/* Floating activity card */}
              <div className="hero-card hero-card-activity">
                <div className="hero-activity-title">Recent activity</div>
                <div className="hero-activity-tabs">
                  <span className="tab">This Day</span>
                  <span className="tab active">This Week</span>
                  <span className="tab">This Month</span>
                  <span className="tab">6 Month</span>
                </div>
                <div className="hero-activity-row">
                  <div className="activity-icon">
                    <i className="bi bi-arrow-up-right"></i>
                  </div>
                  <div className="activity-info">
                    <span className="activity-name">To Jin · Work</span>
                    <span className="activity-date">12 Jun 2022</span>
                  </div>
                  <span className="activity-amount negative">-$59</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="trusted-section">
        <div className="container">
          <p className="trusted-label">Trusted By:</p>
          <div className="trusted-logos">
            {['SHELLS', 'SmartFinder', 'Zoomerr', 'ArtVenue', 'kontrastr', 'WAVESMARATHON'].map(name => (
              <div key={name} className="trusted-logo-item">{name}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
