import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <>
      <BackColor></BackColor>
      <NormalNav>
        <NavbarItems>
          <Link to="/" className="logo">
            PloggingMate
          </Link>
          <Tab>
            <Link to="/postlist" className="tab-item">
              Challenge
            </Link>
            <Link to="/signup" className="tab-item">
              Sign Up
            </Link>
            <Link to="/login" className="tab-item">
              Login
            </Link>
          </Tab>
        </NavbarItems>
      </NormalNav>
    </>
  );
}

const BackColor = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 2px solid #d3d3d3;
  padding: 38px 0;
`;
const NormalNav = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0;
  font-family: inherit;
  font-weight: 700;
  padding: 20px 0;
  max-width: 1200px;
  width: 100%;
  background-color: white;
  border-bottom: 2px solid white;
`;
const NavbarItems = styled.div`
  margin-bottom: 6.5px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between; ;
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Navbar;
