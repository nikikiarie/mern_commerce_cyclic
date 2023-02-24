import React from "react";
import styled from "styled-components";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

const Newsletter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Subtitle>Get timely updates from your favourites products</Subtitle>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <SendOutlinedIcon />
        </Button>
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 60vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #fcf5f5;
`;

const Title = styled.h1`
  font-size: 70px;
`;
const Subtitle = styled.h1`
  font-size: 24px;
  margin: 20px 0px;
  font-weight: 300;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
`;
const Input = styled.input`
  flex:8;
border: none;
outline: none;
padding-left: 20px;
`;

const Button = styled.h1`
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: teal;
  color: white;
`;


export default Newsletter;
