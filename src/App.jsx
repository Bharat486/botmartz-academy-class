import React, { useState } from 'react';
import WaveBackground from './components/WaveBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import LearningGap from './components/LearningGap';
import CourseComparison from './components/CourseComparison';
import Roadmap from './components/Roadmap';
import DSACohort from './components/DSACohort';
import GenAIBootcamp from './components/GenAIBootcamp';
import CourseBatches from './components/CourseBatches';
import StudentDashboardHub from './components/StudentDashboardHub';
import PlatformFeatures from './components/PlatformFeatures';
import WeeklySchedule from './components/WeeklySchedule';
import CorporateTraining from './components/CorporateTraining';
import StudentTestimonials from './components/StudentTestimonials';
import MentorsAndFAQ from './components/MentorsAndFAQ';
import Footer from './components/Footer';
import PricingAndEnrollModal from './components/PricingAndEnrollModal';
import VideoDemoModal from './components/VideoDemoModal';

export default function App() {
  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

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
      <Navbar onEnrollClick={() => handleOpenEnroll()} />

      <main>
        {/* Hero Section with Three.js 3D Classroom Visual */}
        <Hero
          onEnrollClick={() => handleOpenEnroll()}
          onWatchDemo={() => setDemoModalOpen(true)}
        />

        {/* Trust Metrics Bar & Hiring Partners */}
        <TrustMetrics />

        {/* Why Most Learners Fail at DSA — Learning Gap Fixes */}
        <LearningGap />

        {/* Course Batches Grid (6 Core Courses from Video) */}
        <CourseBatches onSelectCourse={handleOpenEnroll} />

        {/* Interactive Student Dashboard / Learning Hub */}
        <StudentDashboardHub onJoinLive={handleJoinLive} />

        {/* 8-Week Interactive Milestone Roadmap */}
        <Roadmap />

        {/* Flagship DSA with Python Cohort */}
        <DSACohort onEnrollClick={() => handleOpenEnroll({
          title: 'DSA with Python — Live Cohort',
          price: '₹4,999',
          duration: '8 Weeks',
          badge: 'Flagship'
        })} />

        {/* Next-Gen GenAI & Agentic AI Bootcamp */}
        <GenAIBootcamp onEnrollClick={() => handleOpenEnroll({
          title: 'Gen AI & LLM Systems Bootcamp',
          price: '₹7,999',
          duration: '6 Weeks',
          badge: 'Next-Gen'
        })} />

        {/* Platform Features — Everything You Need to Succeed */}
        <PlatformFeatures />

        {/* Upcoming Weekly Schedule & Live Reminders */}
        <WeeklySchedule onJoinLive={handleJoinLive} />

        {/* Course Comparison Table */}
        <CourseComparison />

        {/* Student Success Stories & Testimonials */}
        <StudentTestimonials />

        {/* Enterprise & College Training */}
        <CorporateTraining onContactCorporate={handleCorporateContact} />

        {/* Mentors Showcase & FAQ Accordion */}
        <MentorsAndFAQ />
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

      {/* Video Demo Modal */}
      <VideoDemoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
      />
    </div>
  );
}
