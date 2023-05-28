import styled from "styled-components";
import slika from "../../../../assets/homeImage/4.jpg";

export const ImageDiv = styled.div`
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
