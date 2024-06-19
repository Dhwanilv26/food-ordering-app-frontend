import React, { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import food1 from '../models/food1d.jpg';
import food2 from '../models/food2d.jpg';
import food3 from '../models/food3.jpeg';
import food4 from '../models/food4.jpg';
import food5 from '../models/food5.jpeg';
import food6 from '../models/food6.jpg';

interface ComponentProps {}

const CarouselSlider: React.FC<ComponentProps> = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalTime = 5000;

  const images = [
    {
      src: food1,
      alt: 'Delicious pasta dish',
      title: 'Delicious Pasta Dish',
      description: 'A mouthwatering Italian classic',
    },
    { src: food2, alt: 'Mouthwatering burger', title: 'Juicy Burger', description: 'A delectable fast food classic' },
    { src: food3, alt: 'Colorful salad', title: 'Fresh Salad', description: 'A healthy and vibrant dish' },
    { src: food4, alt: 'Decadent dessert', title: 'Decadent Dessert', description: 'A sweet and tempting treat' },
    { src: food5, alt: 'Sushi platter', title: 'Sushi Platter', description: 'A variety of delicious sushi' },
    { src: food6, alt: 'Grilled steak', title: 'Grilled Steak', description: 'A perfectly cooked steak' },
  ];

  // Automatic slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleIndicatorClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className='w-full mx-auto py-12 px-4 sm:px-6 lg:px-8'>
      <Carousel className='rounded-lg overflow-hidden relative'>
        <CarouselContent
          className='flex transition-transform duration-700 ease-in-out'
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index} className='w-full flex-shrink-0'>
              <div className='relative'>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={480}
                  className={`object-cover w-full aspect-[16/9] transition-opacity duration-700 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <div
                  className={`absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-700 ${
                    activeIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className='text-white text-center space-y-2'>
                    <h3 className='text-2xl font-bold'>{image.title}</h3>
                    <p className='text-lg'>{image.description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className='absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full shadow-md transition-colors cursor-pointer z-10'
          onClick={handlePrevious}
        >
          <ChevronLeftIcon className='h-6 w-6 text-gray-800' />
        </CarouselPrevious>
        <CarouselNext
          className='absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 hover:bg-white/75 p-2 rounded-full shadow-md transition-colors cursor-pointer z-10'
          onClick={handleNext}
        >
          <ChevronRightIcon className='h-6 w-6 text-gray-800' />
        </CarouselNext>

        <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
          {images.map((_, index) => (
            <CarouselIndicator
              key={index}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? 'bg-white' : 'bg-white/50'
              } hover:bg-white/75 transition-colors cursor-pointer`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

interface ChevronIconProps {
  className: string;
}

function ChevronLeftIcon (props: ChevronIconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15 18-6-6 6-6' />
    </svg>
  );
}

function ChevronRightIcon (props: ChevronIconProps) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m9 18-6-6 6-6' />
    </svg>
  );
}

const CarouselIndicator: React.FC<{ className: string; onClick: () => void }> = ({ className, onClick }) => (
  <div className={className} onClick={onClick}></div>
);

export default CarouselSlider;
