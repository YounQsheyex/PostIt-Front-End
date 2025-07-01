import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import CreateStory from "./pages/CreateStory";
import UpdateStory from "./pages/UpdateStory";
import ViewSinglePost from "./pages/ViewSinglePost";
import MyStories from "./pages/MyStories";
import ViewFeeds from "./pages/ViewFeeds";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/my-story" element={<MyStories />} />
          <Route path="/create-story" element={<CreateStory />} />
          <Route path="/update-story" element={<UpdateStory />} />
          <Route path="/view-feeds" element={<ViewFeeds />} />
          <Route path="/view-post" element={<ViewSinglePost />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
