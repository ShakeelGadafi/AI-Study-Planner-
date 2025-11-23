import '../styles/HomePage.css';
import Navbar from '../components/Navbar';
import BenefitCard from '../components/BenefitCard';
import FeatureItem from '../components/FeatureItem';

const HomePage = ({ onNavigate }) => {
  const benefits = [
    {
      icon: '🎯',
      title: 'Personalized Plans',
      description: 'AI-generated study plans tailored specifically to your subject, pace, and difficulty level'
    },
    {
      icon: '⏱️',
      title: 'Smart Time Management',
      description: 'Optimize your study hours with intelligent scheduling based on your availability'
    },
    {
      icon: '📈',
      title: 'Track Progress',
      description: 'Monitor your learning journey and stay motivated with visual progress tracking'
    },
    {
      icon: '🔄',
      title: 'Adaptive Learning',
      description: 'Plans adapt to your learning pace and difficulty preferences for better results'
    },
    {
      icon: '💡',
      title: 'Expert Insights',
      description: 'Leverage AI-powered insights to identify knowledge gaps and focus on key areas'
    },
    {
      icon: '🚀',
      title: 'Boost Performance',
      description: 'Scientifically designed study methods to maximize retention and understanding'
    }
  ];

  const features = [
    {
      icon: '📚',
      title: 'Custom Study Plans',
      description: 'Create unlimited study plans for any subject with customizable difficulty levels'
    },
    {
      icon: '🤖',
      title: 'AI-Powered Recommendations',
      description: 'Get intelligent suggestions based on your study habits and performance'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'View detailed analytics of your study sessions and performance metrics'
    },
    {
      icon: '🔐',
      title: 'Secure & Private',
      description: 'Your data is encrypted and secure with enterprise-grade security'
    }
  ];

  return (
    <div className="home-page">
      {/* Navigation */}
      <Navbar onNavigate={onNavigate} onGetStarted={() => onNavigate('auth')} />

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
            {benefits.map((benefit, index) => (
              <BenefitCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Powerful Features</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <FeatureItem
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
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
