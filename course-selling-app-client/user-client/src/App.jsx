import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Appbar } from "./layout/Appbar";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/Register/SignUp";
import { LogIn } from "./pages/Register/LogIn";
import { ErrorPage } from "./pages/More/ErrorPage";
import { Footer } from "./layout/Footer";
import { Courses } from "./pages/Courses/Courses";
import { Course } from "./pages/Courses/Course";
import { PurchasedCourses } from "./pages/Courses/PurchasedCourses";
function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<LogIn />} />
          <Route path="/purchasedcourses" element={<PurchasedCourses />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:courseId" element={<Course />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
