import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Context } from "../../Context";
import { useContext, useState, useEffect } from "react";
import style from "../select/SelectPerent.module.css";

function BasicSelect(props) {
  const [market, setMarket] = useState("");
  const { allMarket } = useContext(Context);

  const handleChange = (event) => {
    const selectedMarket = event.target.value;
    setMarket(selectedMarket);
    const element = allMarket.find((el) => el.id == selectedMarket);

    if (element) {
      props.setElelemnt(element);
    }
  };

  const allMarketElements = allMarket.map((p, index) => (
    <MenuItem key={`market_${index}`} value={p.id}>
      {p.naziv}
    </MenuItem>
  ));
  return (
    <div className={style.basicSelectContainer}>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="k">{props.text}</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="b"
            value={market}
            label="market"
            onChange={handleChange}
          >
            {allMarketElements}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default BasicSelect;
