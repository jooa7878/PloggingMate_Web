import React from "react";
import styled from "styled-components";

import Navbar from "../components/Navbar";
import Jumbotron from "../components/Jumbotron";
import LoginBox from "../components/LoginBox";
import Dust from "../components/Dust";

const Home = (props) => {
  return (
    <Container>
      <Jumbotron></Jumbotron>
      <Section>
        <Dust></Dust>
        <LoginBox></LoginBox>
      </Section>
    </Container>
  );
};

const Container = styled.div`
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Section = styled.section`
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
`;

export default Home;