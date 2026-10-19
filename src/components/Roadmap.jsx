import React, { useState } from 'react';
import { useInView } from '../hooks/useAnimations';
import { ROADMAP_WEEKS } from '../data/roadmapData';
import './Roadmap.css';

// SVG Icon Components matching the uploaded design
function PythonIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 128 128" fill="none">
      <path
        d="M63.5 8C33.4 8 35.2 21 35.2 21l.1 13.5h28.7v4.1H23.5S8 36.8 8 67c0 30.1 13.5 29.1 13.5 29.1h8.1v-11.4s-.4-13.5 13.3-13.5h28.6s12.8.2 12.8-12.4V20.4S88.6 8 63.5 8zm-15.6 9.4c2.8 0 5.1 2.3 5.1 5.1s-2.3 5.1-5.1 5.1-5.1-2.3-5.1-5.1 2.3-5.1 5.1-5.1z"
        fill="#387EB8"
      />
      <path
        d="M64.5 120c30.1 0 28.3-13 28.3-13l-.1-13.5H64v-4.1h40.5s15.5 1.8 15.5-28.4c0-30.1-13.5-29.1-13.5-29.1h-8.1v11.4s.4 13.5-13.3 13.5H46.5S33.7 56.6 33.7 69.2v38.4s-2.3 12.4 30.8 12.4zm15.6-9.4c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z"
        fill="#FFE052"
      />
    </svg>
  );
}

function ArrayIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4H4v16h3" />
      <path d="M17 4h3v16h-3" />
    </svg>
  );
}

function LinkedListIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7.5" />
      <line x1="21" y1="21" x2="16.5" y2="16.5" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3" />
      <circle cx="6" cy="19" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="10" y1="7.2" x2="7.5" y2="16.5" />
      <line x1="14" y1="7.2" x2="16.5" y2="16.5" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <div className="week-card-check-badge" title="Completed">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </div>
  );
}

export default function Roadmap() {
  const [expandedWeek, setExpandedWeek] = useState(1);
  const [activeSubtopicMap, setActiveSubtopicMap] = useState({});
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [terminalMap, setTerminalMap] = useState({});
  const [copiedCode, setCopiedCode] = useState(false);
  const [completedProblems, setCompletedProblems] = useState({});
  const [projectModal, setProjectModal] = useState(null);

  const [ref, inView] = useInView();

  // Toggle or open week card
  const toggleWeek = (weekNum) => {
    setExpandedWeek(prev => (prev === weekNum ? null : weekNum));
  };

  // Subtopic switch for specific week
  const handleSelectSubtopic = (weekNum, sIdx) => {
    setActiveSubtopicMap(prev => ({ ...prev, [weekNum]: sIdx }));
    // reset terminal for this week
    setTerminalMap(prev => ({ ...prev, [weekNum]: false }));
    setIsRunningCode(false);
  };

  // Run code simulation for specific week
  const handleRunCode = (weekNum) => {
    setIsRunningCode(true);
    setTimeout(() => {
      setIsRunningCode(false);
      setTerminalMap(prev => ({ ...prev, [weekNum]: true }));
    }, 450);
  };

  // Reset code simulation
  const handleResetCode = (weekNum) => {
    setTerminalMap(prev => ({ ...prev, [weekNum]: false }));
    setIsRunningCode(false);
  };

  // Copy code
  const handleCopyCode = (snippet) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(snippet);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // Toggle problem
  const handleToggleProblem = (weekNum, pId) => {
    const key = `${weekNum}-${pId}`;
    setCompletedProblems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Render week icon
  const renderWeekIcon = (iconType) => {
    switch (iconType) {
      case 'python':
        return <PythonIcon />;
      case 'array':
        return <ArrayIcon />;
      case 'linked_list':
        return <LinkedListIcon />;
      case 'search':
        return <SearchIcon />;
      case 'graph':
        return <GraphIcon />;
      case 'code':
        return <CodeIcon />;
      default:
        return <CodeIcon />;
    }
  };

  // Render Interactive Diagrams based on type
  const renderDiagram = (concept) => {
    switch (concept.diagramType) {
      case 'memory': {
        const { varName, varVal, slots } = concept.memoryData;
        return (
          <div className="diagram-box diagram-box--memory">
            <div className="diagram-header-label">Memory</div>
            <div className="memory-vis-layout">
              <div className="memory-var-card">
                <span className="memory-var-name">{varName}</span>
                <span className="memory-var-val">{varVal}</span>
              </div>
              <div className="memory-arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <div className="memory-table">
                {slots.map((slot, sIdx) => (
                  <div key={sIdx} className="memory-row">
                    <span className="mem-key">{slot.key}</span>
                    <span className="mem-colon">:</span>
                    <span className={`mem-val mem-val--${slot.type}`}>{slot.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }

      case 'array': {
        const { title, items, note } = concept.arrayData;
        return (
          <div className="diagram-box diagram-box--array">
            <div className="diagram-header-label">{title}</div>
            <div className="array-vis-layout">
              <div className="array-row">
                {items.map((val, idx) => (
                  <div key={idx} className="array-slot">
                    <div className="array-box">{val}</div>
                    <div className="array-index">{idx}</div>
                  </div>
                ))}
              </div>
              <div className="diagram-info-note">
                <span className="info-icon">ℹ</span>
                <span>{note}</span>
              </div>
            </div>
          </div>
        );
      }

      case 'linked_list': {
        const { title, nodes } = concept.linkedListData;
        return (
          <div className="diagram-box diagram-box--linked-list">
            <div className="diagram-header-label">{title}</div>
            <div className="ll-vis-layout">
              <div className="ll-chain">
                {nodes.map((n, idx) => (
                  <React.Fragment key={idx}>
                    <div className="ll-node-wrapper">
                      <div className="ll-node">
                        <span className="ll-val">{n.val}</span>
                        <span className="ll-next-label">next</span>
                      </div>
                      <span className="ll-sub-label">{n.label}</span>
                    </div>
                    <div className="ll-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </React.Fragment>
                ))}
                <div className="ll-null-badge">None</div>
              </div>
            </div>
          </div>
        );
      }

      case 'binary_search': {
        const { title, items, pointers, note } = concept.binarySearchData;
        return (
          <div className="diagram-box diagram-box--binary-search">
            <div className="diagram-header-label">{title}</div>
            <div className="bs-vis-layout">
              <div className="bs-array-row">
                {items.map((val, idx) => {
                  const pointer = pointers.find(p => p.idx === idx);
                  const isMid = pointer?.isMid;
                  return (
                    <div key={idx} className={`bs-slot ${isMid ? 'bs-slot--mid' : ''}`}>
                      <div className="bs-box">{val}</div>
                      {pointer && (
                        <div className={`bs-pointer ${isMid ? 'bs-pointer--mid' : ''}`}>
                          <span className="bs-arrow-icon">↑</span>
                          <span className="bs-pointer-text">{pointer.label}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="diagram-info-note">
                <span className="info-icon">ℹ</span>
                <span>{note}</span>
              </div>
            </div>
          </div>
        );
      }

      case 'tree': {
        const { title, note } = concept.treeData;
        return (
          <div className="diagram-box diagram-box--tree">
            <div className="diagram-header-label">{title}</div>
            <div className="tree-vis-layout">
              <div className="tree-tree-graph">
                <div className="tree-level">
                  <div className="tree-node tree-node--root">10</div>
                </div>
                <div className="tree-lines">
                  <svg width="180" height="24" viewBox="0 0 180 24" fill="none">
                    <line x1="90" y1="0" x2="35" y2="24" stroke="var(--bright-blue)" strokeWidth="2" />
                    <line x1="90" y1="0" x2="145" y2="24" stroke="var(--bright-blue)" strokeWidth="2" />
                  </svg>
                </div>
                <div className="tree-level tree-level--children">
                  <div className="tree-node">5</div>
                  <div className="tree-node">15</div>
                </div>
              </div>
              <div className="diagram-info-note">
                <span className="info-icon">ℹ</span>
                <span>{note}</span>
              </div>
            </div>
          </div>
        );
      }

      case 'dp_table': {
        const { title, states, note } = concept.dpTableData;
        return (
          <div className="diagram-box diagram-box--dp">
            <div className="diagram-header-label">{title}</div>
            <div className="dp-vis-layout">
              <div className="dp-row">
                {states.map((s, idx) => (
                  <div key={idx} className="dp-cell">
                    <span className="dp-idx">i={s.i}</span>
                    <span className="dp-val">{s.val}</span>
                  </div>
                ))}
              </div>
              <div className="diagram-info-note">
                <span className="info-icon">ℹ</span>
                <span>{note}</span>
              </div>
            </div>
          </div>
        );
      }

      default:
        return null;
    }
  };

  return (
    <section className="roadmap section" ref={ref} id="roadmap">
      <div className="container">
        {/* Section Header */}
        <div className="roadmap__section-intro">
          <div className="section-badge-wrap">
            <span className="badge badge-blue">CURRICULUM ARCHITECTURE</span>
          </div>
          <h2 className="section-title">
            6-Week <span className="highlight">Interactive Roadmap</span>
          </h2>
          <p className="section-subtitle">
            A structured, hands-on syllabus from Python fundamentals to interview-ready DSA mastery. Click any week to explore subtopics, run live code in our interactive terminal, and solve practice problems.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className={`roadmap__timeline-track ${inView ? 'roadmap__timeline-track--visible' : ''}`}>
          {/* Continuous Left Spine Line */}
          <div className="roadmap__spine-line"></div>

          {/* Cards List */}
          <div className="roadmap__timeline-items">
            {ROADMAP_WEEKS.map((w) => {
              const isExpanded = expandedWeek === w.week;
              const subIdx = activeSubtopicMap[w.week] || 0;
              const currentSubtopic = w.subtopics[subIdx] || w.subtopics[0];
              const activeCode = currentSubtopic?.codeSnippet || w.codeSnippet;
              const activeOutput = currentSubtopic?.terminalOutput || w.terminalOutput;
              const isTerminalOpen = terminalMap[w.week] || false;

              return (
                <div
                  key={w.week}
                  className={`roadmap__timeline-node ${isExpanded ? 'roadmap__timeline-node--expanded' : ''}`}
                >
                  {/* Left Spine Anchor: Small Dot + Horizontal Connector */}
                  <div className="timeline-spine-anchor">
                    <div className={`timeline-dot ${isExpanded ? 'timeline-dot--active' : ''}`}></div>
                    <div className="timeline-connector-bar"></div>
                  </div>

                  {/* Left Circle Number Marker */}
                  <div
                    className={`timeline-num-circle ${isExpanded ? 'timeline-num-circle--active' : ''} ${w.isCompleted ? 'timeline-num-circle--done' : ''}`}
                    onClick={() => toggleWeek(w.week)}
                    role="button"
                    tabIndex={0}
                    title={`Click to open Week ${w.week}`}
                  >
                    <span>{w.week}</span>
                  </div>

                  {/* Week Card Container */}
                  <div
                    className={`roadmap-week-card ${isExpanded ? 'roadmap-week-card--active' : ''}`}
                    onClick={(e) => {
                      // Avoid closing if clicking inside interactive editor/workbench elements
                      if (e.target.closest('.workbench-card') || e.target.closest('.subtopic-pill') || e.target.closest('.run-code-btn') || e.target.closest('.copy-code-btn') || e.target.closest('.practice-problem-row')) {
                        return;
                      }
                      toggleWeek(w.week);
                    }}
                  >
                    {/* Top Row: Icon + Meta Info + Progress Cluster + Action Button */}
                    <div className="week-card-summary">
                      {/* Squircle Icon Container */}
                      <div className="week-icon-box">
                        {renderWeekIcon(w.iconType)}
                      </div>

                      {/* Middle Details: Badge, Title, Subtitle, Tags */}
                      <div className="week-info-col">
                        <div className="week-badge-pill">
                          WEEK {w.week}
                        </div>
                        <h3 className="week-heading-title">{w.title}</h3>
                        <p className="week-sub-desc">{w.shortSubtitle || w.subtitle}</p>

                        {/* Tags Row */}
                        <div className="week-tags-row">
                          {w.tags?.map((tag, tIdx) => (
                            <span key={tIdx} className="week-tag-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Cluster: Progress Bar & Ratio + Status Check/Lock + Action Button */}
                      <div className="week-right-cluster">
                        {/* Progress Cluster */}
                        <div className="week-progress-area">
                          <div className="week-progress-top">
                            <span className="week-progress-text">{w.progressText}</span>
                            {w.isCompleted ? (
                              <CheckIcon />
                            ) : (
                              <div className="week-card-lock-badge" title="Locked until unlocked">
                                <LockIcon />
                              </div>
                            )}
                          </div>
                          <div className="week-progress-bar-bg">
                            <div
                              className="week-progress-bar-fill"
                              style={{ width: `${w.progressPercent}%` }}
                            ></div>
                          </div>
                        </div>

                        {/* Action Button: Review / Start / Collapse */}
                        <div className="week-action-area">
                          <button
                            type="button"
                            className={`week-action-btn ${w.actionType === 'primary' ? 'week-action-btn--primary' : 'week-action-btn--outline'} ${isExpanded ? 'week-action-btn--expanded' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleWeek(w.week);
                            }}
                          >
                            <span>{isExpanded ? 'Collapse ✕' : w.actionText}</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Interactive Dropdown Workbench when Clicked / Expanded */}
                    {isExpanded && (
                      <div className="week-card-expanded-workbench" onClick={(e) => e.stopPropagation()}>
                        <div className="workbench-divider-line"></div>

                        {/* Subtopics Navigation Tabs */}
                        <div className="workbench__subtopics-nav">
                          {w.subtopics.map((sub, sIdx) => {
                            const isSubActive = subIdx === sIdx;
                            return (
                              <button
                                key={sub.id}
                                type="button"
                                className={`subtopic-pill ${isSubActive ? 'subtopic-pill--active' : ''}`}
                                onClick={() => handleSelectSubtopic(w.week, sIdx)}
                              >
                                <span className="subtopic-num">{sub.num}</span>
                                <span className="subtopic-title">{sub.title}</span>
                                {sub.completed && <span className="subtopic-check">✓</span>}
                              </button>
                            );
                          })}
                        </div>

                        {/* 2-Column Content Grid */}
                        <div className="workbench__grid">
                          {/* Left Column: Concept Overview & Live Code Example */}
                          <div className="workbench__col-left">
                            {/* Concept Overview Card */}
                            <div className="workbench-card concept-card">
                              <div className="card-header">
                                <div className="card-header-icon">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                                  </svg>
                                </div>
                                <span className="card-title">Concept Overview</span>
                              </div>

                              <div className="concept-card__body">
                                <p className="concept-text">{w.concept.text}</p>
                                {renderDiagram(w.concept)}
                              </div>
                            </div>

                            {/* Code Example Card */}
                            <div className="workbench-card code-card">
                              <div className="card-header card-header--between">
                                <div className="card-header-left">
                                  <div className="card-header-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <polyline points="16 18 22 12 16 6"></polyline>
                                      <polyline points="8 6 2 12 8 18"></polyline>
                                    </svg>
                                  </div>
                                  <span className="card-title">
                                    Code Example {currentSubtopic?.title ? `(${currentSubtopic.title})` : ''}
                                  </span>
                                </div>

                                <button
                                  type="button"
                                  className="copy-code-btn"
                                  onClick={() => handleCopyCode(activeCode)}
                                  title="Copy code to clipboard"
                                >
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                                  </svg>
                                  <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                                </button>
                              </div>

                              {/* Editor Window */}
                              <div className="code-editor-wrap">
                                <pre className="code-editor">
                                  <code>
                                    {activeCode.split('\n').map((line, lIdx) => (
                                      <div key={lIdx} className="code-line">
                                        <span className="code-line-num">{lIdx + 1}</span>
                                        <span className="code-line-text">{line}</span>
                                      </div>
                                    ))}
                                  </code>
                                </pre>

                                {/* Interactive Code Action Buttons */}
                                <div className="code-actions-bar">
                                  <button
                                    type="button"
                                    className={`run-code-btn ${isRunningCode ? 'run-code-btn--running' : ''}`}
                                    onClick={() => handleRunCode(w.week)}
                                    disabled={isRunningCode}
                                  >
                                    <span className="btn-icon">{isRunningCode ? '⏳' : '▶'}</span>
                                    <span>{isRunningCode ? 'Executing Python...' : 'Run Code'}</span>
                                  </button>

                                  {isTerminalOpen && (
                                    <button
                                      type="button"
                                      className="reset-code-btn"
                                      onClick={() => handleResetCode(w.week)}
                                    >
                                      <span className="btn-icon">🔄</span>
                                      <span>Reset</span>
                                    </button>
                                  )}
                                </div>

                                {/* Animated Terminal Console Output */}
                                {isTerminalOpen && (
                                  <div className="terminal-output-card">
                                    <div className="terminal-output-header">
                                      <div className="term-badge">
                                        <span className="term-dot"></span>
                                        <span>Execution Output (Python 3.12)</span>
                                      </div>
                                      <span className="term-status-time">⚡ 12ms</span>
                                    </div>
                                    <div className="terminal-output-body">
                                      {activeOutput.map((outLine, oIdx) => (
                                        <div key={oIdx} className="terminal-line">
                                          <span className="term-arrow">› </span>
                                          <span>{outLine}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Right Column: Key Points, Practice Problems & Week Project */}
                          <div className="workbench__col-right">
                            {/* Key Points Card */}
                            <div className="workbench-card key-points-card">
                              <div className="card-header">
                                <div className="card-header-icon card-header-icon--gold">
                                  💡
                                </div>
                                <span className="card-title">Key Points</span>
                              </div>
                              <ul className="key-points-list">
                                {w.keyPoints.map((point, pIdx) => (
                                  <li key={pIdx} className="key-point-item">
                                    <span className="kp-check-icon">✓</span>
                                    <span className="kp-text">{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Practice Problems Card */}
                            <div className="workbench-card practice-card">
                              <div className="card-header card-header--between">
                                <div className="card-header-left">
                                  <div className="card-header-icon card-header-icon--emerald">
                                    &lt;/&gt;
                                  </div>
                                  <span className="card-title">Practice Problems</span>
                                </div>
                                <button
                                  type="button"
                                  className="practice-cta-btn"
                                  onClick={() => setProjectModal({ type: 'practice', week: w.week })}
                                >
                                  <span>Start Practice</span>
                                  <span className="arrow">→</span>
                                </button>
                              </div>

                              <div className="practice-problems-list">
                                {w.practiceProblems.map((prob) => {
                                  const isDone = completedProblems[`${w.week}-${prob.id}`];
                                  return (
                                    <div
                                      key={prob.id}
                                      className={`practice-problem-row ${isDone ? 'practice-problem-row--done' : ''}`}
                                      onClick={() => handleToggleProblem(w.week, prob.id)}
                                      role="button"
                                      tabIndex={0}
                                    >
                                      <span className="prob-num">{prob.id}</span>
                                      <span className="prob-title">{prob.title}</span>
                                      {isDone && <span className="prob-done-mark">✓</span>}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>

                            {/* Week Project Card */}
                            <div className="workbench-card project-card">
                              <div className="project-card__top">
                                <div className="project-icon-box">
                                  💼
                                </div>
                                <div className="project-meta">
                                  <span className="project-label">Week Project</span>
                                  <h4 className="project-title">{w.project.title}</h4>
                                </div>
                                <button
                                  type="button"
                                  className="view-project-btn"
                                  onClick={() => setProjectModal({ type: 'project', week: w.week, project: w.project })}
                                >
                                  <span>View Project</span>
                                  <span className="arrow">→</span>
                                </button>
                              </div>
                              <p className="project-desc">{w.project.desc}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal for Project / Practice Details */}
        {projectModal && (
          <div className="roadmap-modal-overlay" onClick={() => setProjectModal(null)}>
            <div className="roadmap-modal" onClick={e => e.stopPropagation()}>
              <button
                type="button"
                className="roadmap-modal-close"
                onClick={() => setProjectModal(null)}
              >
                ✕
              </button>
              {projectModal.type === 'project' ? (
                <>
                  <span className="badge badge-blue">Week {projectModal.week} Deliverable</span>
                  <h3 className="modal-title">{projectModal.project.title}</h3>
                  <p className="modal-desc">{projectModal.project.desc}</p>
                  <div className="modal-checklist">
                    <h5>Submission Deliverables:</h5>
                    <ul>
                      <li>Clean, modular Python implementation following PEP 8</li>
                      <li>Automated test cases verifying edge cases</li>
                      <li>README with problem breakdown & complexity analysis</li>
                    </ul>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary modal-action-btn"
                    onClick={() => setProjectModal(null)}
                  >
                    Got It & Close
                  </button>
                </>
              ) : (
                <>
                  <span className="badge badge-cyan">Week {projectModal.week} Coding Lab</span>
                  <h3 className="modal-title">Interactive Practice Session</h3>
                  <p className="modal-desc">
                    Ready to practice? Click any problem item in the workbench to mark it as completed as you solve them in live coding sessions.
                  </p>
                  <button
                    type="button"
                    className="btn btn-primary modal-action-btn"
                    onClick={() => setProjectModal(null)}
                  >
                    Start Solving Now
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
