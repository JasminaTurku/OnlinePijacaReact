import styled from "styled-components";
import slika from "../../../../assets/homeImage/4.jpg";

export const SlikaDiv = styled.div`
  display: flex;
  flex: 1;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: 1400px 500px;
  background-image: url(${slika});
  justify-content: center;
  align-items: end;
`;

// .select {
//   display: flex;
//   justify-content: center;
//   flex: 1;
//   align-items: end;
// }
// .MuiInputLabel-outlined-css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root {
//   color: azure !important;
// }
