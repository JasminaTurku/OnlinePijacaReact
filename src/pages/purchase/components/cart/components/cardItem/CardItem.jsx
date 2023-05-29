import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../../../redux/slice";
import {
  Article,
  CartActionButton,
  CartIconDiv,
  MinusAndPlusBtnDiv,
} from "./styles";

function CardItem({ naziv, quantity, total, cena, id }) {
  const dispatch = useDispatch();

  const incrementCartItem = () => {
    dispatch(
      cartAction.addToCart({
        naziv,
        id,
        cena,
      })
    );
  };
  const decrementCartItem = () => {
    dispatch(cartAction.removeToCart(id));
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
