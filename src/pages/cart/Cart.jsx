import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItems from "./components/cartItems/CartItems";
import { Fragment } from "react";
import Cart from "./components/cart/Cart";
import Search from "./components/search/Search";
import Header from "../../components/Header";
import FooterComponents from "../../components/FooterComponents";
import { CardDiv, TotalPriceDiv } from "./styles";

function Leyout() {
  let total = 0;
  const itemsList = useSelector((state) => state.cart.itemsList);
  itemsList.forEach((item) => {
    total += item.totalPrice;
  });

  const showCart = useSelector((state) => state.cart.showCart);
  return (
    <Fragment>
      <CardDiv>
        <Header />
        <Search />
        <Cart />
        {showCart && <CartItems />}
        <TotalPriceDiv>
          <h3>Total: ${total}</h3>
        </TotalPriceDiv>
      </CardDiv>
      <FooterComponents />
    </Fragment>
  );
}

export default Leyout;
