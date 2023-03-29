import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
  <div>
    <h1 style={{padding:'20px 0px',textAlign:'center',color:'#000000'}}>Categories</h1>
    <Container>
      
      {categories.map((item) => (
        <CategoryItem key={item.id} item={item}/>
      ))}
    </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction:column;
 
  align-items: center;
  justify-content: space-between;

  
  @media only screen and (min-width: 768px) {
  flex-direction:row;
    
  }
`;

export default Category;
