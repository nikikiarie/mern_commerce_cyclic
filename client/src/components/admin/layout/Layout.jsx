import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../Sidebar/Sidebar";
import AdminNavbar from "../AdminNavbar/AdminNavbar.jsx";



const Layout = () => {
  return (
    <div>
      <AdminNavbar/>
      <Main>
        <Sidebar />

        <Outlet />
      </Main>
    </div>
  );
};

export default Layout;

const Main = styled.div`
  display: flex;
`;
