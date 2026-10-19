import React from 'react';
import './Course3DFloatingVisual.css';

/**
 * Course3DFloatingVisual
 * High-fidelity 3D isometric floating visual matching User Reference Images:
 * - Image 1: Volumetric 3D Python with glowing pedestal & 4 levitating cards for DSA
 * - Image 2: 3-Blade upright glossy AI server stack with embossed "AI", Python badge & 3 levitating cards for Gen AI
 * 
 * @param {string} courseId - 'dsa-bootcamp' | 'genai-bootcamp'
 * @param {boolean} compact - whether to render in compact mode (e.g. inside course cards)
 */
export default function Course3DFloatingVisual({ courseId = 'dsa-bootcamp', compact = false }) {
  const isDSA = courseId === 'dsa-bootcamp' || courseId === 'dsa';

  return (
    <div className={`c3d-scene-root ${isDSA ? 'c3d-scene--dsa' : 'c3d-scene--genai'} ${compact ? 'c3d-scene--compact' : ''}`}>
      {/* Background Cybernetic Constellation & Grid Lines */}
      <div className="c3d-bg-constellation" aria-hidden="true">
        <svg className="c3d-constellation-svg" viewBox="0 0 400 320" fill="none">
          {/* Subtle perspective grid lines */}
          <line x1="40" y1="260" x2="360" y2="260" stroke="currentColor" strokeOpacity="0.12" strokeDasharray="3 3" />
          <line x1="80" y1="210" x2="320" y2="210" stroke="currentColor" strokeOpacity="0.08" strokeDasharray="3 3" />
          <line x1="120" y1="160" x2="280" y2="160" stroke="currentColor" strokeOpacity="0.05" />
          {/* Constellation nodes & connector lines */}
          <circle cx="90" cy="110" r="3.5" fill={isDSA ? '#0284C7' : '#38BDF8'} />
          <circle cx="160" cy="80" r="2.5" fill={isDSA ? '#38BDF8' : '#818CF8'} />
          <circle cx="290" cy="120" r="3" fill={isDSA ? '#0284C7' : '#A855F7'} />
          <circle cx="210" cy="170" r="2.5" fill={isDSA ? '#F59E0B' : '#38BDF8'} />
          <circle cx="70" cy="230" r="3" fill={isDSA ? '#0284C7' : '#0284C7'} />
          <circle cx="330" cy="240" r="3" fill={isDSA ? '#F59E0B' : '#A855F7'} />
          <path d="M90 110 L160 80 L290 120" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
          <path d="M70 230 L210 170 L330 240" stroke="currentColor" strokeOpacity="0.15" strokeWidth="1" />
        </svg>
      </div>

      {isDSA ? (
        /* ========================================================
           DSA 3D SCENE (TRANSPARENT 3D PYTHON + 3 INDEPENDENT FLOATING BOXES)
           ======================================================== */
        <div className="c3d-composition c3d-dsa-composition">
          {/* Box 1: Top-Left (Learn / Implement / Solve / Grow) */}
          <div className="c3d-float-card c3d-card--tl c3d-anim-float-1">
            <div className="c3d-card-ico c3d-card-ico--blue">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10" />
                <line x1="12" y1="20" x2="12" y2="4" />
                <line x1="6" y1="20" x2="6" y2="14" />
              </svg>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">Learn</strong>
              <span className="c3d-sub">Implement</span>
              <span className="c3d-sub">Solve</span>
              <span className="c3d-sub">Grow</span>
            </div>
          </div>

          {/* Box 2: Top-Right (Algorithms / Data Structures / Problem Solving / Code Defense) */}
          <div className="c3d-float-card c3d-card--tr c3d-anim-float-2">
            <div className="c3d-card-ico c3d-card-ico--gold">
              <span className="c3d-bolt-icon">⚡</span>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">Algorithms</strong>
              <span className="c3d-sub">Data Structures</span>
              <span className="c3d-sub">Problem Solving</span>
              <span className="c3d-sub">Code Defense</span>
            </div>
          </div>

          {/* Central Transparent 3D Python Logo & Pedestal Object (No rectangular image background!) */}
          <div className="c3d-center-anchor">
            {/* Ambient Glowing Neon Floor Underneath Pedestal */}
            <div className="c3d-pedestal-glow c3d-pedestal-glow--blue"></div>

            {/* Levitating 3D Python Object */}
            <div className="c3d-python-3d-object c3d-anim-levitate">
              <img
                src="/dsa_python_3d_pristine.png"
                alt="3D Python Logo with Pedestal"
                className="c3d-python-transparent-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Box 3: Bottom-Right (From Basics to Advanced with Python) */}
          <div className="c3d-float-card c3d-card--br c3d-anim-float-3">
            <div className="c3d-prompt-box">
              <span className="c3d-prompt-text">&gt;_</span>
            </div>
            <div className="c3d-card-text">
              <span className="c3d-title">From Basics</span>
              <span className="c3d-sub">to Advanced</span>
              <strong className="c3d-highlight-blue">with Python</strong>
            </div>
          </div>
        </div>
      ) : (
        /* ========================================================
           GEN AI 3D SCENE (IMAGE 1 & 2 PARITY: PRISTINE 3D SERVER + ROTATING ORBITAL RING + 4 FLOATING CARDS)
           ======================================================== */
        <div className="c3d-composition c3d-genai-composition">
          {/* Card 1: Top-Left (RAG / Enterprise Search) */}
          <div className="c3d-float-card c3d-card--tl c3d-anim-float-1">
            <div className="c3d-card-ico c3d-card-ico--blue-cyl">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0284C7" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3" fill="rgba(56, 189, 248, 0.2)" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">RAG</strong>
              <span className="c3d-sub">Enterprise Search</span>
            </div>
            <span className="c3d-card-arrow-btn">↗</span>
          </div>

          {/* Card 2: Top-Right (Multi-Agent Systems with LangGraph) */}
          <div className="c3d-float-card c3d-card--tr c3d-anim-float-2">
            <div className="c3d-card-ico c3d-card-ico--network">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3" fill="rgba(56, 189, 248, 0.25)" />
                <circle cx="6" cy="12" r="3" fill="rgba(56, 189, 248, 0.25)" />
                <circle cx="18" cy="19" r="3" fill="rgba(56, 189, 248, 0.25)" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">Multi-Agent Systems</strong>
              <span className="c3d-sub">with LangGraph</span>
            </div>
            <span className="c3d-card-arrow-btn">↗</span>
          </div>

          {/* Floating OpenAI Squircle Badge (Mid-Left) */}
          <div className="c3d-floating-side-badge c3d-side-badge--left c3d-anim-float-3" aria-hidden="true">
            <div className="c3d-side-squircle c3d-squircle--openai" title="OpenAI API Integration">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                <circle cx="12" cy="12" r="3" fill="#38BDF8" />
              </svg>
            </div>
          </div>

          {/* Central 3D GenAI Object with 3D Rotating Orbital Ring & Glow Floor */}
          <div className="c3d-center-anchor">
            {/* Ambient Glowing Neon Floor Underneath Pedestal */}
            <div className="c3d-pedestal-glow c3d-pedestal-glow--purple"></div>

            {/* Levitating 3D GenAI Object Container */}
            <div className="c3d-genai-3d-object c3d-anim-levitate">
              {/* 3D Rotating Orbital Ring System ("Roundup me ghoomne wali ring") */}
              <div className="c3d-orbit-system" aria-hidden="true">
                <div className="c3d-orbit-plane">
                  {/* Glowing orbital track */}
                  <div className="c3d-orbit-track"></div>
                  {/* Continuously 360-degree rotating spinner with planetary spheres */}
                  <div className="c3d-orbit-spinner">
                    <div className="c3d-orbit-orb c3d-orbit-orb--cyan-lg"></div>
                    <div className="c3d-orbit-orb c3d-orbit-orb--purple"></div>
                    <div className="c3d-orbit-orb c3d-orbit-orb--blue-lg"></div>
                    <div className="c3d-orbit-orb c3d-orbit-orb--cyan-sm"></div>
                    <div className="c3d-orbit-orb c3d-orbit-orb--purple-sm"></div>
                    <div className="c3d-orbit-beam"></div>
                  </div>
                </div>
              </div>

              {/* Pristine 3D Transparent Image */}
              <img
                src="/genai_server_3d_pristine.png"
                alt="3D GenAI Server Platform with Brain Circuit"
                className="c3d-genai-transparent-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Floating Python Squircle Badge (Mid-Right) */}
          <div className="c3d-floating-side-badge c3d-side-badge--right c3d-anim-float-2" aria-hidden="true">
            <div className="c3d-side-squircle c3d-squircle--python" title="Python LLM Stack">
              <svg className="py-badge-icon" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M54.5 12C38.2 12 39.5 19 39.5 19L39.6 26.5H55V28.8H26C26 28.8 14 27.4 14 44.5C14 61.6 24.5 61 24.5 61H30.8V52.2C30.8 52.2 30.2 41.7 41 41.7H56.5C56.5 41.7 66.5 42.2 66.5 32V17C66.5 17 67.5 12 54.5 12ZM46.8 17.2C48.8 17.2 50.5 18.8 50.5 20.8C50.5 22.8 48.8 24.5 46.8 24.5C44.8 24.5 43.2 22.8 43.2 20.8C43.2 18.8 44.8 17.2 46.8 17.2Z"
                  fill="#38BDF8"
                />
                <path
                  d="M55.5 98C71.8 98 70.5 91 70.5 91L70.4 83.5H55V81.2H84C84 81.2 96 82.6 96 65.5C96 48.4 85.5 49 85.5 49H79.2V57.8C79.2 57.8 79.8 68.3 69 68.3H53.5C53.5 68.3 43.5 67.8 43.5 78V93C43.5 93 42.5 98 55.5 98ZM63.2 92.8C61.2 92.8 59.5 91.2 59.5 89.2C59.5 87.2 61.2 85.5 63.2 85.5C65.2 85.5 66.8 87.2 66.8 89.2C66.8 91.2 65.2 92.8 63.2 92.8Z"
                  fill="#F59E0B"
                />
              </svg>
            </div>
          </div>

          {/* Card 3: Bottom-Left (Build AI Applications) */}
          <div className="c3d-float-card c3d-card--bl c3d-anim-float-4">
            <div className="c3d-card-ico c3d-card-ico--purple-chip">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#A855F7" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="3" fill="rgba(168, 85, 247, 0.18)" />
                <path d="M9 9h6v6H9z" />
                <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
              </svg>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">Build AI Applications</strong>
              <span className="c3d-sub">from Ideas to Production</span>
            </div>
            <span className="c3d-card-arrow-btn">↗</span>
          </div>

          {/* Card 4: Bottom-Right (Fine-Tuning with LoRA/QLoRA) */}
          <div className="c3d-float-card c3d-card--br c3d-anim-float-3">
            <div className="c3d-card-ico c3d-card-ico--gear">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" fill="rgba(37, 99, 235, 0.2)" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <div className="c3d-card-text">
              <strong className="c3d-title">Fine-Tuning</strong>
              <span className="c3d-sub">with LoRA/QLoRA</span>
            </div>
            <span className="c3d-card-arrow-btn">↗</span>
          </div>
        </div>
      )}
    </div>
  );
}
