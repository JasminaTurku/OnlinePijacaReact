import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";

import { SelectChildrenDiv } from "./styles";

function SelectChildren2(props) {
  const [pronadjeniNaziviTipa, setpronadjeniNaziviTipa] = useState("");

  const [tip, setTip] = useState("");
  const [proizvodi, setProizvodi] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleChange = (event) => {
    setInputValue(event.target.value);
    setTip(pronadjeniNaziviTipa.find((a) => a.id === setInputValue));
    console.log(tip);
    if (tip.key !== "" && tip.key !== undefined) {
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

      const jsonArray = JSON.stringify(proizvodi);
      localStorage.setItem("proizvodi", jsonArray);
    }
  };

  return (
    <SelectChildrenDiv>
      <FormControl fullWidth>
        <InputLabel id="m"> {props.text}</InputLabel>
        <Select id="a" value={inputValue} label="Age" onChange={handleChange}>
          {pronadjeniNaziviTipa}
        </Select>
      </FormControl>
    </SelectChildrenDiv>
  );
}

export default SelectChildren2;
