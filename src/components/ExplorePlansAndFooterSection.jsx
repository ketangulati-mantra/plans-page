import React from 'react';
import { Pill, LayoutGrid } from 'lucide-react';
import './ExplorePlansAndFooterSection.css';

// Custom Brain Icon
const BrainIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
    <path d="M12 3c-1.1 0-2.1.4-2.8 1.1-.7-.7-1.7-1.1-2.8-1.1-2.2 0-4 1.8-4 4 0 .5.1 1 .3 1.4C1.6 9.1 1 10.5 1 12c0 2 1.2 3.7 3 4.5.1 2.5 2.2 4.5 4.8 4.5 1.1 0 2.2-.4 3-1.1.8.7 1.9 1.1 3 1.1 2.6 0 4.7-2 4.8-4.5 1.8-.8 3-2.5 3-4.5 0-1.5-.6-2.9-1.7-3.6.2-.4.3-.9.3-1.4 0-2.2-1.8-4-4-4-1.1 0-2.1.4-2.8 1.1-.7-.7-1.7-1.1-2.8-1.1zm-1 2.2c.4 0 .7.2.9.5l.1.3v13c-.3 0-.6.1-.9.1-1.7 0-3-1.3-3-3v-.5l-.4-.2C4.6 15 4 14.1 4 13c0-1.1.6-2 1.6-2.5l.5-.2V9.8c0-1.6 1.3-2.8 2.9-2.8.3 0 .7.1 1 .2V5.2zm2 0v2c.3-.1.7-.2 1-.2 1.6 0 2.9 1.2 2.9 2.8v.5l.5.2c1 .5 1.6 1.4 1.6 2.5 0 1.1-.6 2-1.6 2.4l-.4.2v.5c0 1.7-1.3 3-3 3-.3 0-.6-.1-.9-.1V6c.2-.3.5-.6.9-.8z" />
  </svg>
);

// Custom Yoga / Lotus Icon
const YogaIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" fill="currentColor" />
    <path d="M6 18c2-3 4-5 6-5s4 2 6 5" />
    <path d="M4 21c3-2 5-3 8-3s5 1 8 3" />
    <path d="M9 13l3-4 3 4" />
    <path d="M12 9v5" />
  </svg>
);

export default function ExplorePlansAndFooterSection() {
  const otherPlans = [
    {
      id: 'psychiatry',
      name: 'Psychiatry',
      icon: <BrainIcon />,
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness & yoga',
      icon: <YogaIcon />,
    },
    {
      id: 'ocd-care',
      name: 'Ocd care',
      icon: <Pill size={20} />,
    },
    {
      id: 'view-all',
      name: 'View all',
      icon: <LayoutGrid size={20} />,
    },
  ];

  return (
    <footer className="explore-footer-wrapper">
      {/* 1. Explore Other Plans Section */}
      <section className="explore-plans-section" aria-label="Explore Other Plans">
        {/* Decorative Background Elements */}
        <div className="explore-bg-circle-left" aria-hidden="true"></div>
        <div className="explore-bg-circle-right" aria-hidden="true"></div>
        <div className="explore-bg-cross" aria-hidden="true">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M38 0H62V38H100V62H62V100H38V62H0V38H38V0Z"
              fill="none"
              stroke="#00C0FF"
              strokeWidth="7"
              strokeLinejoin="round"
              opacity="0.25"
            />
          </svg>
        </div>

        <div className="explore-container">
          {/* Header */}
          <div className="explore-header">
            <h2 className="explore-title">Explore Other Plans</h2>
            <div className="explore-underline" aria-hidden="true"></div>
            <p className="explore-subtitle">Find the right fit for your needs</p>
          </div>

          {/* 4 Category Cards Row */}
          <div className="explore-cards-grid">
            {otherPlans.map((plan) => (
              <a
                key={plan.id}
                href={`#${plan.id}`}
                className="explore-plan-card"
                onClick={(e) => {
                  e.preventDefault();
                  alert(`Navigating to ${plan.name} plans...`);
                }}
              >
                <div className="explore-icon-circle">
                  {plan.icon}
                </div>
                <span className="explore-plan-name">{plan.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Deep Navy Bottom Copyright & Legal Links Bar */}
      <div className="bottom-copyright-bar">
        <div className="copyright-container">
          <p className="copyright-text">
            Copyright &copy; 2026 MantraCare Corporation | All Rights Reserved |{' '}
            <a href="#privacy" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy policy</a> |{' '}
            <a href="#refund" className="footer-link" onClick={(e) => e.preventDefault()}>Refund policy</a> |{' '}
            <a href="#terms" className="footer-link" onClick={(e) => e.preventDefault()}>Terms and Conditions</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
