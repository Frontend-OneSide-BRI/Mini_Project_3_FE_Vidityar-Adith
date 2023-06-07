import http from "../helper/api";

const headers = {
  accept: "application/json",
  Authorization:
    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NDA1ODk1ZWYwMzFiZmQwMmZlOWJjNjBlMDJmNzVhYiIsInN1YiI6IjY0N2VlY2E5OTM4MjhlMDBiZjlmZjIwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yxfKYpfAsVxFSp_a61vQhNbuqsujhT1an_Sv107R1cY",
};

async function getMovie(setData, params = "") {
  await http
    .get(`movie/changes?${params}`, headers)
    .then((res) => {
      setData(res.data);
    })
    .catch((res) => {});
}

export { getMovie };
