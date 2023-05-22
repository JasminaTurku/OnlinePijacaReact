import React from "react";
import style from "./Login.module.css";
// import authSlice from "../../redux/auth/slice";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/slice";
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
    <div className={style.miniContaioner}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>User name</label>
        <input type="text" />
        <label>Password</label>
        <input type="password" />
        <button onClick={handleCart} className={style.loginBtn} type="submit">
          Login
        </button>
        <button onClick={handleHome} className={style.loginBtn}>
          Cancel
        </button>
      </form>
    </div>
  );
}
export default Login;
