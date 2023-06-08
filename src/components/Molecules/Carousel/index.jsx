import React, { useEffect, useRef, useState } from "react";
import tmdbApi, { category, movieType } from "../../../service";
import apiConfig from "../../../helper/apiConfig";
import Button, { ButtonOutline } from "../../Atom/Button";
import Modal, { ModalContent } from "../Modal";
import { unstable_HistoryRouter } from "react-router-dom";
import SwiperCore, { Autoplay, EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Carousel = () => {
  const [movieItems, setMovieItems] = useState([]);

  const getMovies = async () => {
    const params = { page: 1 };
    try {
      const response = await tmdbApi.getMoviesList(movieType.popular, {
        params,
      });
      setMovieItems(response.results.slice(0, 11));
      //console.log(response.results);
    } catch {
      //console.log("error");
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center mb-7 mt-7 -z-50">
        {movieItems.length > 0 ? (
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            loop={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            {movieItems.map((item, i) => (
              <div className="bg-center bg-cover z-0" key={i}>
                <SwiperSlide style={{ width: "900px" }}>
                  <img
                    src={apiConfig.originalImage(item.backdrop_path)}
                    className="d-block w-100"
                    alt="backdrop"
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </>
  );
};

export default Carousel;
