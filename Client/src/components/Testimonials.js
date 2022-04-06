import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./testimonials.css";

import { data } from "./data";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination]);

function Testimonials() {
  return (
    
    <section id="testimonials" className="main-testimonials-wrapper">
    <div style={{margin: "20px" , marginBottom: "50px", border: "1px solid rgb(3, 20, 95)", background: "black"}}>
      <h2 style={{margin: "20px", color: "white", fontWeight: "bolder", textAlign: "center", marginBottom: "30px", fontFamily: "Robot", fontSize: "3vmax"}}>Our Happy Clients</h2>
    </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 6,
          slideShadows: true,
        }}
        // pagination={true}
      >
        {data.map((item, key) => (
          <SwiperSlide>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.testimony}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <div className="quote-parent">
        <div className="quote n-box1 flex-with-center">
          <h1>Quote?!</h1>
          <div className="quote-content">
            <p>“ Knowledge is power.” </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Testimonials;
