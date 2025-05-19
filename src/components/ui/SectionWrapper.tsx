import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ 
  children, 
  className = '', 
  delay = 0 
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '0px 0px -10% 0px'
  });

  return (
    <motion.section
      ref={ref}
      initial={{ 
        opacity: 0,
        y: 20
      }}
      animate={inView ? {
        opacity: 1,
        y: 0
      } : {}}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`will-change-opacity will-change-transform ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;