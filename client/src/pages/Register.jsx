import React, { useState } from "react";
import styled from "styled-components";
import { register } from "../redux/apiCalls";
import {
  
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { storage } from "../firebaseConfig";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const[error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const [data,setData] = useState(null)

  console.log({error,loading,data});

  const [password, setPassword] = useState("");




  
  const handleRegister = (e) => {
    setLoading(false)
    e.preventDefault();
    setData(null)
    setError(false)
    if (image) {
      // setLoading(true) 
      const storageRef = ref(storage, image.name);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, image);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
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
          console.log(error)
        },
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);

            register({
              firstname,
              lastname,
              username,
              email,
              password,
              img: downloadURL,
            },setLoading,setError,setData);
          });
        }
      );
    } else {
      register({ firstname, lastname, username, email, password },setLoading,setError,setData);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>REGISTER</Title>

        <Form>
          <Input
            placeholder="name"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <Input
            placeholder="last name"
            onChange={(e) => setLastname(e.target.value)}
          />
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              border: "1px solid gray",
              flexDirection: "column",
              paddingTop: 10,
              paddingLeft: 10,
              marginRight: 10,
            }}
          >
            <label style={{ fontSize: 13, fontWeight: 500, color: "gray" }}>
              Profile Picture(Optional)
            </label>
            <Input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              style={{ paddingLeft: 0, color: "gray" }}
            />
          </div>

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={(e)=>handleRegister(e)} disabled={loading}>CREATE</Button>
          {error ? <span style={{color:"teal",fontWeight:500,marginTop:10}}>{error}</span> : ""}
          {loading ? <span style={{color:"teal",fontWeight:500,marginTop:10}}>Creating Account</span> : ""}
          {data ? <span style={{color:"teal",fontWeight:500,marginTop:10}}>{data.message}</span> : ""}


          

        </Form>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(63, 147, 153, 0.322),
    rgba(255, 255, 255, 0.2)
  );
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 60%;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 20px;

  @media only screen and (min-width: 768px) {
  padding: 20px;
  width: 50%;
    
  }
`;
const Title = styled.h1`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  min-width: 40%;
  margin: 0px 10px 5px 0px;
  padding: 8px;
`;

const Agreement = styled.span`
  font-size: 15px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  background-color: white;
  padding: 5px 10px;
  color: black;
  border: 2px solid teal;
  cursor: pointer;


  :disabled{
    background-color: teal;
    color:white;
  }
`;

export default Register;
