import React from "react";
import CardItem from "./components/CardItem";
import { useSelector } from "react-redux";
import { Li, CardDiv, Ul } from "./styles";

function CardItems() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <CardDiv>
      <h2>Your products</h2>
      <Ul>
        {cartItems.map((item) => (
          <Li key={item.id}>
            <CardItem
              id={item.id}
              quantity={item.quantity}
              cena={item.cena}
              total={item.totalPrice}
              naziv={item.naziv}
            />
          </Li>
        ))}
      </Ul>
    </CardDiv>
  );
}

export default CardItems;
