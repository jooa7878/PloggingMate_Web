import React from "react";
<<<<<<< HEAD
<<<<<<< HEAD
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from "../components/LoginBox";
=======
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5
import styled from 'styled-components'

import Navbar  from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from '../components/LoginBox'
<<<<<<< HEAD
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5

const Home = (props) => {
  return (
    <Container>
      <Jumbotron></Jumbotron>
<<<<<<< HEAD
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
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5
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
<<<<<<< HEAD
>>>>>>> 86d75e60090f3668ec2b573fa75c53d201c838f0
=======
>>>>>>> c4aca958713454e40652461d207f15e68a1f75d5

export default Home;
