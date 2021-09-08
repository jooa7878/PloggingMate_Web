<<<<<<< HEAD
import React from "react";
import styled from "styled-components";

function Jumbotron() {
  return (
    <>
      <Card>Card</Card>
    </>
  );
}

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  margin-top: 100px;
  width: 800px;
  height: 400px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 500px;
  }
`;

export default Jumbotron;
=======
import React from 'react';
import styled from 'styled-components';


function Jumbotron () {
  return (
    <>
      <Card>
        Card
      </Card>
    </>
  )
}

const Card = styled.div `
  border-radius: 10px;
  border : 1px solid #d3d3d3;
  margin-left: 40px;
  width: 600px;
  height: 400px;
  cursor : pointer;
  display: flex; 
  justify-content: center;
  align-items: center;

  @media screen and (max-width :1000px){
    margin-top : 20px;
  }
`

export default Jumbotron;
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
