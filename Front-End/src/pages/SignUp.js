import React from "react";
import styled from "styled-components";
import Modal from "../elements/Modal";
import PrivacyPolicy from "../elements/PrivacyPolicy";

const SignUp = (props) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleOnchane = (e) => {
    e.target.style.backgroundColor = "#e8f7ea";
    if (e.target.value === "") e.target.style.backgroundColor = "white";
  };

  return (
    <Card>
      <Logo>
        <Img src={require("../img/logo.png").default} alt="logo" />
        <LogoText> 회원가입</LogoText>
      </Logo>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          const password1 = event.target.password.value;
          const password2 = event.target.passwordCheck.value;

          if (password1 !== password2) {
            alert("패스워드 확인이 틀렸습니다.");
          } else {
            console.dir(event.target.id.value);
            console.dir(event.target.nickname.value);
            console.dir(event.target.password.value);
            console.dir(event.target.passwordCheck.value);
          }
        }}
      >
        <Input
          required
          type="email"
          placeholder="아이디를 입력해주세요."
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "아이디를 입력해주세요.";
          }}
          onChange={handleOnchane}
        />
        <Input
          required
          type="text"
          placeholder="닉네임을 입력해주세요."
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "사용하실 닉네임을 입력해주세요.";
          }}
          onChange={handleOnchane}
        />
        <Input
          required
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "비밀번호를 입력해주세요.";
          }}
          onChange={handleOnchane}
        />
        <Input
          required
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          name="passwordCheck"
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "비밀번호를 다시 입력해주세요.";
          }}
          onChange={handleOnchane}
        />
        <div>
          <input type="checkbox" value="banana" />
          <Policy>개인정보 수집 및 이용 동의</Policy>
          <Notice>[필수]</Notice>
          <PolicyContent onClick={openModal}>(내용 보기)</PolicyContent>
          {modalVisible && (
            <Modal
              visible={modalVisible}
              maskClosable={true}
              onClose={closeModal}
            >
              <PrivacyPolicy></PrivacyPolicy>
            </Modal>
          )}
        </div>

        <Button>제출</Button>
      </Form>
    </Card>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Card = styled.div`
  border-radius: 10px;
  border: 2px solid #d3d3d3;
  margin-top: 80px;
  margin-bottom: 60px;
  margin-left: 40px;
  width: 600px;
  height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
`;

const LogoText = styled.h3`
  font-weight: 1000;
  color: #3fc556;
  font-size: 2rem;
  padding-right: 20px;
`;

const Input = styled.input`
  box-sizing: border-box;
  display: block;
  height: 40px;
  width: 300px;
  margin-bottom: 20px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #838080;
  font-size: 15px;

  &:focus {
    outline: none;
    border: 3px solid #89db96;
  }
`;

const Img = styled.img`
  margin-top: 5px;
  padding: 0px;
  width: 50px;
  height: 80px;
  object-fit: cover;
`;

const Button = styled.button`
  margin-top: 20px;
  border-radius: 15px;
  width: 60%;
  height: 35px;
  border: 1px solid #9e6727;
  background-color: #9e6727;
  font-weight: 1000;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  padding-bottom: 7px;
  box-shadow: 0 3px 5px -1px #464441;
  &:hover {
    background-color: #6b481f;
    color: white;
    padding-bottom: 0px;
    border-bottom: 4px solid #3b2811;
  }
`;

const Notice = styled.span`
  color: #df3e3e;
  font-size: 0.8rem;
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 600;
`;

const Policy = styled.span`
  color: #6d6d6d;
  font-size: 0.9rem;
  margin-left: 5px;
  font-weight: 600;
`;

const PolicyContent = styled.span`
  color: #838080;
  font-size: 0.8rem;
  margin-left: 10px;
  padding: 1px;
  font-weight: 600;
  border-bottom: #838080 solid 1px;
  &:hover {
    color: black;
    font-weight: 700;
    cursor: pointer;
    border-bottom: black solid 1px;
  }
`;

const SignupTitle = styled.h1`
  color: #3fc556;
  font-size: 35px;
  margin-bottom: 40px;
`;
