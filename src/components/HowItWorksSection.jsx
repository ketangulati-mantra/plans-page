import React from 'react';
import './HowItWorksSection.css';

export default function HowItWorksSection({ isInternMode = false }) {
  const videoId = 'm_GiwZ-PM18';
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0`;

  return (
    <section className="how-it-works-section" aria-label="How TherapyMantra Works">
      <div className="how-it-works-container">
        {/* Section Heading with Blue underline */}
        <div className="how-heading-wrapper">
          <h2 className="how-title">How TherapyMantra Works?</h2>
          <div className="how-title-underline" aria-hidden="true"></div>
        </div>

        {/* Outer Video Card Frame */}
        <div className="video-card-frame">
          <div className="video-player-wrapper">
            <iframe
              src={embedUrl}
              title="How TherapyMantra Works?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="youtube-iframe"
            ></iframe>
          </div>

          {/* Subtitle & Description Footer inside the Card Frame */}
          <div className="video-info-footer">
            <h3 className="video-subheading">
              World's Best Guided Support by Psychology Trainee Platform
            </h3>
            <p className="video-description">
              Watch this video to discover how Therapy Interns Services connects you with dedicated therapy interns and provides the compassionate, affordable support you need for your mental health journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
