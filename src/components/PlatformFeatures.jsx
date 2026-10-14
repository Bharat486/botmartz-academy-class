import React from 'react';
import './PlatformFeatures.css';
import { useInView } from '../hooks/useAnimations';

const features = [
  {
    icon: '🎙️',
    title: 'Live Class Attendance',
    description: 'Real-time attendance tracking with interactive Q&A, polls, and raise-hand features.'
  },
  {
    icon: '👥',
    title: 'Mentor Interaction',
    description: '1-on-1 sessions, doubt solving, code reviews, and career guidance from industry veterans.'
  },
  {
    icon: '📹',
    title: 'Session Recordings',
    description: 'Every class recorded and available instantly. Watch, rewatch, and learn at your own pace.'
  },
  {
    icon: '🧠',
    title: 'Smart Assignments',
    description: 'AI-graded assignments, peer reviews, and detailed feedback to accelerate your growth.'
  },
  {
    icon: '📊',
    title: 'Progress Analytics',
    description: 'Visual dashboards showing completion rates, skill scores, and weekly learning velocity.'
  },
  {
    icon: '🛡️',
    title: 'Verified Certificates',
    description: 'Blockchain-verified certificates recognized by 500+ hiring partners. Share on LinkedIn instantly.'
  },
  {
    icon: '📅',
    title: 'Smart Scheduling',
    description: 'AI-optimized class schedules with timezone support, reminders, and calendar sync.'
  },
  {
    icon: '💬',
    title: 'Student Community',
    description: 'Discord-powered community with study groups, hackathons, job boards, and alumni networks.'
  }
];

export default function PlatformFeatures() {
  const [ref, inView] = useInView();

  return (
    <section className="features-section section" ref={ref} id="platform-features">
      <div className="container">
        <div className="section-badge-wrap">
          <span className="badge badge-cyan">PLATFORM FEATURES</span>
        </div>
        <h2 className="section-title">
          Everything You Need to <span className="highlight">Succeed</span>
        </h2>
        <p className="section-subtitle">
          From first lesson to final certificate — a complete ecosystem for modern learners.
        </p>

        <div className={`features-grid ${inView ? 'features-grid--visible' : ''}`}>
          {features.map((f, i) => (
            <div key={f.title} className="feature-card card-3d" style={{ animationDelay: `${i * 60}ms` }}>
              <div className="feature-icon-box">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
