import styled from "styled-components";

export const CartIconDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  font-size: 20px;
  font-weight: bold;
  background-color: #ebebeb;
  color: #000000;
`;

export const Article = styled.article`
  display: flex;
  align-items: center;
`;
export const CartActionButton = styled.button`
  color: black;
  font-size: 30px;
  width: 50px;
  border: none;
  background: white;
  border-radius: 10px;
  margin-left: 15px;
  cursor: pointer;
  border: 1px solid black;

  :hover {
    background: rgb(180, 243, 109);
    color: black;
  }
`;

export const MinusAndPlusBtnDiv = styled.div`
  display: flex;
  padding: 10px;
  margin-right: 50px;
`;
