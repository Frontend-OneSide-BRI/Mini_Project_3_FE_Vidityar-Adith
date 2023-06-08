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
        <div className="w-1/5 m-4">
          <img
            className=" h-[300px] object-cover"
            src={apiConfig.originalImage(detailMovie.poster_path)}
            alt=""
          />
        </div>
        <div className="flex flex-col p-4 leading-normal">
          <h5 className="mb-2 font-normal text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Release Date : {detailMovie.release_date}
          </h5>
          <div className="genres">
            {detailMovie.genres &&
              detailMovie.genres
                .slice(0, 5)
                .map((genre, i) => (
                  <ButtonOutline key={i}>{genre.name}</ButtonOutline>
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
        <CastDetail id={detailMovie.id} />
      </div>
    </>
  );
}

export default DetailItem;
