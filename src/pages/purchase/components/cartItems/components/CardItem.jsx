import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../../../redux/cart/slice";
import {
  Article,
  CartActionButton,
  CartIconDiv,
  MinusAndPlusBtnDiv,
} from "./styles";

function CardItem({ naziv, quantity, total, cena, id }) {
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
      <h3>{naziv}</h3>
      <Article>Cena: {cena}</Article>
      <Article>Broj proizvoda: {quantity}</Article>
      <Article>Suma: ${total}</Article>
      <MinusAndPlusBtnDiv>
        <CartActionButton onClick={decrementCartItem}> - </CartActionButton>
        <CartActionButton onClick={incrementCartItem}> + </CartActionButton>
      </MinusAndPlusBtnDiv>
    </CartIconDiv>
  );
}

export default CardItem;
