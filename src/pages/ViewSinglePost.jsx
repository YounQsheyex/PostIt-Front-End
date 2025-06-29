import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import ViewPost from "../components/ViewPost";
import Footer from "../components/Footer";

const ViewSinglePost = () => {
  return (
    <div>
      <NavLoggedIn />
      <ViewPost />
      <Footer />
    </div>
  );
};

export default ViewSinglePost;
