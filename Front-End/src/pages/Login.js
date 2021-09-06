import React from "react";
import styled from "styled-components";

const Login = (props) => {
  return (
    <React.Fragment>
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          console.dir(event.target.id.value);
          console.dir(event.target.password.value);
        }}
      >
        <Input
          required
          type="email"
          placeholder="아이디를 입력해주세요.."
          name="id"
        />
        <Input
          required
          type="password"
          placeholder="비밀번호를 입력해주세요."
          name="password"
        />
        <Input type="submit"/>
      </Form>
    </React.Fragment>
  );
};

export default Login;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 1em;
`;
