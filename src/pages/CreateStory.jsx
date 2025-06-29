import React from "react";
import NavLoggedIn from "../components/NavLoggedIn";
import CreateStoryForm from "../components/CreateStoryForm";
import Footer from "../components/Footer";

const CreateStory = () => {
  return (
    <div>
      <NavLoggedIn />
      <CreateStoryForm />
      <Footer />
    </div>
  );
};

export default CreateStory;
