import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import './VideoTestimonialsSection.css';

const testimonialsData = [
  {
    id: 1,
    name: 'Sarah Kim',
    story: 'Transformative experience with therapy intern',
    thumb: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/m_GiwZ-PM18?autoplay=1',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    story: 'Found affordable care when I needed it most',
    thumb: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/m_GiwZ-PM18?autoplay=1',
  },
  {
    id: 3,
    name: 'Rahul Sharma',
    story: 'It turned my mental health journey around',
    thumb: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/m_GiwZ-PM18?autoplay=1',
  },
  {
    id: 4,
    name: 'Elena Rostova',
    story: 'My therapist listened and guided me with care',
    thumb: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/m_GiwZ-PM18?autoplay=1',
  },
  {
    id: 5,
    name: 'David Miller',
    story: 'Compassionate and convenient online therapy',
    thumb: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=80',
    videoUrl: 'https://www.youtube.com/embed/m_GiwZ-PM18?autoplay=1',
  },
];

export default function VideoTestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const scrollContainerRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 220;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="video-testimonials-section" aria-label="Why MantraCare Customer Testimonials">
      <div className="testimonials-content-container">
        {/* Header Titles */}
        <div className="testimonials-header">
          <h2 className="testimonials-main-title">Why MantraCare</h2>
          <p className="testimonials-highlight">10,000+ Happy Customers Across the World</p>
          <p className="testimonials-subtext">Real stories from people who transformed their lives</p>
        </div>

        {/* Video Stories Carousel Track with Arrows */}
        <div className="video-stories-wrapper">
          <button
            type="button"
            className="story-nav-btn prev"
            onClick={() => handleScroll('left')}
            aria-label="Previous stories"
          >
            <ChevronLeft size={16} strokeWidth={2.5} />
          </button>

          <div className="stories-scroll-track" ref={scrollContainerRef}>
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="story-video-card"
                onClick={() => setActiveVideo(item)}
                role="button"
                tabIndex={0}
                aria-label={`Watch story of ${item.name}`}
              >
                <img src={item.thumb} alt={item.name} className="story-card-image" />
                <div className="story-card-overlay">
                  <div className="story-play-circle">
                    <Play className="story-play-icon" fill="white" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="story-nav-btn next"
            onClick={() => handleScroll('right')}
            aria-label="Next stories"
          >
            <ChevronRight size={16} strokeWidth={2.5} />
          </button>
        </div>

        {/* 3 Metric Stats at Bottom */}
        <div className="testimonials-stats-row">
          <div className="t-stat-col">
            <div className="t-stat-num">10,000+</div>
            <div className="t-stat-label">Happy Customers</div>
          </div>
          <div className="t-stat-col">
            <div className="t-stat-num">5000+</div>
            <div className="t-stat-label">Therapy Intern</div>
          </div>
          <div className="t-stat-col">
            <div className="t-stat-num">4.8/5</div>
            <div className="t-stat-label">Average Rating</div>
          </div>
        </div>
      </div>

      {/* Video Modal Popup */}
      {activeVideo && (
        <div className="video-modal-backdrop" onClick={() => setActiveVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="video-modal-close"
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              <X size={20} />
            </button>
            <div className="video-modal-iframe-wrap">
              <iframe
                src={activeVideo.videoUrl}
                title={activeVideo.name}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
