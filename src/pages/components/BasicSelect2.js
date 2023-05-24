import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import style from "../select/SelectPerent.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setArray } from "../../redux/product/slice";
import { selectArray } from "../../redux/product/slice";

function BasicSelect2(props) {
  const [tip, setTip] = useState("");
  const nizTipoviProizvoda = props.TipProizvoda;
  const element = props.el;
  const [pronadjeniTip, setPronadjeniTip] = useState("");
  const [proizodi, setProizvodi] = useState([]);
  const dispetch = useDispatch();
  const niz = useSelector(selectArray);
  console.log(niz);

  const handleChange = (event) => {
    const selectedTip = event.target.value;
    setTip(selectedTip);
    const nadjen = nizTipoviProizvoda.find((t) => t.id == selectedTip);
    dispetch(setArray(proizodi));

    if (nadjen) {
      setPronadjeniTip(nadjen);
    }
  };

  console.log(niz);

  useEffect(() => {
    const jsonArray = JSON.stringify(niz);
    localStorage.setItem("savedArrayKey", jsonArray);
  }, [niz]);

  useEffect(() => {
    fetch(
      "https://localhost:5001/Proizvod/VratiProizvodePijace?idPijace=" +
        element.id +
        "&idTipaProizvoda=" +
        pronadjeniTip.id
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
  }, [pronadjeniTip.id]);

  console.log(proizodi);

  const tipoviProizvodaElements = nizTipoviProizvoda.map((t, index) => (
    <MenuItem key={`tip_${index}`} value={t.id}>
      {t.naziv}
    </MenuItem>
  ));

  return (
    <div className={style.basicSelect2Container}>
      <FormControl fullWidth>
        <InputLabel id="m"> {props.text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="a"
          value={tip}
          label="Age"
          onChange={handleChange}
        >
          {tipoviProizvodaElements}
        </Select>
      </FormControl>
    </div>
  );
}

export default BasicSelect2;
