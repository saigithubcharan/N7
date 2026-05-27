import React from 'react';
import './CoreBanking.css';

const features = [
  'Customer-On Boarding', 'Managing deposits and withdrawals',
  'Transaction management', 'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
  'CRM Activities', 'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

const CoreBanking = () => {
  return (
    <section className="corebanking-section section-py">
      <div className="container">
        <div className="row align-items-center g-5">
          {/* Left: KYC Dashboard */}
          <div className="col-lg-6">
            <div className="kyc-mockup dashboard-mockup">
              <div className="kyc-header">
                <div className="kyc-tabs">
                  {['KYC Dashboard', 'Reports', 'Settings'].map((t,i) => (
                    <span key={t} className={`kyc-tab ${i===0?'active':''}`}>{t}</span>
                  ))}
                </div>
                <div className="kyc-topright">
                  <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face" 
                    alt="user" style={{width:24,height:24,borderRadius:'50%',objectFit:'cover'}} />
                </div>
              </div>
              <div className="kyc-body">
                <div className="row g-2 mb-3">
                  {[
                    {label:'KYC Complete', value:'2115', color:'#3b82f6'},
                    {label:'In Progress', value:'940', color:'#f59e0b'},
                    {label:'Completed', value:'1057', color:'#10b981'},
                    {label:'Failed Records', value:'128', color:'#ef4444'},
                  ].map(s => (
                    <div className="col-3" key={s.label}>
                      <div className="kyc-stat" style={{borderTop:`3px solid ${s.color}`}}>
                        <div className="kyc-stat-num" style={{color: s.color}}>{s.value}</div>
                        <div className="kyc-stat-lbl">{s.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Branch table */}
                <div className="kyc-table-wrap">
                  <table className="kyc-table">
                    <thead>
                      <tr><th>Branches</th><th>Total</th><th>In Progress</th><th>Completed</th><th>Failed</th></tr>
                    </thead>
                    <tbody>
                      {[
                        ['Branch 1', 325, 75, 100, 10],
                        ['Branch 2', 218, 60, 140, 8],
                        ['Branch 3', 190, 45, 130, 5],
                        ['Branch 4', 165, 38, 110, 7],
                      ].map(([b,...nums],i) => (
                        <tr key={i}><td>{b}</td>{nums.map((n,j)=><td key={j}>{n}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {/* Mini chart */}
                <div className="kyc-chart">
                  <div className="kyc-chart-title">Periodic Response | All Branches</div>
                  <div className="kyc-bars">
                    {[40,65,55,80,45,70,60,75,50,85].map((h,i) => (
                      <div key={i} className="kyc-bar-group">
                        <div className="kyc-bar" style={{height:h+'px', background: i%3===0?'#ef4444':i%3===1?'#3b82f6':'#e2e8f0'}}></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Feature list */}
          <div className="col-lg-6">
            <h2 className="core-title">
              Run a more efficient, flexible, and digitally connected corebanking system
            </h2>
            <p className="core-subtitle fw-semibold mt-4 mb-3" style={{color:'#fff'}}>
              What you will get:
            </p>
            <ul className="check-list">
              {features.map((f, i) => (
                <li key={i}>
                  <span className="check-icon"><i className="bi bi-check"></i></span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreBanking;
