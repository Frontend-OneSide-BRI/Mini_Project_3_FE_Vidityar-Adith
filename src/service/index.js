import http from "../helper/axiosClient";

export const category = {
  movie: "movie",
  tv: "tv",
};

export const movieType = {
  upcoming: "upcoming",
  popular: "popular",
  top_rated: "top_rated",
};

export const tvType = {
  popular: "popular",
  top_rated: "top_rated",
  on_the_air: "on_the_air",
};

const tmdbApi = {
  getMoviesList: (type, params) => {
    const url = "movie/" + movieType[type];
    return http.get(url, params);
  },
  getDiscoverList: (params) => {
    const url = "discover/movie/";
    return http.get(url, params);
  },
  getTvList: (type, params) => {
    const url = "tv/" + tvType[type];
    return http.get(url, params);
  },
  getVideos: (cate, id) => {
    const url = category[cate] + "/" + id + "/videos";
    return http.get(url, { params: {} });
  },
  search: (cate, params) => {
    const url = "search/" + category[cate];
    return http.get(url, params);
  },
  detail: (cate, id, params) => {
    const url = category[cate] + "/" + id;
    return http.get(url, params);
  },
  credits: (cate, id) => {
    const url = category[cate] + "/" + id + "/credits";
    return http.get(url, { params: {} });
  },
  similar: (cate, id) => {
    const url = category[cate] + "/" + id + "/similar";
    return http.get(url, { params: {} });
  },
  genre: () => {
    const url = "genre/movie/list?language=en";
    return http.get(url, { params: {} });
  },
};

export default tmdbApi;
