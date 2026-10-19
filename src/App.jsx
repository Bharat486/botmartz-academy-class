import React, { useState, useEffect } from 'react';
import WaveBackground from './components/WaveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import LearningGap from './components/LearningGap';
import CourseComparison from './components/CourseComparison';
import Roadmap from './components/Roadmap';
import CourseBatches from './components/CourseBatches';
import StudentDashboardHub from './components/StudentDashboardHub';
import PlatformFeatures from './components/PlatformFeatures';
import CorporateTraining from './components/CorporateTraining';
import StudentTestimonials from './components/StudentTestimonials';
import MentorsAndFAQ from './components/MentorsAndFAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import PricingAndEnrollModal from './components/PricingAndEnrollModal';
import VideoDemoModal from './components/VideoDemoModal';
import CourseDetailPage from './components/CourseDetailPage';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  // Dedicated Page Routing View ('home' | 'course-detail')
  const [currentView, setCurrentView] = useState('home');
  const [detailCourseId, setDetailCourseId] = useState('dsa-bootcamp');

  // Handle URL Hash based routing
  useEffect(() => {
    const checkHashRoute = () => {
      const hash = window.location.hash || '';
      if (hash.startsWith('#/course/')) {
        const id = hash.replace('#/course/', '');
        if (id === 'dsa-bootcamp' || id === 'genai-bootcamp') {
          setDetailCourseId(id);
          setCurrentView('course-detail');
          window.scrollTo({ top: 0, behavior: 'instant' });
          return;
        }
      }
      if (currentView === 'course-detail' && !hash.startsWith('#/course/')) {
        setCurrentView('home');
      }
    };

    checkHashRoute();
    window.addEventListener('hashchange', checkHashRoute);
    return () => window.removeEventListener('hashchange', checkHashRoute);
  }, [currentView]);

  const handleNavigateToCourse = (courseId) => {
    setDetailCourseId(courseId);
    setCurrentView('course-detail');
    window.location.hash = `/course/${courseId}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateHome = (targetSectionId = null) => {
    setCurrentView('home');
    if (targetSectionId) {
      window.location.hash = targetSectionId;
      setTimeout(() => {
        const el = document.getElementById(targetSectionId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 75;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 60);
    } else {
      window.location.hash = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnroll = (course = null) => {
    setSelectedCourse(course);
    setEnrollModalOpen(true);
  };

  const handleCloseEnroll = () => {
    setEnrollModalOpen(false);
    setSelectedCourse(null);
  };

  const handleEnrollSuccess = (data) => {
    setNotification(`🎉 Congratulations ${data.name || ''}! Seat reserved successfully.`);
    setTimeout(() => setNotification(null), 6000);
  };

  const handleJoinLive = () => {
    setNotification('Connecting to Live Classroom session... Stand by!');
    setTimeout(() => {
      setDemoModalOpen(true);
      setNotification(null);
    }, 800);
  };

  const handleCorporateContact = () => {
    handleOpenEnroll({
      title: 'Enterprise & College Campus Cohort',
      price: 'Custom Enterprise Tier',
      badge: 'Corporate'
    });
  };

  return (
    <div className="app-container">
      {/* Animated Flowing Wave Canvas Background */}
      <WaveBackground />

      {/* Top Floating Notification if active */}
      {notification && (
        <div className="global-toast-notification">
          <span>{notification}</span>
          <button onClick={() => setNotification(null)}>×</button>
        </div>
      )}

      {/* Main Sticky Navbar */}
      <Navbar
        onEnrollClick={handleOpenEnroll}
        currentView={currentView}
        onNavigateHome={handleNavigateHome}
        onNavigateToCourse={handleNavigateToCourse}
      />

      <main>
        {currentView === 'course-detail' ? (
          /* ========================================================
             DEDICATED COURSE DETAILS PAGE (Image Reference 2, 3, 4)
             ======================================================== */
          <CourseDetailPage
            courseId={detailCourseId}
            onBackHome={() => handleNavigateHome('all-courses')}
            onEnrollClick={handleOpenEnroll}
          />
        ) : (
          /* ========================================================
             MAIN HOMEPAGE / LANDING PAGE
             ======================================================== */
          <>
            {/* Hero Section with Three.js 3D Classroom Visual */}
            <Hero
              onEnrollClick={() => handleOpenEnroll()}
              onWatchDemo={() => setDemoModalOpen(true)}
            />

            {/* Trust Metrics Bar & Hiring Partners */}
            <TrustMetrics />

            {/* Why Most Learners Fail at DSA — Learning Gap Fixes */}
            <LearningGap />

            {/* Flagship Course Batches (Clickable animation banner shifts to Course Details) */}
            <CourseBatches
              onSelectCourse={handleOpenEnroll}
              onWatchDemo={() => setDemoModalOpen(true)}
              onOpenCourseDetail={handleNavigateToCourse}
            />

            {/* Interactive Student Dashboard / Learning Hub */}
            <StudentDashboardHub onJoinLive={handleJoinLive} />

            {/* 8-Week Interactive Milestone Roadmap */}
            <Roadmap />

            {/* Platform Features — Everything You Need to Succeed */}
            <PlatformFeatures />

            {/* Course Comparison Table */}
            <CourseComparison />

            {/* Student Success Stories & Testimonials */}
            <StudentTestimonials />

            {/* Enterprise & College Training */}
            <CorporateTraining onContactCorporate={handleCorporateContact} />

            {/* Mentors Showcase & FAQ Accordion */}
            <MentorsAndFAQ />

            {/* Dedicated Contact, Query & Mentor Connect Section */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Rich Footer with Logo and Links */}
      <Footer onEnrollClick={() => handleOpenEnroll()} />

      {/* Interactive Enrollment Modal */}
      <PricingAndEnrollModal
        isOpen={enrollModalOpen}
        selectedCourse={selectedCourse}
        onClose={handleCloseEnroll}
        onEnrollSuccess={handleEnrollSuccess}
      />

      {/* Interactive Classroom Demo Modal (No MP4 Video) */}
      <VideoDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onEnrollClick={() => handleOpenEnroll()}
      />
    </div>
  );
}
