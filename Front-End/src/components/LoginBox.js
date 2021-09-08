<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

function LoginBox() {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <>
      <Card onClick={onClick}>로그인 박스</Card>
    </>
  );
}

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  margin-left: 40px;
  width: 300px;
  height: 400px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LoginBox;
=======
import React from 'react';
import styled from 'styled-components';

function LoginBox(){

  const onClick = ()=>{
    console.log('clicked');
  }

  return(
    <>
      <Card onClick={onClick}>
        로그인 박스
      </Card>
    </>
  )
}

const Card = styled.div `
  border-radius: 10px;
  border : 1px solid #d3d3d3;
  margin-left: 40px;
  width: 300px;
  height: 400px;
  cursor : pointer;
  display: flex; 
  justify-content: center;
  align-items: center;

  @media screen and (max-width :1000px){
    margin : 20px;
  }
`

export default LoginBox
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
