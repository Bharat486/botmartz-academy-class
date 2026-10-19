import React, { useState, useEffect, useRef } from 'react';
import './CourseDetailPage.css';
import Course3DFloatingVisual from './Course3DFloatingVisual';

// ========================================================
// TWO-SUM & DSA SIMULATOR DATA
// ========================================================
// ========================================================
// DSA SIMULATOR DATA (Two-Sum, Binary Search, BST Search)
// ========================================================
const DSA_SIMULATOR_DATA = {
  'two-sum': {
    title: 'Two-Sum',
    target: 9,
    instruction: '▶ Find two numbers that add up to 9',
    array: [2, 7, 11, 15, 3, 6],
    codeLines: [
      { num: 1, text: 'def two_sum(arr, target):' },
      { num: 2, text: '    seen = {}' },
      { num: 3, text: '    for i, num in enumerate(arr):' },
      { num: 4, text: '        complement = target - num' },
      { num: 5, text: '        if complement in seen:' },
      { num: 6, text: '            return [seen[complement], i]' },
      { num: 7, text: '        seen[num] = i' },
      { num: 8, text: '    return []' }
    ],
    steps: [
      {
        i: 0,
        j: null,
        codeLine: 4,
        action: '▶ Step 1: Checking i=0 (val=2), complement = 9 - 2 = 7',
        output: 'seen = {}',
        status: 'Checking index 0: complement 7 not in seen yet',
        isSolved: false
      },
      {
        i: 0,
        j: null,
        codeLine: 7,
        action: '▶ Step 2: Store seen[2] = 0 in hash map',
        output: 'seen = { 2: 0 }',
        status: 'Stored val 2 at index 0. Moving to next number.',
        isSolved: false
      },
      {
        i: 0,
        j: 1,
        codeLine: 5,
        action: '▶ Step 3: i=1 (val=7), complement = 9 - 7 = 2. Found in seen!',
        output: '[0, 1]',
        status: 'Match found! arr[0]=2 + arr[1]=7 == 9',
        isSolved: true
      },
      {
        i: 0,
        j: 1,
        codeLine: 6,
        action: '🎉 return [seen[2], 1] → [0, 1] verified in O(N)',
        output: '[0, 1]',
        status: 'Code Executed Successfully',
        isSolved: true
      }
    ]
  },
  'binary-search': {
    title: 'Binary Search',
    target: 24,
    instruction: '▶ Search for Target = 24 in sorted array in O(log N)',
    array: [3, 8, 12, 17, 24, 35, 42, 59],
    codeLines: [
      { num: 1, text: 'def binary_search(arr, target):' },
      { num: 2, text: '    low, high = 0, len(arr) - 1' },
      { num: 3, text: '    while low <= high:' },
      { num: 4, text: '        mid = (low + high) // 2' },
      { num: 5, text: '        if arr[mid] == target:' },
      { num: 6, text: '            return mid' },
      { num: 7, text: '        elif arr[mid] < target: low = mid + 1' },
      { num: 8, text: '        else: high = mid - 1' }
    ],
    steps: [
      {
        i: 0,
        j: 7,
        mid: 3,
        codeLine: 4,
        action: 'low=0, high=7 → mid=3 (arr[3]=17 < 24)',
        output: 'Searching index 3...',
        status: '17 < 24 → Search right half (low = mid + 1)',
        isSolved: false
      },
      {
        i: 4,
        j: 7,
        mid: 5,
        codeLine: 7,
        action: 'low=4, high=7 → mid=5 (arr[5]=35 > 24)',
        output: 'Searching index 5...',
        status: '35 > 24 → Search left half (high = mid - 1)',
        isSolved: false
      },
      {
        i: 4,
        j: 4,
        mid: 4,
        codeLine: 5,
        action: 'low=4, high=4 → mid=4 (arr[4]=24 == 24) MATCH!',
        output: 'Index: 4',
        status: 'Target 24 found at index 4!',
        isSolved: true
      },
      {
        i: 4,
        j: 4,
        mid: 4,
        codeLine: 6,
        action: '🎉 return mid → 4. Time: O(log N) | Space: O(1)',
        output: 'Index: 4',
        status: 'Code Executed Successfully',
        isSolved: true
      }
    ]
  },
  'bst-search': {
    title: 'BST Search',
    target: 15,
    instruction: '▶ Search Key = 15 in Binary Search Tree',
    array: [10, 15, 20, 28, 35, 45],
    codeLines: [
      { num: 1, text: 'def search_bst(root, key):' },
      { num: 2, text: '    if not root or root.val == key:' },
      { num: 3, text: '        return root' },
      { num: 4, text: '    if key < root.val:' },
      { num: 5, text: '        return search_bst(root.left, key)' },
      { num: 6, text: '    return search_bst(root.right, key)' },
      { num: 7, text: '' },
      { num: 8, text: '# Found node with val = 15' }
    ],
    steps: [
      {
        i: 2,
        j: null,
        codeLine: 4,
        action: 'Inspect Root (20): 15 < 20 → Go Left subtree',
        output: 'Visiting Node 20',
        status: 'Traversing left branch towards node 10',
        isSolved: false
      },
      {
        i: 0,
        j: null,
        codeLine: 6,
        action: 'Inspect Node (10): 15 > 10 → Go Right subtree',
        output: 'Visiting Node 10',
        status: 'Traversing right child of 10',
        isSolved: false
      },
      {
        i: 1,
        j: 1,
        codeLine: 2,
        action: 'Inspect Node (15): 15 == 15 → TARGET FOUND!',
        output: 'Node(val=15)',
        status: 'Key 15 found at depth 2!',
        isSolved: true
      },
      {
        i: 1,
        j: 1,
        codeLine: 3,
        action: '🎉 return Node(15). Balanced BST Search: O(log N)',
        output: 'Node(val=15)',
        status: 'Code Executed Successfully',
        isSolved: true
      }
    ]
  }
};

// ========================================================
// GENERATIVE AI SIMULATOR DATA (Matching GenAI Reference)
// ========================================================
const GENAI_MODES = {
  rag: {
    name: 'Enterprise RAG',
    icon: '🗄️',
    prompt: 'Explain how retrieval augmented generation (RAG) works in simple terms...',
    stages: [
      { id: 1, label: '1. User Query', sub: 'Your question', icon: '👤', color: '#A855F7' },
      { id: 2, label: '2. Embedding & Retrieval', sub: 'Find relevant context', icon: '🗄️', color: '#06B6D4' },
      { id: 3, label: '3. LLM Reasoning', sub: 'Generate grounded answer', icon: '🧠', color: '#EC4899' },
      { id: 4, label: '4. Grounded Answer', sub: 'With sources', icon: '📄', color: '#10B981' }
    ],
    logs: [
      '> Searching knowledge base...',
      '> Retrieved 3 relevant documents',
      '> Generating response with grounded context...',
      '> Answer generated successfully!'
    ],
    response: {
      text: 'Retrieval Augmented Generation (RAG) combines a search system with a language model. It first retrieves relevant documents from a knowledge base, then uses that context to generate a more accurate and grounded response.',
      sources: [
        'Document #1: RAG Architecture Whitepaper (v3.2)',
        'Document #2: Pinecone Vector Indexing Guidelines',
        'Document #3: Enterprise LLM Guardrails & Grounding'
      ],
      metrics: {
        latency: '210ms',
        tokens: '38 in / 64 out',
        model: 'Llama-3-70B-Instruct',
        groundingScore: '99.4%'
      }
    }
  },
  agent: {
    name: 'AI Multi-Agent',
    icon: '🕸️',
    prompt: 'Autonomous Market Research & Code Verification Swarm...',
    stages: [
      { id: 1, label: '1. Lead Planner', sub: 'Goal decomposition', icon: '👑', color: '#F59E0B' },
      { id: 2, label: '2. Web Crawler', sub: 'Data gathering', icon: '🌐', color: '#06B6D4' },
      { id: 3, label: '3. Sandbox Runner', sub: 'Code execution', icon: '💻', color: '#8B5CF6' },
      { id: 4, label: '4. Critic Agent', sub: 'Verified output', icon: '🛡️', color: '#10B981' }
    ],
    logs: [
      '> Initializing LangGraph state graph...',
      '> Planner dispatched tasks to 3 subagents',
      '> Sandbox executed 120 lines of tested Python',
      '> Critic verified zero hallucinations. Ready!'
    ],
    response: {
      text: 'Multi-Agent systems coordinate specialized autonomous agents using state graphs. The planner broke the task into crawling and verification, yielding reliable automated deliverables.',
      sources: [
        'Tool #1: Tavily Web Search API',
        'Tool #2: Python REPL Docker Sandbox',
        'Tool #3: PyTest Unit Verification Runner'
      ],
      metrics: {
        latency: '340ms',
        tokens: '124 in / 180 out',
        model: 'LangGraph + Claude-3.5-Sonnet',
        groundingScore: '100%'
      }
    }
  },
  lora: {
    name: 'Fine-Tuning & LoRA',
    icon: '⚙️',
    prompt: 'Domain-specific instruction tuning with LoRA/QLoRA on custom corpus...',
    stages: [
      { id: 1, label: '1. Dataset Curation', sub: '10k instruction pairs', icon: '📚', color: '#3B82F6' },
      { id: 2, label: '2. LoRA Adapters', sub: 'Trainable params: 0.2%', icon: '⚡', color: '#06B6D4' },
      { id: 3, label: '3. Loss Convergence', sub: 'Loss: 2.45 → 0.18', icon: '📉', color: '#F59E0B' },
      { id: 4, label: '4. Quantized Export', sub: 'vLLM 4-bit serving', icon: '🚀', color: '#10B981' }
    ],
    logs: [
      '> Loading unsloth/Llama-3-8B-bnb-4bit base model...',
      '> Initialized LoRA rank=16 alpha=32 adapter layers',
      '> Training epoch 3/3 completed. Final loss: 0.18',
      '> Model exported to GGUF & vLLM engine successfully!'
    ],
    response: {
      text: 'LoRA (Low-Rank Adaptation) freezes pre-trained weights and injects trainable rank-decomposition matrices. This allows domain fine-tuning with 90% less GPU memory and zero catastrophic forgetting.',
      sources: [
        'Dataset: 10,000 Clean Domain Instruction Pairs',
        'Hardware: Single A10G 24GB GPU',
        'Method: QLoRA 4-bit NormalFloat Quantization'
      ],
      metrics: {
        latency: '14ms/token',
        tokens: 'Perplexity: 3.42',
        model: 'Fine-Tuned Llama-3-8B-LoRA',
        groundingScore: '98.8%'
      }
    }
  }
};

export default function CourseDetailPage({ courseId = 'dsa-bootcamp', onBackHome, onEnrollClick }) {
  const isDSA = courseId === 'dsa-bootcamp';

  // DSA Simulator State
  const [dsaTab, setDsaTab] = useState('two-sum');
  const [dsaStepIdx, setDsaStepIdx] = useState(2); // starts near verified match
  const [dsaPlaying, setDsaPlaying] = useState(true); // auto-play running by default

  // GenAI Simulator State
  const [genAiMode, setGenAiMode] = useState('rag'); // 'rag' | 'agent' | 'lora'
  const [genAiStep, setGenAiStep] = useState(3); // Completed step
  const [genAiRunning, setGenAiRunning] = useState(false);
  const [genAiResponseTab, setGenAiResponseTab] = useState('response'); // 'response' | 'sources' | 'metrics'
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Auto-play interval for DSA simulation
  useEffect(() => {
    if (!dsaPlaying || !isDSA) return;
    const currentAlgo = DSA_SIMULATOR_DATA[dsaTab] || DSA_SIMULATOR_DATA['two-sum'];
    const timer = setInterval(() => {
      setDsaStepIdx((prev) => (prev + 1) % currentAlgo.steps.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [dsaPlaying, dsaTab, isDSA]);

  const handleDsaTabSwitch = (tab) => {
    setDsaTab(tab);
    setDsaStepIdx(0);
    setDsaPlaying(true);
  };

  const handleDsaNextStep = () => {
    const currentAlgo = DSA_SIMULATOR_DATA[dsaTab] || DSA_SIMULATOR_DATA['two-sum'];
    setDsaStepIdx((prev) => (prev + 1) % currentAlgo.steps.length);
  };

  // In-Page Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    experienceLevel: 'Intermediate (1-3 yrs dev)',
    track: isDSA ? 'DSA with Python' : 'Generative AI Engineering (RAG + Agents + Fine-tuning)',
    batch: isDSA ? 'Batch 1 (Starting Soon)' : 'Batch 1 (Live Online) — 8 Weeks',
    agreeUpdates: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Auto-switch defaults on course change
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      track: isDSA ? 'DSA with Python' : 'Generative AI Engineering (RAG + Agents + Fine-tuning)',
      batch: isDSA ? 'Batch 1 (Starting Soon)' : 'Batch 1 (Live Online) — 8 Weeks'
    }));
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [courseId, isDSA]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTriggerGenAiRun = () => {
    setGenAiRunning(true);
    setGenAiStep(0);
    let stepCount = 0;
    const interval = setInterval(() => {
      stepCount += 1;
      setGenAiStep(stepCount);
      if (stepCount >= 3) {
        clearInterval(interval);
        setGenAiRunning(false);
      }
    }, 750);
  };

  const handleResetGenAi = () => {
    setGenAiStep(0);
    setGenAiRunning(false);
  };

  const handleCopyResponse = () => {
    const text = GENAI_MODES[genAiMode].response.text;
    navigator.clipboard?.writeText(text);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.phone) {
      alert('Please fill in your name, email, and phone number.');
      return;
    }
    setFormSubmitted(true);
    if (onEnrollClick) {
      onEnrollClick({
        title: isDSA ? 'Data Structures & Algorithms Bootcamp (Python)' : 'Generative AI Engineering Bootcamp',
        price: isDSA ? '₹1,999' : '₹40,000 / $500',
        duration: '8-Week Live Cohort',
        badge: formData.batch,
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone
      });
    }
  };

  const currentGenAi = GENAI_MODES[genAiMode];

  return (
    <div className="course-detail-page-v2">
      {/* ========================================================
          1. TOP NAVIGATION BAR (Matching Reference Image)
         ======================================================== */}
      <div className="detail-v2-nav">
        <div className="container detail-v2-nav__inner">
          <button type="button" className="detail-v2-back-btn" onClick={onBackHome}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>Back to All Courses</span>
          </button>

          <div className="detail-v2-selector-pills">
            <button
              type="button"
              className={`selector-pill ${isDSA ? 'selector-pill--active' : ''}`}
              onClick={() => {
                if (!isDSA) window.location.hash = '/course/dsa-bootcamp';
              }}
            >
              <span className="pill-code-icon">&lt;/&gt;</span>
              <span>DSA with Python</span>
            </button>
            <button
              type="button"
              className={`selector-pill ${!isDSA ? 'selector-pill--active' : ''}`}
              onClick={() => {
                if (isDSA) window.location.hash = '/course/genai-bootcamp';
              }}
            >
              <span>✨ Generative AI</span>
            </button>
          </div>

          <div className="detail-v2-seats-badge">
            <span className="seats-green-dot"></span>
            <span>Batch 1: Only {isDSA ? '4' : '3'} of 20 Seats Left</span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. HERO SECTION WITH 3D VISUAL (DSA vs GenAI)
         ======================================================== */}
      <section className="detail-v2-hero">
        <div className="container detail-v2-hero__grid">
          {/* Left Text Column */}
          <div className="hero-left-col">
            <div className="hero-overline">
              <span>8 - WEEK LIVE COHORT</span>
            </div>

            {isDSA ? (
              <h1 className="hero-main-title">
                Data Structures &amp;
                <br />
                Algorithms Bootcamp
                <br />
                <span className="hero-title-highlight">
                  (Python)
                  <svg className="hero-brush-underline" viewBox="0 0 200 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10C50 3 150 2 197 9" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
              </h1>
            ) : (
              <h1 className="hero-main-title">
                <span className="hero-title-highlight">
                  Generative AI
                  <svg className="hero-brush-underline hero-brush-underline--genai" viewBox="0 0 220 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 10C60 3 160 2 217 9" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                Engineering Bootcamp
              </h1>
            )}

            <p className="hero-quote-text">
              {isDSA
                ? '“Stop memorizing solutions. Start learning how to solve problems.”'
                : '“Stop playing with toys. Build production-grade AI systems from first principles.”'}
            </p>

            <p className="hero-body-desc">
              {isDSA
                ? 'A battle-tested live cohort to take you from basic Python syntax to tackling hard LeetCode problems with structured pattern-matching, algorithmic rigor, and 1:1 mentor code defense.'
                : 'An elite engineering immersion into the modern Generative AI stack. Build grounded Enterprise RAG systems, multi-agent autonomous swarms with LangGraph, and custom model fine-tuning with LoRA/QLoRA on production GPU infrastructure.'}
            </p>

            {/* 4 Feature Badges Row */}
            <div className="hero-feature-badges-row">
              <div className="hero-feature-badge">
                <span className="badge-ico">{isDSA ? '🎥' : '📖'}</span>
                <span>Live Classes</span>
              </div>
              <div className="hero-feature-badge">
                <span className="badge-ico">{isDSA ? '📝' : '💼'}</span>
                <span>{isDSA ? 'Hands-on Practice' : 'Hands-on Projects'}</span>
              </div>
              <div className="hero-feature-badge">
                <span className="badge-ico">👥</span>
                <span>1:1 Mentor Support</span>
              </div>
              <div className="hero-feature-badge">
                <span className="badge-ico">📊</span>
                <span>{isDSA ? 'Real Problem Solving' : 'Production-Grade Skills'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating 3D Scene (Matching Image 1 & Image 2 Parity) */}
          <div className="hero-right-col">
            <Course3DFloatingVisual courseId={courseId} />
          </div>
        </div>
      </section>

      {/* ========================================================
          3. INTERACTIVE SIMULATOR (DSA vs GenAI RAG)
         ======================================================== */}
      <section className="detail-v2-sim-section">
        <div className="container">
          {isDSA ? (
            /* DSA Two-Sum & Interactive Code Simulator */
            (() => {
              const currentAlgo = DSA_SIMULATOR_DATA[dsaTab] || DSA_SIMULATOR_DATA['two-sum'];
              const currentStep = currentAlgo.steps[dsaStepIdx % currentAlgo.steps.length];

              return (
                <div className="sim-v2-container">
                  <div className="sim-v2-top-bar">
                    <div className="sim-v2-tabs">
                      <button
                        type="button"
                        className={`sim-tab-pill ${dsaTab === 'two-sum' ? 'sim-tab-pill--active' : ''}`}
                        onClick={() => handleDsaTabSwitch('two-sum')}
                      >
                        <span className="tab-ico">⚡</span>
                        <span>Two-Sum</span>
                      </button>
                      <button
                        type="button"
                        className={`sim-tab-pill ${dsaTab === 'binary-search' ? 'sim-tab-pill--active' : ''}`}
                        onClick={() => handleDsaTabSwitch('binary-search')}
                      >
                        <span className="tab-ico">🔍</span>
                        <span>Binary Search</span>
                      </button>
                      <button
                        type="button"
                        className={`sim-tab-pill ${dsaTab === 'bst-search' ? 'sim-tab-pill--active' : ''}`}
                        onClick={() => handleDsaTabSwitch('bst-search')}
                      >
                        <span className="tab-ico">🌲</span>
                        <span>BST Search</span>
                      </button>
                    </div>

                    <div className="sim-v2-controls">
                      <button
                        type="button"
                        className="sim-ctrl-btn"
                        title={dsaPlaying ? 'Pause Simulation' : 'Play Live Animation'}
                        onClick={() => setDsaPlaying(!dsaPlaying)}
                      >
                        {dsaPlaying ? '⏸' : '▶'}
                      </button>
                      <button
                        type="button"
                        className="sim-ctrl-btn"
                        title="Step Forward (⏭)"
                        onClick={handleDsaNextStep}
                      >
                        ⏭
                      </button>
                    </div>
                  </div>

                  <div className="sim-v2-body">
                    <div className="sim-array-header-row">
                      <div className="sim-target-badge">
                        <span>Target: {currentAlgo.target}</span>
                      </div>

                      <div className="sim-array-display">
                        <span className="arr-label">arr = [</span>
                        <div className="arr-boxes-wrapper">
                          {currentAlgo.array.map((num, idx) => {
                            const isI = currentStep.i === idx;
                            const isJ = currentStep.j === idx;
                            const isMid = currentStep.mid === idx;
                            return (
                              <div key={idx} className="arr-box-col">
                                <span className="arr-idx-num">{idx}</span>
                                <div className={`arr-num-box ${isI ? 'arr-num-box--i' : isJ ? 'arr-num-box--j' : isMid ? 'arr-num-box--mid' : ''}`}>
                                  <span>{num}</span>
                                </div>
                                <div className="arr-pointer-slot">
                                  {isI && (
                                    <div className="pointer-tag pointer-tag--i">
                                      <span className="pointer-arrow">▲</span>
                                      <span className="pointer-name">{dsaTab === 'binary-search' ? 'low' : 'i'}</span>
                                    </div>
                                  )}
                                  {isJ && (
                                    <div className="pointer-tag pointer-tag--j">
                                      <span className="pointer-arrow">▲</span>
                                      <span className="pointer-name">{dsaTab === 'binary-search' ? 'high' : 'j'}</span>
                                    </div>
                                  )}
                                  {isMid && !isI && !isJ && (
                                    <div className="pointer-tag pointer-tag--mid">
                                      <span className="pointer-arrow">▲</span>
                                      <span className="pointer-name">mid</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        <span className="arr-label">]</span>
                      </div>

                      <div className="sim-task-instruction">
                        <span>{currentStep.action || currentAlgo.instruction}</span>
                      </div>
                    </div>

                    <div className="sim-code-output-grid">
                      <div className="sim-code-editor">
                        <div className="editor-lines">
                          {currentAlgo.codeLines.map((line) => (
                            <div
                              key={line.num}
                              className={`code-line-row ${line.num === currentStep.codeLine ? 'code-line-row--highlight' : ''}`}
                            >
                              <span className="line-num">{line.num}</span>
                              <pre className="line-code"><code>{line.text}</code></pre>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="sim-output-card">
                        <div className="output-status-pill">
                          <span className={`status-dot ${currentStep.isSolved ? 'status-dot-green' : 'status-dot-amber'}`}></span>
                          <span>{currentStep.status}</span>
                        </div>

                        <div className="output-content-box">
                          <span className="output-label">Output:</span>
                          <div className="output-result-val">
                            <span>{currentStep.output}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="sim-v2-features-bar">
                    <div className="sim-feature-col">
                      <div className="feat-check">✓</div>
                      <div>
                        <strong>Step-by-Step Visualization</strong>
                        <span>See how the algorithm works</span>
                      </div>
                    </div>
                    <div className="sim-feature-col">
                      <div className="feat-check">✓</div>
                      <div>
                        <strong>Real-Time Execution</strong>
                        <span>Modify input and see output instantly</span>
                      </div>
                    </div>
                    <div className="sim-feature-col">
                      <div className="feat-check">✓</div>
                      <div>
                        <strong>Clean &amp; Readable Code</strong>
                        <span>Well-commented Python solutions</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()
          ) : (
            /* GenAI Enterprise RAG Simulator (Matching Image Reference) */
            <div className="sim-v2-container genai-sim-v2-card">
              {/* Top Tabs Bar */}
              <div className="sim-v2-top-bar">
                <div className="sim-v2-tabs">
                  <button
                    type="button"
                    className={`sim-tab-pill ${genAiMode === 'rag' ? 'sim-tab-pill--active' : ''}`}
                    onClick={() => { setGenAiMode('rag'); setGenAiStep(3); }}
                  >
                    <span className="tab-ico">🗄️</span>
                    <span>Enterprise RAG</span>
                  </button>
                  <button
                    type="button"
                    className={`sim-tab-pill ${genAiMode === 'agent' ? 'sim-tab-pill--active' : ''}`}
                    onClick={() => { setGenAiMode('agent'); setGenAiStep(3); }}
                  >
                    <span className="tab-ico">🕸️</span>
                    <span>AI Multi-Agent</span>
                  </button>
                  <button
                    type="button"
                    className={`sim-tab-pill ${genAiMode === 'lora' ? 'sim-tab-pill--active' : ''}`}
                    onClick={() => { setGenAiMode('lora'); setGenAiStep(3); }}
                  >
                    <span className="tab-ico">⚙️</span>
                    <span>Fine-Tuning &amp; LoRA</span>
                  </button>
                </div>

                <div className="sim-v2-controls">
                  <button
                    type="button"
                    className="genai-reset-btn"
                    onClick={handleResetGenAi}
                    title="Reset Simulator"
                  >
                    <span className="reset-ico">🔄</span>
                    <span>Reset</span>
                  </button>
                </div>
              </div>

              {/* Body: Prompt Ribbon + 4 Node Pipeline + Split Console */}
              <div className="sim-v2-body">
                {/* Your Query Bar */}
                <div className="genai-query-bar">
                  <div className="query-label-box">
                    <span className="query-doc-icon">📄</span>
                    <span className="query-title">Your Query</span>
                  </div>

                  <div className="query-input-box">
                    <span className="query-text-val">{currentGenAi.prompt}</span>
                  </div>

                  <button
                    type="button"
                    className="genai-run-trigger-btn"
                    onClick={handleTriggerGenAiRun}
                    disabled={genAiRunning}
                  >
                    <span>{genAiRunning ? '⏳ Synthesizing...' : '▶ Run'}</span>
                  </button>
                </div>

                {/* 4 Pipeline Stages Flow */}
                <div className="genai-stages-flow">
                  {currentGenAi.stages.map((stage, idx) => {
                    const isActive = genAiStep >= idx;
                    const isCurrent = genAiStep === idx;
                    return (
                      <React.Fragment key={stage.id}>
                        <div className={`genai-stage-node ${isActive ? 'genai-stage-node--active' : ''} ${isCurrent ? 'genai-stage-node--current' : ''}`}>
                          <div className="node-icon-circle" style={{ borderColor: stage.color }}>
                            <span className="node-icon">{stage.icon}</span>
                            {isCurrent && <span className="node-pulse-ring" style={{ borderColor: stage.color }}></span>}
                          </div>
                          <strong className="node-title">{stage.label}</strong>
                          <span className="node-sub">{stage.sub}</span>
                        </div>

                        {idx < currentGenAi.stages.length - 1 && (
                          <div className={`genai-flow-arrow ${genAiStep > idx ? 'genai-flow-arrow--active' : ''}`}>
                            <span className="arrow-line"></span>
                            <span className="arrow-head">→</span>
                          </div>
                        )}
                      </React.Fragment>
                    );
                  })}
                </div>

                {/* Split Consoles: Left Synthesis + Right Response */}
                <div className="genai-consoles-grid">
                  {/* Left: Live Synthesis Logs */}
                  <div className="genai-synthesis-console">
                    <div className="console-header-bar">
                      <span className="synthesis-badge">LIVE SYNTHESIS</span>
                    </div>
                    <div className="synthesis-terminal-logs">
                      {currentGenAi.logs.slice(0, genAiStep + 1).map((log, lIdx) => (
                        <p
                          key={lIdx}
                          className={`log-line ${lIdx === currentGenAi.logs.length - 1 && genAiStep === 3 ? 'log-line--success' : ''}`}
                        >
                          {log}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Right: Response Terminal Box with Tabs */}
                  <div className="genai-response-console">
                    <div className="response-header-bar">
                      <div className="response-tabs-group">
                        <button
                          type="button"
                          className={`resp-tab ${genAiResponseTab === 'response' ? 'resp-tab--active' : ''}`}
                          onClick={() => setGenAiResponseTab('response')}
                        >
                          Response
                        </button>
                        <button
                          type="button"
                          className={`resp-tab ${genAiResponseTab === 'sources' ? 'resp-tab--active' : ''}`}
                          onClick={() => setGenAiResponseTab('sources')}
                        >
                          Sources (3)
                        </button>
                        <button
                          type="button"
                          className={`resp-tab ${genAiResponseTab === 'metrics' ? 'resp-tab--active' : ''}`}
                          onClick={() => setGenAiResponseTab('metrics')}
                        >
                          Latency &amp; Tokens
                        </button>
                      </div>

                      <button
                        type="button"
                        className="copy-response-btn"
                        onClick={handleCopyResponse}
                        title="Copy Response Text"
                      >
                        {copiedNotification ? '✓' : '📋'}
                      </button>
                    </div>

                    <div className="response-content-area">
                      {genAiResponseTab === 'response' && (
                        <p className="response-text-p">
                          {genAiMode === 'rag' && (
                            <>
                              Retrieval Augmented Generation (RAG) combines a search system with a language model. It first <span className="text-cyan-bold">retrieves relevant documents</span> from a knowledge base, then uses that context to generate a more accurate and <span className="text-green-bold">grounded response</span>.
                            </>
                          )}
                          {genAiMode === 'agent' && (
                            <>
                              Multi-Agent architecture coordinates specialized autonomous LLM workers via LangGraph. The <span className="text-cyan-bold">Planner Agent</span> decomposed requirements, sandbox <span className="text-green-bold">executed unit tests</span>, and critic verified zero hallucinations.
                            </>
                          )}
                          {genAiMode === 'lora' && (
                            <>
                              LoRA freezes pre-trained foundation model weights and injects trainable <span className="text-cyan-bold">rank-decomposition adapter matrices</span>. This enables domain tuning with <span className="text-green-bold">90% less GPU VRAM</span> and zero catastrophic forgetting.
                            </>
                          )}
                        </p>
                      )}

                      {genAiResponseTab === 'sources' && (
                        <ul className="response-sources-list">
                          {currentGenAi.response.sources.map((src, sIdx) => (
                            <li key={sIdx} className="source-item">
                              <span className="source-bullet">🔗</span>
                              <span>{src}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {genAiResponseTab === 'metrics' && (
                        <div className="response-metrics-grid">
                          <div className="metric-box">
                            <span className="metric-label">Latency:</span>
                            <span className="metric-val">{currentGenAi.response.metrics.latency}</span>
                          </div>
                          <div className="metric-box">
                            <span className="metric-label">Tokens:</span>
                            <span className="metric-val">{currentGenAi.response.metrics.tokens}</span>
                          </div>
                          <div className="metric-box">
                            <span className="metric-label">Engine:</span>
                            <span className="metric-val">{currentGenAi.response.metrics.model}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom 3 Features Bar */}
              <div className="sim-v2-features-bar">
                <div className="sim-feature-col">
                  <div className="feat-check feat-check--shield">🛡️</div>
                  <div>
                    <strong>Grounded Responses</strong>
                    <span>Reduce hallucinations with real data</span>
                  </div>
                </div>
                <div className="sim-feature-col">
                  <div className="feat-check feat-check--lightning">⚡</div>
                  <div>
                    <strong>Real-Time Agent Workflow</strong>
                    <span>Visualize how AI agents collaborate</span>
                  </div>
                </div>
                <div className="sim-feature-col">
                  <div className="feat-check feat-check--cube">📦</div>
                  <div>
                    <strong>Production Architecture</strong>
                    <span>Learn industry-grade implementation</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================
          4. IN-PAGE "RESERVE YOUR SEAT" FORM (Matching Image Reference)
         ======================================================== */}
      <section className="detail-v2-enroll-section">
        <div className="container">
          <div className="reserve-seat-card">
            {/* GenAI 2-Column Split: Left Form, Right Pricing Card */}
            {!isDSA ? (
              <div className="reserve-genai-layout-grid">
                {/* Left Side: Form */}
                <div className="reserve-left-form-col">
                  <div className="limited-seats-tag">
                    <span>LIMITED SEATS</span>
                  </div>
                  <h2 className="reserve-title">Reserve Your Seat</h2>
                  <p className="reserve-subtitle">
                    Start building production-ready GenAI systems.
                  </p>

                  <form className="reserve-form-grid" onSubmit={handleFormSubmit}>
                    <div className="form-field-group">
                      <label className="form-label">
                        <span className="field-icon">👤</span> Full Name <span className="req-star">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        className="form-input-v2"
                        placeholder="Enter your full name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="form-label">
                        <span className="field-icon">✉️</span> Email Address <span className="req-star">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="form-input-v2"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="form-field-group">
                      <label className="form-label">
                        <span className="field-icon">📞</span> Phone Number <span className="req-star">*</span>
                      </label>
                      <div className="phone-input-wrapper">
                        <div className="country-code-pill">
                          <span className="flag-icon">🇮🇳</span>
                          <span>+91</span>
                          <span className="caret-down">▾</span>
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          className="form-input-v2 form-input-phone"
                          placeholder="Enter your phone number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-field-group">
                      <label className="form-label">
                        <span className="field-icon">📊</span> Experience Level <span className="req-star">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          name="experienceLevel"
                          className="form-input-v2 form-select-v2"
                          value={formData.experienceLevel}
                          onChange={handleInputChange}
                        >
                          <option value="Beginner in AI">Beginner in AI</option>
                          <option value="Intermediate (1-3 yrs dev)">Intermediate (1-3 yrs dev)</option>
                          <option value="Senior Engineer / Tech Lead">Senior Engineer / Tech Lead</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field-group full-width-field">
                      <label className="form-label">
                        <span className="field-icon">🗂️</span> Preferred Track <span className="req-star">*</span>
                      </label>
                      <div className="select-wrapper">
                        <select
                          name="track"
                          className="form-input-v2 form-select-v2"
                          value={formData.track}
                          onChange={handleInputChange}
                        >
                          <option value="Generative AI Engineering (RAG + Agents + Fine-tuning)">
                            Generative AI Engineering (RAG + Agents + Fine-tuning)
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="form-field-group full-width-field">
                      <label className="checkbox-label">
                        <input
                          type="checkbox"
                          name="agreeUpdates"
                          checked={formData.agreeUpdates}
                          onChange={handleInputChange}
                          className="checkbox-input"
                        />
                        <span>
                          I agree to be contacted about the course, schedule, and other learning opportunities from <strong>Botmartz Academy</strong>.
                        </span>
                      </label>
                    </div>
                  </form>
                </div>

                {/* Right Side: Pricing & Value Props Card */}
                <div className="reserve-right-pricing-col">
                  {/* Batch Starts Soon Pill Card */}
                  <div className="batch-starts-ribbon">
                    <span className="starts-label">BATCH STARTS SOON</span>
                    <div className="batch-meta-box">
                      <span className="cal-ico">📅</span>
                      <div>
                        <strong>Batch 1 (Live Online)</strong>
                        <span>Mon, 15 Apr 2026 · 8 Weeks</span>
                      </div>
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="genai-price-header-row">
                    <div className="genai-price-numbers">
                      <span className="genai-main-price">₹40,000 / $500</span>
                      <span className="genai-cut-price">₹60,000</span>
                    </div>
                    <div className="genai-pills-row">
                      <span className="pill-discount-red">33% OFF</span>
                      <span className="pill-early-bird">Early Bird</span>
                    </div>
                  </div>

                  {/* Urgency Progress Bar */}
                  <div className="genai-seats-urgency-box">
                    <div className="urgency-text-row">
                      <span>🔥 <strong>Only 3 Seats Remaining</strong></span>
                      <span className="seats-fraction">3 of 20 seats left</span>
                    </div>
                    <div className="seats-progress-track">
                      <div className="seats-progress-fill" style={{ width: '85%' }}></div>
                    </div>
                  </div>

                  {/* 5 Checkmarks List */}
                  <ul className="genai-value-checklist">
                    <li>
                      <span className="blue-circle-check">✓</span>
                      <span>20 seats per batch (small cohort)</span>
                    </li>
                    <li>
                      <span className="blue-circle-check">✓</span>
                      <span>8 weeks live interactive classes</span>
                    </li>
                    <li>
                      <span className="blue-circle-check">✓</span>
                      <span>Hands-on projects &amp; real-world use cases</span>
                    </li>
                    <li>
                      <span className="blue-circle-check">✓</span>
                      <span>1:1 mentor support</span>
                    </li>
                    <li>
                      <span className="blue-circle-check">✓</span>
                      <span>Certificate of completion</span>
                    </li>
                  </ul>

                  {/* Big Enroll Now Button */}
                  <button
                    type="button"
                    className="reserve-submit-btn genai-submit-btn"
                    onClick={handleFormSubmit}
                  >
                    <span className="btn-lightning">⚡</span>
                    <span>Enroll Now</span>
                    <span className="btn-arrow">→</span>
                  </button>

                  <div className="secure-payment-notice">
                    <span>🔒 Secure Payment · 100% Safe &amp; Encrypted</span>
                  </div>
                </div>
              </div>
            ) : (
              /* DSA Form (Matching DSA Reference) */
              <>
                <div className="reserve-header-row">
                  <div className="reserve-header-left">
                    <div className="limited-seats-tag">
                      <span>LIMITED SEATS</span>
                      <span className="tag-dash">——</span>
                    </div>
                    <h2 className="reserve-title">Reserve Your Seat</h2>
                    <p className="reserve-subtitle">
                      Join the live cohort and start your DSA journey with expert guidance.
                    </p>
                  </div>

                  <div className="reserve-header-right">
                    <div className="pricing-badge-group">
                      <span className="current-price-val">₹1,999</span>
                      <span className="old-price-val">₹4,999</span>
                      <span className="discount-pill">60% OFF</span>
                    </div>
                    <div className="seats-urgency-row">
                      <span className="fire-icon">🔥</span>
                      <strong className="urgency-bold">Only 4 Seats Remaining</strong>
                    </div>
                    <span className="strictly-seats-text">Strictly 20 Seats / Batch</span>
                  </div>
                </div>

                <form className="reserve-form-grid" onSubmit={handleFormSubmit}>
                  <div className="form-field-group">
                    <label className="form-label">
                      <span className="field-icon">👤</span> Full Name <span className="req-star">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-input-v2"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">
                      <span className="field-icon">✉️</span> Email Address <span className="req-star">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-input-v2"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">
                      <span className="field-icon">📞</span> Phone Number <span className="req-star">*</span>
                    </label>
                    <div className="phone-input-wrapper">
                      <div className="country-code-pill">
                        <span className="flag-icon">🇮🇳</span>
                        <span>+91</span>
                        <span className="caret-down">▾</span>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        className="form-input-v2 form-input-phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-field-group">
                    <label className="form-label">
                      <span className="field-icon">🗂️</span> Choose Your Track <span className="req-star">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        name="track"
                        className="form-input-v2 form-select-v2"
                        value={formData.track}
                        onChange={handleInputChange}
                      >
                        <option value="DSA with Python">DSA with Python</option>
                        <option value="Generative AI Engineering">Generative AI Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field-group full-width-field">
                    <label className="form-label">
                      <span className="field-icon">📅</span> Preferred Batch <span className="req-star">*</span>
                    </label>
                    <div className="select-wrapper">
                      <select
                        name="batch"
                        className="form-input-v2 form-select-v2"
                        value={formData.batch}
                        onChange={handleInputChange}
                      >
                        <option value="Batch 1 (Starting Soon)">Batch 1 (Starting Soon)</option>
                        <option value="Batch 2 (Weekend Intensive)">Batch 2 (Weekend Intensive)</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field-group full-width-field">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="agreeUpdates"
                        checked={formData.agreeUpdates}
                        onChange={handleInputChange}
                        className="checkbox-input"
                      />
                      <span>
                        I agree to receive updates about the course, schedule, and other learning opportunities from <strong>Botmartz</strong>.
                      </span>
                    </label>
                  </div>

                  <div className="form-field-group full-width-field">
                    <button type="submit" className="reserve-submit-btn">
                      <span className="btn-lightning">⚡</span>
                      <span>Enroll Now</span>
                      <span className="btn-arrow">→</span>
                    </button>
                  </div>
                </form>
              </>
            )}

            {/* 4 Bottom Trust Highlights */}
            <div className="reserve-trust-footer">
              <div className="trust-col">
                <div className="trust-ico-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008DD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="23 7 16 12 23 17 23 7"></polygon>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                  </svg>
                </div>
                <div>
                  <strong>{isDSA ? 'Live Interactive Classes' : 'Mentor-led Live Sessions'}</strong>
                  <span>Learn from industry experts</span>
                </div>
              </div>

              <div className="trust-col">
                <div className="trust-ico-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008DD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <div>
                  <strong>{isDSA ? 'Hands-on Projects' : 'Hands-on Capstone Projects'}</strong>
                  <span>{isDSA ? 'Build real-world skills' : 'Build real AI products'}</span>
                </div>
              </div>

              <div className="trust-col">
                <div className="trust-ico-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008DD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div>
                  <strong>{isDSA ? 'Mentor Code Reviews' : 'Industry-Grade Curriculum'}</strong>
                  <span>{isDSA ? 'Get 1:1 feedback' : 'From basics to production'}</span>
                </div>
              </div>

              <div className="trust-col">
                <div className="trust-ico-box">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#008DD2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7"></circle>
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                  </svg>
                </div>
                <div>
                  <strong>Certificate of Completion</strong>
                  <span>Showcase your achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
