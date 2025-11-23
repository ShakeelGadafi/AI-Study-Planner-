import '../styles/HomePage.css';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-brand">🎓 AI Study Planner</div>
        <div className="navbar-links">
          <button className="btn btn-primary" onClick={() => onNavigate('auth')}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Master Your Studies with AI</h1>
            <p>Personalized study plans tailored to your learning style and goals</p>
            <button className="btn btn-primary btn-large" onClick={() => onNavigate('auth')}>
              Start Planning Your Study
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <h2 className="section-title">Why Choose AI Study Planner?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Personalized Plans</h3>
              <p>AI-generated study plans tailored specifically to your subject, pace, and difficulty level</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⏱️</div>
              <h3>Smart Time Management</h3>
              <p>Optimize your study hours with intelligent scheduling based on your availability</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>Track Progress</h3>
              <p>Monitor your learning journey and stay motivated with visual progress tracking</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🔄</div>
              <h3>Adaptive Learning</h3>
              <p>Plans adapt to your learning pace and difficulty preferences for better results</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💡</div>
              <h3>Expert Insights</h3>
              <p>Leverage AI-powered insights to identify knowledge gaps and focus on key areas</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🚀</div>
              <h3>Boost Performance</h3>
              <p>Scientifically designed study methods to maximize retention and understanding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            <div className="feature-item">
              <h4>📚 Custom Study Plans</h4>
              <p>Create unlimited study plans for any subject with customizable difficulty levels</p>
            </div>
            <div className="feature-item">
              <h4>🤖 AI-Powered Recommendations</h4>
              <p>Get intelligent suggestions based on your study habits and performance</p>
            </div>
            <div className="feature-item">
              <h4>📊 Analytics Dashboard</h4>
              <p>View detailed analytics of your study sessions and performance metrics</p>
            </div>
            <div className="feature-item">
              <h4>🔐 Secure & Private</h4>
              <p>Your data is encrypted and secure with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Ready to Transform Your Learning?</h2>
          <p>Join thousands of students improving their grades with AI Study Planner</p>
          <button className="btn btn-primary btn-large" onClick={() => onNavigate('auth')}>
            Start Your Free Trial Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 AI Study Planner. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
