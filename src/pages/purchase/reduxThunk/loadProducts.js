import { setProducts } from "../redux/slice";

export const loadProducts =
  (market, productType) => async (dispatch, getState) => {
    const url =
      "https://localhost:5001/Proizvod/VratiProizvodePijace?idPijace=" +
      market.id +
      "&idTipaProizvoda=" +
      productType.id;

    fetch(url)
      .then(async (res) => {
        if (res.ok) {
          let products = await res.json();
          dispatch(setProducts(products));
        } else {
          const text = await res.text();
          alert(text);
        }
      })
      .catch((err) => alert(err));
  };
