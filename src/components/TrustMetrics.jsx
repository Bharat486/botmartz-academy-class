import { useInView, useStagger } from '../hooks/useAnimations'
import './TrustMetrics.css'

const metrics = [
  { icon: '👨‍🎓', value: '500+', label: 'Students Trained', color: 'blue' },
  { icon: '⭐', value: '4.8/5', label: 'Average Rating', color: 'yellow' },
  { icon: '🏆', value: '92%', label: 'Completion Rate', color: 'cyan' },
  { icon: '💼', value: '150+', label: 'Companies Hiring', color: 'blue' },
  { icon: '🎯', value: '85%', label: 'Placement Assist', color: 'yellow' },
  { icon: '📜', value: '100%', label: 'Certificate Issued', color: 'cyan' },
]

export default function TrustMetrics() {
  const [ref, inView] = useInView()
  const stagger = useStagger(inView, metrics.length, 80)

  return (
    <section className="trust section" ref={ref} id="trust">
      <div className="container">
        <div className="trust__grid">
          {metrics.map((m, i) => (
            <div
              key={m.label}
              className={`trust__card trust__card--${m.color}`}
              style={stagger[i]}
            >
              <span className="trust__icon">{m.icon}</span>
              <span className="trust__value">{m.value}</span>
              <span className="trust__label">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Trusted-by logos strip */}
        <div className="trust__logos" style={{ opacity: inView ? 1 : 0, transition: 'opacity 0.6s ease 0.5s' }}>
          <span className="trust__logos-label">Trusted by learners from</span>
          <div className="trust__logos-list">
            {['Google', 'Microsoft', 'TCS', 'Infosys', 'Wipro', 'Amazon'].map((name) => (
              <span key={name} className="trust__logo-item">{name}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
