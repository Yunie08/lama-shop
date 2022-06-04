import React from "react";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import {
  Container,
  Wrapper,
  Left,
  Center,
  Right,
  Language,
  SearchContainer,
  Input,
  Logo,
  MenuItem,
} from "./navbar.styles";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Lama.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Link to="/cart">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlinedIcon color="action" />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
