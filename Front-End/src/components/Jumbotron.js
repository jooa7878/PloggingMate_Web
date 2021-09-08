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
