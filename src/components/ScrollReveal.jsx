import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.5,
  direction = 'up',
  amount = 0.15
}) {
  const getVariants = () => {
    let initialY = 0;
    let initialX = 0;

    if (direction === 'up') initialY = 35;
    else if (direction === 'down') initialY = -35;
    else if (direction === 'left') initialX = 35;
    else if (direction === 'right') initialX = -35;

    return {
      hidden: {
        opacity: 0,
        y: initialY,
        x: initialX,
        scale: 0.98
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.1, 0.25, 1.0]
        }
      }
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}
