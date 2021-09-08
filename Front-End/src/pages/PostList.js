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
    <>
      {dummyData.map((item) => (
        <Card>
          <Post user_name={item.user_name}></Post>
        </Card>
      ))}
    </>
  );
};

export default PostList;

const Card = styled.div`
  border-radius: 10px;
  border: 1px solid #d3d3d3;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 40px;
  width: 50%;
  height: 400px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin: 20px;
  }
`;
