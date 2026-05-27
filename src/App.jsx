import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import CloudBanking from './components/CloudBanking';
import CoreBanking from './components/CoreBanking';
import DigitalBanking from './components/DigitalBanking';
import { NoLegacy, NoBranches } from './components/PhoneSections';
import CTABanner from './components/CTABanner';
import Insights from './components/Insights';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Solutions />
      <CloudBanking />
      <CoreBanking />
      <DigitalBanking />
      <NoLegacy />
      <NoBranches />
      <CTABanner />
      <Insights />
      <CaseStudies />
      <Footer />
    </div>
  );
}

export default App;
