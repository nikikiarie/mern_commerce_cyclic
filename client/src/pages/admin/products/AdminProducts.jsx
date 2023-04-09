import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";
import axios from 'axios'
import {
  Button,
  Container,
  Img,
  Name,
  ProductContainer,
} from "./products_styles";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
// import { publicRequest } from "../../../makeRequest";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsSuccess,
  getProuctsFailure,
  getProuctsStart} from '../../../redux/productSlice'
import styled from "styled-components";
import { deleteProduct} from '../../../redux/apiCalls'


const AdminProducts = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user?.user?.accessToken);
  const products = useSelector((state)=>state.products.products)
console.log(products);
  

  useEffect(() => {
    const fetchData = async (token) => {
      dispatch(getProuctsStart());
      console.log("fetchdata");
      try {
        const res = await axios.get("/api/products/", {
          headers: { token: `Bearer ${token}` },
        });
        console.log(res.data);
        setData(res.data);
        dispatch(getProductsSuccess(res.data));
      } catch (err) {
        dispatch(getProuctsFailure());
      }
    };
    fetchData();
  }, [dispatch]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ProductContainer>
            <Img src={params.row?.img} />
            <Name>{params.row?.title}</Name>
          </ProductContainer>
        );
      },
    },
    {
      field: "inStock",
      headerName: "In Stock",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/product/${params.row._id}`}>
              <Button>Edit</Button>{" "}
            </Link>
            <DeleteOutline
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  const handleDelete = (id) => {
    deleteProduct(dispatch,id,token)
  };

  return (
    <Container>
      <Link to="/admin/newProduct">
      <ButtonUp > Create New Product</ButtonUp>
      </Link>
      <DataGrid
        rows={products}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        
        getRowId={(row) => row?._id}
      />
    </Container>
  );
};

export default AdminProducts;

const ButtonUp = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  `