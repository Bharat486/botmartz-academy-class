import React from 'react';
import './CorporateTraining.css';
import { useInView } from '../hooks/useAnimations';

export default function CorporateTraining({ onContactCorporate }) {
  const [ref, inView] = useInView();

  return (
    <section className="corp-section section" ref={ref} id="corporate-training">
      <div className="container">
        <div className={`corp-banner card-3d ${inView ? 'corp-banner--visible' : ''}`}>
          <div className="corp-left">
            <span className="badge badge-yellow">ENTERPRISE & HIGHER ED</span>
            <h2 className="corp-title">
              Upskill Your Team or <span className="highlight">Campus Cohort</span>
            </h2>
            <p className="corp-desc">
              BOTMARTZ Academy delivers tailored enterprise training in Gen AI, Full Stack Engineering, DSA, and Cloud DevOps. Over 40+ engineering colleges and tech firms partner with us for bespoke skill development and campus placement bootcamps.
            </p>

            <div className="corp-stats-grid">
              <div className="corp-stat-item">
                <span className="corp-num">40+</span>
                <span className="corp-lbl">Colleges Partnered</span>
              </div>
              <div className="corp-stat-item">
                <span className="corp-num">25+</span>
                <span className="corp-lbl">Enterprise Clients</span>
              </div>
              <div className="corp-stat-item">
                <span className="corp-num">95%</span>
                <span className="corp-lbl">Placement Rate</span>
              </div>
            </div>

            <div className="corp-actions">
              <button className="btn btn-primary" onClick={onContactCorporate}>
                Schedule Corporate Demo
              </button>
              <a href="#courses" className="btn btn-outline">
                Download Brochure
              </a>
            </div>
          </div>

          <div className="corp-right">
            <div className="corp-feature-box">
              <div className="corp-feat-icon">🎯</div>
              <div>
                <h5>Tailored Syllabus</h5>
                <p>Curriculum mapped directly to your tech stack or college accreditation requirements.</p>
              </div>
            </div>

            <div className="corp-feature-box">
              <div className="corp-feat-icon">💼</div>
              <div>
                <h5>Hiring & Placement Drives</h5>
                <p>Direct hiring pipeline connecting top graduates with our 500+ recruitment partners.</p>
              </div>
            </div>

            <div className="corp-feature-box">
              <div className="corp-feat-icon">⚡</div>
              <div>
                <h5>Dedicated Enterprise LMS</h5>
                <p>Branded portals, custom analytics, attendance tracking, and manager progress reports.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
