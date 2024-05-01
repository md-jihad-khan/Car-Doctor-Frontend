import { Link } from "react-router-dom";
import loginimg from "../assets/images/login/login.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="hero mt-3 md:w-10/12 mx-auto font-inter pb-5">
      <div className="hero-content justify-between p-0 flex-col md:flex-row">
        <div className="w-1/2">
          <img src={loginimg} alt="" />
        </div>
        <div className="card shrink-0 md:w-1/2 border">
          <form className="card-body">
            <div className="w-full ">
              <h1 className="text-2xl font-bold text-center ">Sign Up</h1>
              <form className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label htmlFor="username" className="block text-gray-600">
                    Username
                  </label>
                  <input
                    required
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Username"
                    className="w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 outline-none border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 outline-none border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block text-gray-600">Photo URL</label>
                  <input
                    required
                    type="text"
                    name="photourl"
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 outline-none border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label htmlFor="password" className="block text-gray-600">
                    Password
                  </label>
                  <div className="flex items-center relative">
                    <span
                      className="cursor-pointer absolute right-4"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 outline-none border"
                    />
                  </div>
                </div>
                <button
                  className="block w-full p-3 text-center rounded-lg bg-[#FF3811] text-white"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>

              <p className="text-xs text-center sm:px-6 text-gray-600">
                Already have an account?
                <Link
                  to={"/login"}
                  className="underline text-[#FF3811] text-lg  font-bold"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
