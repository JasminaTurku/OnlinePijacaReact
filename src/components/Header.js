import React from "react";
import Button from "@mui/material/Button";
import style from "./Header.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../redux/auth/slice";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Header() {
  const dispetch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const putanja = () => {
    navigate("/login");
  };
  const homePutanja = () => {
    navigate("/");

    dispetch(logout());
  };

  const loginSignIn = () => {
    if (location.pathname === "/") {
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
    } else if (location.pathname === "/cart") {
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
