import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import HeroLoggedIn from "../components/HeroLoggedIn";
import Footer from "../components/Footer";

const WelcomePage = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavLoggedIn />
      <HeroLoggedIn />
      <Footer />
    </div>
  );
};

export default WelcomePage;
