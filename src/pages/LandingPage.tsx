import Navbar from "../components/layout//Navbar";
import React from "react";
import Masthead from "../components/sections/Masthead";
import Carousel from "../components/sections/Carousel";
import Footer from "../components/layout/Footer";
import Features from "../components/sections/Features";

type LandingPageProps = {
  children?: React.ReactNode;
};

const LandingPage: React.FC<LandingPageProps> = () => {
  return (
    <>
      <Navbar />

      <Masthead />
      <Carousel />
      <Features />
      <Footer />
    </>
  );
};

export default LandingPage;
