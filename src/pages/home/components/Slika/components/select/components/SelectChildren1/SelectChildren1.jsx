import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useEffect } from "react";
import { SelectChildrenDiv } from "./styles";
import { useDispatch } from "react-redux";
import { setPijaca } from "../../../../../../../../redux/pijaca/slice";

function SelectChildren1(props) {
  const dispetch = useDispatch();
  const [manuItems, setmanuItems] = useState([]);
  const [selectedMarket, setSelectedMarket] = useState(props.market);

  const handleChange = (event) => {
    const newSelectedMarket = event.target.value;

    const element = props.allMarket.find((el) => el.id == newSelectedMarket);
    dispetch(setPijaca(element));
    const jsonArray = JSON.stringify(element);
    localStorage.setItem("savedArrayKey", jsonArray);

    if (element) {
      props.setElelemnt(element);
    }
    setSelectedMarket(newSelectedMarket);
  };

  useEffect(() => {
    setmanuItems(
      props.allMarket.map((p, index) => (
        <MenuItem key={`market_${index}`} value={p.id}>
          {p.naziv}
        </MenuItem>
      ))
    );
    setSelectedMarket(props.market);
    props.setElelemnt(props.allMarket[0]);
  }, [props.allMarket, props.setElelemnt, props.market]);

  return (
    <SelectChildrenDiv>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="k">{props.text}</InputLabel>
          <Select value={selectedMarket} label="market" onChange={handleChange}>
            {manuItems}
          </Select>
        </FormControl>
      </Box>
    </SelectChildrenDiv>
  );
}

export default SelectChildren1;
