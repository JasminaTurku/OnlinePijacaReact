import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardItems from "./components/cartItems/CardItems";
import { Fragment } from "react";
import Card from "./components/counterProduct/CounterProduct";
import Products from "./components/products/Products";
import Header from "../../components/header/Header";
import FooterComponents from "../../components/footer/Footer";
import { BuyBtn, BuyDiv, CardDiv, H3, TotalPriceDiv } from "./styles";

function Leyout() {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <>
      <CardDiv>
        <Header />
        <Products />
        <Card />
        {showCart && <CardItems />}
        <TotalPriceDiv>
          <H3>Ukupna suma za naplatu: ${total}</H3>
          <BuyDiv>
            <BuyBtn>Kupi</BuyBtn>
          </BuyDiv>
        </TotalPriceDiv>
        <FooterComponents />
      </CardDiv>
    </>
  );
}

export default Leyout;
