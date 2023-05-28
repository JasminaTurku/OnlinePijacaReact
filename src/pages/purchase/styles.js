import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: #beff95;
`;
export const TotalPriceDiv = styled.div`
  font-size: 20px;
`;
export const BuyBtn = styled.button`
  width: 60px;
  height: 30px;
  cursor: pointer;
  border-radius: 5px;
  font-weight: bold;

  :hover {
    background: rgb(180, 243, 109);
  }
`;
export const BuyDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-bottom: 5px;
`;

export const H3 = styled.h3`
  display: flex;
  justify-content: center;
  font-weight: 20;
`;
