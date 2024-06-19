/* import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../models/index.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import food1 from '../models/food1.jpeg';
import food2 from '../models/food2.jpeg';
import food3 from '../models/food3.jpeg';
import food4 from '../models/food4.jpg';
import food5 from '../models/food5.jpeg';
import food6 from '../models/food6.jpg';

function Slider(): JSX.Element {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/ionicons@5.5.2/dist/ionicons.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='container'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 2.5 }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className='swiper_container'
      >
        <SwiperSlide>
          <img src={food1} alt='f1' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food2} alt='f2' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food3} alt='f3' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food4} alt='f4' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food5} alt='f5' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={food6} alt='f6' />
        </SwiperSlide>
      </Swiper>

      <div className='slider-controler'>
        <div className='swiper-button-prev slider-arrow'>
          <ion-icon name='arrow-back-outline'></ion-icon>
        </div>
        <div className='swiper-button-next slider-arrow'>
          <ion-icon name='arrow-forward-outline'></ion-icon>
        </div>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  );
}

export default Slider;
 */
