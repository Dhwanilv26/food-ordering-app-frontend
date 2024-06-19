// components/AnimatedCard.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedCardProps {
  direction?: 'left' | 'right' | 'bottom';
  children: React.ReactNode;
}

const variants = {
  hidden: (direction: string) => ({
    opacity: 0,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
    y: direction === 'bottom' ? 50 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 20,
    },
  },
};

const AnimatedCard: React.FC<AnimatedCardProps> = ({ direction = 'left', children }) => {
  return (
    <motion.div
      custom={direction}
      initial='hidden'
      whileInView='visible'
      variants={variants}
      viewport={{ once: true, amount: 0.5 }}
      className='p-4 bg-white shadow-md rounded-lg'
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
