import React from "react";
import styled from "styled-components";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>NICK</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>
        <IconContainer>
          <Icon color="3B5999">
            <FacebookOutlinedIcon />
          </Icon>
          <Icon color="E4405F">
            <InstagramIcon />
          </Icon>
          <Icon color="55ACEE">
            <TwitterIcon />
          </Icon>
          <Icon color="E60023">
            <PinterestIcon />
          </Icon>
        </IconContainer>
      </Left>
      <Center>
        <Title>
Useful Links
        </Title>
        <List>
            <ListItem>Home</ListItem>
            <ListItem>Products</ListItem>

            <ListItem>Users</ListItem>
            <ListItem>Favourites</ListItem>
            

        </List>
      </Center>
      <Right></Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  padding: 10px 20px;
  flex: 1;
`;

const Logo = styled.h1`
  font-weight: 800;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 15px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

`;

const Icon = styled.div`
background-color:${(props)=>props.color};
margin-right: 30px;
`;

const Center = styled.div`
padding: 10px 20px;
  flex: 1;
display: flex;
flex-direction: column;
`;

const Title = styled.div`
margin-bottom: 25px;
font-size: 20px;
`;

const List = styled.div`
 display: flex;
 flex-wrap: wrap;
`;

const ListItem = styled.div`
  width:50%;
  padding:5px 0px;
  text-decoration: underline;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
`;
export default Footer;
