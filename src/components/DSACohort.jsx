import { useInView } from '../hooks/useAnimations'
import './DSACohort.css'

export default function DSACohort() {
  const [ref, inView] = useInView()

  return (
    <section className="dsa section" ref={ref} id="dsa-cohort">
      <div className="container">
        <div className={`dsa__grid ${inView ? 'dsa__grid--visible' : ''}`}>
          {/* Info Side */}
          <div className="dsa__info">
            <span className="badge badge-blue">🐍 Flagship Program</span>
            <h2 className="dsa__title">
              DSA with Python — <span className="highlight">Live Cohort</span>
            </h2>
            <p className="dsa__desc">
              Our intensive 8-week live cohort program covers everything from Python
              fundamentals to advanced algorithms. Perfect for students, working
              professionals, and career-switchers targeting top tech companies.
            </p>

            <div className="dsa__features">
              {[
                { icon: '📺', text: '24 Live Sessions (3x/week)' },
                { icon: '💻', text: '200+ Coding Problems' },
                { icon: '🛠', text: '4 Real-World Projects' },
                { icon: '🤝', text: '1:1 Mentor Sessions' },
                { icon: '📋', text: 'Weekly Assignments & Reviews' },
                { icon: '🎯', text: 'Interview Preparation Module' },
              ].map((f) => (
                <div key={f.text} className="dsa__feature">
                  <span>{f.icon}</span>
                  <span>{f.text}</span>
                </div>
              ))}
            </div>

            <div className="dsa__batch-info">
              <div className="dsa__batch-item">
                <span className="dsa__batch-label">Next Batch</span>
                <span className="dsa__batch-value">Batch 3 — Nov 2026</span>
              </div>
              <div className="dsa__batch-item">
                <span className="dsa__batch-label">Duration</span>
                <span className="dsa__batch-value">8 Weeks (24 Sessions)</span>
              </div>
              <div className="dsa__batch-item">
                <span className="dsa__batch-label">Schedule</span>
                <span className="dsa__batch-value">Mon, Wed, Fri — 8 PM IST</span>
              </div>
            </div>

            <div className="dsa__actions">
              <a href="#pricing" className="btn btn-primary">Enroll Now — ₹4,999</a>
              <a href="#roadmap" className="btn btn-outline">View Full Syllabus</a>
            </div>
          </div>

          {/* Visual Side */}
          <div className="dsa__visual">
            <div className="dsa__card card-3d">
              <div className="dsa__card-header">
                <span className="dsa__card-badge badge badge-yellow">Most Popular</span>
                <h3>DSA with Python</h3>
                <p>Complete Data Structures & Algorithms</p>
              </div>
              <div className="dsa__card-body">
                <div className="dsa__card-price">
                  <span className="dsa__card-old">₹9,999</span>
                  <span className="dsa__card-current">₹4,999</span>
                  <span className="badge badge-yellow">50% OFF</span>
                </div>
                <ul className="dsa__card-list">
                  <li>✓ 8 Weeks Live Classes</li>
                  <li>✓ Python + DSA Complete</li>
                  <li>✓ 4 Portfolio Projects</li>
                  <li>✓ Certificate of Completion</li>
                  <li>✓ Lifetime Community Access</li>
                  <li>✓ Recording Access (6 months)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
