import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import './Slider.scss';

interface SliderProps {
  dates: { title: string; events: { date: string; description: string; }[] }[];
  currentEvent: number;
  sliderRef: React.RefObject<HTMLDivElement | null>
}

const Slider: React.FC<SliderProps> = ({ dates, currentEvent, sliderRef }) => {
  return (
    //  <div ref={sliderRef} className="historic-dates__slider slider">
    //       <p className='slider__mobile-title'>{dates[currentEvent].title}</p>
    //       <button className='slider__btn slider__btn_prev'></button>
    //       {
    //         <Swiper
    //           modules={[Navigation]}
    //           spaceBetween={25}
    //           slidesPerView={3}
    //           breakpoints={{
    //             320: {
    //              slidesPerView: 1.5,
    //              spaceBetween: 25
    //             },
    //             834: {
    //              slidesPerView: 2,
    //              spaceBetween: 80
    //             },
    //             1025: {
    //              slidesPerView: 3,
    //              spaceBetween: 80
    //             }
    //           }}
    //           navigation={{
    //             prevEl: '.slider__btn_prev',
    //             nextEl: '.slider__btn_next',
    //           }}
    //           pagination={{ clickable: true }}
    //           scrollbar={{ draggable: true }}
    //         >
    //           {
    //             dates[currentEvent].events
    //               .map((item, index) => {
    //                 const { date, description } = item;
    //                 return (
    //                   <SwiperSlide key={index} className='slider__slide'>
    //                     <p className='slider__year'>{date}</p>
    //                     <p className='slider__description'>{description}</p>
    //                   </SwiperSlide>
    //                 );
    //               })
    //           }
    //         </Swiper>
    //       }
    //       <button className='slider__btn slider__btn_next'></button>  
    //     </div>
  <div ref={sliderRef} className="historic-dates__slider slider">
  <p className='slider__mobile-title'>{dates[currentEvent].title}</p>
  <button className='slider__btn slider__btn_prev'></button>
  <Swiper
    modules={[Navigation]}
    spaceBetween={25}
    slidesPerView={3} 
    breakpoints={{
      320: {
        slidesPerView: 1.5,
        spaceBetween: 25
      },
      834: {
        slidesPerView: 2,
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
  <button className='slider__btn slider__btn_next'></button>  
</div>
  );
};

export default Slider;