import React, { useState } from 'react';
import './StudentDashboardHub.css';
import { useInView } from '../hooks/useAnimations';

export default function StudentDashboardHub({ onJoinLive }) {
  const [ref, inView] = useInView();
  const [completedAssignments, setCompletedAssignments] = useState([]);

  const toggleAssignment = (id) => {
    setCompletedAssignments(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  return (
    <section className="hub-section section" ref={ref} id="learning-hub">
      <div className="container">
        <div className="section-badge-wrap">
          <span className="badge badge-yellow">STUDENT DASHBOARD</span>
        </div>
        <h2 className="section-title">
          Your <span className="highlight">Learning Hub</span>
        </h2>
        <p className="section-subtitle">
          Track progress, attend live classes, submit assignments, and connect with your mentor — all in one place.
        </p>

        <div className={`hub-dashboard card-3d ${inView ? 'hub-dashboard--visible' : ''}`}>
          {/* Top Banner: Next Live Class */}
          <div className="hub-live-banner">
            <div className="live-banner-left">
              <span className="live-status-pill">
                <span className="pulse-dot"></span> LIVE IN 45 MIN
              </span>
              <span className="live-time">Today, 3:30 PM</span>
              <h3 className="live-class-title">
                Advanced State Management in React — Redux Toolkit Deep Dive
              </h3>
              <p className="live-class-meta">
                Mentor: <strong>Priya Sharma</strong> · Module 8 of 12
              </p>
            </div>
            <div className="live-banner-right">
              <button className="btn btn-primary btn-live" onClick={onJoinLive}>
                <span className="live-antenna">📡</span> Join Live Class
              </button>
            </div>
          </div>

          {/* Grid: Profile & Progress on left, Assignments on right */}
          <div className="hub-content-grid">
            {/* Left: Student Profile & Module Progress */}
            <div className="hub-profile-pane">
              <div className="student-profile-card">
                <div className="student-avatar">AR</div>
                <div className="student-info">
                  <h4 className="student-name">Arjun Reddy</h4>
                  <p className="student-batch">Full Stack · Batch 12</p>
                </div>
              </div>

              <div className="stats-row">
                <div className="stat-box">
                  <span className="stat-num">72%</span>
                  <span className="stat-lbl">PROGRESS</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">24</span>
                  <span className="stat-lbl">CLASSES</span>
                </div>
                <div className="stat-box">
                  <span className="stat-num">8</span>
                  <span className="stat-lbl">PENDING</span>
                </div>
              </div>

              <div className="module-progress-wrap">
                <h5 className="module-title">Module Progress</h5>
                
                <div className="progress-item">
                  <div className="progress-header">
                    <span>React Fundamentals</span>
                    <span className="progress-val">92%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill fill-react" style={{ width: '92%' }}></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-header">
                    <span>Node.js & APIs</span>
                    <span className="progress-val">67%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill fill-node" style={{ width: '67%' }}></div>
                  </div>
                </div>

                <div className="progress-item">
                  <div className="progress-header">
                    <span>Database Design</span>
                    <span className="progress-val">41%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div className="progress-bar-fill fill-db" style={{ width: '41%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Pending Assignments */}
            <div className="hub-assignments-pane">
              <h5 className="pane-title">Pending Assignments</h5>
              <div className="assignments-list">
                <div 
                  className={`assignment-card ${completedAssignments.includes(1) ? 'assignment-card--done' : ''}`}
                  onClick={() => toggleAssignment(1)}
                >
                  <div className="assignment-left">
                    <span className="assignment-check">{completedAssignments.includes(1) ? '✓' : '○'}</span>
                    <div>
                      <h6 className="assignment-heading">Build a REST API with authentication</h6>
                      <p className="assignment-sub">Express.js, JWT, Bcrypt password hashing</p>
                    </div>
                  </div>
                  <span className="due-badge due-urgent">Due Tomorrow</span>
                </div>

                <div 
                  className={`assignment-card ${completedAssignments.includes(2) ? 'assignment-card--done' : ''}`}
                  onClick={() => toggleAssignment(2)}
                >
                  <div className="assignment-left">
                    <span className="assignment-check">{completedAssignments.includes(2) ? '✓' : '○'}</span>
                    <div>
                      <h6 className="assignment-heading">Deploy Node.js app to AWS EC2</h6>
                      <p className="assignment-sub">Nginx reverse proxy & SSL setup</p>
                    </div>
                  </div>
                  <span className="due-badge due-medium">In 3 Days</span>
                </div>

                <div 
                  className={`assignment-card ${completedAssignments.includes(3) ? 'assignment-card--done' : ''}`}
                  onClick={() => toggleAssignment(3)}
                >
                  <div className="assignment-left">
                    <span className="assignment-check">{completedAssignments.includes(3) ? '✓' : '○'}</span>
                    <div>
                      <h6 className="assignment-heading">Quiz: Database Normalization</h6>
                      <p className="assignment-sub">1NF, 2NF, 3NF & BCNF theoretical evaluation</p>
                    </div>
                  </div>
                  <span className="due-badge due-normal">In 1 Week</span>
                </div>
              </div>

              {/* Quick Doubt Support prompt */}
              <div className="hub-doubt-card">
                <div className="doubt-icon">💬</div>
                <div className="doubt-text">
                  <h6>Need help with an assignment?</h6>
                  <p>Mentors are available on Discord & live office hours today at 5:00 PM.</p>
                </div>
                <button className="btn btn-outline btn-doubt">Ask Mentor</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
