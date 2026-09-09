import React from 'react';
import './StepsAndStatsSection.css';

export default function StepsAndStatsSection() {
  const steps = [
    {
      num: '01',
      title: 'Find the right support',
      desc: "Choose counselling with a trained Psychology Intern based on what you're looking to work on.",
      mobileDesc: 'Choose counselling with a trained Psychology Intern.',
    },
    {
      num: '02',
      title: 'Get personalised guidance',
      desc: "Book a convenient live or chat session and start working through what you're facing.",
      mobileDesc: 'Start with live or chat support tailored to you.',
    },
    {
      num: '03',
      title: 'Start making progress',
      desc: 'Use structured support, practical guidance, and ongoing resources to build healthier habits.',
      mobileDesc: 'Build healthier habits with structured support.',
    },
  ];

  const stats = [
    {
      percent: '85%',
      label: 'felt comfortable opening up with trained interns',
    },
    {
      percent: '75%',
      label: 'reported improved emotional clarity',
    },
    {
      percent: '96%',
      label: 'found online sessions affordable and easy to attend',
    },
  ];

  return (
    <section className="steps-stats-section" aria-label="How it works steps and clinical evidence">
      {/* 1. Three Steps Row */}
      <div className="steps-container">
        {/* Subtle Horizontal Connector Line behind step numbers (desktop) */}
        <div className="steps-connector-line" aria-hidden="true"></div>

        <div className="steps-grid">
          {steps.map((step) => (
            <div key={step.num} className="step-card">
              <div className="step-number-circle">
                <span>{step.num}</span>
              </div>
              <div className="step-content">
                <h4 className="step-title">{step.title}</h4>
                <p className="step-desc step-desc-desktop">{step.desc}</p>
                <p className="step-desc step-desc-mobile">{step.mobileDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Section Divider */}
      <div className="section-divider-wrap" aria-hidden="true">
        <div className="section-divider-line"></div>
      </div>

      {/* 2. Evidence-Based Mental Health Care Stats Section */}
      <div className="stats-container">
        <div className="stats-heading-wrap">
          <h2 className="stats-main-title">
            Delivering Evidence-Based mental health Care
          </h2>
          <div className="stats-title-underline" aria-hidden="true"></div>
          <p className="stats-subtitle">
            Our treatment approach is scientifically proven and validated through clinical research.
          </p>
        </div>

        {/* Stats Grid with 3 Pillars */}
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className="stat-column">
              <div className="stat-percentage">{stat.percent}</div>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
