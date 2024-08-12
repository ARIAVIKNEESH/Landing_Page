import React from 'react';
import FeatureItem from './FeatureItem';

const Features = () => {
  const featureData = [
    { id: 1, title: 'Feature One', description: 'This is the first feature.', image: '/images/iphone1.jpeg' },
    { id: 2, title: 'Feature Two', description: 'This is the second feature.', image: '/images/iwatch.jpeg' },
    { id: 3, title: 'Feature Three', description: 'This is the third feature.', image: '/images/ipad.jpg' },
  ];

  return (
    <section id="features" className="features">
      <h2>Features</h2>
      <div className="feature-list">
        {featureData.map(feature => (
          <FeatureItem key={feature.id} title={feature.title} description={feature.description} image={feature.image} />
        ))}
      </div>
    </section>
  );
};

export default Features;
