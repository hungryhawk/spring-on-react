import React from "react";
import Main from "../components/Main";
import BlockList from "../components/BlockList";
import Header from "../components/Header";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function HomePage() {
  const { user } = useSelector((state) => state.auth);

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
