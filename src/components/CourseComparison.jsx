import { useInView } from '../hooks/useAnimations'
import './CourseComparison.css'

const rows = [
  { feature: 'Live Classes', botmartz: true, youtube: false, others: '~' },
  { feature: 'Structured Roadmap', botmartz: true, youtube: false, others: true },
  { feature: '1:1 Doubt Support', botmartz: true, youtube: false, others: '~' },
  { feature: 'Real Projects', botmartz: true, youtube: false, others: '~' },
  { feature: 'Mentor Code Reviews', botmartz: true, youtube: false, others: false },
  { feature: 'Certificate', botmartz: true, youtube: false, others: true },
  { feature: 'Community Access', botmartz: true, youtube: false, others: '~' },
  { feature: 'Interview Prep', botmartz: true, youtube: false, others: '~' },
  { feature: 'Affordable Pricing', botmartz: true, youtube: true, others: false },
]

function CellIcon({ val }) {
  if (val === true) return <span className="comp__yes">✓</span>
  if (val === false) return <span className="comp__no">✗</span>
  return <span className="comp__partial">~</span>
}

export default function CourseComparison() {
  const [ref, inView] = useInView()

  return (
    <section className="comp section" ref={ref} id="courses">
      <div className="container">
        <h2 className="section-title">
          Why <span className="highlight">BOTMARTZ</span> Stands Out
        </h2>
        <p className="section-subtitle">
          See how our live cohort compares to self-paced content and other platforms.
        </p>

        <div className={`comp__table-wrap ${inView ? 'comp__table-wrap--visible' : ''}`}>
          <table className="comp__table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="comp__col-highlight">
                  <img src="/logo.png" alt="BOTMARTZ" className="comp__logo" />
                  BOTMARTZ
                </th>
                <th>YouTube / Free</th>
                <th>Other Platforms</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature}>
                  <td className="comp__feature">{r.feature}</td>
                  <td className="comp__col-highlight"><CellIcon val={r.botmartz} /></td>
                  <td><CellIcon val={r.youtube} /></td>
                  <td><CellIcon val={r.others} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
