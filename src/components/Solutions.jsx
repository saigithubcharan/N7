import React from 'react';
import './Solutions.css';

const solutions = [
  {
    icon: 'bi-hurricane',
    title: 'Core Banking CB7',
    desc: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
  },
  {
    icon: 'bi-symmetry-horizontal',
    title: 'Digital Banking N7',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
  {
    icon: 'bi-intersect',
    title: 'Open Banking',
    desc: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
  },
  {
    icon: 'bi-symmetry-vertical',
    title: 'Loan Origination System',
    tag: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
  {
    icon: 'bi-shuffle',
    title: 'Loan Management System',
    tag: 'NBFC',
    desc: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.',
  },
];

const Solutions = () => {
  return (
    <section className="solutions-section section-py" id="solutions">
      <div className="container">
        <div className="row g-5 align-items-start">
          {/* Left heading */}
          <div className="col-lg-4">
            <div className="solutions-left">
              <h2 className="solutions-title">
                All of our solutions are tailor-made to your needs
              </h2>
              <a href="#demo" className="btn-n7-outline mt-4">REQUEST DEMO</a>
            </div>
          </div>

          {/* Right grid */}
          <div className="col-lg-8">
            <div className="row g-4">
              {solutions.map((s, i) => (
                <div className="col-md-6" key={i}>
                  <div className="solution-card">
                    <div className="solution-icon-row">
                      <i className={`bi ${s.icon} solution-icon`}></i>
                      {s.tag && <span className="solution-tag">{s.tag}</span>}
                    </div>
                    <h4 className="solution-title">{s.title}</h4>
                    <p className="solution-desc">{s.desc}</p>
                    <button className="learn-more-link">
                      LEARN MORE <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
