import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
        <Img src={item.img} />
        <InfoContainer>
          <Title>{item.title}</Title>
          <Button>SHOP NOW</Button>
        </InfoContainer>
      </Link>
    </Container>
  );
};

const Container = styled.div`
  margin: 3px;
  flex: 1;
  height: 70vh;
  background-color: yellow;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 15px;
`;
const Button = styled.button`
  padding: 10px;
  color: gray;
  border: none;
  font-weight: 500;
  cursor: pointer;
  background-color: white;
`;

export default CategoryItem;
