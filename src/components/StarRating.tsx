// components/StarRating.tsx

import React from 'react';
import { StarIcon } from 'lucide-react';

interface StarRatingProps {
  percentage: number; // Percentage fill
}

const StarRating: React.FC<StarRatingProps> = ({ percentage }) => {
  return (
    <div className='relative inline-block w-6 h-6'>
      {/* Background star with border */}
      <StarIcon
        className='absolute inset-0 w-full h-full text-gray-300 dark:text-gray-600'
        style={{ stroke: '#FFD700', strokeWidth: '1px' }}
      />
      {/* Foreground star for fill */}
      <StarIcon
        className='absolute inset-0 w-full h-full text-yellow-500 dark:text-yellow-400'
        style={{
          clipPath: `inset(0 ${100 - percentage}% 0 0)`,
        }}
      />
    </div>
  );
};

export default StarRating;
