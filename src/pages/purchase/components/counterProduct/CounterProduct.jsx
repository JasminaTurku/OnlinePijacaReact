import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../../../redux/cart/slice";
import { CardDiv, CartIconDiv, H3 } from "./styles";

function CounterProduct() {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispetch = useDispatch();
  const showCart = () => {
    dispetch(cartAction.setShowCart());
  };
  return (
    <CardDiv>
      <CartIconDiv>
        <H3 onClick={showCart}>Pogledaj proizvode u korpi {quantity}</H3>
      </CartIconDiv>
    </CardDiv>
  );
}

export default CounterProduct;
