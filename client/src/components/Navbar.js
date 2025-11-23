import { Link } from 'react-router-dom';

const Navbar = ({ user, onLogout }) => {
  return (
    <nav className="navbar">
      <Link to="/home" className="navbar-brand" style={{ textDecoration: 'none', color: 'inherit' }}>
        🎓 AI Study Planner
      </Link>
      <div className="navbar-links">
        {user ? (
          <>
            <span className="user-name">👤 {user.name}</span>
            <button className="btn btn-logout" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth" className="btn btn-primary">
            Get Started
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
