import React, { useEffect, useState } from "react";
import CardItem from "./components/cardItem/CardItem";
import { useSelector } from "react-redux";
import { Li, CardDiv, Ul, CounterDiv, CartIconDiv, H3 } from "./styles";
import TotalPrice from "./components/totalPrice/totalPrice";

function Cart() {
  const cartItems = useSelector((state) => state.cart.itemsList);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    let totalItems = 0;

    cartItems.forEach((cartItem) => {
      totalItems += cartItem.quantity;
    });

    setTotalQuantity(totalItems);
  }, [cartItems]);

  const showCartButton = (
    <CounterDiv>
      <CartIconDiv>
        <H3
          onClick={() => {
            setShowCart((prev) => !prev);
          }}
        >
          Pogledaj proizvode u korpi {totalQuantity}
        </H3>
      </CartIconDiv>
    </CounterDiv>
  );

  const showCartItems = () => {
    if (showCart) {
      return (
        <CardDiv>
          <h2>Your products</h2>
          <Ul>
            {cartItems.map((item) => (
              <Li key={item.id}>
                <CardItem
                  id={item.id}
                  totalQuantity={item.totalQuantity}
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

    return null;
  };

  return (
    <>
      {showCartButton}
      {showCartItems()}
      <TotalPrice />
    </>
  );
}

export default Cart;
