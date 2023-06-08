import React, { useEffect, useState } from "react";
import tmdbApi from "../../../service";
import apiConfig from "../../../helper/apiConfig";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function CastDetail() {
  const [casts, setCasts] = useState([]);
  const params = useParams();
  const id = params.id;

  const getCredits = async () => {
    try {
      const res = await tmdbApi.credits("movie", id);
      console.log(res);
      setCasts(res.cast);
    } catch {
      //console.log("error");
    }
  };

  useEffect(() => {
    getCredits();
  }, [id]);
  return (
    <>
      {casts && (
        <div className="">
          <h2 className="m-4 text-white text-3xl text-center">CAST</h2>
          <div className="mx-auto w-4/5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {casts.map((item) => (
                <div key={item.cast_id} className="casts__item">
                  <SwiperSlide>
                    <img
                      className=" h-[300px] object-cover"
                      src={apiConfig.w500Image(item.profile_path)}
                      alt=""
                    />
                    <p className="text-white mx-auto">{item.name}</p>
                  </SwiperSlide>
                </div>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default CastDetail;
