import React from "react";
import { Link } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Button from "@mui/material/Button";
import style from "./Header.module.css";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/slice";

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
        <div className={style.divButtonLoginSignIn}>{loginSignIn()}</div>
      </Link>
      <Link to="/cart">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
      </Link>
      <Link to="/login">
        <i className="ri-shopping-cart-line ri-fw ri-2x"></i>{" "}
      </Link>
    </div>
  );
}
export default Header;
