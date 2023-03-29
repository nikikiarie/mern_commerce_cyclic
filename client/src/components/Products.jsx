import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProductItem from "./ProductItem";
import axios from "axios";
import { publicRequest } from "../makeRequest";
import { popularProducts } from "../data";

const Products = ({ cat }) => {
  const [pa, setPa] = useState([]);
  console.log(cat);
  console.log(pa);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          cat ? `/api/products?category=${cat}` : "/api/products"
        );
        setPa(res.data);
        console.log(res.data);
      } catch (err) {}
    };
    fetchData();
  }, [cat]);
  return (
    <div>
    <h1 style={{padding:'20px 0px',textAlign:'center',color:'#000000'}}>Products</h1>

    <Container>
      {pa.map((item) => (
        <ProductItem key={item._id} item={item} />
      ))}
    </Container>
    </div>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;

export default Products;
