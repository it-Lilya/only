import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import SliderProps from './sliderTypes';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

const Slider: React.FC<SliderProps> = ({ dates, currentEvent, sliderRef }) => {
  return (
    <div ref={sliderRef} className="history-dates__slider slider">
      <p className='slider__mobile-title'>{dates[currentEvent].title}</p>
      <button className='slider__btn slider__btn_prev'></button>
      <button className='slider__btn slider__btn_next'></button>  
      <Swiper
        modules={[Navigation]}
        spaceBetween={25}
        slidesPerView={3} 
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 25
          },
          600: {
            slidesPerView: 2,
            spaceBetween: 40
          },
          834: {
            slidesPerView: 3,
            spaceBetween: 80
          },
          1025: {
            slidesPerView: 3,
            spaceBetween: 80
          }
        }}
        navigation={{
          prevEl: '.slider__btn_prev',
          nextEl: '.slider__btn_next',
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {
          dates[currentEvent].events.map((item, index) => {
            const { date, description } = item;
            return (
              <SwiperSlide key={index} className='slider__slide'>
                <p className='slider__year'>{date}</p>
                <p className='slider__description'>{description}</p>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
  </div>
  );
};

export default Slider;