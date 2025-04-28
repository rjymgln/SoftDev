import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/bundle'
function MySwiper() {


  return (
    <div className="swiper mySwiper">
      <div className="bestproduct_title">
        <h1>Check Our Best Selling Coffee</h1>
      </div>
      <Swiper
        className="swiper-wrapper"
        spaceBetween={150}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        speed={1000} // Adjusted speed for slower sliding animation
      >
        <SwiperSlide className="swiper-slide">
          <img src={require('../../Assets/frappe1.png')} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={require('../../Assets/coffee1.png')} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={require('../../Assets/frappe2.png')} alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="autoplay-progress"></div>
    </div>
  )
}

export default MySwiper