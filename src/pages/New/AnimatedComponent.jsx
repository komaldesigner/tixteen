import React from 'react';
import { useInView } from 'react-intersection-observer';
import './New.css'; // Import CSS file for animations

const AnimatedComponent = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animate only once
    threshold: 0.3, // Trigger animation when 30% of the component is in view
  });

  return (
    <div ref={ref} className={`animated-component ${inView ? 'animate-in' : ''}`}>
      {children}
    </div>
  );
};

export default AnimatedComponent;
