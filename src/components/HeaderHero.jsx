import React, { useState, useRef, useEffect } from 'react';
import { Globe, Languages, ChevronDown, Check } from 'lucide-react';
import MantraLogo from './MantraLogo';
import './HeaderHero.css';


const languages = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'de', name: 'German', native: 'Deutsch' },
];

const countries = [
  { code: 'IN', name: 'India', currency: 'INR (₹)' },
  { code: 'US', name: 'United States', currency: 'USD ($)' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP (£)' },
  { code: 'CA', name: 'Canada', currency: 'CAD (C$)' },
  { code: 'AU', name: 'Australia', currency: 'AUD (A$)' },
  { code: 'AE', name: 'United Arab Emirates', currency: 'AED' },
  { code: 'SG', name: 'Singapore', currency: 'SGD (S$)' },
];

export default function HeaderHero({ onLanguageChange, onCountryChange, isInternMode = false }) {
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);

  const langRef = useRef(null);
  const countryRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectLang = (lang) => {
    setSelectedLang(lang);
    setIsLangOpen(false);
    if (onLanguageChange) onLanguageChange(lang);
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);
    setIsCountryOpen(false);
    if (onCountryChange) onCountryChange(country);
  };

  return (
    <header className="hero-header-container">
      {/* Background Graphic Accents */}
      <div className="hero-bg-shapes" aria-hidden="true">
        <div className="shape-top-left"></div>
        <div className="shape-top-right"></div>
        <div className="shape-right-curve"></div>
      </div>

      <div className="hero-header-content">
        {/* Top Navbar */}
        <nav className="hero-navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <a href="/" className="brand-logo-link" aria-label="Mantra Home">
            <MantraLogo height={28} />
          </a>

          {/* Right Action Selectors */}
          <div className="navbar-actions">
            {/* Language Selector */}
            <div className="dropdown-wrapper" ref={langRef}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {
                  setIsLangOpen(!isLangOpen);
                  setIsCountryOpen(false);
                }}
                aria-expanded={isLangOpen}
                aria-haspopup="listbox"
                aria-label={`Selected language: ${selectedLang.name}`}
              >
                <Languages className="dropdown-icon" />
                <span>{selectedLang.name}</span>
                <ChevronDown
                  className={`dropdown-chevron ${isLangOpen ? 'open' : ''}`}
                />
              </button>

              {isLangOpen && (
                <ul className="dropdown-menu" role="listbox" tabIndex={-1}>
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        type="button"
                        className={`dropdown-item ${
                          selectedLang.code === lang.code ? 'active' : ''
                        }`}
                        onClick={() => handleSelectLang(lang)}
                        role="option"
                        aria-selected={selectedLang.code === lang.code}
                      >
                        <span>{lang.native}</span>
                        {selectedLang.code === lang.code && (
                          <Check className="dropdown-check" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Country Selector */}
            <div className="dropdown-wrapper" ref={countryRef}>
              <button
                type="button"
                className="dropdown-btn"
                onClick={() => {
                  setIsCountryOpen(!isCountryOpen);
                  setIsLangOpen(false);
                }}
                aria-expanded={isCountryOpen}
                aria-haspopup="listbox"
                aria-label={`Selected region: ${selectedCountry.name}`}
              >
                <Globe className="dropdown-icon" />
                <span>{selectedCountry.name}</span>
                <ChevronDown
                  className={`dropdown-chevron ${isCountryOpen ? 'open' : ''}`}
                />
              </button>

              {isCountryOpen && (
                <ul className="dropdown-menu" role="listbox" tabIndex={-1}>
                  {countries.map((country) => (
                    <li key={country.code}>
                      <button
                        type="button"
                        className={`dropdown-item ${
                          selectedCountry.code === country.code ? 'active' : ''
                        }`}
                        onClick={() => handleSelectCountry(country)}
                        role="option"
                        aria-selected={selectedCountry.code === country.code}
                      >
                        <div>
                          <div>{country.name}</div>
                          <small style={{ color: '#64748b', fontSize: '11px' }}>
                            {country.currency}
                          </small>
                        </div>
                        {selectedCountry.code === country.code && (
                          <Check className="dropdown-check" />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </nav>

        {/* Hero Title & Tagline Section */}
        <section className="hero-body">
          {isInternMode ? (
            <>
              <div className="hero-title-wrap">
                <h1 className="hero-title">Guided Support by Psychology Trainee</h1>
                <div className="hero-title-underline" aria-hidden="true"></div>
              </div>
              <p className="hero-subtitle">
                Can't afford therapy? Access high-quality Support &amp; Counseling from a supervised master's-level psychology trainee for only a fraction of the cost
              </p>
            </>
          ) : (
            <>
              <div className="hero-title-wrap">
                <h1 className="hero-title">Online therapy</h1>
                <div className="hero-title-underline" aria-hidden="true"></div>
              </div>
              <p className="hero-subtitle">
                Affordable &amp; confidential counseling. Switch or cancel anytime!
              </p>
            </>
          )}
        </section>
      </div>
    </header>
  );
}
