import React from "react";
import styled from 'styled-components'

import Navbar  from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from '../components/LoginBox'

const Home = (props) => {
  return (
    <Container>
      <Jumbotron></Jumbotron>
      <LoginBox></LoginBox>
    </Container>
  )
};

const Container = styled.div `
  max-width: 1200px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width :1000px){
    flex-direction: column;
  }
`

export default Home;
