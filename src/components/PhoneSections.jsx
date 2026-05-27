import React from 'react';
import './PhoneSections.css';

const NoLegacy = () => (
  <section className="phonesec-section section-py light-phone-bg">
    <div className="container">
      <div className="row align-items-center g-5">
        {/* Left: decorative circles */}
        <div className="col-lg-5 d-flex justify-content-start">
          <div className="circle-deco">
            <div className="circle-outer">
              <div className="circle-inner"></div>
            </div>
          </div>
        </div>
        {/* Right: content + phone */}
        <div className="col-lg-7">
          <div className="row align-items-center g-4">
            <div className="col-md-6">
              <h3 className="phonesec-title">No legacy IT systems</h3>
              <p className="phonesec-desc">
                Our Digital Banking solution and multilayered approach help financial
                institutions take advantage of digital transformation by ensuring
                customer trust and regulatory compliance.
              </p>
              <ul className="check-list mt-3">
                {['Adaptive & Intelligent API monetization','Ambient User Experience','Cloud-native With lower TCO'].map(f=>(
                  <li key={f}><span className="check-icon"><i className="bi bi-check"></i></span><span style={{color:'#1a2535'}}>{f}</span></li>
                ))}
              </ul>
            </div>
            <div className="col-md-6 d-flex justify-content-center">
              <div className="phone-mockup phone-light">
                <div className="phone-screen">
                  <div style={{padding:'14px 16px'}}>
                    <div style={{fontSize:'0.68rem',color:'#999',marginBottom:4}}>March 2022</div>
                    <div style={{fontSize:'1.2rem',fontWeight:700,color:'#2563eb',marginBottom:14}}>$8,295.00 USD</div>
                    {/* Bar chart */}
                    <div style={{display:'flex',alignItems:'flex-end',gap:6,height:60,marginBottom:16}}>
                      {[30,45,65,80,55,40].map((h,i)=>(
                        <div key={i} style={{flex:1,height:h+'px',background:i===3?'#2563eb':'#e2e8f0',borderRadius:'3px 3px 0 0'}}></div>
                      ))}
                    </div>
                    <div style={{display:'flex',gap:20,fontSize:'0.7rem',borderTop:'1px solid #f0f0f0',paddingTop:10,marginBottom:14}}>
                      <div><div style={{color:'#999'}}>Income</div><div style={{fontWeight:600}}>$453.00</div></div>
                      <div><div style={{color:'#999'}}>Spend</div><div style={{fontWeight:600}}>$453.00</div></div>
                    </div>
                    <div style={{fontSize:'0.78rem',fontWeight:600,marginBottom:8}}>Recent activity</div>
                    {[
                      {name:'To Jin · Work',date:'12 jun 2022',amount:'-$59',color:'#e53e3e'},
                      {name:'From Google · Salary',date:'10 jun 2022',amount:'+$859',color:'#16a34a'},
                    ].map((t,i)=>(
                      <div key={i} style={{display:'flex',alignItems:'center',gap:8,marginBottom:8}}>
                        <div style={{width:28,height:28,background:'#f1f5f9',borderRadius:'50%'}}></div>
                        <div style={{flex:1}}>
                          <div style={{fontSize:'0.72rem',fontWeight:500}}>{t.name}</div>
                          <div style={{fontSize:'0.62rem',color:'#999'}}>{t.date}</div>
                        </div>
                        <span style={{fontSize:'0.75rem',fontWeight:600,color:t.color}}>{t.amount}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const NoBranches = () => (
  <section className="phonesec-section section-py light-phone-bg">
    <div className="container">
      <div className="row align-items-center g-5">
        {/* Left: circle deco */}
        <div className="col-lg-5 d-flex justify-content-start position-relative">
          <div className="circle-deco">
            <div className="circle-outer">
              <div className="circle-inner"></div>
            </div>
          </div>
        </div>
        {/* Right: phone + content */}
        <div className="col-lg-7">
          <div className="row align-items-center g-4">
            <div className="col-md-6 d-flex justify-content-center">
              <div className="phone-mockup phone-light">
                <div className="phone-screen">
                  <div style={{padding:'14px 16px',textAlign:'center'}}>
                    <div style={{width:60,height:60,borderRadius:'50%',overflow:'hidden',margin:'0 auto 10px'}}>
                      <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                        alt="profile" style={{width:'100%',height:'100%',objectFit:'cover'}} />
                    </div>
                    <div style={{fontSize:'0.9rem',fontWeight:700,marginBottom:2}}>Toni Kross</div>
                    <div style={{fontSize:'0.7rem',color:'#999',marginBottom:16}}>tonikross@gmail.com</div>
                    {[{icon:'bi-person-gear',label:'Profile setting'},{icon:'bi-gear',label:'Setting'},{icon:'bi-headset',label:'Support'},{icon:'bi-box-arrow-right',label:'Sign out'}].map(item=>(
                      <div key={item.label} style={{display:'flex',alignItems:'center',gap:10,padding:'12px 8px',borderBottom:'1px solid #f5f5f5',textAlign:'left',cursor:'pointer'}}>
                        <i className={`bi ${item.icon}`} style={{fontSize:'1rem',color:'#555'}}></i>
                        <span style={{fontSize:'0.82rem',flex:1}}>{item.label}</span>
                        <i className="bi bi-chevron-right" style={{fontSize:'0.7rem',color:'#ccc'}}></i>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 className="phonesec-title">No traditional branches</h3>
              <p className="phonesec-desc">
                Our Digital Banking out-of-the-box helps you to accelerate innovation while
                reducing risks and optimising operational costs for a seamless branchless experience.
              </p>
              <ul className="check-list mt-3">
                {['Branchless & Paperless Banking','Digital Transformation Capability','Optimized, Adoptable and Scalable'].map(f=>(
                  <li key={f}><span className="check-icon"><i className="bi bi-check"></i></span><span style={{color:'#1a2535'}}>{f}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export { NoLegacy, NoBranches };
