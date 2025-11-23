const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="feature-item">
      <h4>{icon} {title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default FeatureItem;
