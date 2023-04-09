import {
  HomeOutlined,
  MonetizationOnOutlined,
  TimelineOutlined,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Menu,
  MenuItem,
  Text,
  Title,
  Wrapper,
} from "./sidebar_styles";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <Link to="/admin/home"
            style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>
            <HomeOutlined />
            <Text>Home</Text>
          </MenuItem>
          </Link>
          <MenuItem>
            <TimelineOutlined />
            <Text>Analytics</Text>
          </MenuItem>
          <MenuItem>
            <MonetizationOnOutlined />
            <Text>Sales</Text>
          </MenuItem>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <Link
            to="/admin/users"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <MenuItem>
              <HomeOutlined />
              <Text>Users</Text>
            </MenuItem>
          </Link>
          <Link to="/admin/products"
            style={{ textDecoration: "none", color: "inherit" }}>
          <MenuItem>
            <TimelineOutlined />
            <Text>Products</Text>
          </MenuItem>
          </Link>
          <MenuItem>
            <MonetizationOnOutlined />
            <Text>Transactions</Text>
          </MenuItem>
          <MenuItem>
            <MonetizationOnOutlined />
            <Text>Reports</Text>
          </MenuItem>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <MenuItem>
            <HomeOutlined />
            <Text>Mail</Text>
          </MenuItem>
          <MenuItem>
            <TimelineOutlined />
            <Text>Feedback</Text>
          </MenuItem>
          <MenuItem>
            <MonetizationOnOutlined />
            <Text>Messages</Text>
          </MenuItem>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <MenuItem>
            <HomeOutlined />
            <Text>Manage</Text>
          </MenuItem>
          <MenuItem>
            <TimelineOutlined />
            <Text>Analytics</Text>
          </MenuItem>
          <MenuItem>
            <MonetizationOnOutlined />
            <Text>Reports</Text>
          </MenuItem>
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;
