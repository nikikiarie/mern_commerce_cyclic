import styled from "styled-components";

export const Container = styled.div`
  padding: 30px;
  flex: 4;
`;

export const Top = styled.div`
  display: flex;
  margin-bottom: 30px;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1``;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
`;

export const Middle = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
`;
export const Sales = styled.div`
  flex: 1;
  border-radius: 10px;
`;
export const OneProduct = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 10px;
  flex: 1;
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
`;

export const ProductName = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export const Name = styled.div``;
export const ProductDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 5px;
`;
export const Detail = styled.div`
  font-weight: 600;
`;

export const Info = styled.div``;

export const Bottom = styled.div`
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);

  padding: 20px;
  border-radius: 10px;
`;

export const Form = styled.form``;
export const FormDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FormLeft = styled.div`
display: flex;
flex-direction:column`;


export const FormTitle = styled.h3`
margin-bottom: 10px;
`;


export const Input = styled.input`
border: none;
padding: 5px 0px;
border-bottom: 1px solid gray;
margin-bottom: 20px;
outline: none;
`;


export const Label = styled.label`
margin-bottom:5px;`;


export const Select = styled.select`
margin-bottom:20px;
border-radius:5px;
padding:3px 0px;`;


export const Option = styled.option``;



export const FormRight = styled.div`
 display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const RightTop = styled.div`
  display: flex;
  align-items: center;
  
  
`;

export const FormImg = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
`;

export const LabelForm = styled.label``;

export const FileInput = styled.input`
display: none;


`;

export const UpdateButton = styled.button`
background-color:darkblue;
color:white;
font-size: 16px;
font-weight: 500;
border:none;
padding:5px 0px;
border-radius: 5px;


`;