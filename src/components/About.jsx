import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="page-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div 
          className="hero-background"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="hero-content">
          <div className="hero-animation">
            <h1 className="hero-title">
              VolleyVision
            </h1>
            <p className="hero-subtitle">
              Advanced tennis analytics platform – Delivering precise match predictions through cutting-edge AI technology.
            </p>
          </div>
        </div>
        <div className="decorative-lines"></div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="content-wrapper">
          
          {/* What is VolleyVision */}
          <div className="content-card">
            <h2 className="section-title">
              What is VolleyVision?
            </h2>
            <p className="section-text">
              VolleyVision represents the next generation of tennis prediction technology, leveraging sophisticated algorithms to analyze professional tennis encounters. Through comprehensive evaluation of player statistics, court surface dynamics, historical performance patterns, and strategic tendencies, our platform delivers actionable intelligence for match forecasting.
            </p>
          </div>

          {/* How it Works */}
          <div className="content-card">
            <h2 className="section-title">
              How does it work?
            </h2>
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon">Data Processing</div>
                <h3 className="feature-title">Comprehensive Analysis</h3>
                <p className="feature-description">Powered by comprehensive ATP tournament data spanning multiple decades with sophisticated preprocessing.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">Smart Parameters</div>
                <h3 className="feature-title">Intelligent Inputs</h3>
                <p className="feature-description">Competitor identities, playing surface (Hard Court, Clay Court, Grass Court), and tournament format (Best of 3 or Best of 5).</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">Precise Results</div>
                <h3 className="feature-title">Accurate Predictions</h3>
                <p className="feature-description">Winner prediction, confidence metrics, plus upcoming features — estimated aces, service faults, and complete match scenarios!</p>
              </div>
            </div>
          </div>

          {/* Why VolleyVision */}
          <div className="content-card">
            <h2 className="section-title">
              Why VolleyVision?
            </h2>
            <p className="section-text highlight-text">
              Perfect for tennis enthusiasts, analytics professionals, or statistical researchers — VolleyVision transforms tennis analysis by merging competitive sports with advanced computational intelligence.
            </p>
            
            {/* Features Grid */}
            <div className="benefits-grid">
              <div className="benefit-card benefit-card-1">
                <h3 className="benefit-title">Professional Grade</h3>
                <p className="benefit-description">ATP-level data analysis with tournament precision</p>
              </div>
              <div className="benefit-card benefit-card-2">
                <h3 className="benefit-title">AI-Powered</h3>
                <p className="benefit-description">Machine learning algorithms for accurate predictions</p>
              </div>
              <div className="benefit-card benefit-card-3">
                <h3 className="benefit-title">Real-time Analytics</h3>
                <p className="benefit-description">Live match insights and statistical breakdowns</p>
              </div>
              <div className="benefit-card benefit-card-4">
                <h3 className="benefit-title">Championship Ready</h3>
                <p className="benefit-description">Trusted by analysts and tennis professionals</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="content-card">
            <h2 className="section-title">
              Technology Stack
            </h2>
            <div className="tech-stack">
              {['Python', 'React', 'Pandas', 'NumPy', 'Scikit-learn', 'JavaScript', 'AI/ML'].map((tech) => (
                <span 
                  key={tech}
                  className="tech-badge"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="page-footer">
        <div className="footer-content">
          <div className="footer-title">
            Crafted with precision using Python, React, and AI
          </div>
          <div className="footer-author">
            Developed by <span className="author-name">Yagnit Mahajan</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;