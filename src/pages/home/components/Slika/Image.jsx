import React from "react";
import { ImageDiv } from "./styles";
import SelectParent from "./components/select/SelectParent";

function Image({ className }) {
  return (
    <ImageDiv>
      <SelectParent />
    </ImageDiv>
  );
}
export default Image;
