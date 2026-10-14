import React, { useState } from 'react';
import './WeeklySchedule.css';
import { useInView } from '../hooks/useAnimations';

const sessions = [
  {
    id: 1,
    time: '3:30 PM',
    day: 'TODAY',
    title: 'Advanced React State Management',
    mentor: 'Priya Sharma',
    duration: '90 min',
    isLiveSoon: true,
  },
  {
    id: 2,
    time: '10:00 AM',
    day: 'WEDNESDAY',
    title: 'System Design Masterclass — Microservices',
    mentor: 'Vikram Singh',
    duration: '120 min',
    isLiveSoon: false,
  },
  {
    id: 3,
    time: '6:00 PM',
    day: 'FRIDAY',
    title: 'Cloud Architecture & AWS Solutions Architect',
    mentor: 'Anita Kumar',
    duration: '90 min',
    isLiveSoon: false,
  }
];

export default function WeeklySchedule({ onJoinLive }) {
  const [ref, inView] = useInView();
  const [reminders, setReminders] = useState([]);

  const toggleReminder = (id) => {
    setReminders(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="schedule-section section" ref={ref} id="weekly-schedule">
      <div className="container">
        <div className="section-badge-wrap">
          <span className="badge badge-yellow">UPCOMING SESSIONS</span>
        </div>
        <h2 className="section-title">
          Your Weekly <span className="highlight">Schedule</span>
        </h2>
        <p className="section-subtitle">
          Interactive masterclasses, doubt sessions, and weekend coding workshops led by industry specialists.
        </p>

        <div className={`schedule-list ${inView ? 'schedule-list--visible' : ''}`}>
          {sessions.map((s) => (
            <div key={s.id} className="schedule-row card-3d">
              <div className="schedule-time-box">
                <span className="time-val">{s.time}</span>
                <span className="time-day">{s.day}</span>
              </div>

              <div className="schedule-info">
                <h3 className="session-title">{s.title}</h3>
                <div className="session-meta">
                  <span>Mentor: <strong>{s.mentor}</strong></span>
                  <span className="dot-sep">•</span>
                  <span>Duration: <strong>{s.duration}</strong></span>
                </div>
              </div>

              <div className="schedule-action">
                {s.isLiveSoon ? (
                  <div className="live-action-wrap">
                    <span className="live-badge-glow">
                      <span className="pulse-dot"></span> LIVE SOON
                    </span>
                    <button className="btn btn-primary btn-join" onClick={onJoinLive}>
                      Join Live Class
                    </button>
                  </div>
                ) : (
                  <button
                    className={`btn ${reminders.includes(s.id) ? 'btn-reminder-set' : 'btn-outline'}`}
                    onClick={() => toggleReminder(s.id)}
                  >
                    {reminders.includes(s.id) ? '✓ Reminder Set' : '🔔 Set Reminder'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
