import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/atoms/user";
import { BASE_URL } from "../../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setUser = useSetRecoilState(userState);
  return (
    <section className="text-gray-400 bg-gray-900 body-font ">
      <div className="container mx-auto flex px-5 py-24 md:flex-col flex-col items-center text">
        <div className="w-full max-w-xs">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-auto max-w-sm">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                placeholder="******************"
              />
              <p className="text-red-500 text-xs italic">
                Please enter your password.
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={async () => {
                  const response = axios.post(`${BASE_URL}/user/login`, {
                    username: email,
                    password: password,
                  });
                  localStorage.setItem("token", await response.data.token);
                  setUser({
                    isLoading: false,
                    userEmail: email,
                  });
                  navigate("/courses");
                }}
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
