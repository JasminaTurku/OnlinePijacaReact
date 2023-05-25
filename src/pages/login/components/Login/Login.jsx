import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../redux/auth/slice";
import { LoginDiv, H1, Label, Form, LoginBtn } from "./styles";
import { Input } from "@mui/material";

function Login() {
  const dispetch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispetch(login());
  };
  const handleCart = () => {
    window.location.href = "http://localhost:3000/cart";
  };
  const handleHome = () => {
    window.location.href = "http://localhost:3000/";
  };

  return (
    <LoginDiv>
      <H1>Login</H1>
      <Form onSubmit={handleSubmit}>
        <Label>User name</Label>
        <Input type="text" />
        <Label>Password</Label>
        <Input type="password" />
        <LoginBtn onClick={handleCart} type="submit">
          Login
        </LoginBtn>
        <LoginBtn onClick={handleHome}>Cancel</LoginBtn>
      </Form>
    </LoginDiv>
  );
}
export default Login;
