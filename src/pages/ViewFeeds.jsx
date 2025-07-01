import React from "react";
import AllPost from "../components/AllPost";
import AllPostHero from "../components/AllPostHero";
import NavLoggedIn from "../components/NavLoggedIn";
import Footer from "../components/Footer";

const ViewFeeds = () => {
  return (
    <div>
      <NavLoggedIn />
      <AllPostHero />
      <AllPost />
      <Footer />
    </div>
  );
};

export default ViewFeeds;
