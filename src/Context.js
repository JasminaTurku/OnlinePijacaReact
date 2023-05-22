import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allMarket, setAllMarket] = useState([]);

  const url = "https://localhost:5001/Pijaca/VratiPijaceSaTipovimaProizvoda";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMarket(data));
  }, []);

  return <Context.Provider value={{ allMarket }}>{children}</Context.Provider>;
}
export { ContextProvider, Context };
