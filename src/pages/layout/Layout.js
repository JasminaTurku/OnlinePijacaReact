import { useSelect } from "@mui/base";
import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import Products from "../components/Products";
import CartItems from "../components/CartItems";
import style from "./Layout.module.css";
import { Fragment } from "react";
import FooterComponents from "../components/FooterComponents";
import Cart from "../components/Cart";
function Leyout() {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <Fragment>
      <div className={style.layout}>
        <Header />
        <Cart />
        <Products />
        {showCart && <CartItems />}
        <div className="totalPrice">
          <h3>Total: ${total}</h3>
          <button className="orderBtn"> Place order</button>
        </div>
      </div>
      <FooterComponents />
    </Fragment>
  );
}

export default Leyout;
