import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  border-radius: 10px;
  padding: 20px;
  flex: 1;
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;
export const Users = styled.div``;

export const User = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserDetails = styled.h3`
  display: flex;
  flex-direction: column;
`;
export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;

  
`;
export const Job = styled.span`
  font-size: 16px;
  font-weight: 400;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  border-radius: 10px;
  border: none;
  padding:5px;
  gap:5px
`;
export const Text = styled.span`
font-weight: 500;
font-size: 14px;
`;
