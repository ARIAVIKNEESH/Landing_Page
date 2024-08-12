import React from 'react';
import TestimonialItem from './TestimonialItem';

const Testimonials = () => {
  const testimonialData = [
    { id: 1, name: 'Aria', content: 'This app is amazing!', image: '/images/testimonial1.jpg' },
    { id: 2, name: 'Akhil', content: 'I love using this app every day.', image: '/images/testimonial2.jpg' },
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-list">
        {testimonialData.map(testimonial => (
          <TestimonialItem key={testimonial.id} name={testimonial.name} content={testimonial.content} image={testimonial.image} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
