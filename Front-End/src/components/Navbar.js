import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import "../scss/Navbar.scss";

function Navbar() {
  return (
    <>
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

const NormalNav = styled.nav`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  font-family: inherit;
  font-weight: 700;
  padding: 20px 0;
  max-width: 1200px;
  background-color: #fff;
`;

const NavbarItems = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export default Navbar;
