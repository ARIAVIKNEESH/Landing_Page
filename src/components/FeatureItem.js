import React from 'react';

const FeatureItem = ({ title, description, image }) => {
  return (
    <div className="feature-item">
      <div className="feature-image">
        <img src={image} alt={title} />
      </div>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
