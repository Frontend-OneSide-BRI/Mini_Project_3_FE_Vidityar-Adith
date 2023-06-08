import React from "react";
import Navbar from "../../components/Molecules/Navbar";
import Card from "../../components/Molecules/Card";
import Carousel from "../../components/Molecules/Carousel";

function homePage() {
  return (
    <>
      <div className="min-h-screen bg-dark">
        <div className="flex justify-center mx-auto text-white">
          <div className="mt-[120px]">Ini Halaman Home</div>
        </div>
        <Carousel />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default homePage;
