import React from 'react';
import { useInView } from '../hooks/useAnimations';
import ThreeHeroCanvas from './ThreeHeroCanvas';
import './Hero.css';

export default function Hero({ onEnrollClick, onWatchDemo }) {
  const [ref, inView] = useInView();

  return (
    <section className="hero section" id="hero" ref={ref}>
      <div className="container hero__grid">
        {/* Left — Text Content */}
        <div className={`hero__content ${inView ? 'hero__content--visible' : ''}`}>
          <div className="hero__badges">
            <span className="badge badge-blue">⚡ NEXT-GEN LEARNING PLATFORM</span>
            <span className="badge badge-yellow">
              <span className="badge__dot" />
              AI-POWERED COHORTS
            </span>
          </div>

          <h1 className="hero__title">
            Master Skills at the <br />
            <span className="highlight">Speed of Tomorrow</span>
          </h1>

          <p className="hero__desc">
            Join live classes, access expert mentors, track your progress, and earn verified certificates. Real-time cohort learning built for the next generation of digital engineers.
          </p>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-num">50K+</span>
              <span className="hero__stat-label">Active Students</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">200+</span>
              <span className="hero__stat-label">Expert Mentors</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">1,200+</span>
              <span className="hero__stat-label">Courses Available</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-num">98%</span>
              <span className="hero__stat-label">Placement Rate</span>
            </div>
          </div>

          <div className="hero__actions">
            <button className="btn btn-primary btn--lg" onClick={onEnrollClick}>
              <span className="hero-btn-icon">⚡</span>
              Join Live Class Now
            </button>
            <button className="btn btn-outline btn--lg" onClick={onWatchDemo}>
              <span className="hero-btn-icon">▶</span>
              Watch Demo
            </button>
          </div>

          <div className="hero-live-now-ticker">
            <span className="ticker-live-dot"></span>
            <span className="ticker-text">
              <strong>LIVE NOW:</strong> Advanced React Architecture · 847 students attending | Next: System Design in 2h 15m
            </span>
          </div>
        </div>

        {/* Right — 3D Visual with Interactive Circular Rounding Motion */}
        <div className={`hero__visual ${inView ? 'hero__visual--visible' : ''}`}>
          <div className="hero__3d-scene">
            {/* Embedded 3D Canvas with Rounding Orbits */}
            <div className="three-canvas-container">
              <ThreeHeroCanvas />
            </div>

            {/* Floating Card 1: Live Code Snippet */}
            <div className="hero__float-card hero__float-card--code">
              <div className="code-header">
                <div className="code-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-filename">binary_search.py</span>
              </div>
              <pre className="hero__code">
                <code>
                  <span className="ck-kw">def</span> <span className="ck-fn">binary_search</span>(arr, target):{'\n'}
                  {'  '}low, high = 0, len(arr) - 1{'\n'}
                  {'  '}<span className="ck-kw">while</span> low &lt;= high:{'\n'}
                  {'    '}mid = (low + high) // 2{'\n'}
                  {'    '}<span className="ck-kw">return</span> mid
                </code>
              </pre>
            </div>

            {/* Floating Card 2: Agentic Gen AI */}
            <div className="hero__float-card hero__float-card--ai">
              <div className="hero__icon-card">
                <span className="card-chip-icon">🤖</span>
                <div className="card-chip-text">
                  <strong className="chip-title">Agentic Gen AI</strong>
                  <span className="chip-sub">LLM &amp; RAG Pipelines</span>
                </div>
                <span className="chip-badge-live">Active</span>
              </div>
            </div>

            {/* Floating Card 3: Python & DSA */}
            <div className="hero__float-card hero__float-card--dsa">
              <div className="hero__icon-card">
                <span className="card-chip-icon">🐍</span>
                <div className="card-chip-text">
                  <strong className="chip-title">Python &amp; DSA</strong>
                  <span className="chip-sub">LeetCode Hard Ready</span>
                </div>
                <span className="chip-badge-gold">Top 1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
