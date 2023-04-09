import React, { useEffect, useState } from "react";
import axios from  'axios';
import {
  Acc,
  Bottom,
  Button,
  Container,
  Detail,
  Edit,
  EditUserDetails,
  FileInput,
  Form,
  FormContainer,
  FormImg,
  FormLeft,
  FormRight,
  Img,
  Info,
  Input,
  InputContainer,
  Job,
  Label,
  Name,
  RightTop,
  Text,
  Title,
  Top,
  TopDetails,
  UpdateButton,
  UserDetails,
} from "./user_styles";

import {
  AccountCircleOutlined,
  DateRangeOutlined,
  EmailOutlined,
  LocalPhoneOutlined,
  LocationOnOutlined,
  Publish,
} from "@mui/icons-material";
import { Link, useParams } from "react-router-dom";
import {  useSelector } from "react-redux";
// import { publicRequest } from "../../../makeRequest";
import { storage } from "../../../firebaseConfig";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { editUser } from "../../../redux/apiCalls";

const User = () => {
  const [isAdmin, setIsAdmin] = useState({});
  console.log(isAdmin);
  const [all, setAll] = useState({});
  const [image, setImage] = useState(null);
  console.log(image);

  console.log(all);
// const dispatch = useDispatch()
  const { id } = useParams();
  const [data, setData] = useState({});
  console.log(data);

  const token = useSelector((state) => state.user?.user?.accessToken);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/api/users/find/${id}`, {
          headers: { token: `Bearer ${token}` },
        });
        setData(res.data);
      } catch (error) {}
    };
    fetchData();
  }, [id,token]);

  const handleAll = (e) => {
    setAll({
      ...all,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (image) {
      const storageRef = ref(storage, image.name);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
          }
        },
        (error) => {
          // Handle unsuccessful uploads
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            const user = {
              firstname: all.firstname ? all.firstname : data.firstname ,
              lastname: all.lastname ? all.lastname : data.lastname ,
              username: all.username ? all.username : data.username,
              isAdmin:data.isAdmin,
              email: all.email || data.email,
              img:downloadURL
              
              
            };
              
      editUser(data._id,user,token,setData)
            
          });
        }
      );
    }else{
      const user = {
        firstname: all.firstname ? all.firstname : data.firstname ,
        lastname: all.lastname ? all.lastname : data.lastname ,
        username: all.username ? all.username : data.username,
        isAdmin:data.isAdmin,
        email: all.email || data.email,
        
        
      };


      
      editUser(data._id,user,token,setData)
      
    }
  };

  return (
    <Container>
      <Top>
        <Title>Edit User</Title>
        <Link to="/admin/newUser" style={{ textDecoration: "none" }}>
          <Button>Create</Button>
        </Link>
      </Top>
      <Bottom>
        <UserDetails>
          <TopDetails>
            <Img src={data?.img} />
            <Info>
              <Name>{data?.firstname}</Name>
              <Job>{data?.username}</Job>
            </Info>
          </TopDetails>
          <Acc>Account Details</Acc>
          <Detail>
            <AccountCircleOutlined style={{ fontSize: "16px" }} />
            <Text>{data?.firstname}</Text>
          </Detail>
          <Detail>
            <DateRangeOutlined style={{ fontSize: "16px" }} />
            <Text>Admin: </Text>
            <Text>{data?.isAdmin === true && "Yes"}</Text>
            <Text>{data?.isAdmin === false && "No"}</Text>

            <select
              onChange={(e) =>
                setIsAdmin({ ...isAdmin, [e.target.name]: e.target.value })
              }
              name="isAdmin"
            >
              <option style={{ padding: "2px" }} value="true">
                Yes
              </option>
              <option style={{ padding: "2px" }} value="false">
                No
              </option>
            </select>
          </Detail>
          <Acc>Contact</Acc>
          <Detail>
            <LocalPhoneOutlined style={{ fontSize: "16px" }} />
            <Text>+1 234 567 89 </Text>
          </Detail>
          <Detail>
            <EmailOutlined style={{ fontSize: "16px" }} />
            <Text>{data?.email}</Text>
          </Detail>
          <Detail>
            <LocationOnOutlined style={{ fontSize: "16px" }} />
            <Text>New York || USA </Text>
          </Detail>
        </UserDetails>
        <EditUserDetails>
          <Edit>Edit</Edit>
          <Form>
            <FormContainer>
              <FormLeft>
                <InputContainer>
                  <Label>Username</Label>
                  <Input
                    placeholder={data?.username}
                    name="username"
                    onChange={(e) => handleAll(e)}
                  />
                </InputContainer>
                <InputContainer>
                  <Label>First Name</Label>
                  <Input
                    placeholder={data?.firstname}
                    name="firstname"
                    onChange={(e) => handleAll(e)}
                  />
                </InputContainer>
                <InputContainer>
                  <Label>Email</Label>
                  <Input
                    placeholder={data?.email}
                    name="email"
                    onChange={(e) => handleAll(e)}
                  />
                </InputContainer>
                <InputContainer>
                  <Label>Phone</Label>
                  <Input placeholder="+1 234 567 89" />
                </InputContainer>
                <InputContainer>
                  <Label>Address</Label>
                  <Input placeholder="New York || USA" />
                </InputContainer>
              </FormLeft>
              <FormRight>
                <RightTop>
                  <FormImg src={data?.img} />
                  <Label htmlFor="file">
                    <Publish />
                  </Label>
                  <FileInput
                    type="file"
                    id="file"
                    onChange={(e) => setImage(e.target.files[0])}
                  />
                </RightTop>
                <UpdateButton onClick={(e) => handleClick(e)}>
                  Update
                </UpdateButton>
              </FormRight>
            </FormContainer>
          </Form>
        </EditUserDetails>
      </Bottom>
    </Container>
  );
};

export default User;
