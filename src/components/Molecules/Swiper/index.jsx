import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function SwiperMolecules({ itemList }) {
  return (
    <>
      <div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          {itemList.map((item, i) => (
            <div key={i}>
              <SwiperSlide>{item}</SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default SwiperMolecules;
