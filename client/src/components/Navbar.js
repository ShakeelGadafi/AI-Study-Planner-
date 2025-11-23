const Navbar = ({ user, onLogout, onNavigate, onGetStarted }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        🎓 AI Study Planner
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <span className="user-name">👤 {user.name}</span>
            <button className="btn btn-logout" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={onGetStarted}>
            Get Started
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
