import React, { useState, useEffect, useRef } from 'react';
import './GenAIInteractiveVisualizer.css';

const GENAI_MODES = [
  {
    id: 'rag-pipeline',
    name: '⚡ Enterprise RAG',
    badge: 'Vector DB + LLM',
    query: 'Retrieve Q3 financial risk factors & summarize',
    stages: [
      { id: 'query', label: 'User Query', icon: '💬', detail: 'Tokenized Query (38 tokens)' },
      { id: 'embed', label: 'Embedding & Vector Search', icon: '🔮', detail: 'Cosine Similarity: 0.942 (3 Chunks)' },
      { id: 'llm', label: 'LLM Reasoning Core', icon: '🧠', detail: 'Llama-3-70B Context Augmented' },
      { id: 'agent', label: 'Grounded Answer', icon: '✨', detail: 'Zero-hallucination verified' }
    ],
    output: 'Identified 3 supply chain bottlenecks. Mitigated with alternate supplier contracts. Grounded in Doc #4.',
    metrics: { tps: '118 tok/s', ground: '100%', latency: '210ms' }
  },
  {
    id: 'agent-swarm',
    name: '🤖 AI Multi-Agent',
    badge: 'LangGraph & Tools',
    query: 'Autonomous Market Research & Code Generation',
    stages: [
      { id: 'planner', label: 'Lead Planner Agent', icon: '👑', detail: 'Decomposes complex objective' },
      { id: 'search', label: 'Web Crawler Agent', icon: '🌐', detail: 'Gathers API schemas & data' },
      { id: 'coder', label: 'Python Sandbox Agent', icon: '💻', detail: 'Executes pandas transformation' },
      { id: 'critic', label: 'Evaluator Agent', icon: '🛡️', detail: 'Validates correctness & tests' }
    ],
    output: 'Agent swarm completed 4 tool calls, generated 120 lines of tested code, and published report.',
    metrics: { tools: '4 Tool Calls', status: 'Autonomous Success', latency: '340ms' }
  },
  {
    id: 'fine-tune',
    name: '📈 Fine-Tuning & LoRA',
    badge: 'PEFT & DPO',
    query: 'Domain adaptation on legal & financial corpus',
    stages: [
      { id: 'data', label: 'Dataset Curation', icon: '📚', detail: '10k instruction pairs' },
      { id: 'lora', label: 'LoRA Rank Adapter', icon: '⚡', detail: 'Trainable params: 0.2%' },
      { id: 'loss', label: 'Loss Minimization', icon: '📉', detail: 'Loss: 2.45 → 0.18' },
      { id: 'eval', label: 'DPO Alignment', icon: '🎯', detail: 'Benchmark accuracy: 96.8%' }
    ],
    output: 'Custom LoRA adapter weights merged. Perplexity dropped by 64% with zero catastrophic forgetting.',
    metrics: { loss: '0.18 Loss', eval: '96.8% Bench', memory: '4.2 GB VRAM' }
  }
];

export default function GenAIInteractiveVisualizer() {
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(true);
  const timerRef = useRef(null);

  const mode = GENAI_MODES[activeModeIdx];

  // Continuous pipeline animation cycle
  useEffect(() => {
    if (!isSimulating) return;
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % mode.stages.length);
    }, 1800);

    return () => clearInterval(timerRef.current);
  }, [isSimulating, activeModeIdx, mode.stages.length]);

  const handleModeChange = (idx) => {
    setActiveModeIdx(idx);
    setActiveStep(0);
  };

  const handleTriggerRun = () => {
    setActiveStep(0);
    setIsSimulating(true);
  };

  return (
    <div className="genai-vis">
      {/* Top Bar: Mode Pills & Trigger Button */}
      <div className="genai-vis__header">
        <div className="genai-vis__tabs">
          {GENAI_MODES.map((m, idx) => (
            <button
              key={m.id}
              type="button"
              className={`genai-vis__tab-btn ${activeModeIdx === idx ? 'genai-vis__tab-btn--active' : ''}`}
              onClick={() => handleModeChange(idx)}
            >
              {m.name}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="genai-vis__trigger-btn"
          onClick={handleTriggerRun}
          title="Run Simulation Pipeline"
        >
          <span className="genai-vis__sparkle">⚡</span>
          <span>Run</span>
        </button>
      </div>

      {/* Main Interactive Stage Area */}
      <div className="genai-vis__body">
        {/* Input Prompt Ribbon */}
        <div className="genai-vis__prompt-bar">
          <span className="genai-vis__prompt-tag">PROMPT</span>
          <span className="genai-vis__prompt-text">"{mode.query}"</span>
        </div>

        {/* 4 Pipeline Stages with animated connector line */}
        <div className="genai-vis__pipeline">
          <div className="genai-vis__track-line">
            <div
              className="genai-vis__track-progress"
              style={{ width: `${((activeStep + 1) / mode.stages.length) * 100}%` }}
            ></div>
          </div>

          {mode.stages.map((st, sIdx) => {
            const isCurrent = activeStep === sIdx;
            const isCompleted = activeStep > sIdx;

            return (
              <div
                key={st.id}
                className={`genai-vis__node ${isCurrent ? 'genai-vis__node--active' : ''} ${isCompleted ? 'genai-vis__node--done' : ''}`}
                onClick={() => setActiveStep(sIdx)}
              >
                <div className="genai-vis__node-icon-box">
                  <span className="genai-vis__node-icon">{st.icon}</span>
                  {isCurrent && <span className="genai-vis__pulse-ring"></span>}
                </div>
                <span className="genai-vis__node-title">{st.label}</span>
                <span className="genai-vis__node-sub">{st.detail}</span>
              </div>
            );
          })}
        </div>

        {/* Live Output Stream */}
        <div className="genai-vis__output-box">
          <div className="genai-vis__output-header">
            <span className="genai-vis__output-badge">
              <span className="genai-vis__live-dot"></span>
              LIVE SYNTHESIS
            </span>
            <div className="genai-vis__metrics">
              {Object.entries(mode.metrics).map(([k, v]) => (
                <span key={k} className="genai-vis__metric-item">
                  <strong>{k.toUpperCase()}:</strong> {v}
                </span>
              ))}
            </div>
          </div>

          <p className="genai-vis__output-text">
            <span className="genai-vis__cursor">› </span>
            {activeStep === mode.stages.length - 1 ? mode.output : `${mode.stages[activeStep].detail}...`}
          </p>
        </div>
      </div>

      {/* Terminal / Status Footer */}
      <div className="genai-vis__footer">
        <span className="genai-vis__badge-ai">🤖 LangGraph + Pinecone + Llama-3</span>
        <span className="genai-vis__active-pill">
          <span className="genai-vis__active-dot"></span>
          REAL-TIME AGENT INFERENCE
        </span>
      </div>
    </div>
  );
}
