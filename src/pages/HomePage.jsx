import React from "react";
import NotLogNav from "../components/NotLogNav";
import HeroBg from "../components/HeroBg";
import HeroDown from "../components/HeroDown";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="animate__animated animate__pulse">
      <NotLogNav />
      <HeroBg />
      <HeroDown />
      <Footer />
    </div>
  );
};

export default HomePage;
