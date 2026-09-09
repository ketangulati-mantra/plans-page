import React, { useState } from 'react';
import { Percent, Globe, Clock, Sparkles } from 'lucide-react';
import './FinancialAidModal.css';

export default function FinancialAidModal({ isOpen, onClose, onApplyDiscount }) {
  // Discount steps: 0, 1 (5%), 2 (10%), 3 (20%)
  const steps = [
    { percent: 0, label: 'No discount', isGreen: false },
    { percent: 5, label: 'Small savings', isGreen: true },
    { percent: 10, label: 'Small savings', isGreen: true },
    { percent: 20, label: 'Good savings', isGreen: true },
  ];

  const [stepIndex, setStepIndex] = useState(0);

  if (!isOpen) return null;

  const currentStep = steps[stepIndex];
  const progressPercent = (stepIndex / (steps.length - 1)) * 100;

  const sliderBackgroundStyle = {
    background: `linear-gradient(to right, #0066ff 0%, #0066ff ${progressPercent}%, #e2e8f0 ${progressPercent}%, #e2e8f0 100%)`,
  };

  const handleProceed = () => {
    if (currentStep.percent > 0) {
      if (onApplyDiscount) onApplyDiscount(currentStep.percent);
      alert(`Applied ${currentStep.percent}% financial aid discount!`);
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-card"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="financial-aid-title"
      >
        {/* Top Icon */}
        <div className="modal-top-icon-box">
          <Percent className="modal-percent-icon" />
        </div>

        {/* Modal Title */}
        <h3 id="financial-aid-title" className="modal-title">
          Can't afford? Tell us your budget—we'll make it work!
        </h3>

        {/* Discount Display */}
        <div className="modal-discount-row">
          <span className="modal-discount-number">{currentStep.percent}%</span>
          <span
            className={`modal-discount-tag ${
              currentStep.isGreen ? 'tag-green' : 'tag-gray'
            }`}
          >
            {currentStep.label}
          </span>
        </div>

        {/* Custom Range Slider */}
        <div className="modal-slider-wrap">
          <input
            type="range"
            min="0"
            max="3"
            step="1"
            value={stepIndex}
            onChange={(e) => setStepIndex(parseInt(e.target.value, 10))}
            className="custom-range-input"
            style={sliderBackgroundStyle}
            aria-label="Discount percentage selector"
          />
          <div className="slider-labels-row">
            <span>0%</span>
            <span>5%</span>
            <span>10%</span>
            <span>20%</span>
          </div>
        </div>

        {/* Helper Subtext */}
        <p className="modal-helper-text">
          Select your budget range and we'll match you with an Expert
        </p>

        {/* Conditions Box */}
        <div className="modal-conditions-card">
          <div className="conditions-heading">CONDITIONS</div>
          <div className="condition-item">
            <Globe className="condition-icon" />
            <span>I am flexible with experts from other countries</span>
          </div>
          <div className="condition-item">
            <Clock className="condition-icon" />
            <span>I am ok adjusting to the time zones</span>
          </div>

          {/* Alert recommendation */}
          <div className="recommendation-alert">
            <Sparkles className="alert-sparkle-icon" />
            <span className="alert-text">
              We recommend selecting the most appropriate discount tier you can afford, as the chosen tier directly impacts provider availability and quality.
            </span>
          </div>
        </div>

        {/* Proceed Action Button */}
        <button
          type="button"
          className="modal-proceed-btn"
          disabled={currentStep.percent === 0}
          onClick={handleProceed}
        >
          {currentStep.percent === 0
            ? 'Proceed'
            : `Proceed with ${currentStep.percent}% Discount`}
        </button>

        {/* Dismiss Button */}
        <button type="button" className="modal-dismiss-btn" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
