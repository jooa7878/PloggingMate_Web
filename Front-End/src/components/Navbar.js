<<<<<<< HEAD
import React from "react";

import styled from "styled-components";

function Navbar() {
  return (
    <>
      <NormalNav>
        <NavbarItems>
          <Logo href="/">PloggingMate</Logo>
          <Tab>
            <TabItems href="/postlist">Challenge</TabItems>
            <TabItems href="/signup">Sign Up</TabItems>
            <TabItems href="/login">Login</TabItems>
          </Tab>
        </NavbarItems>
      </NormalNav>
    </>
  );
}

const NormalNav = styled.nav`
  z-index: 1;
  position: fixed;
  top: 0;
  font-family: inherit;
  font-weight: 700;
  padding: 20px 0;
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
`;

const NavbarItems = styled.div`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
`;
=======
import React from 'react';

import styled from 'styled-components';



function Navbar() {

    return (
      <>
        <NormalNav>
          <NavbarItems>
            <Logo href="/">PloggingMate</Logo>
            <Tab>
              <TabItems href="/postlist">Challenge</TabItems>
              <TabItems href="/signup">Sign Up</TabItems>
              <TabItems href="/login">Login</TabItems>
            </Tab>
          </NavbarItems>
        </NormalNav>
      </>
    )
}



const NormalNav = styled.nav`
  z-index:1;
  position : fixed;
  top : 0;
  font-family : inherit;
  font-weight:700;
  padding : 20px 0;
  max-width: 1200px;
  width : 100%;
  background-color:#fff;
  `

const NavbarItems = styled.div`
  display: flex;
  padding : 0 20px;
  align-items: center;
  justify-content: space-between;
`
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0

const Logo = styled.a`
  margin-left: 20px;
  text-decoration: none;
<<<<<<< HEAD
  color: #00bfff;
  font-size: 1.5rem;
  &:visited {
    color: #00bfff;
  }
`;

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TabItems = styled.a`
  margin-right: 20px;
  position: relative;
  transition: 0.3s;
=======
  &:visited{
    color : #000;
  }
`

const Tab = styled.div `
  display: flex;
  justify-content: flex-end;
`

const TabItems = styled.a`

  margin-right: 20px;
  position: relative;
  transition: .3s;
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
  text-decoration: none;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 50%;
<<<<<<< HEAD
    content: "";
    width: 0;
    height: 2px;
    background-color: #00bfff;

    transition: 0.3s;
    --webkit-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  &:hover::after {
    width: 100%;
  }

  &:visited {
    color: #000;
  }
`;

export default Navbar;
=======
    content : '';
    width : 0;
    height: 2px;
    background-color : #00bfff;

    transition: .3s;
    --webkit-transform : translateX(-50%);
    transform : translateX(-50%)
  }
  &:hover::after {
    width:100%
  }

  &:visited {
    color : #000;
  }
`



export default Navbar;
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
