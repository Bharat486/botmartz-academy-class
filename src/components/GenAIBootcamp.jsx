import { useInView } from '../hooks/useAnimations'
import './GenAIBootcamp.css'

export default function GenAIBootcamp() {
  const [ref, inView] = useInView()

  return (
    <section className="genai section" ref={ref} id="genai">
      <div className="container">
        <div className={`genai__grid ${inView ? 'genai__grid--visible' : ''}`}>
          {/* Visual */}
          <div className="genai__visual">
            <div className="genai__card card-3d">
              <div className="genai__card-header genai__card-header--cyan">
                <span className="badge badge-cyan">Coming Soon</span>
                <h3>Gen AI Bootcamp</h3>
                <p>Build AI-Powered Applications</p>
              </div>
              <div className="genai__card-body">
                <div className="genai__modules">
                  {[
                    'Prompt Engineering & LLM Basics',
                    'OpenAI & Gemini API Integration',
                    'LangChain & RAG Pipelines',
                    'Building AI Chatbots',
                    'Image & Video Generation',
                    'Deploying AI Apps to Production',
                  ].map((m) => (
                    <div key={m} className="genai__module-item">
                      <span className="genai__module-dot" />
                      {m}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="genai__info">
            <span className="badge badge-cyan">🤖 New Program</span>
            <h2 className="genai__title">
              Gen AI <span className="highlight">Bootcamp</span>
            </h2>
            <p className="genai__desc">
              Learn to build production-ready AI applications. From prompt engineering to
              deploying LLM-powered apps — master the tools reshaping every industry.
            </p>

            <div className="genai__highlights">
              {[
                { icon: '🧠', title: '6 Weeks', text: 'Intensive live program' },
                { icon: '🚀', title: '3 AI Projects', text: 'Portfolio-ready builds' },
                { icon: '📡', title: 'API Mastery', text: 'OpenAI, Gemini, LangChain' },
              ].map((h) => (
                <div key={h.title} className="genai__highlight-card">
                  <span className="genai__highlight-icon">{h.icon}</span>
                  <div>
                    <strong>{h.title}</strong>
                    <span>{h.text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="genai__actions">
              <a href="#pricing" className="btn btn-primary">Join Waitlist</a>
              <a href="#" className="btn btn-outline">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
