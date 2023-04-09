import { Visibility } from "@mui/icons-material";
import React from "react";
import axios from  'axios';
import {
  Button,
  Container,
  Img,
  Job,
  Name,
  Text,
  Title,
  User,
  UserDetails,
  Users,
} from "./members_styles";

import { useEffect } from "react";
import { useSelector } from "react-redux";

// import { publicRequest } from "../../../makeRequest";
import { useState } from "react";


const Members = () => {
  const [data, setData] = useState([]);
  const token = useSelector((state) => state.user?.user?.accessToken);

  const fetchData = async (token) => {
    try {
      const res = await axios.get("/api/users?new=true", {
        headers: { token: `Bearer ${token}` },
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData(token);
  }, [token]);
  return (
    <Container>
      <Title>New Join Members</Title>
      <Users>
        {data.map((item) => {
          return (
            <User key={item._id}>
              <Img src={item.img} />
              <UserDetails>
                <Name>{item.firstname}</Name>
                <Job>Software Engineer</Job>
              </UserDetails>
              <Button>
                <Visibility />
                <Text>Dislay</Text>
              </Button>
            </User>
          );
        })}
      </Users>
    </Container>
  );
};

export default Members;
