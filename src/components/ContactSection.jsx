import React, { useState } from 'react';
import './ContactSection.css';
import { useInView } from '../hooks/useAnimations';

const TOPIC_CHIPS = [
  { id: 'dsa', label: '🎓 DSA with Python', category: 'DSA with Python Bootcamp', mentor: 'Vikram Singh' },
  { id: 'genai', label: '🤖 Gen AI Engineering', category: 'Generative AI Engineering', mentor: 'Rohit Verma' },
  { id: 'mentor', label: '👨‍🏫 1:1 Mentor Guidance', category: '1:1 Mentor Guidance Call', mentor: 'Any Senior Mentor' },
  { id: 'batch', label: '⏱️ Batch Timings & Schedule', category: 'Batch Timings & Schedule', mentor: 'Any Senior Mentor' },
  { id: 'placement', label: '💼 Placement & Mock Interviews', category: 'Placement Assistance & Mocks', mentor: 'Priya Sharma' },
  { id: 'fees', label: '💳 Fee EMI & Scholarships', category: 'Fee EMI & Scholarships', mentor: 'Any Senior Mentor' }
];

const MENTORS = [
  {
    id: 'vikram',
    name: 'Vikram Singh',
    role: 'Lead Systems & DSA Mentor',
    company: 'ex-Uber, Swiggy',
    avatar: 'VS',
    specialties: ['LeetCode Hard Design', 'Dynamic Programming', 'System Design'],
    status: 'Available Today',
    rating: '4.95',
    sessions: '520+ calls',
    waText: 'Hello Vikram Sir, I want to book a 1:1 guidance session for DSA & Coding Interviews.'
  },
  {
    id: 'rohit',
    name: 'Rohit Verma',
    role: 'AI Research Lead',
    company: 'ex-Google Brain, Fractal',
    avatar: 'RV',
    specialties: ['LLMs & Fine-Tuning', 'RAG Pipelines', 'Autonomous Agents'],
    status: 'Slots Open',
    rating: '4.98',
    sessions: '480+ calls',
    waText: 'Hello Rohit Sir, I want 1:1 guidance on the Generative AI Engineering curriculum and roadmap.'
  },
  {
    id: 'priya',
    name: 'Priya Sharma',
    role: 'Staff Frontend Architect',
    company: 'ex-Microsoft, Stripe',
    avatar: 'PS',
    specialties: ['Micro-frontends', 'Full-stack Systems', 'Resume & Mocks'],
    status: 'Available Today',
    rating: '4.92',
    sessions: '610+ calls',
    waText: 'Hello Priya Maam, I would like to schedule a 1:1 portfolio review & tech interview mock.'
  },
  {
    id: 'anita',
    name: 'Anita Kumar',
    role: 'Principal Cloud Architect',
    company: 'AWS Certified Fellow',
    avatar: 'AK',
    specialties: ['Cloud Infra', 'Kubernetes & Docker', 'Career Transitions'],
    status: 'Available Today',
    rating: '4.90',
    sessions: '390+ calls',
    waText: 'Hello Anita Maam, I want guidance regarding cloud architecture and career growth.'
  }
];

export default function ContactSection() {
  const [ref, inView] = useInView();

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    queryCategory: 'DSA with Python Bootcamp',
    preferredMentor: 'Any Senior Academic Mentor (Fastest)',
    urgentCallback: true,
    message: ''
  });

  const [activeChip, setActiveChip] = useState('dsa');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [formError, setFormError] = useState('');

  const handleChipClick = (chip) => {
    setActiveChip(chip.id);
    setFormData(prev => ({
      ...prev,
      queryCategory: chip.category,
      preferredMentor: chip.mentor === 'Any Senior Mentor' 
        ? 'Any Senior Academic Mentor (Fastest)' 
        : `${chip.mentor} (Direct Request)`
    }));
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (formError) setFormError('');
  };

  const handleSelectMentorForForm = (mentorName) => {
    setFormData(prev => ({
      ...prev,
      queryCategory: '1:1 Mentor Guidance Call',
      preferredMentor: `${mentorName} (Direct 1:1 Request)`
    }));
    setActiveChip('mentor');
    
    // Smooth scroll to the form element
    const formEl = document.getElementById('contact-query-form');
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      formEl.classList.add('contact-form--highlight-pulse');
      setTimeout(() => {
        formEl.classList.remove('contact-form--highlight-pulse');
      }, 1500);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setFormError('Please fill in your Name, Email, and Phone number.');
      return;
    }

    setIsSubmitting(true);
    setFormError('');

    // Simulate API submission
    setTimeout(() => {
      const generatedId = `BTM-${Math.floor(10000 + Math.random() * 90000)}`;
      setTicketId(generatedId);
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      queryCategory: 'DSA with Python Bootcamp',
      preferredMentor: 'Any Senior Academic Mentor (Fastest)',
      urgentCallback: true,
      message: ''
    });
  };

  const waQueryUrl = `https://api.whatsapp.com/send?phone=919999999999&text=${encodeURIComponent(
    `Hello BOTMARTZ Academy team,\n\nI just submitted a query with Ticket ID: ${ticketId}.\nName: ${formData.fullName}\nTopic: ${formData.queryCategory}\nMentor: ${formData.preferredMentor}\n\nCould you please connect me with the mentor soon?`
  )}`;

  return (
    <section className="contact-section section" ref={ref} id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="contact-header text-center">
          <div className="section-badge-wrap">
            <span className="badge badge-blue">💬 24x7 STUDENT HELP DESK & MENTOR CONNECT</span>
          </div>
          <h2 className="section-title">
            Have Questions? <span className="highlight">Talk to Our Team & Mentors</span>
          </h2>
          <p className="section-subtitle">
            Need syllabus clarification, 1-on-1 career guidance, batch schedule details, or fee assistance? 
            Submit a query or connect directly with our senior industry mentors.
          </p>
        </div>

        {/* Quick Topic Chips */}
        <div className="contact-topic-chips-wrap">
          <span className="chips-label">Popular Queries:</span>
          <div className="contact-topic-chips">
            {TOPIC_CHIPS.map(chip => (
              <button
                key={chip.id}
                type="button"
                className={`topic-chip ${activeChip === chip.id ? 'topic-chip--active' : ''}`}
                onClick={() => handleChipClick(chip)}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid: Query Form (Left) & Mentor Cards + Contact Info (Right) */}
        <div className={`contact-main-grid ${inView ? 'contact-main-grid--visible' : ''}`}>
          
          {/* Column 1: Interactive Query & Callback Form */}
          <div className="contact-form-card card-3d" id="contact-query-form">
            <div className="contact-card-header">
              <div className="card-header-icon">📝</div>
              <div>
                <h3 className="card-title">Send a Query or Request Callback</h3>
                <p className="card-desc">Average response time: &lt; 15 minutes on WhatsApp & Phone</p>
              </div>
            </div>

            {submitted ? (
              <div className="contact-success-state">
                <div className="success-icon-badge">✓</div>
                <h4 className="success-title">Query Received Successfully!</h4>
                <p className="success-ticket">
                  Reference Ticket ID: <strong>#{ticketId}</strong>
                </p>
                <div className="success-details-box">
                  <div className="success-row">
                    <span className="lbl">Name:</span>
                    <span className="val">{formData.fullName}</span>
                  </div>
                  <div className="success-row">
                    <span className="lbl">Topic:</span>
                    <span className="val">{formData.queryCategory}</span>
                  </div>
                  <div className="success-row">
                    <span className="lbl">Mentor:</span>
                    <span className="val">{formData.preferredMentor}</span>
                  </div>
                </div>
                <p className="success-note">
                  Our academic advisor and senior mentor have been notified. We will call and message you on <strong>{formData.phone}</strong> shortly.
                </p>
                <div className="success-actions">
                  <a
                    href={waQueryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-whatsapp"
                  >
                    💬 Open Instant WhatsApp Chat
                  </a>
                  <button type="button" className="btn btn-outline" onClick={handleReset}>
                    Submit Another Query
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-actual-form">
                {formError && (
                  <div className="form-error-banner">
                    ⚠️ {formError}
                  </div>
                )}

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-name">
                      Full Name <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <span className="input-icon">👤</span>
                      <input
                        id="contact-name"
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email">
                      Email Address <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <span className="input-icon">✉️</span>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rahul@example.com"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label htmlFor="contact-phone">
                      WhatsApp / Mobile Number <span className="req">*</span>
                    </label>
                    <div className="input-wrap">
                      <span className="input-icon-flag">🇮🇳 +91</span>
                      <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-category">Query Category</label>
                    <div className="input-wrap">
                      <select
                        id="contact-category"
                        name="queryCategory"
                        value={formData.queryCategory}
                        onChange={handleChange}
                      >
                        <option value="DSA with Python Bootcamp">DSA with Python Bootcamp (₹1,999)</option>
                        <option value="Generative AI Engineering">Generative AI Engineering (Cohort)</option>
                        <option value="1:1 Mentor Guidance Call">1:1 Mentor Guidance Call</option>
                        <option value="Batch Timings & Schedule">Batch Timings & Schedule</option>
                        <option value="Placement Assistance & Mocks">Placement Assistance & Resume Mocks</option>
                        <option value="Fee EMI & Scholarships">Fee EMI & Scholarships</option>
                        <option value="College or Enterprise Training">College or Enterprise Training</option>
                        <option value="Other Question">Other General Query</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-mentor">
                    Connect with a Specific Mentor (Optional)
                  </label>
                  <div className="input-wrap">
                    <select
                      id="contact-mentor"
                      name="preferredMentor"
                      value={formData.preferredMentor}
                      onChange={handleChange}
                    >
                      <option value="Any Senior Academic Mentor (Fastest)">
                        ✨ Any Senior Academic Mentor (Fastest Response)
                      </option>
                      <option value="Vikram Singh (Direct Request)">
                        👨‍💻 Vikram Singh — Lead Systems & DSA (ex-Uber, Swiggy)
                      </option>
                      <option value="Rohit Verma (Direct Request)">
                        🤖 Rohit Verma — AI Research Lead (ex-Google Brain)
                      </option>
                      <option value="Priya Sharma (Direct Request)">
                        👩‍💻 Priya Sharma — Staff Frontend Architect (ex-Microsoft)
                      </option>
                      <option value="Anita Kumar (Direct Request)">
                        ☁️ Anita Kumar — Principal Cloud Architect (AWS Fellow)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Your Question or Doubts</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your current college/year or tech background, specific doubts about the syllabus, batch timings, or interview prep..."
                  ></textarea>
                </div>

                <div className="form-urgent-toggle">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="urgentCallback"
                      checked={formData.urgentCallback}
                      onChange={handleChange}
                    />
                    <span>
                      <strong>Priority Callback Request:</strong> Connect me with an academic advisor via WhatsApp/Call within 15 minutes.
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-submit-query"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-icon">⏳</span> Submitting Query...
                    </>
                  ) : (
                    <>
                      🚀 Submit Query & Request Callback
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Direct Mentor Connect + Quick Help Desk */}
          <div className="contact-right-panel">
            
            {/* Direct Mentor Connect Box */}
            <div className="mentor-connect-box card-3d">
              <div className="contact-card-header">
                <div className="card-header-icon">👨‍🏫</div>
                <div>
                  <h3 className="card-title">Talk to Senior Mentors 1:1</h3>
                  <p className="card-desc">Get personalized roadmap advice, resume audits & guidance</p>
                </div>
              </div>

              <div className="mentors-mini-list">
                {MENTORS.map(m => (
                  <div key={m.id} className="mentor-mini-card">
                    <div className="mentor-mini-avatar">{m.avatar}</div>
                    <div className="mentor-mini-info">
                      <div className="mentor-mini-head">
                        <h4 className="mentor-mini-name">{m.name}</h4>
                        <span className="mentor-mini-status">
                          <span className="status-dot"></span> {m.status}
                        </span>
                      </div>
                      <p className="mentor-mini-role">{m.role} • <strong>{m.company}</strong></p>
                      <div className="mentor-mini-tags">
                        {m.specialties.slice(0, 2).map((s, idx) => (
                          <span key={idx} className="spec-tag">{s}</span>
                        ))}
                        <span className="spec-tag rating-tag">⭐ {m.rating} ({m.sessions})</span>
                      </div>
                    </div>
                    <div className="mentor-mini-actions">
                      <button
                        type="button"
                        className="btn-mentor-book"
                        onClick={() => handleSelectMentorForForm(m.name)}
                        title={`Book 1:1 with ${m.name}`}
                      >
                        Book 1:1
                      </button>
                      <a
                        href={`https://api.whatsapp.com/send?phone=919999999999&text=${encodeURIComponent(m.waText)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-mentor-wa"
                        title="Chat on WhatsApp"
                      >
                        💬 WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact & Helplines Card */}
            <div className="contact-info-card card-3d">
              <h4 className="info-card-title">📞 Direct Helplines & Office Desk</h4>
              <div className="info-items-grid">
                
                <a
                  href="https://api.whatsapp.com/send?phone=919999999999&text=Hello%20BOTMARTZ%20Academy%20Admissions%20Team%2C%20I%20have%20a%20query%20about%20your%20courses."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="info-item-link"
                >
                  <div className="info-icon info-icon--wa">💬</div>
                  <div>
                    <span className="info-lbl">WhatsApp Admissions</span>
                    <strong className="info-val">+91 99999 99999</strong>
                    <span className="info-sub">Instant reply in &lt; 5 mins</span>
                  </div>
                </a>

                <a href="tel:+919999999999" className="info-item-link">
                  <div className="info-icon info-icon--phone">📞</div>
                  <div>
                    <span className="info-lbl">Student Calling Desk</span>
                    <strong className="info-val">+91 99999 99999</strong>
                    <span className="info-sub">Mon–Sat, 9:00 AM – 9:00 PM IST</span>
                  </div>
                </a>

                <a href="mailto:admissions@botmartz.com" className="info-item-link">
                  <div className="info-icon info-icon--mail">✉️</div>
                  <div>
                    <span className="info-lbl">Email Support & Queries</span>
                    <strong className="info-val">admissions@botmartz.com</strong>
                    <span className="info-sub">Response within 2 hours</span>
                  </div>
                </a>

                <div className="info-item-static">
                  <div className="info-icon info-icon--loc">📍</div>
                  <div>
                    <span className="info-lbl">Main Innovation Lab & Campus</span>
                    <strong className="info-val">BOTMARTZ Academy Hub</strong>
                    <span className="info-sub">Sector 62, Noida & HSR Layout, Bengaluru</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
