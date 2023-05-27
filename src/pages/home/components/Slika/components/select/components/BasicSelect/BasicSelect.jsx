import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { BasicSelectDiv } from "./styles";
import { useDispatch } from "react-redux";
import { setPijaca } from "../../../../../../../../redux/pijaca/slice";

function BasicSelect(props) {
  const dispetch = useDispatch();
  const [manuItems, setmanuItems] = useState([]);

  const handleChange = (event) => {
    const selectedMarket = event.target.value;

    const element = props.allMarket.find((el) => el.id == selectedMarket);
    dispetch(setPijaca(element));
    const jsonArray = JSON.stringify(element);
    localStorage.setItem("savedArrayKey", jsonArray);

    if (element) {
      props.setElelemnt(element);
    }
  };

  useEffect(() => {
    setmanuItems(
      props.allMarket.map((p, index) => (
        <MenuItem key={`market_${index}`} value={p.id}>
          {p.naziv}
        </MenuItem>
      ))
    );
    props.setElelemnt(props.allMarket[0]);
  }, [props.allMarket, props.setElelemnt]);

  return (
    <BasicSelectDiv>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="k">{props.text}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="b"
            value={props.market}
            label="market"
            onChange={handleChange}
          >
            {/* {allMarketElements()} */}
            {manuItems}
          </Select>
        </FormControl>
      </Box>
    </BasicSelectDiv>
  );
}

export default BasicSelect;
