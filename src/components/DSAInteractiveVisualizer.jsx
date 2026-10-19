import React, { useState, useEffect, useRef } from 'react';
import './DSAInteractiveVisualizer.css';

const PROBLEMS = [
  {
    id: 'two-pointer',
    title: 'Two-Pointer Target Sum',
    subtitle: 'Find pair with Sum = 22 in O(N)',
    array: [2, 7, 11, 15, 20, 28],
    target: 22,
    codeLines: [
      'def two_sum(nums, target):',
      '    left, right = 0, len(nums) - 1',
      '    while left < right:',
      '        current_sum = nums[left] + nums[right]',
      '        if current_sum == target: return [left, right]',
      '        elif current_sum < target: left += 1',
      '        else: right -= 1',
    ],
    steps: [
      { l: 0, r: 5, sum: 30, action: '30 > 22 → Decrement Right (R--)', codeIdx: 6, solved: false },
      { l: 0, r: 4, sum: 22, action: '22 == 22 → MATCH FOUND! [0, 4]', codeIdx: 4, solved: true },
      { l: 0, r: 4, sum: 22, action: '✨ Solution Verified! Time: O(N) | Space: O(1)', codeIdx: 4, solved: true }
    ]
  },
  {
    id: 'binary-search',
    title: 'Binary Search in Sorted Array',
    subtitle: 'Search Target = 24 in O(log N)',
    array: [3, 8, 12, 17, 24, 35, 42, 59],
    target: 24,
    codeLines: [
      'def binary_search(arr, target):',
      '    low, high = 0, len(arr) - 1',
      '    while low <= high:',
      '        mid = (low + high) // 2',
      '        if arr[mid] == target: return mid',
      '        elif arr[mid] < target: low = mid + 1',
      '        else: high = mid - 1',
    ],
    steps: [
      { low: 0, high: 7, mid: 3, val: 17, action: 'arr[3]=17 < 24 → Search Right half (low = mid + 1)', codeIdx: 5, solved: false },
      { low: 4, high: 7, mid: 5, val: 35, action: 'arr[5]=35 > 24 → Search Left half (high = mid - 1)', codeIdx: 6, solved: false },
      { low: 4, high: 4, mid: 4, val: 24, action: 'arr[4]=24 == 24 → TARGET FOUND at index 4!', codeIdx: 4, solved: true },
      { low: 4, high: 4, mid: 4, val: 24, action: '✨ Binary Search Complete: 3 steps vs 8 steps!', codeIdx: 4, solved: true }
    ]
  },
  {
    id: 'tree-traversal',
    title: 'Binary Search Tree Lookup',
    subtitle: 'Search Key = 15 in BST',
    nodes: [
      { id: 'root', val: 20, x: 50, y: 18 },
      { id: 'left', val: 10, x: 28, y: 55 },
      { id: 'right', val: 35, x: 72, y: 55 },
      { id: 'l_right', val: 15, x: 38, y: 88, target: true },
      { id: 'l_left', val: 5, x: 18, y: 88 },
      { id: 'r_left', val: 28, x: 62, y: 88 },
      { id: 'r_right', val: 45, x: 82, y: 88 }
    ],
    edges: [
      { from: { x: 50, y: 18 }, to: { x: 28, y: 55 } },
      { from: { x: 50, y: 18 }, to: { x: 72, y: 55 } },
      { from: { x: 28, y: 55 }, to: { x: 18, y: 88 } },
      { from: { x: 28, y: 55 }, to: { x: 38, y: 88 } },
      { from: { x: 72, y: 55 }, to: { x: 62, y: 88 } },
      { from: { x: 72, y: 55 }, to: { x: 82, y: 88 } }
    ],
    codeLines: [
      'def search_bst(root, key):',
      '    if not root or root.val == key: return root',
      '    if key < root.val: return search_bst(root.left, key)',
      '    return search_bst(root.right, key)'
    ],
    steps: [
      { activeNode: 'root', action: 'Inspect Root (20): 15 < 20 → Go Left', codeIdx: 2, solved: false },
      { activeNode: 'left', action: 'Inspect Left (10): 15 > 10 → Go Right', codeIdx: 3, solved: false },
      { activeNode: 'l_right', action: 'Inspect Node (15): 15 == 15 → TARGET FOUND!', codeIdx: 1, solved: true },
      { activeNode: 'l_right', action: '✨ BST Search Complete in O(log N) depth!', codeIdx: 1, solved: true }
    ]
  }
];

export default function DSAInteractiveVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [stepIdx, setStepIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const prob = PROBLEMS[activeTab];
  const currentStep = prob.steps[stepIdx % prob.steps.length];

  // Auto-advance step
  useEffect(() => {
    if (!isPlaying) return;
    timerRef.current = setInterval(() => {
      setStepIdx((prev) => (prev + 1) % prob.steps.length);
    }, 1900);

    return () => clearInterval(timerRef.current);
  }, [isPlaying, activeTab, prob.steps.length]);

  const handleTabChange = (idx) => {
    setActiveTab(idx);
    setStepIdx(0);
  };

  const handleNextStep = () => {
    setStepIdx((prev) => (prev + 1) % prob.steps.length);
  };

  return (
    <div className="dsa-vis">
      {/* Top Bar: Problem Pills & Play/Step Controls */}
      <div className="dsa-vis__header">
        <div className="dsa-vis__tabs">
          {PROBLEMS.map((p, idx) => (
            <button
              key={p.id}
              type="button"
              className={`dsa-vis__tab-btn ${activeTab === idx ? 'dsa-vis__tab-btn--active' : ''}`}
              onClick={() => handleTabChange(idx)}
            >
              {idx === 0 && '⚡ Two-Sum'}
              {idx === 1 && '🔍 Binary Search'}
              {idx === 2 && '🌳 BST Search'}
            </button>
          ))}
        </div>

        <div className="dsa-vis__controls">
          <button
            type="button"
            className="dsa-vis__ctrl-btn"
            title={isPlaying ? 'Pause' : 'Play'}
            onClick={() => setIsPlaying(!isPlaying)}
          >
            {isPlaying ? '⏸' : '▶'}
          </button>
          <button
            type="button"
            className="dsa-vis__ctrl-btn"
            title="Next Step"
            onClick={handleNextStep}
          >
            ⏭
          </button>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="dsa-vis__canvas">
        {/* TWO POINTER MODE */}
        {prob.id === 'two-pointer' && (
          <div className="dsa-vis__two-pointer">
            <div className="dsa-vis__meta-strip">
              <span className="dsa-vis__target-pill">Target: <strong>{prob.target}</strong></span>
              <span className={`dsa-vis__action-pill ${currentStep.solved ? 'dsa-vis__action-pill--success' : ''}`}>
                {currentStep.action}
              </span>
            </div>

            <div className="dsa-vis__array-row">
              {prob.array.map((val, idx) => {
                const isLeft = currentStep.l === idx;
                const isRight = currentStep.r === idx;
                const isMatch = currentStep.solved && (isLeft || isRight);

                return (
                  <div
                    key={idx}
                    className={`dsa-vis__cell ${isLeft ? 'dsa-vis__cell--left' : ''} ${isRight ? 'dsa-vis__cell--right' : ''} ${isMatch ? 'dsa-vis__cell--match' : ''}`}
                  >
                    <span className="dsa-vis__cell-index">[{idx}]</span>
                    <span className="dsa-vis__cell-val">{val}</span>
                    <div className="dsa-vis__pointers">
                      {isLeft && <span className="dsa-vis__pointer dsa-vis__pointer--l">▲ L</span>}
                      {isRight && <span className="dsa-vis__pointer dsa-vis__pointer--r">▲ R</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Live Arithmetic Bar */}
            <div className="dsa-vis__calc-bar">
              <span className="dsa-vis__calc-math">
                nums[L={currentStep.l}] ({prob.array[currentStep.l]}) + nums[R={currentStep.r}] ({prob.array[currentStep.r]}) = <strong>{currentStep.sum}</strong>
              </span>
              <span className="dsa-vis__badge-runtime">
                {currentStep.solved ? '🎉 0ms · Beats 99.4%' : '⚡ Scanning Pair...'}
              </span>
            </div>
          </div>
        )}

        {/* BINARY SEARCH MODE */}
        {prob.id === 'binary-search' && (
          <div className="dsa-vis__binary-search">
            <div className="dsa-vis__meta-strip">
              <span className="dsa-vis__target-pill">Target: <strong>{prob.target}</strong></span>
              <span className={`dsa-vis__action-pill ${currentStep.solved ? 'dsa-vis__action-pill--success' : ''}`}>
                {currentStep.action}
              </span>
            </div>

            <div className="dsa-vis__array-row">
              {prob.array.map((val, idx) => {
                const isMid = currentStep.mid === idx;
                const isOutOfRange = idx < currentStep.low || idx > currentStep.high;
                const isMatch = currentStep.solved && isMid;

                return (
                  <div
                    key={idx}
                    className={`dsa-vis__cell ${isMid ? 'dsa-vis__cell--mid' : ''} ${isOutOfRange ? 'dsa-vis__cell--dim' : ''} ${isMatch ? 'dsa-vis__cell--match' : ''}`}
                  >
                    <span className="dsa-vis__cell-index">[{idx}]</span>
                    <span className="dsa-vis__cell-val">{val}</span>
                    <div className="dsa-vis__pointers">
                      {isMid && <span className="dsa-vis__pointer dsa-vis__pointer--mid">▲ MID</span>}
                      {currentStep.low === idx && !isMid && <span className="dsa-vis__pointer dsa-vis__pointer--l">▲ Low</span>}
                      {currentStep.high === idx && !isMid && <span className="dsa-vis__pointer dsa-vis__pointer--r">▲ High</span>}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="dsa-vis__calc-bar">
              <span className="dsa-vis__calc-math">
                mid = ({currentStep.low} + {currentStep.high}) // 2 = <strong>{currentStep.mid}</strong> (val: {currentStep.val})
              </span>
              <span className="dsa-vis__badge-runtime">
                {currentStep.solved ? '🎯 O(log N) Found in 3 jumps!' : '⚡ Halving Space...'}
              </span>
            </div>
          </div>
        )}

        {/* TREE TRAVERSAL MODE */}
        {prob.id === 'tree-traversal' && (
          <div className="dsa-vis__tree-search">
            <div className="dsa-vis__meta-strip">
              <span className="dsa-vis__target-pill">Key: <strong>15</strong></span>
              <span className={`dsa-vis__action-pill ${currentStep.solved ? 'dsa-vis__action-pill--success' : ''}`}>
                {currentStep.action}
              </span>
            </div>

            <div className="dsa-vis__svg-wrap">
              <svg viewBox="0 0 100 100" className="dsa-vis__tree-svg">
                {/* Tree Edges */}
                {prob.edges.map((e, idx) => (
                  <line
                    key={idx}
                    x1={e.from.x}
                    y1={e.from.y}
                    x2={e.to.x}
                    y2={e.to.y}
                    stroke="rgba(56, 189, 248, 0.35)"
                    strokeWidth="1.8"
                    strokeDasharray="2,2"
                  />
                ))}

                {/* Tree Nodes */}
                {prob.nodes.map((node) => {
                  const isActive = currentStep.activeNode === node.id;
                  const isMatch = currentStep.solved && node.target;

                  return (
                    <g key={node.id} className="dsa-vis__tree-node">
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r={node.id === 'root' ? 8.5 : 7.5}
                        fill={isMatch ? '#10B981' : isActive ? '#38BDF8' : '#0F172A'}
                        stroke={isMatch ? '#34D399' : isActive ? '#60A5FA' : '#334155'}
                        strokeWidth={isActive || isMatch ? '2.5' : '1.5'}
                        className={isActive ? 'dsa-vis__circle--active' : ''}
                      />
                      <text
                        x={node.x}
                        y={node.y + 3}
                        textAnchor="middle"
                        fontSize={node.id === 'root' ? '6.5' : '5.8'}
                        fontWeight="800"
                        fill={isActive || isMatch ? '#FFFFFF' : '#94A3B8'}
                        fontFamily="monospace"
                      >
                        {node.val}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Terminal Python Status Footer */}
      <div className="dsa-vis__footer">
        <span className="dsa-vis__term-icon">🐍</span>
        <span className="dsa-vis__term-code">
          {prob.codeLines[currentStep.codeIdx] || prob.codeLines[0]}
        </span>
        <span className="dsa-vis__term-status">
          <span className="dsa-vis__pulse-dot"></span>
          ACTIVE SIMULATION
        </span>
      </div>
    </div>
  );
}
