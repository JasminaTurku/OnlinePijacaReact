import React from "react";
import Button from "@mui/material/Button";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/slice";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";

function Header() {
  const dispetch = useDispatch();

  const putanja = () => {
    window.location.href = "http://localhost:3000/login";
  };
  const homePutanja = () => {
    window.location.href = "http://localhost:3000/";
    dispetch(logout());
  };

  const loginSignIn = () => {
    if (window.location.href == "http://localhost:3000/") {
      return (
        <>
          <Button onClick={putanja} variant="text" style={{ color: "black" }}>
            <strong>Log in</strong>
          </Button>
          <Button onClick={putanja} variant="text" style={{ color: "black" }}>
            <strong>Sign in</strong>
          </Button>
        </>
      );
    } else if (window.location.href == "http://localhost:3000/cart") {
      return (
        <>
          <Button
            onClick={homePutanja}
            variant="text"
            style={{ color: "black" }}
          >
            <strong>Log out</strong>
          </Button>
        </>
      );
    }
  };

  return (
    <div className={style.header}>
      <Link style={{ display: "flex" }} to="/">
        <h2>Online pijaca</h2>
        <h2>
          <StorefrontIcon />
        </h2>
      </Link>
      <div className={style.divButtonLoginSignIn}>{loginSignIn()}</div>
    </div>
  );
}
export default Header;
