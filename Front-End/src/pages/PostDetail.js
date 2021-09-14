import React from "react";
import styled from "styled-components";

const PostDetail = (props) => {
  const postData = props.location.state.props;

  console.log(postData);

  return (
    <Container>
      <Img src={postData.image_url} alt="image" />
      {postData.contents}
      {postData.date}
      {postData.position}
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

const Img = styled.img`
  width: 600px;
  height: 480px;
  margin: 10px;
`;
