import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../../redux/auth/slice";
import { LoginDiv, H1, Label, Form, LoginBtn } from "./styles";
import { Input } from "@mui/material";

import { useNavigate } from "react-router-dom";
function LoginForm() {
  const dispetch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispetch(login());
  };
  const handleCart = () => {
    navigate("/card");
  };
  const handleHome = () => {
    navigate("/");
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
export default LoginForm;
