import React from 'react';

const TestimonialItem = ({ name, content, image }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <div className="testimonial-content">
        <p>"{content}"</p>
        <h4>- {name}</h4>
      </div>
    </div>
  );
};

export default TestimonialItem;
