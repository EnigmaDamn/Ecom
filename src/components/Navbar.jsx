
import { Badge, Search, SearchOff, ShoppingCart, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import styled from 'styled-components'
import TextField from '@mui/material/TextField';

const Container = styled.div`
height: 80px;
background-color: #e2748d;
`;
const Wrapper = styled.div`
padding: 15px 20px;
display: flex;
justify-content: space-between;
`;

const Logo = styled.h1`
  font-weight: bold;
  margin-Right:20px;
`;

const Left = styled.div`
flex: 1;
display: flex; `; 

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;



const SearchContainer = styled.div`
border: 1px;
display: flex;
margin-left: 30px;
padding: 2px;
align-items: center;`
;

const Input = styled.input`
padding-left: 20px;
border: none;
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;
const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <SearchContainer>
          <Logo>The Store</Logo>
          <TextField id="outlined-basic" label="Search" variant="outlined" />
          <Search/>
          </SearchContainer>
        </Left>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar