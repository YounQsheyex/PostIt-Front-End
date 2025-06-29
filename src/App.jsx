import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import WelcomePage from "./pages/WelcomePage";
import CreateStory from "./pages/CreateStory";
import UpdateStory from "./pages/UpdateStory";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/create-story" element={<CreateStory />} />
          <Route path="/update-story" element={<UpdateStory />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
