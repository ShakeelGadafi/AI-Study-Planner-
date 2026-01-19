import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DashboardPage.css';
import Navbar from '../components/Navbar';
import PlanCard from '../components/PlanCard';
import Modal from '../components/Modal';
import Alert from '../components/Alert';
import CreatePlanForm from '../components/CreatePlanForm';

const DashboardPage = ({ user, onLogout }) => {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    userId: '',
    subject: '',
    hoursPerDay: 2,
    howManyDays: 7,
    difficulty: 'medium',
    topics: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const API_URL = 'http://localhost:5000/api';
  const token = localStorage.getItem('token');

  // Initialize with current user's ID only
  useEffect(() => {
    setFormData(prev => ({ ...prev, userId: user.id }));
    fetchPlans(user.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

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

  const handleLogoutClick = () => {
    onLogout();
    navigate('/home');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: (name === 'hoursPerDay' || name === 'howManyDays') ? Number(value) : value
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
        howManyDays: 7,
        difficulty: 'medium',
      });
      setShowForm(false);
      fetchPlans(user.id);
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
      setIsModalOpen(false);
      fetchPlans(user.id);
    } catch (err) {
      setError(err.message || 'Error deleting plan');
    }
  };

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
  };

  return (
    <div className="dashboard-page">
      {/* Navigation */}
      <Navbar user={user} onLogout={handleLogoutClick} />

      <div className="container dashboard-content">
        {/* Main Content */}
        <main className="dashboard-main-full">
          {/* Header */}
          <div className="dashboard-header">
            <div>
              <h2>My Study Plans</h2>
              <p>Welcome {user.name}! Create and manage your personalized study plans</p>
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
              users={[{ _id: user.id, name: user.name, email: user.email }]}
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
                    onClick={() => handlePlanClick(plan)}
                  />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Modal for detailed plan view */}
      <Modal 
        isOpen={isModalOpen} 
        plan={selectedPlan} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default DashboardPage;
