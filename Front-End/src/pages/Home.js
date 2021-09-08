import React from "react";
<<<<<<< HEAD
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from "../components/LoginBox";
=======
import styled from 'styled-components'

import Navbar  from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from '../components/LoginBox'
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0

const Home = (props) => {
  return (
    <Container>
      <Jumbotron></Jumbotron>
<<<<<<< HEAD
      {/* <LoginBox></LoginBox */}
    </Container>
  );
};

const Container = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  height: 1000px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;
=======
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
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0

export default Home;
