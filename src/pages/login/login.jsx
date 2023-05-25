import React from "react";
import Login from "./components/Login/Login";
import Header from "../../components/Header";
import FooterComponents from "../../components/FooterComponents";
import { LoginDiv } from "./styles";

function login() {
  return (
    <LoginDiv>
      <Header />
      <Login />
      <FooterComponents />
    </LoginDiv>
  );
}

export default login;
