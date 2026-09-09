import React from 'react';
import {
  Wallet,
  BookOpen,
  HeartHandshake,
  Users,
  Stethoscope,
  RefreshCw,
  MessageCircle,
  Activity,
} from 'lucide-react';
import './WhyChooseMantraSection.css';

export default function WhyChooseMantraSection() {
  const topCards = [
    {
      badge: 'AFFORDABLE',
      badgeColor: '#ec4899', // pink badge
      badgeBg: '#fdf2f8',
      iconBg: '#a855f7', // purple icon container
      icon: <Wallet className="wcm-icon" />,
      title: 'Support at 1/5 the cost',
      desc: 'If cost is holding you back, our Therapy Intern Program makes care accessible. You\'ll receive compassionate support from psychology interns, supervised by licensed clinicians',
      cardBg: '#fdf4ff', // light lavender/pink tint
    },
    {
      badge: 'TAILORED FOR YOU',
      badgeColor: '#ea580c', // orange badge
      badgeBg: '#fff7ed',
      iconBg: '#f97316', // bright orange icon container
      icon: <BookOpen className="wcm-icon" />,
      title: 'Personalised Recovery Plan',
      desc: 'Healing is faster with a tailored plan—whether through counseling activities, affirmations, meditations, psychometric assessments, or progress reviews',
      cardBg: '#fffbf5', // light orange tint
    },
    {
      badge: 'TRAINED INTERNS',
      badgeColor: '#059669', // emerald green badge
      badgeBg: '#ecfdf5',
      iconBg: '#10b981', // green/teal icon container
      icon: <HeartHandshake className="wcm-icon" />,
      title: 'Well-Trained Interns. Trusted Care',
      desc: 'Our interns undergo rigorous training and receive continuous supervision, offering care that\'s on par with many established providers — while staying affordable.',
      cardBg: '#f0fdf4', // light emerald tint
    },
    {
      badge: 'LARGEST NETWORK',
      badgeColor: '#0284c7', // cyan/blue badge
      badgeBg: '#e0f2fe',
      iconBg: '#0284c7', // blue icon container
      icon: <Users className="wcm-icon" />,
      title: '5000+ Therapists',
      desc: 'Choose from one of the world\'s largest networks of licensed therapists. Specify your preferences, and we\'ll match you with the best fit — or browse & select your own therapist.',
      cardBg: '#f0f9ff', // light blue tint
    },
  ];

  const bottomCards = [
    {
      icon: <Stethoscope size={18} strokeWidth={2.2} />,
      iconBg: '#f59e0b',
      title: 'Psychiatry Connect',
      desc: 'If required, you can also access psychiatric care — ensuring complete continuity of care.',
      cardBg: '#fffbeb',
    },
    {
      icon: <RefreshCw size={18} strokeWidth={2.2} />,
      iconBg: '#3b82f6',
      title: 'Switch Option',
      desc: 'Not satisfied with your therapist? Switch anytime until you find the perfect match.',
      cardBg: '#eff6ff',
    },
    {
      icon: <MessageCircle size={18} strokeWidth={2.2} />,
      iconBg: '#10b981',
      title: '24/7 Support',
      desc: 'Round-the-clock help from our team whenever you need guidance.',
      cardBg: '#f0fdf4',
    },
    {
      icon: <Activity size={18} strokeWidth={2.2} />,
      iconBg: '#f43f5e',
      title: 'Safe Care',
      desc: "If your needs exceed the intern's scope, we'll promptly transition you to a licensed therapist for expert care.",
      cardBg: '#fff1f2',
    },
  ];

  return (
    <section className="why-choose-section" aria-label="Why Choose Mantra">
      <div className="why-choose-container">
        {/* Heading & Subtitle */}
        <div className="why-choose-heading-wrap">
          <h2 className="why-choose-title">Why Choose Mantra?</h2>
          <div className="why-choose-underline" aria-hidden="true"></div>
          <p className="why-choose-subtitle">
            Guided Support by Psychology Interns is different from any other platform. Here's why choosing us is an easy decision.
          </p>
        </div>

        {/* Top 4 Big Feature Cards (2x2 Grid) */}
        <div className="why-choose-top-grid">
          {topCards.map((card, idx) => (
            <div
              key={idx}
              className="wcm-big-card"
              style={{ backgroundColor: card.cardBg }}
            >
              <div className="wcm-card-header">
                <span
                  className="wcm-badge"
                  style={{
                    color: '#ffffff',
                    backgroundColor: card.badgeColor,
                  }}
                >
                  {card.badge}
                </span>

                <div
                  className="wcm-icon-box"
                  style={{ backgroundColor: card.iconBg }}
                >
                  {card.icon}
                </div>
              </div>

              <h3 className="wcm-card-title">{card.title}</h3>
              <p className="wcm-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom 4 Compact Cards (4 Columns) */}
        <div className="why-choose-bottom-grid">
          {bottomCards.map((item, idx) => (
            <div
              key={idx}
              className="wcm-small-card"
              style={{ backgroundColor: item.cardBg }}
            >
              <div
                className="wcm-small-icon-box"
                style={{ backgroundColor: item.iconBg }}
              >
                {item.icon}
              </div>
              <h4 className="wcm-small-title">{item.title}</h4>
              <p className="wcm-small-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
