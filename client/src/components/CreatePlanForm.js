const CreatePlanForm = ({ formData, users, onChange, onSubmit, loading }) => {
  return (
    <div className="card create-plan-card">
      <h3>Create a New Study Plan</h3>
      <form onSubmit={onSubmit}>
        <div className="form-grid">

          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={onChange}
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
              onChange={onChange}
              min="1"
              max="12"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="howManyDays">How Many Days</label>
            <input
              type="number"
              id="howManyDays"
              name="howManyDays"
              value={formData.howManyDays}
              onChange={onChange}
              required
            />
          </div>


          <div className="form-group">
            <label htmlFor="difficulty">Difficulty Level</label>
            <select
              id="difficulty"
              name="difficulty"
              value={formData.difficulty}
              onChange={onChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="topics">Specific Topics (Optional)</label>
            <textarea
              id="topics"
              name="topics"
              value={formData.topics}
              onChange={onChange}
              placeholder="e.g., Algebra, Thermodynamics, Photosynthesis..."
              rows="3"
            />
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
  );
};

export default CreatePlanForm;
