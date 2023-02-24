import React from "react";
import styled from "styled-components";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/userSlice";

const NavBar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch()
  console.log(user);
  return (
    <Container>
      <Wrapper>
        <Left>
          <LanguageOutlinedIcon />
          <InputContainer>
            <Input placeholder="search" />
            <SearchOutlinedIcon />
          </InputContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Title>NICK.</Title>
          </Link>
        </Center>
        <Right>
          {user ? (
            <>
            <h4>{user.username}</h4>
            <button onClick={()=>dispatch(logOut())}>Log Out</button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>Regiter</MenuItem>
              </Link>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                <MenuItem>LogIn</MenuItem>
              </Link>
            </>
          )}
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 56px;
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Left = styled.div`
  display: flex;
  flex: 1;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  border: 1px solid black;
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0px 5px;
  font-size: 14px;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 20px;
  color: black;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  margin: 0px 20px;
  cursor: pointer;
`;

export default NavBar;
