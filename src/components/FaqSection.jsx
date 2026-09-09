import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Phone, Mail } from 'lucide-react';
import './FaqSection.css';

const faqData = [
  {
    id: 1,
    question: 'What does Guided Support by Psychology Trainee treat?',
    answer:
      'Guided Support by Psychology Trainees helps with stress, mild-to-moderate anxiety, mood concerns, relationship issues, self-esteem, burnout, work-life balance, and personal growth under the active supervision of senior licensed clinical psychologists.',
  },
  {
    id: 2,
    question: 'Do Psychology Trainees prescribe medicines?',
    answer:
      'No, Psychology Trainees and counselors do not prescribe medications. If your condition requires psychiatric evaluation or pharmacological treatment, our team will smoothly connect you with a certified psychiatrist on our platform.',
  },
  {
    id: 3,
    question: 'How much does Guided Support by Psychology Trainees cost?',
    answer:
      'Our Therapy Intern programs are designed to be extremely affordable—typically at 1/5th the cost of standard therapy, starting from as low as ₹299 per session or ₹999 for monthly plans.',
  },
  {
    id: 4,
    question: 'How long does Guided Support by Psychology Trainees last?',
    answer:
      'Each live session typically lasts 45 to 50 minutes. Your full journey duration depends on your goals and chosen plan, ranging from a 1-week trial to comprehensive 3 or 6-month support programs.',
  },
  {
    id: 5,
    question: 'Can I switch from Guided Support by Psychology Trainees to a licensed therapist later?',
    answer:
      'Yes, absolutely! You can upgrade or switch to a fully licensed senior therapist at any time with complete continuity of your care records and notes.',
  },
  {
    id: 6,
    question: 'Is Guided Support by Psychology Trainees as effective as therapy with licensed therapists?',
    answer:
      'Clinical research shows that supervised psychology trainees provide highly effective empathetic care for everyday mental health challenges, emotional clarity, and stress reduction, supported by rigorous clinical oversight.',
  },
  {
    id: 7,
    question: 'How to Book and Join a Session with Your Expert?',
    answer:
      'After selecting your plan, you can choose your therapist or intern from our provider directory, pick a convenient date and time slot, and join the video or chat session directly via our web portal or mobile app.',
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="faq-section" aria-label="Frequently Asked Questions">
      <div className="faq-container">
        {/* Section Heading & Subtitle */}
        <div className="faq-heading-wrapper">
          <h2 className="faq-main-title">Have questions? We’re here to help.</h2>
          <div className="faq-title-underline" aria-hidden="true"></div>
          <p className="faq-subtitle">
            Everything you need to know before starting therapy.
          </p>
        </div>

        {/* FAQ Accordion Card Container */}
        <div className="faq-accordion-card">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'active' : ''}`}
                onClick={() => toggleFaq(item.id)}
              >
                <div className="faq-question-row">
                  <span className="faq-question-text">{item.question}</span>
                  <ChevronDown
                    className={`faq-arrow-icon ${isOpen ? 'rotated' : ''}`}
                    size={16}
                    strokeWidth={2.2}
                  />
                </div>
                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="still-questions-box">
          <h3 className="still-questions-title">Still have questions?</h3>
          <p className="still-questions-subtitle">
            Our support team is here to help you with any additional questions.
          </p>
          <div className="contact-buttons-row">
            <button
              type="button"
              className="contact-btn contact-support-btn"
              onClick={() => alert('Starting live support chat...')}
            >
              <MessageSquare size={14} />
              <span>Contact Support</span>
            </button>
            <button
              type="button"
              className="contact-btn call-us-btn"
              onClick={() => alert('Dialing customer helpline: +91 9136-xxx-xxx')}
            >
              <Phone size={14} />
              <span>Call Us</span>
            </button>
            <button
              type="button"
              className="contact-btn email-us-btn"
              onClick={() => (window.location.href = 'mailto:care@mantracare.com')}
            >
              <Mail size={14} />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
