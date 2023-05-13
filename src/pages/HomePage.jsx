import React from "react";
import axios from "axios";
import Main from "../components/Main";
import BlockList from "../components/BlockList";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import jwt_decode from "jwt-decode";
import { refresh } from "../store/auth/authSlice";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      let currentDate = new Date();
      const decodedToken = jwt_decode(user.accessToken);
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        const data = await dispatch(refresh({ token: user.refreshToken }));
        config.headers["authorization"] = "Bearer " + data.accessToken;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

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
