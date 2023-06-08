import React, { useEffect, useState } from "react";
import Select from "../../components/Molecules/Select";
import Search from "../../components/Molecules/Search";
import Gallery from "../../components/Molecules/Gallery";
import tmdbApi, { movieType } from "../../service";

function MoviePage() {
  const [category, setCategory] = useState([]);
  const [search, setSearch] = useState("");
  const [movieItems, setMovieItems] = useState([]);
  //   const [moviePage, setMoviePage] = useState();

  const getMovies = async () => {
    const params = { page: 1 };
    try {
      const response = await tmdbApi.getMoviesList(movieType.top_rated, {
        params,
      });
      setMovieItems(response.results);
    } catch {
      //console.log("error");
    }
  };

  const getFilterMovies = async () => {
    console.log(category);
    const params = { with_genres: category };
    try {
      const response = await tmdbApi.getDiscoverList({
        params,
      });
      console.log(response.results);
      setMovieItems(response.results);
    } catch {
      //   console.log("error");
    }
  };

  useEffect(() => {
    getMovies();
  }, [search]);

  const handleSearch = (type) => {
    setSearch(type);
  };

  const handleSelect = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setCategory([...category, value]);
    } else {
      setCategory(category.filter((option) => option !== value));
    }
  };

  const selectGroup = () => {
    getFilterMovies();
  };

  return (
    <>
      <div className="min-h-screen bg-dark">
        <div>
          <Search handleSearch={handleSearch} />
          <Select handleSelect={handleSelect} selectGroup={selectGroup} />
          {movieItems.length > 0 ? (
            <Gallery movieItems={movieItems} isSearch={search} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default MoviePage;
