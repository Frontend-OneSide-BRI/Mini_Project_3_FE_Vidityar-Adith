import React from "react";
import apiConfig from "../../../helper/apiConfig";
import { ButtonOutline } from "../../Atom/Button";
import CastDetail from "./castDetail";

function DetailItem({ detailMovie }) {
  return (
    <>
      <figure className="transition-all duration-300 cursor-pointer filter grayscale-0 hover:grayscale">
        <img
          className="h-[400px] w-full object-cover"
          src={apiConfig.originalImage(detailMovie.backdrop_path)}
          alt=""
        />
        <figcaption className="absolute px-4 text-4xl bg-dark bottom-6">
          <p className="text-white">{detailMovie.title}</p>
        </figcaption>
      </figure>
      <div className="flex ">
        <div className="m-4 w-[500px]">
          <img
            className="object-cover"
            src={apiConfig.originalImage(detailMovie.poster_path)}
            alt=""
          />
        </div>
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-2 font-normal text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Release Date : {detailMovie.release_date}
          </h5>
          <div className="genres flex">
            {detailMovie.genres &&
              detailMovie.genres.slice(0, 5).map((genre, i) => (
                <div key={i}>
                  <ButtonOutline>{genre.name}</ButtonOutline>
                </div>
              ))}
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {detailMovie.overview}
          </p>
        </div>
      </div>
      <div className="cast">
        <div className="section__header">
          <h2>Casts</h2>
        </div>
        <CastDetail />
      </div>
    </>
  );
}

export default DetailItem;
