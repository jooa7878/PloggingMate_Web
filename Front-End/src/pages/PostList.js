import React from "react";
import Post from "../components/Post";
import styled from "styled-components";

const PostList = (props) => {
  return (
    <Body>
      <Progress>현재 모집중인 플로깅입니다.</Progress>
      <div>
        <span>정렬 기준</span>
        <span>새글 작성</span>
      </div>
      <Posts>
        <Post post_id={1}></Post>
        <Post post_id={2}></Post>
        <Post post_id={3}></Post>
        <Post post_id={4}></Post>
        <Post post_id={5}></Post>
        <Post post_id={6}></Post>
        <Post post_id={7}></Post>
        <Post post_id={8}></Post>
        <Post post_id={1}></Post>
        <Post post_id={2}></Post>
        <Post post_id={3}></Post>
        <Post post_id={4}></Post>
      </Posts>
      <button>More</button>
      <hr></hr>
      <Progress>이미 진행된 플로깅입니다.</Progress>
      <Posts>
        <Post post_id={9} is_progress={false}></Post>
        <Post post_id={10} is_progress={false}></Post>
        <Post post_id={11} is_progress={false}></Post>
        <Post post_id={12} is_progress={false}></Post>
        <Post post_id={9} is_progress={false}></Post>
        <Post post_id={10} is_progress={false}></Post>
        <Post post_id={11} is_progress={false}></Post>
        <Post post_id={12} is_progress={false}></Post>
      </Posts>
    </Body>
  );
};

export default PostList;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;
  max-width: 1200px;
`;

const Posts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Progress = styled.span`
  text-align: center;

  font-size: 30px;
  font-weight: 1000;
  color: #3fc556;
`;
