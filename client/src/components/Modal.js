import '../styles/Modal.css';

const Modal = ({ isOpen, plan, onClose }) => {
  if (!isOpen || !plan) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{plan.subject}</h2>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="modal-body">
          <div className="plan-info-grid">
            <div className="info-item">
              <strong>Difficulty Level:</strong>
              <span className={`difficulty-badge difficulty-${plan.difficulty}`}>
                {plan.difficulty}
              </span>
            </div>
            <div className="info-item">
              <strong>Hours Per Day:</strong>
              <span>{plan.hoursPerDay} hours</span>
            </div>
            <div className="info-item">
              <strong>Created:</strong>
              <span>{new Date(plan.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="info-item">
              <strong>Last Updated:</strong>
              <span>{new Date(plan.updatedAt).toLocaleDateString()}</span>
            </div>
          </div>

          <div className="plan-full-description">
            <h3>Study Plan Details</h3>
            <div className="plan-text">
              {plan.generatedPlan}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
