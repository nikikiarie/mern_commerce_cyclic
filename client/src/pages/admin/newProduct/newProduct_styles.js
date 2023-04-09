import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  flex: 4;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ImageInput = styled.input`
  
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: gray;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  width: 300px;
  padding: 5px 0px 5px 5px;

`;

export const Select = styled.select`
  width: 310px;
  padding: 5px 0px 5px 5px;

`;

export const Option = styled.option``;

export const Button = styled.button`
width: 310px;
margin-top: 10px;
padding: 10px 0px;
border:none;
color: white;
background-color: darkblue;

:disabled{
  color:red
}

`;
