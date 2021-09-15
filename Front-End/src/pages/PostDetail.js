import React from "react";
import styled from "styled-components";
import Modal_Post from "../elements/Modal_Post";
const PostDetail = (props) => {
  const postData = props.location.state.props;
  const [modalVisible, setModalVisible] = React.useState(true);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  console.log(postData);

  return (
    <Container>
      {modalVisible && (
        <Modal_Post
          visible={modalVisible}
          maskClosable={true}
          onClose={closeModal}
        >
          <Img src={postData.image_url} alt="image" />
          <Content>
            <Title>{postData.contents}</Title>
            <Position>위치 : {postData.position}</Position>
            <Date>일정 : {postData.date}</Date>
          </Content>
        </Modal_Post>
      )}
    </Container>
  );
};

export default PostDetail;

const Container = styled.div`
  display: flex;
`;

const Img = styled.img`
  max-width: 420px;
  min-width: 420px;
  height: 25rem;
  margin-right: 10px;
  @media screen and (max-width: 900px) {
    max-width: 300px;
    min-width: 300px;
    max-height: 400px;
    min-height: 400px;
  }
  @media screen and (max-width: 768px) {
    max-width: 250px;
    min-width: 250px;
    max-height: 400px;
    min-height: 400px;
  }
`;

const Title = styled.h2`
  text-align: left;
  border-bottom: 1px solid #8f8f8f;
  padding-bottom: 20px;
`;

const Position = styled.h4`
  text-align: left;
`;
const Date = styled.h4`
  text-align: left;
`;
const Content = styled.div`
  width: 21em;
  display: flex;
  flex-direction: column;
  align-content: center;
  color: #535c68;
`;
