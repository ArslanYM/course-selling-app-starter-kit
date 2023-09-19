import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Appbar } from "./layout/Appbar";
import { HomePage } from "./pages/HomePage";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { ErrorPage } from "./pages/ErrorPage";
import { Footer } from "./layout/Footer";
function App() {
  return (
    <>
      <Router>
        <Appbar />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
