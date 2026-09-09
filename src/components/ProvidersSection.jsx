import React, { useRef } from 'react';
import {
  MapPin,
  Star,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
} from 'lucide-react';
import './ProvidersSection.css';

// Exact Calendar SVG from user
const CalendarIcon = () => (
  <svg
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="provider-svg-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// Exact Monitor/Screen SVG from user
const MonitorIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 576 512"
    className="provider-svg-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"></path>
  </svg>
);

// Exact Location Pin SVG from user
const LocationPinIcon = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 384 512"
    className="location-pin-icon"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path>
  </svg>
);

const providersData = [
  {
    id: 1,
    name: 'Aanchal Chopra',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    statusDot: 'grey',
    rating: 0,
    reviewCount: 2,
    availability: 'Thu, 9:00 AM',
    modes: [{ type: 'online', label: 'Online' }],
    bio: 'I am a psychology intern with experience supporting individuals through emotional and mental health...',
    tags: ['ADHD', 'Anxiety', 'Bipolar Disorder', 'Teen / Child', 'Depression'],
    moreTagsCount: 3,
    location: 'Mumbai, Maharashtra, India',
  },
  {
    id: 2,
    name: 'Sowmya K',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
    statusDot: 'green',
    rating: 4,
    reviewCount: 32,
    availability: 'Thu, 9:00 AM',
    modes: [{ type: 'online', label: 'Online' }],
    bio: "As a dedicated therapy intern with a Master's in Psychology, I specialize in supporting individuals,...",
    tags: ['Self Esteem', 'Addiction Treatment', 'Anger Management', 'Anxiety', 'Teen / Child'],
    moreTagsCount: 0,
    location: 'Bengaluru, Karnataka, India',
  },
  {
    id: 3,
    name: 'Ayush Singh',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    statusDot: 'green',
    rating: 5,
    reviewCount: 21,
    availability: 'Today, 7:30 PM',
    modes: [{ type: 'online', label: 'Online' }],
    bio: 'As a therapy intern at Mantra Care, I specialize in supporting individuals and teams navigating issues...',
    tags: ['Addiction Treatment', 'Anger Management', 'Anxiety', 'Self Esteem', 'Anger Management'],
    moreTagsCount: 8,
    location: 'Lucknow, Uttar Pradesh, India',
  },
  {
    id: 4,
    name: 'Mehak Makkar',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    statusDot: 'green',
    rating: 1,
    reviewCount: 1,
    availability: 'Today, 7:00 PM',
    modes: [{ type: 'online', label: 'Online' }],
    bio: 'As a psychologist, I seek to understand the unique place a person is coming from and their specific...',
    tags: ['ADHD', 'Self Esteem', 'Addiction Treatment', 'Anger Management', 'Anxiety'],
    moreTagsCount: 16,
    location: 'Faridabad, Haryana, India',
  },
  {
    id: 5,
    name: 'Somya P',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    statusDot: 'amber',
    rating: 4,
    reviewCount: 8,
    availability: 'Today, 7:30 PM',
    modes: [{ type: 'online', label: 'Online' }],
    bio: "I am a psychologist with a Master's degree in Psychology, specializing in stress, relationship...",
    tags: ['Self Esteem', 'Anxiety', 'Relationship/ Couple'],
    moreTagsCount: 4,
    location: 'Malegaon, Maharashtra, India',
  },
  {
    id: 6,
    name: 'KRITIKA SINGH',
    role: 'Therapist Intern',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    statusDot: 'grey',
    rating: 0,
    reviewCount: 9,
    availability: 'Thu, 11:00 AM',
    modes: [
      { type: 'in-person', label: 'In-person' },
      { type: 'online', label: 'Online' },
    ],
    bio: 'As a Therapy Intern with an M.Sc. in Clinical Psychology, I work with adolescents and adults...',
    tags: ['ADHD', 'Teen / Child', 'Anxiety'],
    moreTagsCount: 5,
    location: 'Delhi, Delhi, India',
  },
];

export default function ProvidersSection() {
  const scrollTrackRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollTrackRef.current) {
      const card = scrollTrackRef.current.querySelector('.provider-card');
      const scrollAmount = card ? card.offsetWidth + 16 : 300;
      scrollTrackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      className="providers-section"
      aria-label="Providers from India & the world"
    >
      <div className="providers-container">
        {/* Header with Title and Cyan Underline */}
        <div className="providers-heading-wrap">
          <h2 className="providers-title">
            Choose from 5000+ Providers from India &amp; the world
          </h2>
          <div className="providers-title-underline" aria-hidden="true"></div>
          <p className="providers-subtitle">
            Buy a plan, choose an expert, and switch until you find the right fit
          </p>
        </div>

        {/* Providers Carousel Wrapper */}
        <div className="providers-carousel-wrapper">
          {/* Left Arrow Button */}
          <button
            type="button"
            className="carousel-nav-btn prev"
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
          >
            <ChevronLeft size={18} strokeWidth={2.5} />
          </button>

          {/* Scrollable Track */}
          <div
            className="providers-scroll-track"
            ref={scrollTrackRef}
          >
            {providersData.map((provider) => (
              <div key={provider.id} className="provider-card">
                <div>
                  {/* Top Section: Avatar on left, (Status Dot + Stars + Name + Role) on right */}
                  <div className="provider-top-row">
                    <img
                      src={provider.avatar}
                      alt={provider.name}
                      className="provider-avatar"
                    />

                    <div className="provider-name-info">
                      <div className="provider-rating-line">
                        {provider.statusDot && (
                          <span
                            className={`status-dot-inline ${provider.statusDot}`}
                            title={`Status: ${provider.statusDot}`}
                          ></span>
                        )}
                        <div className="stars-group">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`star-icon ${
                                i < provider.rating ? '' : 'unfilled'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="rating-count-text">
                          ({provider.reviewCount} users)
                        </span>
                      </div>

                      <h4 className="provider-name">{provider.name}</h4>
                      <p className="provider-role">{provider.role}</p>
                    </div>
                  </div>

                  {/* Available Date & Time Box */}
                  <div className="provider-availability-row">
                    <div className="provider-icon-badge">
                      <CalendarIcon />
                    </div>
                    <div>
                      <span className="avail-label">Available:</span>
                      <span className="avail-time">{provider.availability}</span>
                    </div>
                  </div>

                  {/* Delivery Modes */}
                  <div className="provider-modes-row">
                    {provider.modes.map((m, idx) => (
                      <div key={idx} className="mode-item">
                        <div className="provider-icon-badge">
                          {m.type === 'online' && <MonitorIcon />}
                          {m.type === 'in-person' && <User size={16} />}
                          {m.type === 'seminar' && <Users size={16} />}
                        </div>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Bio snippet */}
                  <p className="provider-bio">{provider.bio}</p>

                  {/* Speciality Tags */}
                  <div className="provider-tags-wrap">
                    {provider.tags.map((tag, idx) => (
                      <span key={idx} className="specialty-tag">
                        {tag}
                      </span>
                    ))}
                    {provider.moreTagsCount > 0 && (
                      <span className="specialty-tag more-tag">
                        +{provider.moreTagsCount} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Location Footer */}
                <div className="provider-location">
                  <LocationPinIcon />
                  <span>{provider.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            type="button"
            className="carousel-nav-btn next"
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
          >
            <ChevronRight size={18} strokeWidth={2.5} />
          </button>
        </div>
      </div>

      {/* Floating Chat Support Action Button */}
      <button
        type="button"
        className="floating-chat-btn"
        aria-label="Open support chat"
        onClick={() => alert('Opening 24/7 Support Chat...')}
      >
        <MessageCircle className="chat-bubble-icon" />
      </button>
    </section>
  );
}
