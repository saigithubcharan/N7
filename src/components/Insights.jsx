import React from 'react';
import './Insights.css';

const insightCards = [
  { label: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24', featured: true },
  { label: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
  { label: 'GETTING STARTED', title: 'How to transition from a traditional to a digital bank', author: 'David Grohl', date: '17/08/24' },
];

const N7Logo = () => (
  <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    {[[20,20],[50,20],[20,50],[50,50]].map(([cx,cy],i)=>(
      <g key={i}>
        <path d={`M${cx} ${cy+8} Q${cx} ${cy} ${cx+8} ${cy}`} stroke="#1a8fff" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+12} ${cy} Q${cx+20} ${cy} ${cx+20} ${cy+8}`} stroke="#1a8fff" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+20} ${cy+12} Q${cx+20} ${cy+20} ${cx+12} ${cy+20}`} stroke="#1a8fff" strokeWidth="6" strokeLinecap="round" fill="none"/>
        <path d={`M${cx+8} ${cy+20} Q${cx} ${cy+20} ${cx} ${cy+12}`} stroke="#1a8fff" strokeWidth="6" strokeLinecap="round" fill="none"/>
      </g>
    ))}
  </svg>
);

const Insights = () => (
  <section className="insights-section section-py" id="insights">
    <div className="container">
      <div className="row g-5">
        {/* Left */}
        <div className="col-lg-4">
          <h2 className="insights-heading">
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <a href="#insights" className="btn-n7-outline mt-4">INSIGHTS</a>
        </div>

        {/* Right cards */}
        <div className="col-lg-8">
          <div className="row g-4">
            {/* Featured card */}
            <div className="col-12">
              <div className="insight-card featured-card">
                <div className="row g-0 align-items-center">
                  <div className="col-5">
                    <div className="insight-img-placeholder">
                      <N7Logo />
                    </div>
                  </div>
                  <div className="col-7 ps-4">
                    <span className="insight-label">{insightCards[0].label}</span>
                    <h4 className="insight-title">{insightCards[0].title}</h4>
                    <div className="insight-meta">
                      <span>{insightCards[0].author}</span>
                      <span>{insightCards[0].date}</span>
                    </div>
                    <a href="#insights" className="btn-n7-outline-sm mt-3">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
            {/* Smaller cards */}
            {insightCards.slice(1).map((c, i) => (
              <div className="col-md-6" key={i}>
                <div className="insight-card small-card">
                  <span className="insight-label">{c.label}</span>
                  <h5 className="insight-title-sm">{c.title}</h5>
                  <div className="insight-meta">
                    <span>{c.author}</span>
                    <span>{c.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Insights;
