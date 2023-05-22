import React from "react";
import style from "./Cart.module.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../redux/cart/slice";

function CartItem({ naziv, quantity, total, cena, id }) {
  const dispetch = useDispatch();

  const incrementCartItem = () => {
    dispetch(
      cartAction.addToCart({
        naziv,
        id,
        cena,
      })
    );
  };
  const decrementCartItem = () => {
    dispetch(cartAction.removeToCart(id));
  };
  return (
    <div className={style.cartItem}>
      <h2>{naziv}</h2>
      <p>{cena}</p>
      <p>{quantity}</p>
      <article>Total ${total}</article>
      <button onClick={decrementCartItem} className={style.cartAction}>
        {" "}
        -{" "}
      </button>
      <button onClick={incrementCartItem} className={style.cartAction}>
        {" "}
        +{" "}
      </button>
    </div>
  );
}

export default CartItem;
