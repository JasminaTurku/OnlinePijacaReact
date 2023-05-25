import styled from "styled-components";

export const LoginDiv = styled.div`
  width: 450px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(169, 189, 180);
  align-items: center;
  margin-top: 2%;
  margin-bottom: 10px;
  border-radius: 10px;
  flex: 1;
`;

export const H1 = styled.h1`
  color: white;
  font-size: 50px;
`;

export const Label = styled.label`
  color: white;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Input = styled.input`
  width: 80%;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
`;
export const LoginBtn = styled.button`
  border: none;
  width: 89%;
  padding: 10px;

  :hover {
    background: rgb(180, 243, 109);
    color: black;
  }
`;
