import React, { useEffect, useState } from "react";
import axios from  'axios';
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import NavBar from "../components/NavBar";
// import { publicRequest } from "../makeRequest";

const Verify = () => {
  const params = useParams();
  console.log(params);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(
          `/api/users/${params.id}/verify/${params.token}`
        );
        setData(res.data);
      } catch {}
    };
    fetchProduct();
  }, [params.id, params.token]);
  return (
    <>
      <Announcement />
      <NavBar />
      <div
        style={{
          display: "flex",
          flexDirection:"column",
          alignItems: "center",
          justifyContent: "center",
          height: 200,
        }}
      >
        
        {data && <h4 style={{ marginBottom: 20,fontWeight:400 }}> Welcome {data.username}</h4>}
       
        <Link to={"/login"}>
          <Button>LOG IN</Button>
        </Link>
      </div>
    </>
  );
};


const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  padding: 5px 10px;
  color: black;
  border: 2px solid teal;
  width: 100px;


  :disabled{
    background-color: teal;
    color:white;
  }
`;
export default Verify;

