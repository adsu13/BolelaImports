import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../assets/css/slide.css";
import iphones from "../assets/img/iphones.png";
import acessorios from "../assets/img/acessorios.png";
import xiaomi from "../assets/img/xiaomi.png";
import { Pagination, Navigation } from "swiper";

 function Slide() {
  return (
    <section className="container" style={{padding:"2em"}}>
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
                
        <SwiperSlide><div className="card"><img style={{display: "block",width: "50%",height: "50%",objectFit: "cover"}}src={iphones} alt="" />
        <h1 className="title fs-4 text fw-bolder">IPHONE</h1></div>
        </SwiperSlide>   
        <SwiperSlide><div className="card"><img style={{display: "block",width: "50%",height: "50%",objectFit: "cover"}}src={xiaomi} alt="" />
        <h1 className="title fs-4 text fw-bolder">Xiaomi</h1></div>
        </SwiperSlide>   
        <SwiperSlide><div className="card"><img style={{display: "block",width: "50%",height: "50%",objectFit: "cover"}}src={acessorios} alt="" />
        <h1 className="title fs-4 text fw-bolder">Acessórios</h1></div>
        </SwiperSlide>   
      </Swiper>
    </>
    </section>
  );
}
export default Slide;