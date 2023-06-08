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
        {/* {movieItems.map((item, i) => (
          <div key={i}>
            <img src={apiConfig.originalImage(item.backdrop_path)} />
          </div>
        ))} */}
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
        {/* {movieItems.map((item, i) => (
          <TrailerModal key={i} item={item} />
        ))} */}
      </div>
    </>
  );
};

const HeroSlideItem = (props) => {
  let history = unstable_HistoryRouter();

  const item = props.item;

  const background = apiConfig.originalImage(
    item.backdrop_path ? item.backdrop_path : item.poster_path
  );

  const setModalActive = async () => {
    const modal = document.querySelector(`#modal_${item.id}`);

    const videos = await tmdbApi.getVideos(category.movie, item.id);

    if (videos.results.length > 0) {
      const videSrc = "https://www.youtube.com/embed/" + videos.results[0].key;
      modal
        .querySelector(".modal__content > iframe")
        .setAttribute("src", videSrc);
    } else {
      modal.querySelector(".modal__content").innerHTML = "No trailer";
    }

    modal.classList.toggle("active");
  };

  return (
    <div
      className={`hero-slide__item ${props.className}`}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-slide__item__content container">
        <div className="hero-slide__item__content__info">
          <h2 className="title">{item.title}</h2>
          <div className="overview">{item.overview}</div>
          <div className="btns">
            <Button onClick={() => history.push("/movie/" + item.id)}>
              Watch now
            </Button>
            <ButtonOutline onClick={setModalActive}>
              Watch trailer
            </ButtonOutline>
          </div>
        </div>
        <div className="hero-slide__item__content__poster">
          <img src={apiConfig.w500Image(item.poster_path)} alt="" />
        </div>
      </div>
    </div>
  );
};

const TrailerModal = (props) => {
  const item = props.item;

  const iframeRef = useRef(null);

  const onClose = () => iframeRef.current.setAttribute("src", "");

  return (
    <Modal isActive={false} idModal={`modal_${item.id}`}>
      <ModalContent onClose={onClose}>
        <iframe
          ref={iframeRef}
          width="100%"
          height="500px"
          title="trailer"
        ></iframe>
      </ModalContent>
    </Modal>
  );
};

export default Carousel;
