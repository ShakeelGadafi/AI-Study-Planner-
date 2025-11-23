const AuthForm = ({ isLogin, formData, onChange, onSubmit, loading, onToggle }) => {
  return (
    <div className="auth-card">
      <h2>{isLogin ? 'Login' : 'Create Account'}</h2>
      <p className="auth-subtitle">
        {isLogin ? "Don't have an account? " : 'Already have an account? '}
        <button 
          className="toggle-btn"
          onClick={onToggle}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>

      <form onSubmit={onSubmit}>
        {!isLogin && (
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={onChange}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Enter your password"
            required
          />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary btn-block"
          disabled={loading}
        >
          {loading ? 'Loading...' : (isLogin ? 'Login' : 'Sign Up')}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
