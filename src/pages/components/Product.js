import Rect, { useEffect } from "react";
import style from "./Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/cart/slice";

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
    <div className={style.card}>
      <img src={putanja} />
      <h2>{naziv}</h2>
      <p>${cena}</p>
      <button onClick={addToCart}> Add to cart</button>
    </div>
  );
}
export default Product;
