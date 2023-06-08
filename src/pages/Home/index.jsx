import React from "react";
import Navbar from "../../components/Molecules/Navbar";
import Form from "../../components/Molecules/Form";
import Card from "../../components/Molecules/Card";

function homePage() {
  return (
    <>
      <div className="min-h-screen bg-dark">
        <div className="flex justify-center mx-auto text-white">
          <div className="mt-[120px]">Ini Halaman Home</div>
        </div>
        <Navbar />
        <Form />
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
