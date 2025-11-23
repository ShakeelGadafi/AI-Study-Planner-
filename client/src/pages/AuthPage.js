import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AuthPage.css';
import Navbar from '../components/Navbar';
import AuthForm from '../components/AuthForm';
import Alert from '../components/Alert';

const AuthPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const API_URL = 'http://localhost:5000/api';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setError('');
    setFormData({ name: '', email: '', password: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isLogin ? '/auth/login' : '/auth/register';
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : formData;

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'An error occurred');
        setLoading(false);
        return;
      }

      onLogin(
        { id: data.user.id, name: data.user.name, email: data.user.email },
        data.token
      );
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <Navbar />

      <div className="auth-container">
        {error && <Alert type="error" message={error} />}
        <AuthForm
          isLogin={isLogin}
          formData={formData}
          onChange={handleChange}
          onSubmit={handleSubmit}
          loading={loading}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default AuthPage;
