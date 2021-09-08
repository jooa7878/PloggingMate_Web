import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from "../components/LoginBox";

const Home = (props) => {
  return (
    <Container>
      <Jumbotron></Jumbotron>
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

export default Home;
