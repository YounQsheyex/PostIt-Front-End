import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import AllStories from "../components/AllStories";
import Footer from "../components/Footer";

const MyStories = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavLoggedIn />
      <AllStories />
      <Footer />
    </div>
  );
};

export default MyStories;
