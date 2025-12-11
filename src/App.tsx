import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import './App.css'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const openings = [
    { name: 'Sicilian Defense', rating: 2200, students: 3420 },
    { name: 'French Defense', rating: 1950, students: 2150 },
    { name: 'Caro-Kann', rating: 1800, students: 1890 },
    { name: "King's Indian", rating: 2150, students: 2890 },
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">♘ SkyChess</div>
          <div className="nav-menu">
            <a href="#features">Features</a>
            <a href="#courses">Courses</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </div>
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Master Chess Openings</h1>
          <p>AI-powered chess learning with gamification and spaced repetition</p>
          <button className="cta-button">Get Started Free</button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>Why SkyChess?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📚</div>
            <h3>14+ Opening Courses</h3>
            <p>Learn Sicilian, French, Caro-Kann, King's Indian and more</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎮</div>
            <h3>Gamification System</h3>
            <p>Daily drills, streak counters, badges and XP</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧠</div>
            <h3>Spaced Repetition</h3>
            <p>AI-optimized learning for long-term retention</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3>Interactive Quizzes</h3>
            <p>Test your knowledge on chess positions and tactics</p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="courses">
        <h2>Featured Opening Courses</h2>
        <div className="courses-grid">
          {openings.map((opening) => (
            <div key={opening.name} className="course-card">
              <h3>{opening.name}</h3>
              <p className="elo">Target ELO: {opening.rating}</p>
              <p className="students">{opening.students} students</p>
              <button>Start Course</button>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing">
        <h2>Simple Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Free</h3>
            <p className="price">$0</p>
            <ul>
              <li>Basic course access</li>
              <li>Daily drills</li>
              <li>Limited quizzes</li>
            </ul>
            <button>Get Started</button>
          </div>
          <div className="pricing-card premium">
            <h3>Premium</h3>
            <p className="price">$9.99/mo</p>
            <ul>
              <li>All courses unlocked</li>
              <li>Unlimited quizzes</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <button>Subscribe Now</button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {[
            { q: 'What rating level can I reach?', a: 'Users typically reach 1800-2400 ELO with consistent practice' },
            { q: 'How long are courses?', a: 'Opening courses range from 4-12 weeks depending on depth' },
            { q: 'Is there mobile app?', a: 'iOS and Android apps launching Q2 2024' },
          ].map((item, idx) => (
            <div key={idx} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setExpandedSection(expandedSection === idx ? null : idx.toString())}
              >
                {item.q}
                <ChevronDown size={20} />
              </button>
              {expandedSection === idx.toString() && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 SkyChess. Master Chess Openings.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}
