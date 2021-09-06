import React from "react";
import styled from "styled-components";

const SignUp = (props) => {
  return (
    <React.Fragment>
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
          name="id"
        />
        <Input
          required
          type="text"
          placeholder="닉네임을 입력해주세요."
          name="nickname"
        />
        <Input
          required
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
        />
        <Input
          required
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          name="passwordCheck"
        />
        <Input type="submit" />
      </Form>
    </React.Fragment>
  );
};

export default SignUp;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 1em;
`;
