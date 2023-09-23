import { useNavigate } from "react-router-dom";

export const Appbar = () => {
  const navigate = useNavigate(); 

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
