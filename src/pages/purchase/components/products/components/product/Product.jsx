import { useDispatch } from "react-redux";
import { cartAction } from "../../../../redux/slice";
import { CardDiv, Button, Img } from "./styles";

function Product({ naziv, id, putanja, cena }) {
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
      <p>Cena: ${cena}</p>
      <Button onClick={addToCart}> Dodaj u korpu</Button>
    </CardDiv>
  );
}
export default Product;
