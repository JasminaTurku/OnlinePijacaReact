import styled from "styled-components";

export const CardDiv = styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 10px #ccc;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  margin-left: 50px;
  .img {
    width: 90%;
    height: 40%;
  }
  :hover {
    box-shadow: 10px 10px 20px #ccc;
  }
`;

export const Button = styled.button`
  margin-top: 25px;
  margin-bottom: auto;
  padding: 10px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: rgba(21, 26, 42, 0.787);
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 120px;
  height: 120px;
`;
