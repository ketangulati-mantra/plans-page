import React, { useState } from 'react';
import { Shield, Lock, Clock, ThumbsUp } from 'lucide-react';
import FinancialAidModal from './FinancialAidModal';
import './CantAffordSection.css';

export default function CantAffordSection({ onTryIntern, isInternMode }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="cant-afford-container">
      {/* 1. Dynamic Banner Card */}
      <div className="cant-afford-card">
        {isInternMode ? (
          <>
            <h3 className="cant-afford-title">Prefer a Licensed Therapist?</h3>
            <p className="cant-afford-desc">
              If you'd like care from a licensed, experienced therapist instead
              of an intern, we can connect you instantly with a certified
              professional who fits your needs and budget.
            </p>
            <div className="cant-afford-actions">
              <button
                type="button"
                className="btn-intern-secondary"
                onClick={() => {
                  if (onTryIntern) onTryIntern(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                See Licensed Therapist
              </button>
              <button
                type="button"
                className="btn-financial-aid-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Request Financial Aid
              </button>
            </div>
          </>
        ) : (
          <>
            <h3 className="cant-afford-title">Need a more affordable option?</h3>
            <p className="cant-afford-desc">
              Tell us what you can comfortably spend, and we'll try to match you
              with a certified therapist within your budget.
            </p>
            <div className="cant-afford-actions">
              <button
                type="button"
                className="btn-intern-secondary"
                onClick={() => {
                  if (onTryIntern) onTryIntern(true);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                Try Therapy Intern
              </button>
              <button
                type="button"
                className="btn-financial-aid-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Request Financial Aid
              </button>
            </div>
          </>
        )}
      </div>

      {/* 2. Dynamic Trust Badges Card */}
      <div className="trust-badges-box">
        <div className="trust-badges-grid">
          <div className="trust-badge-item">
            <Shield className="trust-icon" />
            <span className="trust-check">✓</span>
            <span>
              {isInternMode ? 'Licensed Therapy Intern' : 'Licensed Therapist'}
            </span>
          </div>
          <div className="trust-badge-item">
            <Lock className="trust-icon" />
            <span className="trust-check">✓</span>
            <span>Confidential &amp; Secure</span>
          </div>
          <div className="trust-badge-item">
            <Clock className="trust-icon" />
            <span className="trust-check">✓</span>
            <span>Start Within 24 Hours</span>
          </div>
          <div className="trust-badge-item">
            <ThumbsUp className="trust-icon" />
            <span className="trust-check">✓</span>
            <span>
              {isInternMode
                ? 'Therapy Intern Match Guarantee'
                : 'Therapist Match Guarantee'}
            </span>
          </div>
        </div>
      </div>

      {/* 3. Sub-footer Text */}
      <div className="trust-footer-subtext">
        <span>
          {isInternMode
            ? "You'll be matched with a licensed therapy Intern based on your profile"
            : "You'll be matched with a licensed therapist based on your profile"}
        </span>
      </div>

      {/* 4. Interactive Financial Aid Modal */}
      <FinancialAidModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}
