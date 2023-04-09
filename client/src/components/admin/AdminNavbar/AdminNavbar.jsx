import React from "react";
import {Image, Containerr, IconContainer, IconNumber, Left, Right, Wrapper } from "./navbar_styles.js";
import {Language, NotificationsActiveOutlined, Settings} from '@mui/icons-material';

import {useDispatch, useSelector} from 'react-redux'
import { logOut } from "../../../redux/userSlice.js";

const AdminNavbar = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const dispatch = useDispatch()
  return (
    <Containerr>
      <Wrapper>
        <Left>Admin Panel</Left>
        <Right>
          <IconContainer>
            <NotificationsActiveOutlined style={{fontSize:"25px",color:"gray"}} />
            <IconNumber>2</IconNumber>
          </IconContainer>
          <IconContainer>
            <Language style={{fontSize:"25px",color:"gray"}}/>
            <IconNumber>2</IconNumber>
          </IconContainer>
          <IconContainer>
            <Settings style={{fontSize:"25px",color:"gray"}}/>
            <IconNumber>2</IconNumber>
          </IconContainer>
          <Image src={user?.img}/>
          <button onClick={()=>dispatch(logOut())}>Log Out</button>
        </Right>
      </Wrapper>
    </Containerr>
  );
};

export default AdminNavbar;
