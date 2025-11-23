import { useState, useEffect } from 'react';
import '../styles/DashboardPage.css';
import Navbar from '../components/Navbar';
import UserItem from '../components/UserItem';
import CreatePlanForm from '../components/CreatePlanForm';
import PlanCard from '../components/PlanCard';
import Alert from '../components/Alert';

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
      <Navbar user={user} onLogout={onLogout} />

      <div className="container">
        <div className="dashboard-grid">
          {/* Sidebar */}
          <aside className="sidebar">
            <h3>Users</h3>
            <div className="users-list">
              {users.map(u => (
                <UserItem
                  key={u._id}
                  user={u}
                  isActive={formData.userId === u._id}
                  onClick={() => handleViewUserPlans(u._id)}
                />
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

            {error && <Alert type="error" message={error} />}
            {message && <Alert type="success" message={message} />}

            {/* Create Plan Form */}
            {showForm && (
              <CreatePlanForm
                formData={formData}
                users={users}
                onChange={handleChange}
                onSubmit={handleCreatePlan}
                loading={loading}
              />
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
                    <PlanCard
                      key={plan._id}
                      plan={plan}
                      onDelete={handleDeletePlan}
                    />
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
