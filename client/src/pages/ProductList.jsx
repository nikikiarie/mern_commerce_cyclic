import React from "react";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";

const ProductList = () => {
  const { cat } = useParams();
console.log(cat)
  return (
    <div>
      <NavBar />
      <Announcement />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>

          <Select>
            <Option disabled selected>
              {" "}
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (asc)</Option>
            <Option>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat ={cat}/>
      <Newsletter />
      <Footer />
    </div>
  );
};

const Title = styled.h1`
  font-size: 30px;
  font-weight: 800;
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  margin: 20px;
  align-items: center;
`;

const FilterText = styled.div`
  margin-right: 20px;
  font-size: 20px;
  font-weight: 600;
`;

const Select = styled.select`
  margin-right: 20px;
  padding: 5px;
`;

const Option = styled.option``;

export default ProductList;
