import React, { useState } from 'react';
import './CourseBatches.css';
import { useInView } from '../hooks/useAnimations';
import DSAInteractiveVisualizer from './DSAInteractiveVisualizer';
import GenAIInteractiveVisualizer from './GenAIInteractiveVisualizer';
import Course3DFloatingVisual from './Course3DFloatingVisual';

export const FLAGSHIP_COURSES = [
  {
    id: 'dsa-bootcamp',
    categoryIcon: '</>',
    categoryName: 'Programming',
    statusBadge: 'Enrolling Now • ₹1,999',
    statusType: 'enrolling',
    bannerImg: '/dsa_python_banner.jpg',
    bannerTags: [
      'Arrays & Strings',
      'Linked Lists',
      'Stacks & Queues',
      'Trees & Graphs',
      'Dynamic Programming'
    ],
    title: 'Data Structures & Algorithms Bootcamp (Python)',
    subtitle: 'Stop memorizing solutions. Start learning how to solve problems.',
    description: 'Master DSA patterns in Python. 100+ hands-on problems, live classes, and placement coaching.',
    capstone: 'Algorithmic Problem-Solving Workspace',
    focusTopics: [
      { name: 'Python Basics', col: 1 },
      { name: 'Arrays & Strings', col: 1 },
      { name: 'Linked Lists', col: 1 },
      { name: 'Stacks & Queues', col: 2 },
      { name: 'Trees & Graphs', col: 2 },
      { name: 'Dynamic Programming', col: 2 }
    ],
    price: '₹1,999',
    originalPrice: '₹4,999',
    discount: '60% OFF',
    seats: 'Strictly 20 Seats / Batch',
    enrollData: {
      title: 'Data Structures & Algorithms Bootcamp (Python)',
      price: '₹1,999',
      duration: '8 Weeks · Live Cohort',
      badge: 'Batch 1 Enrolling'
    }
  },
  {
    id: 'genai-bootcamp',
    categoryIcon: '✨',
    categoryName: 'AI & Engineering',
    statusBadge: 'Batch 1 • ₹40,000 / $500',
    statusType: 'batch1',
    bannerImg: '/genai_bootcamp_banner.jpg',
    bannerTags: [
      'LLMs',
      'RAG',
      'LangChain',
      'AI Agents',
      'Deployments'
    ],
    title: 'Generative AI Engineering Bootcamp',
    subtitle: 'Stop playing with toys. Build production-grade AI systems from first principles.',
    description: 'Build modern AI apps with LLMs, RAG, and LangChain. No prior ML experience required.',
    capstone: 'Track A: Grounded Enterprise RAG Application',
    focusTopics: [
      { name: 'LLM Fundamentals', col: 1 },
      { name: 'Prompt Engineering', col: 1 },
      { name: 'RAG and Vector Databases', col: 1 },
      { name: 'Agentic AI Systems', col: 2 },
      { name: 'Model Deployment', col: 2 },
      { name: 'Capstone Project', col: 2 }
    ],
    price: '₹40,000 / $500',
    originalPrice: '₹60,000',
    discount: 'Early Bird',
    seats: 'Strictly 20 Seats / Batch',
    enrollData: {
      title: 'Generative AI Engineering Bootcamp',
      price: '₹40,000 / $500',
      duration: '10 Weeks · Advanced Cohort',
      badge: 'Batch 1 Priority'
    }
  }
];

export default function CourseBatches({ onSelectCourse, onWatchDemo, onOpenCourseDetail }) {
  const [ref, inView] = useInView();
  const [bannerModes, setBannerModes] = useState({
    'dsa-bootcamp': '3d',
    'genai-bootcamp': '3d'
  });

  const toggleBannerMode = (courseId, mode) => {
    setBannerModes(prev => ({ ...prev, [courseId]: mode }));
  };

  const handleBannerClick = (e, courseId) => {
    // If click was on a button inside the banner, let the button handle it
    if (e.target.closest('button')) return;
    if (onOpenCourseDetail) {
      onOpenCourseDetail(courseId);
    }
  };

  return (
    <section className="courses-section section" ref={ref} id="all-courses">
      <div className="container">
        {/* Top Urgency Header Pill */}
        <div className="seats-urgency-strip">
          <div className="seats-urgency-pill">
            <span className="urgency-pulse-dot"></span>
            <span className="urgency-icon">🔥</span>
            <span className="urgency-bold">BATCH 1:</span> Only 4 of 20 Seats Remaining
          </div>
        </div>

        <div className="section-badge-wrap">
          <span className="badge badge-blue">FLAGSHIP PROGRAMS</span>
        </div>
        <h2 className="section-title">
          Live Cohort <span className="highlight">Bootcamps</span>
        </h2>
        <p className="section-subtitle">
          Engineered for real engineering rigor. Small interactive batches capped at strictly 20 students, with live coding sessions and 1:1 mentor code reviews.
        </p>

        {/* 2 Flagship Courses matching Image 4 reference design */}
        <div className={`flagship-courses-grid ${inView ? 'flagship-courses-grid--visible' : ''}`}>
          {FLAGSHIP_COURSES.map((course, idx) => {
            const currentMode = bannerModes[course.id] || 'animation';

            return (
              <div
                key={course.id}
                className="flagship-card card-3d"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Card Top Category & Status Header */}
                <div className="flagship-card__top">
                  <div className="flagship-card__category">
                    <span className="category-icon-box">{course.categoryIcon}</span>
                    <span className="category-name">{course.categoryName}</span>
                  </div>

                  <div className={`flagship-card__status-pill flagship-card__status-pill--${course.statusType}`}>
                    <span className="status-dot"></span>
                    <span>{course.statusBadge}</span>
                  </div>
                </div>

                {/* Course Visual Banner / Interactive Visualizer Wrap (CLICKABLE TO OPEN COURSE DETAIL) */}
                <div
                  className={`flagship-card__banner-wrap ${currentMode === 'animation' ? 'flagship-card__banner-wrap--sim' : 'flagship-card__banner-wrap--image'} flagship-card__banner-wrap--clickable`}
                  onClick={(e) => handleBannerClick(e, course.id)}
                  role="button"
                  tabIndex={0}
                  title="Click to view full course details, syllabus & batch schedule"
                >
                  {/* Floating Click-to-Explore Pill Overlay */}
                  <div className="banner-explore-pill-overlay">
                    <span className="explore-pill-icon">🔍</span>
                    <span>Click for Full Syllabus & Schedule</span>
                    <span className="explore-pill-arrow">→</span>
                  </div>

                  {currentMode === 'animation' ? (
                    <div className="flagship-card__vis-container">
                      {course.id === 'dsa-bootcamp' ? (
                        <DSAInteractiveVisualizer />
                      ) : (
                        <GenAIInteractiveVisualizer />
                      )}
                    </div>
                  ) : currentMode === 'image' ? (
                    <>
                      <img
                        src={course.bannerImg}
                        alt={course.title}
                        className="flagship-card__banner-img"
                        loading="lazy"
                      />

                      {/* Left Floating Topic Tags (Glassmorphism Overlay) */}
                      <div className="flagship-banner__tags-overlay">
                        {course.bannerTags.map((tag, tIdx) => (
                          <div key={tIdx} className="banner-tag-item">
                            <span className="tag-bullet">•</span>
                            <span>{tag}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  ) : (
                    /* Default 3D Floating Scene matching Image 1 & 2 Reference */
                    <div className="flagship-card__vis-container flagship-card__vis-container--3d">
                      <Course3DFloatingVisual courseId={course.id} compact={true} />
                    </div>
                  )}

                  {/* Banner Bottom Controls */}
                  <div className="flagship-banner__bottom-bar">
                    <div className="banner-seats-badge">
                      <span className="seats-icon">👥</span>
                      <span>{course.seats}</span>
                    </div>

                    <div className="banner-bottom-actions">
                      <div className="flagship-banner__mode-toggle">
                        <button
                          type="button"
                          className={`mode-toggle-btn ${currentMode === '3d' ? 'mode-toggle-btn--active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBannerMode(course.id, '3d');
                          }}
                          title="Floating 3D Scene"
                        >
                          <span className="mode-toggle-icon">✨</span>
                          <span>3D</span>
                        </button>
                        <button
                          type="button"
                          className={`mode-toggle-btn ${currentMode === 'animation' ? 'mode-toggle-btn--active' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleBannerMode(course.id, 'animation');
                          }}
                          title="Live Interactive Simulation"
                        >
                          <span className="mode-toggle-icon">⚡</span>
                          <span>Sim</span>
                        </button>
                      </div>

                      <button
                        type="button"
                        className="banner-preview-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onWatchDemo) onWatchDemo();
                        }}
                      >
                        <span className="play-icon">▶</span>
                        <span>Watch Preview</span>
                      </button>
                    </div>
                  </div>
                </div>

              {/* Title, Subtitle & Description */}
              <div className="flagship-card__main-info">
                <h3
                  className="flagship-card__title flagship-card__title--clickable"
                  onClick={() => onOpenCourseDetail && onOpenCourseDetail(course.id)}
                  title="Click to view full course details & syllabus"
                >
                  {course.title}
                </h3>
                <p className="flagship-card__subtitle">{course.subtitle}</p>
                <p className="flagship-card__desc">{course.description}</p>
              </div>

              {/* Capstone Deliverable Card */}
              <div
                className="flagship-capstone-box"
                onClick={() => onOpenCourseDetail ? onOpenCourseDetail(course.id) : onSelectCourse && onSelectCourse(course.enrollData)}
                role="button"
                tabIndex={0}
                title="Click to view capstone deliverables"
              >
                <div className="capstone-icon-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                  </svg>
                </div>
                <div className="capstone-text">
                  <span className="capstone-label">CAPSTONE DELIVERABLE:</span>
                  <span className="capstone-title">{course.capstone}</span>
                </div>
                <div className="capstone-arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>

              {/* Focus Topics (2 Columns with Blue Checkmarks) */}
              <div className="flagship-focus-wrap">
                <div className="focus-header-label">FOCUS TOPICS:</div>
                <div className="focus-topics-grid">
                  <div className="focus-col">
                    {course.focusTopics.filter(t => t.col === 1).map((topic, i) => (
                      <div key={i} className="focus-topic-item">
                        <span className="focus-check-circle">✓</span>
                        <span className="focus-topic-name">{topic.name}</span>
                      </div>
                    ))}
                  </div>
                  <div className="focus-col">
                    {course.focusTopics.filter(t => t.col === 2).map((topic, i) => (
                      <div key={i} className="focus-topic-item">
                        <span className="focus-check-circle">✓</span>
                        <span className="focus-topic-name">{topic.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer: Pricing and CTA Buttons */}
              <div className="flagship-card__footer">
                <div className="flagship-pricing">
                  <div className="price-row">
                    <span className="current-price">{course.price}</span>
                    {course.originalPrice && (
                      <span className="original-price">{course.originalPrice}</span>
                    )}
                  </div>
                  <span className="pricing-note">Live Interactive Cohort</span>
                </div>

                <div className="flagship-card__actions">
                  <button
                    type="button"
                    className="btn btn-outline flagship-details-btn"
                    onClick={() => onOpenCourseDetail && onOpenCourseDetail(course.id)}
                    title="View syllabus, schedule and details"
                  >
                    <span>View Details</span>
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary flagship-enroll-btn"
                    onClick={() => onSelectCourse && onSelectCourse(course.enrollData)}
                  >
                    <span>Join Cohort</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
