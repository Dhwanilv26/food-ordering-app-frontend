/* import hero from '../assets/hero.png';
import CarouselSlider from './CarouselSlider';
const Hero = () => {
  return (
    <div>
      <img src={hero} className='w-full max-h-[600px] object-cover' />
    </div>
  );
};

export default Hero;
 */

import React from 'react';
import CarouselSlider from './CarouselSlider';

const Hero = () => {
  return (
    <div className='w-full max-h-[1200px] overflow-hidden'>
      <CarouselSlider />
    </div>
  );
};

export default Hero;
