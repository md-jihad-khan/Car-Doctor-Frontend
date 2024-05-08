import { Link, useNavigate } from "react-router-dom";
import loginimg from "../assets/images/login/login.svg";
import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleLogin, reload, setReload } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signIn(email, password)
      .then((result) => {
        navigate(location?.state ? location.state : "/");
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });

        return setReload(!reload);
      })
      .catch((error) => {
        console.log(error.message);
        if (error.message == "Firebase: Error (auth/invalid-credential).") {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Invalid Email or Password !",
          });
        }
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedInUser = result.user;
        const email = loggedInUser.email;
        axios
          .post(
            "http://localhost:5000/jwt",
            { email },
            { withCredentials: true }
          )
          .then((res) => {
            if (res.data.success) {
              navigate(location?.state ? location.state : "/");
            }
          });

        Swal.fire({
          icon: "success",
          title: "Google Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="hero mt-3 md:w-10/12 mx-auto font-inter">
      <div className="hero-content justify-between p-0 flex-col md:flex-row">
        <div className="w-1/2">
          <img src={loginimg} alt="" />
        </div>
        <div className="card shrink-0 md:w-1/2 h-[500px] border">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="w-full ">
              <h1 className="text-2xl font-bold text-center ">Login</h1>
              <div className="space-y-6">
                <div className="space-y-1 text-sm">
                  <label className="block font-bold text-gray-600">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md bg-gray-50 text-gray-800 outline-none border"
                  />
                </div>
                <div className="space-y-1 text-sm">
                  <label className="block font-bold text-gray-600">
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
                      id="password"
                      placeholder="Password"
                      className="w-full px-4 py-3 rounded-md  bg-gray-50 text-gray-800 outline-none border"
                    />
                  </div>
                </div>
                <button className="block w-full p-3 text-center  rounded-lg bg-[#FF3811] text-white">
                  Sign in
                </button>
              </div>
              <div className="flex items-center text-center pt-4 space-x-1">
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
                <p className="px-3 text-sm text-gray-600">
                  Login with social accounts
                </p>
                <div className="flex-1 h-px sm:w-16 bg-gray-300"></div>
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleGoogleLogin}
                  aria-label="Log in with Google"
                  className="p-3 rounded-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                  </svg>
                </button>
              </div>
              <p className="text-xs text-center sm:px-6 text-gray-600">
                Don't have an account?
                <Link
                  to={"/signup"}
                  className="underline text-[#FF3811] text-lg font-bold"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
