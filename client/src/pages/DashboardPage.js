import { useState, useEffect } from 'react';
import '../styles/DashboardPage.css';

const DashboardPage = ({ user, onLogout }) => {
  const [plans, setPlans] = useState([]);
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    subject: '',
    hoursPerDay: 2,
    difficulty: 'medium',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const API_URL = 'http://localhost:5000/api';
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/auth/users`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setUsers(data.users || []);
      // Set default userId to current user if available
      if (data.users.length > 0) {
        setFormData(prev => ({ ...prev, userId: user.id }));
      }
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  const fetchPlans = async (userId) => {
    try {
      const response = await fetch(`${API_URL}/plans/${userId}`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const data = await response.json();
      setPlans(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Error fetching plans:', err);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'hoursPerDay' ? Number(value) : value
    }));
  };

  const handleCreatePlan = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/plans/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || 'Error creating plan');
        setLoading(false);
        return;
      }

      setMessage('Plan created successfully!');
      setFormData({
        userId: user.id,
        subject: '',
        hoursPerDay: 2,
        difficulty: 'medium',
      });
      setShowForm(false);
      fetchPlans(formData.userId);
    } catch (err) {
      setError(err.message || 'Error creating plan');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePlan = async (planId) => {
    if (!window.confirm('Are you sure you want to delete this plan?')) return;

    try {
      const response = await fetch(`${API_URL}/plans/${planId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (!response.ok) {
        setError('Error deleting plan');
        return;
      }

      setMessage('Plan deleted successfully!');
      fetchPlans(formData.userId);
    } catch (err) {
      setError(err.message || 'Error deleting plan');
    }
  };

  const handleViewUserPlans = (userId) => {
    setFormData(prev => ({ ...prev, userId }));
    fetchPlans(userId);
  };

  return (
    <div className="dashboard-page">
      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-brand">🎓 AI Study Planner</div>
        <div className="navbar-links">
          <span className="user-name">👤 {user.name}</span>
          <button className="btn btn-logout" onClick={onLogout}>
            Logout
          </button>
        </div>
      </nav>

      <div className="container">
        <div className="dashboard-grid">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Users</h3>
            <div className="users-list">
              {users.map(u => (
                <button
                  key={u._id}
                  className={`user-item ${formData.userId === u._id ? 'active' : ''}`}
                  onClick={() => handleViewUserPlans(u._id)}
                >
                  <span>{u.name}</span>
                  <small>{u.email}</small>
                </button>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="dashboard-main">
            {/* Header */}
            <div className="dashboard-header">
              <div>
                <h2>Study Plans</h2>
                <p>Create and manage your personalized study plans</p>
              </div>
              <button 
                className="btn btn-primary"
                onClick={() => setShowForm(!showForm)}
              >
                {showForm ? '✕ Cancel' : '+ Create New Plan'}
              </button>
            </div>

            {error && <div className="alert alert-error">{error}</div>}
            {message && <div className="alert alert-success">{message}</div>}

            {/* Create Plan Form */}
            {showForm && (
              <div className="card create-plan-card">
                <h3>Create a New Study Plan</h3>
                <form onSubmit={handleCreatePlan}>
                  <div className="form-grid">
                    <div className="form-group">
                      <label htmlFor="userId">Select User</label>
                      <select
                        id="userId"
                        name="userId"
                        value={formData.userId}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a user...</option>
                        {users.map(u => (
                          <option key={u._id} value={u._id}>
                            {u.name} ({u.email})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="e.g., Mathematics, Biology"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="hoursPerDay">Hours Per Day</label>
                      <input
                        type="number"
                        id="hoursPerDay"
                        name="hoursPerDay"
                        value={formData.hoursPerDay}
                        onChange={handleChange}
                        min="1"
                        max="12"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="difficulty">Difficulty Level</label>
                      <select
                        id="difficulty"
                        name="difficulty"
                        value={formData.difficulty}
                        onChange={handleChange}
                      >
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                      </select>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    className="btn btn-primary btn-large"
                    disabled={loading}
                  >
                    {loading ? 'Creating...' : 'Create Plan'}
                  </button>
                </form>
              </div>
            )}

            {/* Plans List */}
            <div className="plans-section">
              <h3>Your Study Plans</h3>
              {plans.length === 0 ? (
                <div className="empty-state">
                  <p>📚 No study plans yet. Create one to get started!</p>
                </div>
              ) : (
                <div className="plans-grid">
                  {plans.map(plan => (
                    <div key={plan._id} className="card plan-card">
                      <div className="plan-header">
                        <h4>{plan.subject}</h4>
                        <span className={`difficulty-badge difficulty-${plan.difficulty}`}>
                          {plan.difficulty}
                        </span>
                      </div>
                      <div className="plan-details">
                        <p><strong>Hours Per Day:</strong> {plan.hoursPerDay}</p>
                        <p><strong>Created:</strong> {new Date(plan.createdAt).toLocaleDateString()}</p>
                      </div>
                      <div className="plan-description">
                        <p>{plan.generatedPlan}</p>
                      </div>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDeletePlan(plan._id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
