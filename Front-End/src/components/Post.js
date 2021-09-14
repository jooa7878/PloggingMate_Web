import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Post = (props) => {
  return (
    <PostBody>
      <Link
        to={{
          pathname: `/postdetail/${props.post_id}`,
          state: {
            props,
          },
        }}
        className="Link_Post"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))," +
            "url(" +
            `${props.image_url}` +
            "/" +
            `${props.post_id}` +
            ")",
        }}
      >
        {props.is_progress ? (
          <Top>
            <Participant>참가 {props.participant_num}/5</Participant>
            <Progress>진행중</Progress>
          </Top>
        ) : (
          <Expired>완료</Expired>
        )}
        <Content> {props.contents}</Content>
        <div>
          <Date>{props.position} </Date>
          <Date>{props.date} </Date>
        </div>
      </Link>
      <UserName>{props.user_name}</UserName>
    </PostBody>
  );
};

Post.defaultProps = {
  post_id: 1,
  is_me: false,
  user_name: "on.schan",
  position: "낙산공원",
  contents: "같이 주말에 플로깅해요!",
  image_url: "https://source.unsplash.com/random",
  date: "9월 11일 7PM",
  participant_num: 3,
  is_progress: true,
};

const PostBody = styled.div`
  display: flex;
  flex-direction: column;
`;

const Progress = styled.div`
  color: #fff0f0;
  background-color: #238d34;
  padding: 5px;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 11px;
  margin-right: 11px;
  margin-left: 58px;
`;
const Expired = styled.div`
  color: #fff0f0;
  background-color: #da590f;
  padding: 5px;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 11px;
  margin-right: 11px;
  align-self: flex-end;
`;
const Date = styled.div`
  color: #fff0f0;
  font-size: 12px;
  margin-bottom: 10px;
`;
const Content = styled.div`
  color: white;
  margin-top: -15px;
`;

const Participant = styled.div`
  color: #fff0f0;
  background-color: #5f5f5f;
  padding: 5px;
  border-radius: 15px;
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 60px;
`;

const UserName = styled.span`
  color: gray;
  font-weight: 1000;
  font-size: 12px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default Post;
