import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Appbar } from "./layout/Appbar";
import { HomePage } from "./pages/More/HomePage";
import { SignUp } from "./pages/Register/SignUp";
import { LogIn } from "./pages/Register/LogIn";
import { ErrorPage } from "./pages/More/ErrorPage";
import { Footer } from "./layout/Footer";
import { Courses } from "./pages/Courses/Courses";
import { PurchasedCourses } from "./pages/Courses/PurchasedCourses";
import { RecoilRoot, useSetRecoilState } from "recoil";
import { userState } from "./store/atoms/user";
import { BASE_URL } from "./config";
import { useEffect } from "react";
function App() {
  return (
    <>
      <RecoilRoot>
        <Router>
          <Appbar />
          <InitUser />
          <Routes>
            <Route path="*" element={<ErrorPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<LogIn />} />
            <Route path="/courses" element={<Courses />} />

            <Route path="/purchasedcourses" element={<PurchasedCourses />} />
          </Routes>
          <Footer />
        </Router>
      </RecoilRoot>
    </>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };
  useEffect(() => {
    init();
  }, []);
  return <></>;
}

export default App;
