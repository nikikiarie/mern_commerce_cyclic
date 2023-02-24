import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Category;
