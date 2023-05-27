import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectArray,
  setArray,
} from "../../../../../../../../redux/product/slice";
import { BasicSelect2Div } from "./styles";

function BasicSelect2(props) {
  const [pronadjeniNaziviTipa, setpronadjeniNaziviTipa] = useState("");
  const oznacenaPijaca = useSelector((state) => state.nizMarket.pijace);
  const tipoviProizvoda = props.TipProizvoda;
  const [tip, setTip] = useState("");
  const [proizvodi, setProizvodi] = useState([]);

  const data = localStorage.getItem("savedArrayKey");
  const parsedData = JSON.parse(data);
  console.log(parsedData.id);
  useEffect(() => {
    setpronadjeniNaziviTipa(
      parsedData.tipoviProizvoda.map((m) => (
        <MenuItem key={m.id}>{m.naziv}</MenuItem>
      ))
    );
  }, []);
  console.log(setpronadjeniNaziviTipa);
  // useEffect(() => {
  //   if (oznacenaPijaca !== "" && oznacenaPijaca.tipoviProizvoda !== []) {
  //     setpronadjeniNaziviTipa(
  //       oznacenaPijaca.tipoviProizvoda.map((e) => e.naziv)
  //     );
  //   } else alert("Odaberite pijacu");
  // }, [oznacenaPijaca]);

  // useEffect(() => {
  //   setpronadjeniNaziviTipa(parsedData.tipoviProizvoda);
  // }, []);
  // useEffect(() => {
  //   setpronadjeniNaziviTipa(
  //     parsedData.tipoviProizvoda.map((p, index) => (
  //       <MenuItem key={`market_${index}`} value={p.id}>
  //         {p.naziv}
  //       </MenuItem>
  //     ))
  //   );
  // }, []);
  const handleChange = (event) => {
    const selectedMarket = event.target.value;

    const el = pronadjeniNaziviTipa.find((a) => a.id == selectedMarket);
    console.log(el);
    if (el) {
      setTip(el);
    }

    fetch(
      "https://localhost:5001/Proizvod/VratiProizvodePijace?idPijace=" +
        parsedData.id +
        "&idTipaProizvoda=" +
        tip.key
    )
      .then(async (res) => {
        if (res.ok) {
          let p = await res.json();
          setProizvodi(p);
        } else {
          const text = await res.text();
          alert(text);
        }
      })
      .catch((err) => alert(err));
  };
  const jsonArray = JSON.stringify(proizvodi);
  localStorage.setItem("proizvodi", jsonArray);

  // }
  // const obj = {};
  // for (let i = 0; i < pronadjeniNaziviTipa.length; i++) {
  //   const value = pronadjeniNaziviTipa[i + 1];
  //   obj[i] = value;
  // }

  // console.log(obj);
  return (
    <BasicSelect2Div>
      <FormControl fullWidth>
        <InputLabel id="m"> {props.text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="a"
          value={pronadjeniNaziviTipa}
          label="Age"
          onChange={handleChange}
        >
          {pronadjeniNaziviTipa}
        </Select>
      </FormControl>
    </BasicSelect2Div>
  );
}

export default BasicSelect2;
