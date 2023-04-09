import styled from "styled-components";

export const Containerr = styled.div`
  width: 100%;
  height: 50px;
  position: sticky;
  top:0;
  z-index: 999;
  background-color:white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  height: 100%;
 
`;



export const Left = styled.div`
font-weight:800;
font-size:22px;
color:darkblue

`;



export const Right = styled.div`
display: flex;
align-items: center;
`;




export const IconContainer = styled.div`
position: relative;
margin-right: 15px;


`;

export const IconNumber = styled.div`
position: absolute;
top:-5px;
right:-5px;
background-color: red;
width: 13px;
height: 13px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
font-weight: 600;
font-size: 13px;
color: white;
`;

export const Image = styled.img`
width:40px;
height: 40px;
border-radius: 50%;

`
