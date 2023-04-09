import React from "react";
import {
  Container,
  Form,
  Input,
  InputItem,
  InputType,
  Label,
  Title,
} from "./newUser_styles";

const NewUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <InputItem>
          <Label>Username</Label>
          <Input placeholder="johnsmith" />
        </InputItem>
        <InputItem>
          <Label>Full Name</Label>
          <Input placeholder="John Smith" />
        </InputItem>
        <InputItem>
          <Label>Email</Label>
          <Input type="email" placeholder="johnsmith@email.com" />
        </InputItem>
        <InputItem>
          <Label>Password</Label>
          <Input type="password" placeholder="" />
        </InputItem>
        <InputItem>
          <Label>Phone</Label>
          <Input type="text" placeholder="+1 234 567 89 " />
        </InputItem>
        <InputItem>
          <Label>Address</Label>
          <Input type="text" placeholder="NewYork || USA" />
        </InputItem>
        <InputItem>
          <Label>Gender</Label>
          <InputType>
            <Input type="radio" name="male" id="male" value="male" />
            <Label style={{marginRight:"20px"}}>Male</Label>
          
            <Input type="radio" name="female" id="female" value="female" />
            <Label>Female</Label>
          </InputType>
          
        </InputItem>
      </Form>
    </Container>
  );
};

export default NewUser;
