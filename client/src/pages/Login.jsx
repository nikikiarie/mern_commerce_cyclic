import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {useDispatch,useSelector} from 'react-redux'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch,{username,password},navigate)
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick}>LOGIN</Button>
          <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(63, 147, 153, 0.322),
      rgba(255, 255, 255, 0.2)
    );
`;
const Wrapper = styled.div`
  width: 25%;
  background-color: white;
  padding: 20px;
`;

const Title = styled.div`
  font-size: 25px;
  margin-bottom: 10px;
  font-weight: 500;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  padding: 10px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  border: 1px solid teal;
  width: 100%;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  margin-bottom: 10px;
`;
const Link = styled.div`
  font-size: 12px;
  margin-bottom: 5px;
  text-decoration: underline;
`;

export default Login;
