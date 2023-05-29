import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Header from "../../components/header/Header";
import FooterComponents from "../../components/footer/Footer";
import { CardDiv, CommonDiv } from "./styles";
import { useLocation } from "react-router";
import { loadProducts } from "./reduxThunk/loadProducts";
import Search from "./components/search/search";

function Purchases() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const { state } = location;
    const { market, productType } = state;
    dispatch(loadProducts(market, productType));
  }, [dispatch, location]);

  return (
    <>
      <CardDiv>
        <Header />
        <CommonDiv>
          <Search />
          <Products />
        </CommonDiv>
        <Cart />
        <FooterComponents />
      </CardDiv>
    </>
  );
}

export default Purchases;
