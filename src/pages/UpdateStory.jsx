import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import UpdateStoryForm from "../components/UpdateStoryForm";
import Footer from "../components/Footer";

const UpdateStory = () => {
  return (
    <div>
      <NavLoggedIn />
      <UpdateStoryForm />
      <Footer />
    </div>
  );
};

export default UpdateStory;
