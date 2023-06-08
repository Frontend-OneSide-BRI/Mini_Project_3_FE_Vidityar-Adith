import React, { useEffect, useState } from "react";
import apiConfig from "../../../helper/apiConfig";
import tmdbApi from "../../../service";

function Gallery({ isFilter, isSearch, movieItems }) {
  const [modal, setModal] = useState(false);
  // const [tempMovie, setTempMovie] = useState("");
  const [dataMovie, setDataMovie] = useState(movieItems);

  const searchMovies = async () => {
    const params = { query: isSearch };
    try {
      const response = await tmdbApi.search("movie", {
        params,
      });
      setDataMovie(response.results);
    } catch {
      //console.log("error");
    }
  };

  const hitMovie = () => {
    if (isSearch != "") {
      searchMovies();
    } else {
      setDataMovie(movieItems);
    }
  };

  useEffect(() => {
    hitMovie();
  }, [isSearch, movieItems]);

  return (
    <>
      {/* <div className={modal ? "modalOpen z-10" : "modal"}>
        <img src={tempMovie} alt="img Modal" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
          className="cursor-pointer"
          onClick={() => setModal(false)}
        >
          <path
            fill="currentColor"
            d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
          />
        </svg>
      </div> */}
      <div className="mb-8">
        <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 z-0">
          {dataMovie.length > 0
            ? dataMovie.map((item, index) => {
                return (
                  <div
                    className="border rounded-lg shadow bg-gray-800 border-gray-700 hover:opacity-80"
                    key={index}
                    // onClick={() => getImg(item.src)}
                  >
                    <div className="flex flex-col h-full">
                      <img
                        className="object-contain mt-4 rounded-t-lg h-80 w-auto"
                        src={apiConfig.originalImage(item.poster_path)}
                        alt=""
                      />
                      <div className="p-5">
                        <p className="text-xs text-gray-500">#{item.id}</p>
                        <div>
                          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {item.title}
                          </h5>
                        </div>
                        <div className="flex align-center">
                          <svg
                            width="20"
                            height="23"
                            viewBox="0 0 481 320"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M240.946 224C276.293 224 304.946 195.346 304.946 160C304.946 124.654 276.293 96 240.946 96C205.6 96 176.946 124.654 176.946 160C176.946 195.346 205.6 224 240.946 224Z"
                              fill="white"
                            />
                            <path
                              d="M475.787 142.6C449.327 101.68 414.997 66.92 376.517 42.07C333.947 14.55 286.947 0 240.607 0C198.087 0 156.277 12.15 116.337 36.11C75.6067 60.54 38.7067 96.23 6.6567 142.18C3.03855 147.373 1.04589 153.525 0.931934 159.853C0.817977 166.181 2.58787 172.4 6.0167 177.72C32.4267 219.05 66.4167 253.86 104.297 278.37C146.947 306 192.847 320 240.607 320C287.317 320 334.417 305.57 376.807 278.28C415.267 253.51 449.527 218.62 475.887 177.36C479.197 172.164 480.948 166.127 480.93 159.965C480.912 153.804 479.127 147.777 475.787 142.6ZM240.947 256C221.96 256 203.399 250.37 187.612 239.821C171.825 229.272 159.52 214.279 152.254 196.738C144.988 179.196 143.087 159.894 146.791 141.271C150.496 122.649 159.639 105.544 173.064 92.1178C186.49 78.6919 203.596 69.5488 222.218 65.8446C240.84 62.1404 260.143 64.0416 277.684 71.3076C295.226 78.5736 310.219 90.8781 320.768 106.665C331.316 122.452 336.947 141.013 336.947 160C336.918 185.452 326.794 209.853 308.797 227.85C290.8 245.847 266.399 255.971 240.947 256Z"
                              fill="white"
                            />
                          </svg>
                          <span className="ml-1 mb-2 font-normal text-md text-white">
                            {item.popularity}
                          </span>
                        </div>
                        <p className="mb-3 font-normal text-justify h-[100px] text-ellipsis overflow-hidden text-gray-700 dark:text-gray-400">
                          {item.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}

export default Gallery;
