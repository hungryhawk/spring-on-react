import React, { useEffect } from "react";
import axios from "axios";
import Main from "../components/Main";
import BlockList from "../components/BlockList";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/auth/authSlice";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const axiosJWT = axios.create();
  useEffect(() => {
    axios.interceptors.request.use(async (config) => {
      let currentDate = new Date();
      const decodeToken = jwt_decode(user);
      if (decodeToken.exp * 1000 < currentDate.getTime()) {
        dispatch(logout());
        navigate("/login");
      }
    });
  }, []);

  // console.log(jwt_decode(user.token));

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
