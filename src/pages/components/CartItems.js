import React from "react";
import style from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className={style.cartContainer}>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <CartItem
              id={item.id}
              quantity={item.quantity}
              cena={item.cena}
              total={item.totalPrice}
              naziv={item.naziv}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartItems;
