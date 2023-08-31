// import { Route, Routes, Router } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <div
      style={{
        height: "100vm",
        width: "100vw",
      }}
    >
      <Navbar />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <h1 style={{ textAlign: "center" }}>Welcome to course Apppp</h1>
            }
          />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
