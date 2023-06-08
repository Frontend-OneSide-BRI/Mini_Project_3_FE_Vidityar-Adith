import React, { useEffect, useState } from "react";
import Button from "../../Atom/Button";
import tmdbApi from "../../../service";

const category = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Drama",
  "Family",
  "Fantasy",
  "History",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "War",
];
function Select({ handleSelect, selectGroup }) {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState([]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getGenre = async () => {
    console.log(category);
    try {
      const response = await tmdbApi.genre();
      console.log(response);
      setGenres(response.genres);
    } catch {
      //   console.log("error");
    }
  };

  useEffect(() => {
    getGenre();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center p-4">
        <button
          id="dropdownDefault"
          onClick={toggleDropdown}
          className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          type="button"
        >
          Filter by category
          <svg
            className="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>

        {isOpen && (
          <div
            id="dropdown"
            className="z-10 w-56 p-3 bg-white rounded-lg shadow dark:bg-gray-700"
          >
            <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </h6>
            <ul className="space-y-2 text-sm" aria-labelledby="dropdownDefault">
              {genres.map((data, index) => {
                return (
                  <li key={index} className="flex items-center">
                    <input
                      id={data.id}
                      type="checkbox"
                      value={data.id}
                      className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onClick={handleSelect}
                    />

                    <label
                      htmlFor={data.id}
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100"
                    >
                      {data.name}
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3">
              <Button onClick={selectGroup}> Submit </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Select;
