import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -webkit-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  -moz-box-shadow: 0px 0px 14px 1px rgba(0, 0, 0, 0.58);
  border-radius: 10px;
  padding: 20px;
  flex: 2;
`;

export const Tbody = styled.tbody`
`


export const Title = styled.h3``;
export const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;
export const Tr = styled.tr``;
export const Th = styled.th`
  text-align: left;
`;
export const TdUser = styled.td`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const Img = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
export const Name = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const TdDate = styled.td`
  font-weight: 500;
`;

export const TdAmount = styled.td`
  font-weight: 500;
`;

export const TdStatus = styled.td``;
export const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
`;
