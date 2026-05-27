import React from 'react';
import './CloudBanking.css';

const CloudBanking = () => {
  return (
    <section className="cloud-section section-py">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left */}
          <div className="col-lg-5">
            <h2 className="cloud-title">
              A complete cloud-based core banking.
            </h2>
            <p className="cloud-subtitle">
              Faster time to market with our cloud-based core banking services
            </p>
            <div className="d-flex flex-column align-items-start gap-3 mt-4">
              <a href="#demo" className="btn-n7-primary">REQUEST DEMO</a>
              <button className="learn-more-link">LEARN MORE <i className="bi bi-arrow-right"></i></button>
            </div>
          </div>

          {/* Right: AML Dashboard */}
          <div className="col-lg-7">
            <div className="aml-dashboard dashboard-mockup">
              <div className="aml-header">
                <span className="aml-title-text">AML Dashboard</span>
                <span className="aml-sub">xxxxxxxx</span>
              </div>
              <div className="aml-body">
                <div className="row g-3 mb-3">
                  <div className="col-6">
                    <div className="aml-stat-card red">
                      <div className="aml-stat-number">450</div>
                      <div className="aml-stat-label">Total STR (Suspicious Transaction Report)</div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="aml-stat-card yellow">
                      <div className="aml-stat-number">3</div>
                      <div className="aml-stat-label">Days Pending for AML Process</div>
                    </div>
                  </div>
                </div>

                <div className="row g-3">
                  <div className="col-7">
                    <div className="aml-chart-card">
                      <div className="aml-chart-title">Suspicious Transactions as on 10-01-2022</div>
                      <div className="aml-donut">
                        <svg viewBox="0 0 120 120" width="100" height="100">
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#f0f0f0" strokeWidth="18"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#FF6384" strokeWidth="18"
                            strokeDasharray="113 170" strokeDashoffset="0" transform="rotate(-90 60 60)"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#36A2EB" strokeWidth="18"
                            strokeDasharray="68 215" strokeDashoffset="-113" transform="rotate(-90 60 60)"/>
                          <circle cx="60" cy="60" r="45" fill="none" stroke="#FFCE56" strokeWidth="18"
                            strokeDasharray="34 249" strokeDashoffset="-181" transform="rotate(-90 60 60)"/>
                          <text x="60" y="56" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#333">450</text>
                          <text x="60" y="70" textAnchor="middle" fontSize="7" fill="#999">STR</text>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="aml-chart-card">
                      <div className="aml-chart-title">STR Summary</div>
                      <div className="aml-bars">
                        {[60, 45, 80, 55, 70].map((h, i) => (
                          <div key={i} className="aml-bar" style={{height: h + 'px', background: i === 3 ? '#2563eb' : '#e2e8f0'}}></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="aml-table-section mt-3">
                  <div className="aml-chart-title mb-2">AML Report</div>
                  <div className="aml-table">
                    <div className="aml-table-header">
                      <span>AML Case ID</span><span>Branch ID</span>
                      <span>Identified Date</span><span>Amount</span>
                    </div>
                    {[
                      ['229', 'Branch 1', '02-01-2022', '70'],
                      ['180', 'Branch 3', '04-01-2022', '360'],
                      ['205', 'Branch 4', '04-01-2022', '65'],
                      ['199', 'Branch 5', '02-01-2022', '152'],
                    ].map(([id, branch, date, amount], i) => (
                      <div className="aml-table-row" key={i}>
                        <span>{id}</span><span>{branch}</span>
                        <span>{date}</span><span>{amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CloudBanking;
