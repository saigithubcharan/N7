import React from 'react';
import './DigitalBanking.css';

const DigitalBanking = () => {
  const marqueeItems = ['N7', '✦', 'Say', '👋', 'to the new way of banking', '✦', 'CB7', '✦', 'Say', '👋'];

  return (
    <>
      {/* Marquee ticker */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className={`marquee-item ${item === 'N7' || item === 'CB7' ? 'marquee-brand' : ''}`}>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Digital Banking Section - light bg */}
      <section className="digital-section section-py">
        <div className="container">
          <div className="row align-items-center g-5">
            {/* Left */}
            <div className="col-lg-4">
              <h2 className="digital-title">
                Digital banking out-of-the-box
              </h2>
              <p className="digital-desc">
                N7 helps your financial institution improve the client experience, automate and optimize procedures
              </p>
              <div className="d-flex flex-column align-items-start gap-3 mt-4">
                <a href="#demo" className="btn-n7-primary">REQUEST DEMO</a>
                <button className="learn-more-link" style={{color:'#2563eb'}}>LEARN MORE <i className="bi bi-arrow-right"></i></button>
              </div>
            </div>

            {/* Middle: Phone */}
            <div className="col-lg-4 d-flex justify-content-center">
              <div className="phone-mockup digital-phone">
                <div className="phone-screen">
                  {/* App header */}
                  <div className="app-header">
                    <div className="d-flex align-items-center gap-2">
                      <div style={{width:32,height:32,borderRadius:'50%',overflow:'hidden'}}>
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
                          alt="profile" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                      </div>
                      <div>
                        <div style={{fontSize:'0.8rem',fontWeight:600}}>Toni Kross</div>
                        <div style={{fontSize:'0.65rem',color:'#999'}}>Good Morning</div>
                      </div>
                    </div>
                    <i className="bi bi-bell" style={{fontSize:'1rem',color:'#555'}}></i>
                  </div>

                  <div className="app-balance">
                    <div style={{fontSize:'0.7rem',color:'#999',marginBottom:4}}>Total Balance</div>
                    <div className="balance-amount">$42,295.00 USD</div>
                  </div>

                  <div className="app-actions">
                    {[['bi-arrow-up-right-square','Fund Transfer'],['bi-plus-circle','Add Money'],['bi-grid-3x3-gap','More']].map(([icon,label]) => (
                      <div key={label} className="app-action">
                        <div className="app-action-icon"><i className={`bi ${icon}`}></i></div>
                        <span>{label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="app-activity">
                    <div className="activity-label">Recent activity</div>
                    <div className="app-tabs">
                      {['This Day','This Week','This Month','6 Month'].map((t,i) => (
                        <span key={t} className={`app-tab ${i===1?'active':''}`}>{t}</span>
                      ))}
                    </div>
                    {[
                      {name:'To Jin · Work', date:'12 jun 2022', amount:'-$59', color:'#e53e3e', icon:'bi-arrow-up-right', bg:'#fee2e2'},
                      {name:'From Google · Salary', date:'10 jun 2022', amount:'+$859', color:'#16a34a', icon:'bi-check2', bg:'#dcfce7'},
                      {name:'To David · Work', date:'7 jun 2022', amount:'-$479', color:'#e53e3e', icon:'bi-arrow-up-right', bg:'#fee2e2'},
                    ].map((t,i) => (
                      <div key={i} className="app-transaction">
                        <div className="trans-icon" style={{background:t.bg}}>
                          <i className={`bi ${t.icon}`} style={{color:t.color,fontSize:'0.75rem'}}></i>
                        </div>
                        <div className="trans-info">
                          <span className="trans-name">{t.name}</span>
                          <span className="trans-date">{t.date}</span>
                        </div>
                        <span className="trans-amount" style={{color:t.color}}>{t.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="col-lg-4">
              <h4 className="digital-right-title">
                Fully compliant with regulatory requirement
              </h4>
              <p className="digital-right-desc">
                The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
              </p>
              <ul className="check-list mt-3">
                {['Pre-integrated Security System','Fully Compliant With Regulatory Requirement','Digitally Connected Core'].map(f => (
                  <li key={f}>
                    <span className="check-icon"><i className="bi bi-check"></i></span>
                    <span style={{color:'#1a2535'}}>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DigitalBanking;
