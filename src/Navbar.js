import React from "react";
import { Link } from "@reach/router";
import styled, { keyframes } from "react-emotion";
import colors from "./colors";

const Spin = keyframes`
  from{
    transform: rotate(0deg)
  }
  to{
    transform: rotate(360deg)
  }
`;

const Spyglass = styled("span")`
  display: inline-block;
  animation: 1s ${Spin} linear infinite;
`;

const Container = styled("header")`
  background-color: ${colors.dark};
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Navlink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => (
  <Container>
    <Navlink to="/">Adopt Me!</Navlink>
    <Navlink to="/search-params">
      <Spyglass aria-label="search" role="img">
        🔍
      </Spyglass>
    </Navlink>
  </Container>
);

export default Navbar;
