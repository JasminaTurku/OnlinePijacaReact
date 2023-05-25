import Rect, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../../../../../redux/cart/slice";
import { CardDiv, Button, Img } from "./styles";

function Product({ naziv, id, putanja, cena }) {
  const cartItems = useSelector((state) => state.cart.itemsList);
  console.log(cartItems);
  const dispetch = useDispatch();

  const addToCart = () => {
    dispetch(
      cartAction.addToCart({
        naziv,
        id,
        cena,
      })
    );
  };
  return (
    <CardDiv>
      <Img src={putanja} />
      <h2>{naziv}</h2>
      <p>${cena}</p>
      <Button onClick={addToCart}> Add to cart</Button>
    </CardDiv>
  );
}
export default Product;
