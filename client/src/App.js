import './App.css';
import { useState, useEffect } from 'react';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      setUser(JSON.parse(storedUser));
      setCurrentPage('dashboard');
    }
  }, []);

  const handleLogin = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
    setCurrentPage('dashboard');
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setCurrentPage('home');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {currentPage === 'home' && !user && (
        <HomePage onNavigate={handleNavigate} />
      )}
      {currentPage === 'auth' && !user && (
        <AuthPage onLogin={handleLogin} onNavigate={handleNavigate} />
      )}
      {currentPage === 'dashboard' && user && (
        <DashboardPage user={user} onLogout={handleLogout} onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
