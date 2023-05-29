import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { SelectChildrenDiv } from "./styles";
import { useNavigate } from "react-router";

function ProductTypeSelect({ market, productType, setProductType }) {
  const handleChange = (event) => {
    const tipProizvoda = event.target.value;
    setProductType(tipProizvoda);
  };

  return (
    <SelectChildrenDiv>
      <FormControl fullWidth>
        <InputLabel id="m">Tipovi proizvoda</InputLabel>
        <Select
          value={productType ? productType : ""}
          label="Tipovi proizvoda"
          onChange={handleChange}
        >
          {market &&
            market.tipoviProizvoda.map((tipProizvoda) => (
              <MenuItem key={tipProizvoda.id} value={tipProizvoda}>
                {tipProizvoda.naziv}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </SelectChildrenDiv>
  );
}

export default ProductTypeSelect;
