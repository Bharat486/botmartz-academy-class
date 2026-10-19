import React from 'react';
import { useInView } from '../hooks/useAnimations';
import './CourseComparison.css';

// High-ROI Comparison Data (vs. ₹3.9L Corporate EdTech)
const ROI_ROWS = [
  {
    vector: 'Tuition Fee (Total Cost)',
    traditional: '₹1,00,000 – ₹3,99,000 (Scaler / upGrad)',
    botmartz: '₹40,000 INR / $500 USD (1/10th the Cost)',
    note: 'Massive corporate overhead vs. lean engineering pricing'
  },
  {
    vector: 'Batch Size & Candidate Ratio',
    traditional: '150 – 500+ Mass Webinar Calls',
    botmartz: 'Strictly 20 Candidates Maximum',
    note: 'Impersonal webinar halls vs. tight cohort cohort intimacy'
  },
  {
    vector: 'Curriculum Depth & Stack',
    traditional: 'Toy Jupyter notebooks & basic API calls',
    botmartz: 'FastAPI, Redis Caching, Docker Hardening, LangGraph & AWS CI/CD',
    note: 'Outdated toy syntax vs. true production architecture'
  },
  {
    vector: 'Mentorship & Code Defense',
    traditional: 'Junior TAs / Automated Grading Bots',
    botmartz: 'Direct 1:1 Live Reviews with Principal Architect',
    note: 'Automated checkers vs. line-by-line architectural critique'
  },
  {
    vector: 'Post-Bootcamp Support',
    traditional: 'Course ends on last lecture; portal locked',
    botmartz: 'Dedicated 4-Week Production Support Month Included',
    note: 'Locked out vs. ongoing real-world deployment guidance'
  },
  {
    vector: 'Personal Branding & Career',
    traditional: 'Generic certificate on LinkedIn',
    botmartz: 'Viral LinkedIn breakdown teardowns & verified GitHub deliverables',
    note: 'Paper credentials vs. provable engineering proof-of-work'
  }
];

export default function CourseComparison() {
  const [ref, inView] = useInView();

  return (
    <section className="comp section" ref={ref} id="courses">
      <div className="container">
        {/* Section Intro */}
        <div className="comp__header-center">
          <div className="section-badge-wrap">
            <span className="badge badge-blue">VALUE BENCHMARK</span>
          </div>
          <h2 className="section-title">
            Why <span className="highlight">BOTMARTZ</span> Stands Out
          </h2>
          <p className="section-subtitle">
            See how our live engineering cohort compares against expensive ₹3.9L corporate edtech with verified production deliverables.
          </p>
        </div>

        {/* ========================================================
            CARD 1: Table - Botmartz vs. ₹3.9L Corporate EdTech
           ======================================================== */}
        <div className={`comp__card roi-comp-card ${inView ? 'comp__card--visible' : ''}`}>
          {/* Header row matching user reference */}
          <div className="roi-header-row">
            <div className="roi-header-left">
              <span className="roi-badge">
                <span>🏆</span> UNMATCHED ENGINEERING ROI
              </span>
              <h3 className="roi-title">
                Why Botmartz vs. <span className="highlight-coral">₹3.9L Corporate EdTech</span>
              </h3>
              <p className="roi-subtitle">
                We don't charge you for celebrity endorsements or campus overhead. You pay purely for deep engineering mentorship and verified production deliverables.
              </p>
            </div>

            <div className="roi-header-right">
              <div className="roi-seats-pill">
                <span className="pill-star">✨</span>
                <span>Strictly 20 Seats per Batch</span>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="comp__table-responsive">
            <table className="roi-table">
              <thead>
                <tr>
                  <th className="col-vector">COMPARISON VECTOR</th>
                  <th className="col-traditional">TRADITIONAL EDTECH (SCALER / UPGRAD)</th>
                  <th className="col-botmartz">BOTMARTZ CLASSES</th>
                </tr>
              </thead>
              <tbody>
                {ROI_ROWS.map((row, idx) => (
                  <tr key={idx} className="roi-row">
                    <td className="roi-vector-cell">
                      <span className="vector-title">{row.vector}</span>
                    </td>

                    <td className="roi-traditional-cell">
                      <div className="roi-cell-content">
                        <span className="roi-cross-mark">✕</span>
                        <span className="roi-traditional-text">{row.traditional}</span>
                      </div>
                    </td>

                    <td className="roi-botmartz-cell">
                      <div className="roi-cell-content">
                        <span className="roi-check-mark">✓</span>
                        <span className="roi-botmartz-text">{row.botmartz}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
