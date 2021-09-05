import React from 'react';
import styled from 'styled-components';


function Jumbotron () {
  return (
    <>
      <Card width='800px' height='400px' left='450px' top='150px'>
        Card
      </Card>
    </>
  )
}

const Card = styled.div `
  border-radius: 10px;
  border : 1px solid #d3d3d3;
  left : 40px;
  top : 150px;
  width : 800px;
  height: 400px;
  cursor:pointer;
  position: absolute; 
  display: flex; 
  justify-content: center;
  align-items: center;
`

export default Jumbotron;