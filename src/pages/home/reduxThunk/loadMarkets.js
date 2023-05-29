export const loadMarkets = (setAllMarket) => async (dispatch, getState) => {
  const url = "https://localhost:5001/Pijaca/VratiPijaceSaTipovimaProizvoda";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      setAllMarket(data);
    });
};
