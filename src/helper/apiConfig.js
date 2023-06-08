import { API_KEY, BASE_URL } from "../config";

const apiConfig = {
  baseUrl: `${BASE_URL}`,
  apiKey: `${API_KEY}`,
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
