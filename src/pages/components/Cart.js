import React from "react";
import style from "./Cart.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/cart/slice";
function Cart() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispetch = useDispatch();
  const showCart = () => {
    dispetch(cartAction.setShowCart());
  };
  return (
    <div className={style.cart}>
      <div className={style.cartIcon}>
        <h3 onClick={showCart}>Cart {quantity} items</h3>
      </div>
    </div>
  );
}

export default Cart;
