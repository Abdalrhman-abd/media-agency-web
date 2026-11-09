import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
}) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 };
      case 'down':
        return { y: -40, x: 0 };
      case 'left':
        return { x: 40, y: 0 }; // لليمين/ليسار حسب اتجاه الصفحة RTL
      case 'right':
        return { x: -40, y: 0 };
      default:
        return { y: 40, x: 0 };
    }
  };

  const initialOffset = getDirectionOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...initialOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};