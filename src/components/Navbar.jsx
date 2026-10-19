import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';

export const NAVBAR_COURSES = [
  {
    id: 'dsa',
    title: 'DSA with Python Bootcamp',
    sub: '8 Weeks Live · 100+ Problems & Placement Prep',
    badge: '₹1,999',
    badgeType: 'price',
    targetId: 'all-courses',
    enrollData: {
      title: 'Data Structures & Algorithms Bootcamp (Python)',
      price: '₹1,999',
      duration: '8 Weeks (Live Cohort)',
      badge: 'Batch 1 • Enrolling Now'
    }
  },
  {
    id: 'genai',
    title: 'Generative AI Engineering',
    sub: '10 weeks · LLMs, RAG & Agent Workflows',
    badge: '₹40,000',
    badgeType: 'waitlist',
    targetId: 'all-courses',
    enrollData: {
      title: 'Generative AI Engineering Bootcamp',
      price: '₹40,000 / $500',
      duration: '10 weeks (Live Cohort)',
      badge: 'Batch 1 Priority'
    }
  }
];

export default function Navbar({ onEnrollClick, currentView = 'home', onNavigateHome, onNavigateToCourse }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('botmartz_theme');
      return saved === 'dark';
    }
    return false;
  });

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Sync theme with document & localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
      localStorage.setItem('botmartz_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      document.body.classList.remove('dark-mode');
      localStorage.setItem('botmartz_theme', 'light');
    }
  }, [darkMode]);

  // Handle sticky scroll effect & active item detection
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);

      if (currentView === 'course-detail') {
        setActiveNav('courses');
        return;
      }

      const scrollPos = window.scrollY + 120;
      const contactSec = document.getElementById('contact');
      const coursesSec = document.getElementById('all-courses');
      const heroSec = document.getElementById('hero');

      if (contactSec && scrollPos >= contactSec.offsetTop - 100) {
        setActiveNav('contact');
      } else if (coursesSec && scrollPos >= coursesSec.offsetTop) {
        setActiveNav('courses');
      } else if (heroSec && scrollPos < 600) {
        setActiveNav('home');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [currentView]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 992) {
        setMobileOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  // Click outside to dismiss desktop dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setCoursesDropdownOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCoursesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  const handleNavigateToSection = (targetId, navKey, e) => {
    if (e) e.preventDefault();
    if (navKey) setActiveNav(navKey);
    setCoursesDropdownOpen(false);
    setMobileOpen(false);

    if (currentView === 'course-detail') {
      if (onNavigateHome) {
        onNavigateHome(targetId === 'top' ? null : targetId);
      }
      return;
    }

    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleCourseItemClick = (course, e) => {
    if (e) e.preventDefault();
    setCoursesDropdownOpen(false);
    setMobileOpen(false);
    setActiveNav('courses');

    const courseId = course.id === 'dsa' ? 'dsa-bootcamp' : 'genai-bootcamp';
    if (onNavigateToCourse) {
      onNavigateToCourse(courseId);
    } else {
      const element = document.getElementById(course.targetId);
      if (element) {
        const yOffset = -75;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  const handleApplyClick = (e) => {
    if (e) e.preventDefault();
    setActiveNav('apply');
    setCoursesDropdownOpen(false);
    setMobileOpen(false);
    if (onEnrollClick) {
      onEnrollClick({
        title: 'BOTMARTZ Fast-Track Application',
        price: 'Scholarship Cohort',
        duration: 'Live Class Track',
        badge: 'Priority'
      });
    }
  };

  const handleContactClick = (e) => {
    if (e) e.preventDefault();
    setActiveNav('contact');
    setCoursesDropdownOpen(false);
    setMobileOpen(false);

    if (currentView === 'course-detail' && onNavigateHome) {
      onNavigateHome('contact');
      return;
    }

    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -75;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__inner container">
        {/* Preserved Brand Logo */}
        <a
          href="#"
          className="navbar__logo"
          aria-label="BOTMARTZ Academy Home"
          onClick={(e) => handleNavigateToSection('top', 'home', e)}
        >
          <img src="/logo.png" alt="BOTMARTZ AI Solutions" className="navbar__logo-img" />
        </a>

        {/* Center Navigation Links: Home | Apply | Contact | Courses ∨ */}
        <nav className="navbar__links" aria-label="Main Navigation">
          {/* 1. Home Link (Website Blue Theme Pill) */}
          <button
            type="button"
            className={`navbar__nav-item ${activeNav === 'home' ? 'navbar__nav-item--pill' : ''}`}
            onClick={(e) => handleNavigateToSection('top', 'home', e)}
          >
            Home
          </button>

          {/* 2. Apply Link */}
          <button
            type="button"
            className={`navbar__nav-item ${activeNav === 'apply' ? 'navbar__nav-item--active' : ''}`}
            onClick={handleApplyClick}
          >
            Apply
          </button>

          {/* 3. Contact Link */}
          <button
            type="button"
            className={`navbar__nav-item ${activeNav === 'contact' ? 'navbar__nav-item--active' : ''}`}
            onClick={handleContactClick}
          >
            Contact
          </button>

          {/* 4. Courses Dropdown */}
          <div className="navbar__dropdown-wrapper" ref={dropdownRef}>
            <button
              ref={triggerRef}
              type="button"
              className={`navbar__nav-item navbar__dropdown-trigger-btn ${
                coursesDropdownOpen || activeNav === 'courses' ? 'navbar__nav-item--active' : ''
              }`}
              onClick={() => {
                setCoursesDropdownOpen(!coursesDropdownOpen);
                setActiveNav('courses');
              }}
              onMouseEnter={() => setCoursesDropdownOpen(true)}
              aria-expanded={coursesDropdownOpen}
              aria-haspopup="true"
              id="courses-menu-button"
            >
              <span>Courses</span>
              <svg
                className={`navbar__chevron ${coursesDropdownOpen ? 'navbar__chevron--open' : ''}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {/* Exact 2-Course Dropdown Popover matching reference image */}
            {coursesDropdownOpen && (
              <div
                className="courses-compact-dropdown"
                role="menu"
                aria-labelledby="courses-menu-button"
                onMouseLeave={() => setCoursesDropdownOpen(false)}
              >
                {NAVBAR_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="course-dropdown-item"
                    onClick={(e) => handleCourseItemClick(course, e)}
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleCourseItemClick(course, e);
                    }}
                  >
                    <div className="course-dropdown-item__info">
                      <div className="course-dropdown-item__title">{course.title}</div>
                      <div className="course-dropdown-item__sub">{course.sub}</div>
                    </div>
                    <span
                      className={`course-dropdown-item__badge course-dropdown-item__badge--${course.badgeType}`}
                    >
                      {course.badge}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Right Section: Day/Night Theme Toggle Switch + Explore Courses Button */}
        <div className="navbar__actions">
          {/* Visual Day / Night Image Toggle Switch */}
          <button
            type="button"
            className={`theme-toggle-pill ${darkMode ? 'theme-toggle-pill--dark' : 'theme-toggle-pill--light'}`}
            onClick={toggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            role="switch"
            aria-checked={darkMode}
          >
            <span className="theme-toggle-thumb" />
          </button>

          {/* Explore Courses → Button */}
          <button
            type="button"
            className="btn navbar__explore-cta"
            onClick={(e) => handleNavigateToSection('all-courses', 'courses', e)}
          >
            <span>Explore Courses</span>
            <span className="navbar__explore-arrow">→</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="navbar__mobile-overlay" onClick={() => setMobileOpen(false)}>
          <nav
            className="navbar__mobile-menu"
            onClick={(e) => e.stopPropagation()}
            aria-label="Mobile Navigation"
          >
            <div className="mobile-menu-header">
              <span className="mobile-menu-title">Menu</span>
              <button
                className="mobile-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation"
              >
                ×
              </button>
            </div>

            {/* Mobile Nav Links: Home, Apply, Contact */}
            <div className="mobile-standard-links">
              <button
                type="button"
                className={`navbar__mobile-link-btn ${activeNav === 'home' ? 'navbar__mobile-link-btn--active' : ''}`}
                onClick={(e) => handleNavigateToSection('top', 'home', e)}
              >
                Home
              </button>
              <button
                type="button"
                className={`navbar__mobile-link-btn ${activeNav === 'apply' ? 'navbar__mobile-link-btn--active' : ''}`}
                onClick={handleApplyClick}
              >
                Apply
              </button>
              <button
                type="button"
                className={`navbar__mobile-link-btn ${activeNav === 'contact' ? 'navbar__mobile-link-btn--active' : ''}`}
                onClick={handleContactClick}
              >
                Contact
              </button>
            </div>

            {/* Mobile Courses Section: Exactly the 2 Courses */}
            <div className="mobile-courses-section">
              <div className="mobile-courses-label">Courses</div>
              <div className="mobile-courses-list-compact">
                {NAVBAR_COURSES.map((course) => (
                  <div
                    key={course.id}
                    className="mobile-course-card-compact"
                    onClick={(e) => handleCourseItemClick(course, e)}
                  >
                    <div className="mobile-course-card-left">
                      <div className="mobile-course-title">{course.title}</div>
                      <div className="mobile-course-sub">{course.sub}</div>
                    </div>
                    <span className={`mobile-course-badge mobile-course-badge--${course.badgeType}`}>
                      {course.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Actions: Day/Night Theme Toggle & Explore Courses */}
            <div className="navbar__mobile-actions">
              <div className="mobile-theme-row">
                <span>Theme Mode</span>
                <button
                  type="button"
                  className={`theme-toggle-pill ${darkMode ? 'theme-toggle-pill--dark' : 'theme-toggle-pill--light'}`}
                  onClick={toggleTheme}
                  aria-label="Toggle dark mode"
                >
                  <span className="theme-toggle-thumb" />
                </button>
              </div>

              <button
                type="button"
                className="btn navbar__explore-cta"
                onClick={(e) => handleNavigateToSection('all-courses', 'courses', e)}
              >
                <span>Explore Courses</span>
                <span className="navbar__explore-arrow">→</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
