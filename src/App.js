import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/SignUpForm";
import Profile from "./Components/Profile";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;