import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { userEmail } from "../store/selectors/userEmail";
import { isUserLoading } from "../store/selectors/isUserLoading";
import { userState } from "../store/atoms/user";

export const Appbar = () => {
  const navigate = useNavigate();
  const setUser = useSetRecoilState(userState);
  const userEmailState = useRecoilValue(userEmail);
  const userLoading = useRecoilValue(isUserLoading);

  if (userLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  if (userEmailState) {
    return (
      <>
        <header className="text-gray-400 bg-gray-900 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <a
              href="/"
              className="  flex title-font font-medium items-center text-white mb-4 md:mb-0"
            >
              <span className="ml-3 text-xl">Coursera</span>
            </a>
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
              <button
                onClick={() => {
                  navigate("/courses");
                }}
                className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              >
                Courses
              </button>
              <button
                onClick={() => {
                  navigate("/purchasedcourses");
                }}
                className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              >
                My Courses
              </button>
              <button
                onClick={() => {
                  localStorage.setItem("token", null);
                  setUser({
                    isLoading: false,
                    userEmail: null,
                  });
                  navigate("/");
                }}
                className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
              >
                Logout
              </button>
            </nav>
          </div>
        </header>
      </>
    );
  }
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            href="/"
            className="  flex title-font font-medium items-center text-white mb-4 md:mb-0"
          >
            <span className="ml-3 text-xl">Coursera</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <button
              onClick={() => {
                navigate("/signin");
              }}
              className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              SignIn
            </button>
            <button
              onClick={() => {
                navigate("/signup");
              }}
              className="mr-5 inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              SignUp
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};
