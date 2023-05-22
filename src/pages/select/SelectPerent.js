import React, { useState, useEffect } from "react";
import BasicSelect from "../components/BasicSelect";
import BasicSelect2 from "../components/BasicSelect2";
import style from "./SelectPerent.module.css";

function Select(props) {
  const [el, setElelemnt] = useState({ id: 1 });

  const [TipProizvoda, setTipoviProizvoda] = useState([]);

  useEffect(() => {
    fetch(
      "https://localhost:5001/TipProizvod/VratiTipoveProizvoda/idPijace?idPijace=" +
        el.id
    )
      .then(async (res) => {
        if (res.ok) {
          let tipovi = await res.json();
          setTipoviProizvoda(tipovi);
        } else {
          const text = await res.text();
          alert(text);
        }
      })
      .catch((err) => alert(err));
  }, [el.id]);

  console.log(TipProizvoda);

  return (
    <div className={style.selectContainer}>
      <BasicSelect text="Izaberi pijacu" setElelemnt={setElelemnt} />
      <BasicSelect2
        TipProizvoda={TipProizvoda}
        el={el}
        text="Tipovi proizvoda"
      />
    </div>
  );
}

export default Select;
