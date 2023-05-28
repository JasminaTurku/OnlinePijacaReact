import React, { useState, useEffect } from "react";
import SelectChildren1 from "./components/SelectChildren1/SelectChildren1";
import SelectChildren2 from "./components/SelectChildren2/SelectChildren2";
import { SelectDiv } from "./styles";

function SelectParent(props) {
  const [market, setMarket] = useState("");
  const [allMarket, setAllMarket] = useState([]);
  const [el, setElelemnt] = useState([]);
  const [TipProizvoda, setTipoviProizvoda] = useState([]);

  const url = "https://localhost:5001/Pijaca/VratiPijaceSaTipovimaProizvoda";

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllMarket(data));
  }, []);

  useEffect(() => {
    setTipoviProizvoda(allMarket.map((p) => p.tipoviProizvoda));
  }, [allMarket]);

  return (
    <SelectDiv>
      <SelectChildren1
        text="izaberi pijacu"
        allMarket={allMarket}
        setMarket={setMarket}
        setElelemnt={setElelemnt}
      />
      <SelectChildren2
        TipProizvoda={TipProizvoda}
        el={el}
        allMarket={allMarket}
        text="Tipovi proizvoda"
      />
    </SelectDiv>
  );
}

export default SelectParent;
