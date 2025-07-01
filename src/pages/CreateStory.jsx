import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import CreateStoryForm from "../components/CreateStoryForm";
import Footer from "../components/Footer";

const CreateStory = () => {
  return (
    <div className="animate__animated animate__fadeIn">
      <NavLoggedIn />
      <CreateStoryForm />
      <Footer />
    </div>
  );
};

export default CreateStory;
