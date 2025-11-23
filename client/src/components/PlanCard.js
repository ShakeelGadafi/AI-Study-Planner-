const PlanCard = ({ plan, onDelete, onClick }) => {
  return (
    <div 
      className="card plan-card clickable-plan" 
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="plan-header">
        <h4>{plan.subject}</h4>
        <span className={`difficulty-badge difficulty-${plan.difficulty}`}>
          {plan.difficulty}
        </span>
      </div>
      <div className="plan-details">
        <p><strong>How Many Days:</strong> {plan.howManyDays || 'N/A'}</p>
        <p><strong>Hours Per Day:</strong> {plan.hoursPerDay}</p>
        <p><strong>Created:</strong> {new Date(plan.createdAt).toLocaleDateString()}</p>
      </div>
      <div className="plan-description">
        <p>{plan.generatedPlan}</p>
      </div>
      <div className="plan-actions">
        <button
          className="btn btn-danger"
          onClick={(e) => {
            e.stopPropagation();
            onDelete(plan._id);
          }}
        >
          🗑️ Delete
        </button>
        <span className="view-details">Click to view full plan →</span>
      </div>
    </div>
  );
};

export default PlanCard;
