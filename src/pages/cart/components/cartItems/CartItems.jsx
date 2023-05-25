import React from "react";
import CartItem from "./components/CartItem";
import { useSelector } from "react-redux";
import { Li, CardDiv, Ul } from "./styles";

function CartItems() {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <CardDiv>
      <h2>Your Cart</h2>
      <Ul>
        {cartItems.map((item) => (
          <Li key={item.id}>
            <CartItem
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

export default CartItems;
