import React from "react";
import LoginForm from "./components/Login/loginForm";
import Header from "../../components/header/Header";
import FooterComponents from "../../components/footer/Footer";
import { LoginDiv } from "./styles";

function login() {
  return (
    <LoginDiv>
      <Header />
      <LoginForm />
      <FooterComponents />
    </LoginDiv>
  );
}

export default login;
