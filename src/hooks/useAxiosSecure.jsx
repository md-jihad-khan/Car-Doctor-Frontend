import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const navigate = useNavigate();
  const { logOut } = useContext(AuthContext);
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    (error) => {
      if (error.response.status === 401 || error.response.status === 403) {
        logOut();
        navigate("/login");
      }
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
