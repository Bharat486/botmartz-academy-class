import { useState } from 'react'
import { useInView, useStagger } from '../hooks/useAnimations'
import './Roadmap.css'

const weeks = [
  {
    week: 1,
    title: 'Python Fundamentals',
    topics: ['Variables, data types & operators', 'Conditionals & loops', 'Functions & recursion basics'],
    project: 'Calculator CLI App',
  },
  {
    week: 2,
    title: 'Arrays & Strings',
    topics: ['List operations & slicing', 'Two-pointer technique', 'String manipulation patterns'],
    project: 'Anagram Checker',
  },
  {
    week: 3,
    title: 'Linked Lists & Stacks',
    topics: ['Singly & doubly linked lists', 'Stack operations (push/pop)', 'Queue & deque patterns'],
    project: 'Browser History System',
  },
  {
    week: 4,
    title: 'Searching & Sorting',
    topics: ['Binary search variations', 'Merge sort & quick sort', 'Time complexity analysis'],
    project: 'Search Autocomplete',
  },
  {
    week: 5,
    title: 'Trees & BST',
    topics: ['Binary tree traversals', 'BST insert, search, delete', 'Level-order & height calculations'],
    project: 'File System Explorer',
  },
  {
    week: 6,
    title: 'Graphs & BFS/DFS',
    topics: ['Graph representations', 'BFS & DFS traversals', 'Shortest path algorithms'],
    project: 'Social Network Analyzer',
  },
  {
    week: 7,
    title: 'Dynamic Programming',
    topics: ['Memoization vs tabulation', 'Classic DP patterns', 'Knapsack & LCS problems'],
    project: 'Expense Optimizer',
  },
  {
    week: 8,
    title: 'Mock Interviews & Capstone',
    topics: ['Problem-solving strategies', 'Mock technical interviews', 'Resume & portfolio review'],
    project: 'Full Capstone Project',
  },
]

export default function Roadmap() {
  const [activeWeek, setActiveWeek] = useState(0)
  const [ref, inView] = useInView()
  const stagger = useStagger(inView, weeks.length, 80)

  return (
    <section className="roadmap section" ref={ref} id="roadmap">
      <div className="container">
        <h2 className="section-title">
          8-Week <span className="highlight">Learning Roadmap</span>
        </h2>
        <p className="section-subtitle">
          A structured, milestone-driven curriculum from Python basics to interview-ready DSA mastery.
        </p>

        <div className="roadmap__layout">
          {/* Timeline */}
          <div className="roadmap__timeline">
            {weeks.map((w, i) => (
              <button
                key={i}
                className={`roadmap__step ${activeWeek === i ? 'roadmap__step--active' : ''} ${i < activeWeek ? 'roadmap__step--done' : ''}`}
                style={stagger[i]}
                onClick={() => setActiveWeek(i)}
                aria-label={`Week ${w.week}: ${w.title}`}
              >
                <div className="roadmap__step-marker">
                  <span className="roadmap__step-num">{w.week}</span>
                </div>
                <div className="roadmap__step-info">
                  <span className="roadmap__step-label">Week {w.week}</span>
                  <span className="roadmap__step-title">{w.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Detail Card */}
          <div className="roadmap__detail card-3d" key={activeWeek}>
            <div className="roadmap__detail-header">
              <span className="badge badge-blue">Week {weeks[activeWeek].week}</span>
              <h3 className="roadmap__detail-title">{weeks[activeWeek].title}</h3>
            </div>

            <div className="roadmap__detail-body">
              <h4 className="roadmap__detail-subtitle">Topics Covered</h4>
              <ul className="roadmap__topics">
                {weeks[activeWeek].topics.map((t) => (
                  <li key={t} className="roadmap__topic">
                    <span className="roadmap__topic-dot" />
                    {t}
                  </li>
                ))}
              </ul>

              <div className="roadmap__project">
                <span className="roadmap__project-label">🛠 Week Project</span>
                <span className="roadmap__project-name">{weeks[activeWeek].project}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
