import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <>
      <CopyRight>
        {new Date().getFullYear()} &copy; Team PloggingMate. All Right Reserved.
      </CopyRight>
    </>
  )
}

const CopyRight = styled.div`
  position: absolute;
  display: flex;
  color : #333;
  bottom : 0;
  height: 50px;
  width : 100%;
  justify-content: center;
  align-items: center;
  border-top : 1px solid #d3d3d3;
  padding : 10px 0;
`

export default Footer;