import React, { useState } from 'react';
import './CourseBatches.css';
import { useInView } from '../hooks/useAnimations';

const courses = [
  {
    id: 'fullstack',
    category: 'FULL STACK',
    categoryColor: '#1D4ED8',
    title: 'Full Stack Web Development Bootcamp',
    description: 'React, Node.js, MongoDB, AWS deployment. Build production-grade apps with industry mentors.',
    stats: '1,240 enrolled',
    duration: '6 months',
    price: '₹18,999',
    badge: 'Trending',
    rating: '4.9 ★ (420 reviews)',
    highlights: ['Next.js 14 & TypeScript', 'Microservices Architecture', 'AWS CI/CD & Docker', '10+ Production Deployments']
  },
  {
    id: 'ai-ml',
    category: 'DATA SCIENCE',
    categoryColor: '#0284C7',
    title: 'AI & Machine Learning Mastery',
    description: 'Python, TensorFlow, PyTorch, Real datasets, model deployment, and ML system design.',
    stats: '2,890 enrolled',
    duration: '8 months',
    price: '₹22,999',
    badge: 'Popular',
    rating: '4.95 ★ (890 reviews)',
    highlights: ['Deep Learning & LLMs', 'PyTorch & HuggingFace', 'Vector Databases & RAG', 'End-to-end MLOps Pipelines']
  },
  {
    id: 'devops',
    category: 'CLOUD & DEVOPS',
    categoryColor: '#1E293B',
    title: 'DevOps & Cloud Engineering',
    description: 'AWS, GCP, Docker, Kubernetes, CI/CD pipelines. Earn cloud certifications alongside your degree.',
    stats: '980 enrolled',
    duration: '4 months',
    price: '₹19,499',
    badge: 'High Demand',
    rating: '4.85 ★ (310 reviews)',
    highlights: ['Kubernetes Cluster Admin', 'Terraform Infrastructure as Code', 'Prometheus & Grafana Monitoring', 'AWS Solution Architect Prep']
  },
  {
    id: 'cybersecurity',
    category: 'CYBERSECURITY',
    categoryColor: '#0F766E',
    title: 'Ethical Hacking & Cybersecurity',
    description: 'CEH prep, penetration testing, network security, SOC analyst training with live lab environments.',
    stats: '850 enrolled',
    duration: '5 months',
    price: '₹16,999',
    badge: 'Live Labs',
    rating: '4.8 ★ (240 reviews)',
    highlights: ['Kali Linux & Metasploit', 'Web App Penetration Testing', 'SIEM & SOC Operations', 'CTF Weekly Challenges']
  },
  {
    id: 'uiux',
    category: 'UI/UX DESIGN',
    categoryColor: '#D97706',
    title: 'Product Design & UX Engineering',
    description: 'Figma, user research, design systems, interaction design, and portfolio-ready projects.',
    stats: '620 enrolled',
    duration: '4 months',
    price: '₹14,999',
    badge: 'Portfolio Ready',
    rating: '4.9 ★ (190 reviews)',
    highlights: ['Design Systems at Scale', 'Micro-interactions & Prototyping', 'User Testing & Analytics', 'Design-to-Code Handoff']
  },
  {
    id: 'web3',
    category: 'BLOCKCHAIN',
    categoryColor: '#7C3AED',
    title: 'Web3 & Blockchain Development',
    description: 'Solidity, smart contracts, DeFi protocols, NFT development, and Web3 architecture.',
    stats: '740 enrolled',
    duration: '5 months',
    price: '₹20,999',
    badge: 'Next-Gen',
    rating: '4.8 ★ (210 reviews)',
    highlights: ['Solidity & Hardhat', 'ERC-20 & ERC-721 Standards', 'DeFi Liquidity Pools', 'Smart Contract Auditing']
  }
];

export default function CourseBatches({ onSelectCourse }) {
  const [ref, inView] = useInView();
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const categories = ['ALL', 'FULL STACK', 'DATA SCIENCE', 'CLOUD & DEVOPS', 'CYBERSECURITY', 'UI/UX DESIGN', 'BLOCKCHAIN'];

  const filteredCourses = selectedCategory === 'ALL'
    ? courses
    : courses.filter(c => c.category === selectedCategory);

  return (
    <section className="courses-section section" ref={ref} id="all-courses">
      <div className="container">
        <div className="section-badge-wrap">
          <span className="badge badge-blue">COURSE BATCHES</span>
        </div>
        <h2 className="section-title">
          Learn From <span className="highlight">Industry Experts</span>
        </h2>
        <p className="section-subtitle">
          Structured batches designed for real-world outcomes. Live sessions, assignments, and mentorship included.
        </p>

        {/* Filter categories */}
        <div className="courses-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'filter-btn--active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div className={`courses-grid ${inView ? 'courses-grid--visible' : ''}`}>
          {filteredCourses.map((c, i) => (
            <div key={c.id} className="course-card card-3d" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="course-card__header">
                <div className="course-card__top">
                  <span className="course-card__tag" style={{ borderColor: c.categoryColor, color: c.categoryColor }}>
                    {c.category}
                  </span>
                  <span className="course-card__badge badge badge-yellow">{c.badge}</span>
                </div>
                <h3 className="course-card__title">{c.title}</h3>
                <p className="course-card__desc">{c.description}</p>
              </div>

              <div className="course-card__body">
                <div className="course-card__highlights">
                  {c.highlights.map((h, idx) => (
                    <div key={idx} className="highlight-pill">
                      <span className="pill-check">✓</span> {h}
                    </div>
                  ))}
                </div>

                <div className="course-card__meta">
                  <div className="meta-item">
                    <span className="meta-icon">👥</span>
                    <span>{c.stats}</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-icon">⏱️</span>
                    <span>{c.duration}</span>
                  </div>
                </div>
              </div>

              <div className="course-card__footer">
                <div className="course-card__price-wrap">
                  <span className="price-label">Live Cohort Fee</span>
                  <span className="course-card__price">{c.price}</span>
                </div>
                <button
                  className="btn btn-primary course-card__enroll"
                  onClick={() => onSelectCourse && onSelectCourse(c)}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
