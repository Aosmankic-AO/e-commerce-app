import React from "react";
import styled from "styled-components";
import {Search, ShoppingCartOutlined} from "@material-ui/icons"
import { Badge } from "@material-ui/core";



const Container = styled.div` 
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  flex: 1;

  display: flex;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const Language = styled.div`
  font-size: 15px;
  cursor: pointer;
`

const SearchContainer = styled.div`
  border: 0.5px solid;
  display: flex;
  align-items: center;
  margin-left: 25px;

`

const Input = styled.input`
  border: none;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;\
  padding: 10px;
`

const Navbar = () => {
  return (
   <Container>
    <Wrapper>
      <Left>
        <Language>English</Language>
        <SearchContainer>
          <Input />
          <Search />
        </SearchContainer>
      </Left>
      <Center><Logo>Admir</Logo></Center>
      <Right>
        <MenuItem>Register</MenuItem>
        <MenuItem>Sign In</MenuItem>
        <MenuItem> 
          <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlined color="action" />
          </Badge>
        </MenuItem>
      </Right>
    </Wrapper>
   </Container>
  )
}

export default Navbar