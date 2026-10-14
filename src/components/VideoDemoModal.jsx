import React from 'react';
import './VideoDemoModal.css';

export default function VideoDemoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="video-modal-card card-3d" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">×</button>

        <div className="video-modal-header">
          <span className="badge badge-blue">CLASSROOM PREVIEW</span>
          <h3>BOTMARTZ Academy Interactive Demo</h3>
          <p>Experience how live classes, mentor code reviews, and instant doubt assistance work.</p>
        </div>

        <div className="video-player-wrapper">
          <video
            src="/UI Demo video for  DSA Class.mp4"
            controls
            autoPlay
            playsInline
            className="demo-video-el"
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="video-modal-footer">
          <div className="video-features-summary">
            <span>✓ High-Definition Live Streaming</span>
            <span>✓ Interactive Q&A</span>
            <span>✓ Instant Code Execution</span>
          </div>
          <button className="btn btn-primary" onClick={onClose}>
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
