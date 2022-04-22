import Navbar from "../components/layout//Navbar";
import React from "react";
import Masthead from "../components/sections/Masthead";
import Carousel from "../components/sections/Carousel";
import Footer from "../components/layout/Footer";
import Features from "../components/sections/Features";
import GetInTouch from "../components/sections/GetInTouch";
import ProductVideo from "../components/sections/ProductVideo";
import HalfCarousel from "../components/sections/HalfCarousel";

type LandingPageProps = {
  children?: React.ReactNode;
};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Navbar />
      <Masthead />
      <ProductVideo />
      <Carousel />
      <HalfCarousel />
      <Features />
      <GetInTouch />
      <Footer />
    </>
  );
};

export default LandingPage;
