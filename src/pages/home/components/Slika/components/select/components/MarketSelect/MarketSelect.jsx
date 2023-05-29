import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChildrenDiv } from "./styles";

function MarketSelect({ allMarkets, market, setMarket }) {
  const handleChange = (event) => {
    setMarket(event.target.value);
  };

  return (
    <SelectChildrenDiv>
      <Box sx={{ minWidth: 150 }}>
        <FormControl fullWidth>
          <InputLabel id="k">Izaberi pijacu</InputLabel>
          <Select
            value={market ? market : ""}
            label="Izaberi pijacu"
            onChange={handleChange}
          >
            {allMarkets.map((market, index) => (
              <MenuItem key={`market_${index}`} value={market}>
                {market.naziv}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </SelectChildrenDiv>
  );
}

export default MarketSelect;
