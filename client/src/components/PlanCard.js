const PlanCard = ({ plan, onDelete }) => {
  return (
    <div className="card plan-card">
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
        onClick={() => onDelete(plan._id)}
      >
        🗑️ Delete
      </button>
    </div>
  );
};

export default PlanCard;
