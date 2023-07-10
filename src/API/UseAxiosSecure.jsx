import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const UseAxiosSecure = () => {

    const { userLogOut } = useContext(AuthContext);
    // console.log(logOut);
    const navigate = useNavigate();
    const axiosSecure = axios.create({
      baseURL: `${import.meta.env.VITE_lOCAL_Server}`,
    });
  
    useEffect(() => {
      axiosSecure.interceptors.request.use((config) => {
        const token = localStorage.getItem("access-token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });
  
      axiosSecure.interceptors.response.use(
        (response) => response,
        async (error) => {
          if (
            error.response &&
            (error.response.status === 401 || error.response.status === 403)
          ) {
            await userLogOut();
            navigate("/login");
          }
          return Promise.reject(error);
        }
      );
    }, [userLogOut, navigate, axiosSecure]);
  
    return [axiosSecure];
  };