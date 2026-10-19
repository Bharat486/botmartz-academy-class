import React, { useState } from 'react';
import './VideoDemoModal.css';

export default function VideoDemoModal({ isOpen, onClose, onEnrollClick }) {
  const [activeTab, setActiveTab] = useState('code');

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="video-modal-card card-3d" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">×</button>

        <div className="video-modal-header">
          <div className="preview-top-badge">
            <span className="live-dot-pulse"></span>
            <span className="badge badge-blue">INTERACTIVE CLASSROOM PREVIEW</span>
          </div>
          <h3>Live Cohort Learning Experience</h3>
          <p>Here is what learning inside BOTMARTZ Academy feels like — hands-on code execution, live mentor feedback, and visual problem solving.</p>
        </div>

        {/* Interactive Classroom Mockup instead of MP4 video */}
        <div className="classroom-preview-box">
          {/* Top Window Bar */}
          <div className="classroom-top-bar">
            <div className="window-dots">
              <span className="dot dot--red"></span>
              <span className="dot dot--yellow"></span>
              <span className="dot dot--green"></span>
            </div>
            <div className="classroom-tabs">
              <button
                type="button"
                className={`tab-btn ${activeTab === 'code' ? 'tab-btn--active' : ''}`}
                onClick={() => setActiveTab('code')}
              >
                <span>🐍 binary_search_patterns.py</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'visualizer' ? 'tab-btn--active' : ''}`}
                onClick={() => setActiveTab('visualizer')}
              >
                <span>📊 Live Tree Visualizer</span>
              </button>
              <button
                type="button"
                className={`tab-btn ${activeTab === 'mentor' ? 'tab-btn--active' : ''}`}
                onClick={() => setActiveTab('mentor')}
              >
                <span>💬 Mentor Live Q&A</span>
              </button>
            </div>
            <div className="live-attendees-pill">
              <span className="live-pulse-tiny"></span>
              <span>847 Students Live</span>
            </div>
          </div>

          {/* Main Classroom Screen Content */}
          <div className="classroom-screen-body">
            {activeTab === 'code' && (
              <div className="ide-layout">
                <div className="ide-code-area">
                  <div className="line-numbers">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(n => (
                      <span key={n}>{n}</span>
                    ))}
                  </div>
                  <pre className="code-content">
                    <code>
{`# BOTMARTZ Academy - Live Class Cohort Session
def search_rotated_sorted_array(nums: list[int], target: int) -> int:
    left, right = 0, len(nums) - 1
    
    while left <= right:
        mid = (left + right) // 2
        if nums[mid] == target:
            return mid # Target element found!
            
        # Left half is sorted
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1`}
                    </code>
                  </pre>
                </div>

                <div className="ide-terminal-pane">
                  <div className="terminal-header">TERMINAL · TEST SUITE</div>
                  <div className="terminal-output">
                    <div className="term-line success">✓ Test Case 1: [4,5,6,7,0,1,2], target=0 → Index 4 (PASS)</div>
                    <div className="term-line success">✓ Test Case 2: [4,5,6,7,0,1,2], target=3 → Index -1 (PASS)</div>
                    <div className="term-line success">✓ Test Case 3: [1], target=0 → Index -1 (PASS)</div>
                    <div className="term-line stat">Time Complexity: O(log N) · Space: O(1) [Optimal]</div>
                    <div className="term-line prompt">$ Ready for live mentor review...</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'visualizer' && (
              <div className="visualizer-pane">
                <div className="visualizer-header">
                  <h4>Binary Search Tree & Pointer Manipulation Visualizer</h4>
                  <span className="badge badge-cyan">Interactive Step Engine</span>
                </div>
                <div className="tree-visual-box">
                  <div className="tree-node root-node">
                    <span className="node-val">50</span>
                    <span className="node-label">Root</span>
                  </div>
                  <div className="tree-row">
                    <div className="tree-node left-node">
                      <span className="node-val">25</span>
                      <span className="node-label">Left Child</span>
                    </div>
                    <div className="tree-node right-node highlight-node">
                      <span className="node-val">75</span>
                      <span className="node-label">Target Match ✓</span>
                    </div>
                  </div>
                </div>
                <p className="visualizer-caption">Live visual graphs update synchronously as mentor explains pointer traversal.</p>
              </div>
            )}

            {activeTab === 'mentor' && (
              <div className="mentor-chat-pane">
                <div className="chat-msg mentor-msg">
                  <div className="chat-avatar">PS</div>
                  <div className="chat-bubble">
                    <strong>Priya Sharma (Staff Architect):</strong>
                    <p>"Notice how in line 8 we check if the left half is strictly sorted. This pattern solves 80% of rotated array problems."</p>
                  </div>
                </div>
                <div className="chat-msg student-msg">
                  <div className="chat-avatar student-avatar">AR</div>
                  <div className="chat-bubble">
                    <strong>Aman R. (Student):</strong>
                    <p>"What if the array has duplicates like [2, 5, 6, 0, 0, 1, 2]?"</p>
                  </div>
                </div>
                <div className="chat-msg mentor-msg">
                  <div className="chat-avatar">PS</div>
                  <div className="chat-bubble">
                    <strong>Priya Sharma:</strong>
                    <p>"Great catch! If nums[left] == nums[mid] == nums[right], simply shrink the search window with left += 1 and right -= 1."</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer with key features & CTA */}
        <div className="video-modal-footer">
          <div className="video-features-summary">
            <span>✓ High-Definition Live Sessions</span>
            <span>✓ Live In-Browser Code Execution</span>
            <span>✓ 1:1 Doubt Support</span>
            <span>✓ Lifetime Recording Access</span>
          </div>

          <div className="modal-footer-actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                onClose();
                if (onEnrollClick) onEnrollClick();
              }}
            >
              Enroll in Next Cohort →
            </button>
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
