import { Badge } from "@material-ui/core";
import { Search, ShoppingCart } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
  background-color: #05fc9d;
  position: sticky;
  top: 0;
  z-index: 100;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "5px 0", paddingRight: "10px" })}
`;
const Left = styled.div`
  /* flex: 1; */
`;

const Logo = styled.img`
  width: 100px;
  object-fit: contain;
  margin: 0 20px;
  margin-top: 10px;
  ${mobile({ width: "60px", height: "24px", margin: "7px", marginTop: "14px" })}
`;

const Center = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  border-radius: 24px;
`;

const Input = styled.input`
  font-size: large;
  height: 12px;
  padding: 10px;
  border: none;
  width: 100%;
  ${mobile({ width: "100%" })}
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
  margin-left: 25px;
  color: red;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src="http://logos.textgiraffe.com/logos/logo-name/Bala-designstyle-candy-m.png" />
        </Left>
        <Center>
          <Input placeholder="Search" />
          <Search
            style={{
              padding: "3px",
              height: "26px",
              backgroundColor: "#fd0707 ",
              color: "white",
            }}
          />
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={3} color="secondary">
              <ShoppingCart
                style={{ color: "rgb(1, 51, 32)", height: "32px" }}
              />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
