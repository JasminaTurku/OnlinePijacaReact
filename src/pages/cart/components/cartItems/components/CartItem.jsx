import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../../../redux/cart/slice";
import { Article, CartActionButton, CartIconDiv } from "./styles";

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
    <CartIconDiv>
      <h2>{naziv}</h2>
      <p>{cena}</p>
      <p>{quantity}</p>
      <Article>Total ${total}</Article>
      <CartActionButton onClick={decrementCartItem}> - </CartActionButton>
      <CartActionButton onClick={incrementCartItem}> + </CartActionButton>
    </CartIconDiv>
  );
}

export default CartItem;
