// import { Route, Routes, Router } from "react-router-dom";

import "./App.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignUp } from "./pages/admin/SignUp";
import { SignIn } from "./pages/admin/SignIn";
import { HomePage } from "./pages/admin/HomePage";
import { AddCourse } from "./pages/admin/AddCourse";
import { Courses } from "./pages/admin/Courses";
import { Course } from "./pages/admin/Course";

function App() {
  return (
    <div
      style={{
        height: "100vm",
        width: "100vw",
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/courses/:courseId" element={<Course />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/addcourse" element={<AddCourse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
