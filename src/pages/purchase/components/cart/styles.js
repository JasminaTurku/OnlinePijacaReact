import styled from "styled-components";

export const Ul = styled.ul`
  list-style-type: none;
`;
export const Li = styled.li`
  padding: 10px;
`;
export const CardDiv = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  margin: 20px;
  height: 400px;
  padding: 10px;
  overflow: scroll;
  overflow-x: hidden;
`;
export const CounterDiv = styled.div`
  justify-content: center;
  display: flex;
`;

export const CartIconDiv = styled.div`
  border: 1px solid #0e0d0d;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
  text-align: center;
  background: white;
  :hover {
    background: rgb(180, 243, 109);
    color: black;
  }
`;

export const H3 = styled.h3`
  margin: 0;
`;
