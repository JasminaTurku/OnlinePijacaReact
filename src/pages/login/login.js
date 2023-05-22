import React from "react";
import Header from "../components/Header";
import FooterComponents from "../components/FooterComponents";
import Login from "../components/Login";

function login() {
  return (
    <div className="login">
      <Header />
      <Login />
      <FooterComponents />
    </div>
  );
}

export default login;
