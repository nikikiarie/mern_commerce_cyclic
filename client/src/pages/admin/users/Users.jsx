import React, { useEffect, useState } from "react";
import axios from  'axios';
import { Button, Container, Img, Name, UserContainer } from "./users_styles";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
// import { publicRequest } from "../../../makeRequest";
import { useSelector } from "react-redux";
import styled from "styled-components";


const Users = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user?.user?.accessToken);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("/api/users", {
          headers: { token: `Bearer ${token}` },
        }); 
        console.log(res.data);
   setData(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    fetchUsers()
  }, [token]);

  const columns = [
    { field: "_id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <UserContainer>
            <Img src={params.row.img} />
            <Name>{params.row.username}</Name>
          </UserContainer>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "username",
      headerName: "username",

      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/admin/user/${params.row._id}`}>
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
    setData(data.filter((item) => item._id !== id));
  };

  return (
    <Container>
      <Link to="/admin/newUser">
      <ButtonUp > Create New User</ButtonUp>
      </Link>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        getRowId={(row)=>row._id}
      />
    </Container>
  );
};

export default Users;


 const ButtonUp = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: teal;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
  cursor: pointer;
`;