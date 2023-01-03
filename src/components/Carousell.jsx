import React, { useState } from 'react';
import img1 from '../assets/img/1.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../assets/css/style.css";
import { Pagination } from "swiper";
 function Carousell() {
  return (
    <section className='container'>
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
      </Swiper>
    </>
    </section>

  );
}
export default Carousell;