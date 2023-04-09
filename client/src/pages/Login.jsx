import React, {  useState } from "react";
import styled from "styled-components";
import { login } from "../redux/apiCalls";
import {useDispatch,useSelector} from 'react-redux'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoading } from "../redux/userSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state)=>state.user.isLoading)
  const error = useSelector((state)=>state.user.error)


  
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const location = useLocation()
  console.log(location)
  const pathname = location?.state?.pathname
 
  

  const handleClick = (e) => {
    
    console.log('dsd')
    e.preventDefault();
    dispatch(setLoading())
    login(dispatch,{username,password},navigate,pathname)
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
          <Button onClick={(e)=>handleClick(e)} >LOGIN</Button>
        {error && <span style={{color:"teal",fontWeight:500,marginBottom:10,fontSize:14}}>{error}</span>}

          <LinkText>DO NOT YOU REMEMBER THE PASSWORD?</LinkText>
          <Link to='/register' style={{textDecoration:"none",cursor:"pointer",color:"inherit"}}>
          <LinkText account >CREATE A NEW ACCOUNT</LinkText>
          </Link>
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
  width: 50%;
  background-color: white;
  padding: 20px;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    width: 35%;
  }
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

  :disabled{
  color: white;
  background-color: teal;
}
`;
const LinkText = styled.div`
  font-size: ${(props)=>props.account ? "14px" : "12px"};
  margin-bottom: 5px;
  text-decoration: underline;
  margin-bottom: ${(props)=>props.account ? "" : "10px"};

`;

export default Login;
