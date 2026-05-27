import React, { useState } from 'react';
import './CaseStudies.css';

const N7Logo = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {[[20,20],[90,20],[20,90],[90,90]].map(([cx,cy],i)=>(
      <g key={i}>
        <path d={`M${cx} ${cy+16} Q${cx} ${cy} ${cx+16} ${cy}`} stroke="#1a8fff" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+24} ${cy} Q${cx+40} ${cy} ${cx+40} ${cy+16}`} stroke="#1a8fff" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+40} ${cy+24} Q${cx+40} ${cy+40} ${cx+24} ${cy+40}`} stroke="#1a8fff" strokeWidth="12" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+16} ${cy+40} Q${cx} ${cy+40} ${cx} ${cy+24}`} stroke="#1a8fff" strokeWidth="12" strokeLinecap="round" fill="none"/>
      </g>
    ))}
  </svg>
);

const cases = [
  { label: 'GETTING STARTED', title: 'How we help brand reach out to more people', brand: 'Zoomerr' },
  { label: 'GETTING STARTED', title: 'Digital transformation for modern financial institutions', brand: 'SmartFinder' },
  { label: 'GETTING STARTED', title: 'Building the future of core banking solutions', brand: 'ArtVenue' },
];

const CaseStudies = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="casestudies-section section-py" id="case-studies">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <h2 className="casestudies-title">Our Case Studies</h2>
          <a href="#case-studies" className="learn-more-link">READ ALL INSIGHTS <i className="bi bi-arrow-right"></i></a>
        </div>

        <div className="case-slide">
          <div className="row align-items-center g-4">
            <div className="col-md-5">
              <div className="case-img">
                <N7Logo />
              </div>
            </div>
            <div className="col-md-7 ps-md-5">
              <span className="case-label">{cases[active].label}</span>
              <h3 className="case-title">{cases[active].title}</h3>
              <div className="d-flex align-items-center gap-2 mt-3 mb-4">
                <div className="brand-icon"></div>
                <span className="brand-name">{cases[active].brand}</span>
              </div>
              <a href="#case-studies" className="btn-n7-outline w-100">READ MORE</a>
            </div>
          </div>
        </div>

        {/* Slider controls */}
        <div className="slider-controls">
          <button className="slider-btn" onClick={() => setActive((active - 1 + cases.length) % cases.length)}>
            <i className="bi bi-arrow-left"></i>
          </button>
          <div className="slider-dots">
            {cases.map((_, i) => (
              <button key={i} className={`dot ${i === active ? 'active' : ''}`} onClick={() => setActive(i)}></button>
            ))}
          </div>
          <button className="slider-btn" onClick={() => setActive((active + 1) % cases.length)}>
            <i className="bi bi-arrow-right"></i>
          </button>
          <a href="#case-studies" className="ms-auto learn-more-link">VIEW ALL <i className="bi bi-arrow-right"></i></a>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
