import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/slice";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ButtonLoginSigninDiv, H2, HeadreDiv } from "./styles";
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
    } else if (location.pathname === "/card") {
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
    <HeadreDiv>
      <Link style={{ display: "flex" }} to="/">
        <H2>Online pijaca</H2>
        <H2>
          <StorefrontIcon />
        </H2>
      </Link>
      <ButtonLoginSigninDiv>{loginSignIn()}</ButtonLoginSigninDiv>
    </HeadreDiv>
  );
}
export default Header;
