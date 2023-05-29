import React from "react";
import { BuyBtn, BuyDiv, H3, TotalPriceDiv } from "./styles";
import { useSelector } from "react-redux";

const TotalPrice = () => {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  return (
    <TotalPriceDiv>
      <H3>Ukupna suma za naplatu: ${total}</H3>
      <BuyDiv>
        <BuyBtn>Kupi</BuyBtn>
      </BuyDiv>
    </TotalPriceDiv>
  );
};

export default TotalPrice;
