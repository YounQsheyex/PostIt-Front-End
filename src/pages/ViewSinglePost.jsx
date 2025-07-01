import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import ViewPost from "../components/ViewPost";
import Footer from "../components/Footer";

const ViewSinglePost = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavLoggedIn />
      <ViewPost />
      <Footer />
    </div>
  );
};

export default ViewSinglePost;
