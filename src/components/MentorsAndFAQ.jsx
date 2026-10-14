import React, { useState } from 'react';
import './MentorsAndFAQ.css';
import { useInView } from '../hooks/useAnimations';

const mentors = [
  {
    name: 'Priya Sharma',
    role: 'Staff Frontend Architect',
    company: 'ex-Microsoft, Stripe',
    bio: '12+ years in React, TypeScript, and micro-frontend architectures. Mentored 2,000+ engineers.',
    avatar: 'PS'
  },
  {
    name: 'Vikram Singh',
    role: 'Lead Systems Engineer',
    company: 'ex-Uber, Swiggy',
    bio: 'Specialist in high-throughput distributed systems, Kafka, and LeetCode hard problem design.',
    avatar: 'VS'
  },
  {
    name: 'Anita Kumar',
    role: 'Principal Cloud Architect',
    company: 'AWS Certified Fellow',
    bio: 'Architected cloud migrations for Fortune 500 enterprises with Kubernetes & Terraform.',
    avatar: 'AK'
  },
  {
    name: 'Rohit Verma',
    role: 'AI Research Lead',
    company: 'ex-Google Brain, Fractal',
    bio: 'Leading researcher in generative foundation models, vector embeddings, and autonomous agents.',
    avatar: 'RV'
  }
];

const faqs = [
  {
    q: 'How are the live classes conducted?',
    a: 'Classes are conducted via our high-definition interactive live portal on Zoom & our custom web classroom. Students can ask questions via live mic, code collaboratively, and participate in real-time polls.'
  },
  {
    q: 'What happens if I miss a live class?',
    a: 'Every live session is recorded in 1080p and uploaded to your Student Dashboard within 2 hours, complete with mentor notes, code repositories, and slide decks. You have 6 months of extended access.'
  },
  {
    q: 'Are there any prerequisites for DSA with Python?',
    a: 'None! Week 1 starts from scratch with Python syntax, loops, and data types before progressing to advanced trees, graphs, and dynamic programming.'
  },
  {
    q: 'Do you offer placement assistance and resume reviews?',
    a: 'Yes. Our dedicated career support team conducts 1:1 resume optimization, GitHub portfolio reviews, mock technical interviews, and shares your profile with our 500+ hiring partner network.'
  },
  {
    q: 'Is there an EMI or installment option available?',
    a: 'Yes, we provide 0% interest EMI options starting at ₹1,666/month across all major credit and debit cards, as well as UPI pay-later options.'
  },
  {
    q: 'Will I get an official verifiable certificate?',
    a: 'Yes, upon completing 80% of live classes and submitting all 4 milestone projects, you receive a cryptographically verifiable BOTMARTZ Academy Certificate recognized by industry leaders.'
  }
];

export default function MentorsAndFAQ() {
  const [ref, inView] = useInView();
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? -1 : index);
  };

  return (
    <section className="mentors-faq-section section" ref={ref} id="mentors">
      <div className="container">
        {/* Mentors Section */}
        <div className="section-badge-wrap">
          <span className="badge badge-yellow">LEARN FROM THE BEST</span>
        </div>
        <h2 className="section-title">
          Meet Your <span className="highlight">Mentors</span>
        </h2>
        <p className="section-subtitle">
          Learn directly from staff engineers, architects, and tech leaders at top-tier companies.
        </p>

        <div className={`mentors-grid ${inView ? 'mentors-grid--visible' : ''}`}>
          {mentors.map((m, i) => (
            <div key={m.name} className="mentor-card card-3d" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="mentor-avatar">{m.avatar}</div>
              <h3 className="mentor-name">{m.name}</h3>
              <p className="mentor-role">{m.role}</p>
              <span className="mentor-company">{m.company}</span>
              <p className="mentor-bio">{m.bio}</p>
            </div>
          ))}
        </div>

        {/* FAQs Section */}
        <div id="faq" style={{ paddingTop: '80px' }}>
          <div className="section-badge-wrap">
            <span className="badge badge-blue">GOT QUESTIONS?</span>
          </div>
          <h2 className="section-title">
            Frequently Asked <span className="highlight">Questions</span>
          </h2>
          <p className="section-subtitle">
            Everything you need to know about cohorts, prerequisites, schedules, and certificates.
          </p>

          <div className="faq-accordion">
            {faqs.map((f, idx) => (
              <div 
                key={idx} 
                className={`faq-item ${openFaq === idx ? 'faq-item--open' : ''}`}
                onClick={() => toggleFaq(idx)}
              >
                <div className="faq-question">
                  <h4>{f.q}</h4>
                  <span className="faq-toggle-icon">{openFaq === idx ? '−' : '+'}</span>
                </div>
                {openFaq === idx && (
                  <div className="faq-answer">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
