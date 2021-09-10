import React from "react";
import Post from "../components/Post";
import styled from "styled-components";

const dummyData = [
  { user_name: "온승찬" },
  { user_name: "안상혁" },
  { user_name: "홍길동" },
];

const PostList = (props) => {
  return (
    <Body>
      {dummyData.map((item) => (
        <Card>
          <Post user_name={item.user_name}></Post>
        </Card>
      ))}
    </Body>
  );
};

export default PostList;

const Body = styled.body`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  margin-bottom: 60px;
`;

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  margin-top: 30px;
  margin-bottom: 30px;
  width: 50%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin: 20px;
  }
`;
