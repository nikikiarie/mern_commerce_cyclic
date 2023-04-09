import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  position: sticky;
  background-color: rgb(251, 251, 255);
  top: 50px;
`;

export const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  font-weight: 600;
`;



