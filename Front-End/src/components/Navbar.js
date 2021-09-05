import React from 'react';

import styled from 'styled-components';



function Navbar() {

    return (
      <>
        <NormalNav>
          <NavbarItems>
            <Logo href="/">PloggingMate</Logo>
            <Tab>
              <TabItems>Challenge</TabItems>
              <TabItems>Sign Up</TabItems>
              <TabItems>Login</TabItems>
            </Tab>
          </NavbarItems>
        </NormalNav>
      </>
    )
}



const NormalNav = styled.nav`
  position : fixed;
  top : 0;
  font-family : inherit;
  font-weight:700;
  max-width: 1200px;
  width:100%;
  `

const NavbarItems = styled.div`
  display: flex;
  padding : 0 20px;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.a`
  margin-left: 20px;
  text-decoration: none;
  &:visited{
    color : #000;
  }
`

const Tab = styled.div `
  display: flex;
  justify-content: flex-end;
`

const TabItems = styled.p`
  cursor :pointer;
  margin-right: 20px;
  position: relative;
  display: inline-block;
  transition: .3s;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 50%;
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
`



export default Navbar;