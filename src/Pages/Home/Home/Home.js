import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Extet from "../Extet/Extet";
import TourPackage from "../TourPackage/TourPackage";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackage></TourPackage>
      <Extet></Extet>
      <About></About>
    </div>
  );
};

export default Home;
