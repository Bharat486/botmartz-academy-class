import { useInView, useStagger } from '../hooks/useAnimations'
import './LearningGap.css'

const gaps = [
  {
    icon: '📚',
    title: 'Theory Without Practice',
    desc: 'Most courses teach concepts but skip real coding. You watch videos but never build anything.',
    solution: 'Weekly coding assignments with mentor review',
    color: 'blue',
  },
  {
    icon: '🤯',
    title: 'No Clear Roadmap',
    desc: 'Jumping between random tutorials without a structured path leads to knowledge gaps.',
    solution: 'Structured 6-week curriculum with milestones',
    color: 'yellow',
  },
  {
    icon: '😞',
    title: 'No Doubt Support',
    desc: 'Getting stuck on a bug for hours with no one to ask kills motivation.',
    solution: 'Live doubt-clearing sessions & community',
    color: 'cyan',
  },
  {
    icon: '📄',
    title: 'No Portfolio Projects',
    desc: 'Completing a course but having nothing to show recruiters during interviews.',
    solution: 'Build 4+ real-world projects for your portfolio',
    color: 'blue',
  },
]

export default function LearningGap() {
  const [ref, inView] = useInView()
  const stagger = useStagger(inView, gaps.length, 120)

  return (
    <section className="gap section" ref={ref} id="learning-gap">
      <div className="container">
        <h2 className="section-title">
          Why Most Learners <span className="highlight">Fail</span> at DSA
        </h2>
        <p className="section-subtitle">
          Common learning gaps that hold students back — and how BOTMARTZ Academy fixes each one.
        </p>

        <div className="gap__grid">
          {gaps.map((g, i) => (
            <div key={g.title} className={`gap__card card-3d gap__card--${g.color}`} style={stagger[i]}>
              <div className="gap__card-top">
                <span className="gap__icon">{g.icon}</span>
                <h3 className="gap__card-title">{g.title}</h3>
                <p className="gap__card-desc">{g.desc}</p>
              </div>
              <div className="gap__solution">
                <span className="gap__check">✓</span>
                <span>{g.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
