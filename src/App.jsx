import React, { useState } from 'react';
import HeaderHero from './components/HeaderHero';
import PlanCard from './components/PlanCard';
import CantAffordSection from './components/CantAffordSection';
import ProvidersSection from './components/ProvidersSection';
import HowItWorksSection from './components/HowItWorksSection';
import StepsAndStatsSection from './components/StepsAndStatsSection';
import WhyChooseMantraSection from './components/WhyChooseMantraSection';
import VideoTestimonialsSection from './components/VideoTestimonialsSection';
import FaqSection from './components/FaqSection';
import ExplorePlansAndFooterSection from './components/ExplorePlansAndFooterSection';
import './App.css';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState({ code: 'en', name: 'English' });
  const [selectedCountry, setSelectedCountry] = useState({ code: 'IN', name: 'India', currency: 'INR (₹)', symbol: '₹' });
  const [isInternMode, setIsInternMode] = useState(false);

  const getCurrencySymbol = (countryCode) => {
    switch (countryCode) {
      case 'US': return '$';
      case 'GB': return '£';
      case 'CA': return 'C$';
      case 'AU': return 'A$';
      case 'AE': return 'AED ';
      case 'SG': return 'S$';
      default: return '₹';
    }
  };

  return (
    <div className="app-container">
      {/* 1. Top Header & Hero section */}
      <HeaderHero
        isInternMode={isInternMode}
        onLanguageChange={setSelectedLanguage}
        onCountryChange={(country) => {
          setSelectedCountry({
            ...country,
            symbol: getCurrencySymbol(country.code),
          });
        }}
      />

      {/* 2. Main Therapy Plans Pricing Section & Can't Afford Section */}
      <main className="main-content">
        <div className="content-stack">
          <PlanCard
            currencySymbol={selectedCountry.symbol || '₹'}
            isInternMode={isInternMode}
            onExitInternMode={() => setIsInternMode(false)}
          />
          <CantAffordSection
            isInternMode={isInternMode}
            onTryIntern={setIsInternMode}
          />
        </div>
      </main>

      {/* 3. 3 Steps & Evidence-Based Stats Section */}
      <StepsAndStatsSection />

      {/* 4. Choose from 5000+ Providers / Therapists Section */}
      <ProvidersSection />

      {/* 5. Frequently Asked Questions Section */}
      <FaqSection />

      {/* 6. Explore Other Plans & Footer Section */}
      <ExplorePlansAndFooterSection />
    </div>
  );
}

export default App;
