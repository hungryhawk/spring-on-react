import React, { useEffect } from "react";
import axios from "axios";
import Main from "../components/Main";
import BlockList from "../components/BlockList";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";
import jwt_decode from "jwt-decode";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  // code for generating a new access token

  // const refreshToken = async () => {
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/refresh', {
  //       token: user.refreshToken,
  //     });
  //     return res.data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // axios.interceptors.request.use(
  //   async (config) => {
  //     let currentDate = new Date();
  //     const decodeToken = jwt_decode(user.token);
  //     if (decodeToken.exp * 1000 < currentDate.getTime()) {
  //       const data = await refreshToken();
  //       config.headers['Authorization'] = 'Bearer ' + data.token;
  //       // navigate('/login');
  //     }
  //     return config;
  //   },
  //   (err) => {
  //     return Promise.reject(err);
  //   }
  // );

  // useEffect(() => {
  //   axios.interceptors.request.use(async (config) => {
  //   let currentDate = new Date();
  //   const decodeToken = jwt_decode(user, { headers: true });
  //   if (decodeToken.exp * 1000 < currentDate.getTime()) {
  //     dispatch(logout());
  //   }
  //   });
  // }, []);
  // axios.create = {};
  // axios.interceptors.request.use(async (config) => {
  //   let currentDate = new Date();
  //   const decodeToken = jwt_decode(user, { headers: true });
  //   if (decodeToken.exp * 1000 < currentDate.getTime()) {
  //     // localStorage.removeItem('token');
  //     localStorage.clear();
  //     // dispatch(logout());
  //   }
  //   return config;
  // });
  if (!user) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <Main />
      <BlockList />
    </>
  );
}

export default HomePage;
