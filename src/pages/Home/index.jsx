import React from "react";
import Navbar from "../../components/Molecules/Navbar";
import Card from "../../components/Molecules/Card";
import Carousel from "../../components/Molecules/Carousel";
import { Link } from "react-router-dom";
import { ButtonOutline } from "../../components/Atom/Button";

function homePage() {
  return (
    <>
      <div className="min-h-screen bg-dark">
        <div className="flex justify-center mx-auto text-white">
          <div className="mt-[120px]">
            <section>
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                  Start your film journey by watching movies
                </h1>
                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                  Find the latest and greatest movies and shows in available on
                  VMovie
                </p>
              </div>
            </section>
          </div>
        </div>
        <Carousel />
        <section className="m-6">
          <div className="flex flex-col">
            <h1 class="mb-4 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Trending Movies
            </h1>
            <Link to="/movie">
              <ButtonOutline>View More</ButtonOutline>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}

export default homePage;
