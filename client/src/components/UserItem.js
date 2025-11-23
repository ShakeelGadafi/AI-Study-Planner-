const UserItem = ({ user, isActive, onClick }) => {
  return (
    <button
      className={`user-item ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <span>{user.name}</span>
      <small>{user.email}</small>
    </button>
  );
};

export default UserItem;
