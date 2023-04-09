import styled from "styled-components";

export const Container = styled.div`
  flex: 4;
  padding: 30px;
`;

export const Top = styled.div`
  display: flex;
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

export const Bottom = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

export const UserDetails = styled.div`
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  flex: 1;
  border-radius: 10px;
  padding: 20px;
`;

export const TopDetails = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const Job = styled.span`
  font-size: 16px;
`;

export const Acc = styled.h2`
  font-size: 14px;
  font-weight: 600;
  color: gray;
  margin: 20px 0px;
`;

export const Detail = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 30px;
`;

export const Text = styled.h2`
  font-size: 16px;
  font-weight: 500;
  
`;

export const EditUserDetails = styled.div`
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  flex: 2;
  border-radius: 10px;
  padding: 20px;
`;

export const Edit = styled.h2`
margin-bottom:40px;`;

export const Form = styled.form``;

export const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FormLeft = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Label = styled.label``;

export const Input = styled.input`
padding:5px 0px;
border:none;
outline: none;
border-bottom: 1px solid gray;
`;

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


export const FileInput = styled.input`



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