import React, { useState, useEffect } from "react";
import BasicSelect from "./components/BasicSelect/BasicSelect";
import BasicSelect2 from "./components/BasicSelect2/BasicSelect2";
import { SelectDiv } from "./styles";

function SelectA(props) {
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
      {/* <BasicSelect text="Izaberi pijacu" setElelemnt={setElelemnt} /> */}
      <BasicSelect
        text="izaberi pijacu"
        allMarket={allMarket}
        setMarket={setMarket}
        setElelemnt={setElelemnt}
      />
      <BasicSelect2
        TipProizvoda={TipProizvoda}
        el={el}
        allMarket={allMarket}
        text="Tipovi proizvoda"
      />
    </SelectDiv>
  );
}

export default SelectA;
