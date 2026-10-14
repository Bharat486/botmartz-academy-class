import React from 'react';
import './StudentTestimonials.css';
import { useInView } from '../hooks/useAnimations';

const testimonials = [
  {
    name: 'Aditya Sharma',
    role: 'SDE at Flipkart',
    initials: 'AS',
    rating: 5,
    quote: 'BOTMARTZ transformed my career. The live sessions with mentors were pure gold. Got a 3x salary hike at a product company!',
    badge: 'Alumni 2024'
  },
  {
    name: 'Neha Krishnan',
    role: 'ML Engineer at Startup',
    initials: 'NK',
    rating: 5,
    quote: 'The AI/ML batch was exceptional. Real projects, real feedback. Now I\'m building production models at a unicorn startup!',
    badge: 'Alumni 2025'
  },
  {
    name: 'Rahul Patel',
    role: 'Cloud Architect at TCS',
    initials: 'RP',
    rating: 5,
    quote: 'Got my AWS certification within 4 months. The mentors were always available and the assignments were incredibly practical.',
    badge: 'Alumni 2025'
  }
];

export default function StudentTestimonials() {
  const [ref, inView] = useInView();

  return (
    <section className="testimonials-section section" ref={ref} id="testimonials">
      <div className="container">
        {/* Banner with 4 Stats from Video */}
        <div className="metrics-banner card-3d">
          <div className="metric-box">
            <span className="metric-value">50K+</span>
            <span className="metric-label">STUDENTS TRAINED</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">98%</span>
            <span className="metric-label">PLACEMENT RATE</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">500+</span>
            <span className="metric-label">HIRING PARTNERS</span>
          </div>
          <div className="metric-box">
            <span className="metric-value">4.9★</span>
            <span className="metric-label">AVERAGE RATING</span>
          </div>
        </div>

        <div className="section-badge-wrap" style={{ marginTop: '60px' }}>
          <span className="badge badge-blue">STUDENT TESTIMONIALS</span>
        </div>
        <h2 className="section-title">
          Student <span className="highlight">Success Stories</span>
        </h2>
        <p className="section-subtitle">
          Real feedback from students who transformed their engineering careers with our cohorts.
        </p>

        <div className={`testimonials-grid ${inView ? 'testimonials-grid--visible' : ''}`}>
          {testimonials.map((t, i) => (
            <div key={t.name} className="testimonial-card card-3d" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="test-rating">
                {'★'.repeat(t.rating)}
              </div>
              <p className="test-quote">"{t.quote}"</p>
              
              <div className="test-author">
                <div className="test-avatar">{t.initials}</div>
                <div className="test-meta">
                  <h4 className="test-name">{t.name}</h4>
                  <p className="test-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
