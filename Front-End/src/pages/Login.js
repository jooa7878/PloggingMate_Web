import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { Link } from "react-router-dom";

const Login = (props) => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const login = () => {
    dispatch(userActions.login(id, pwd));
  };

  return (
    <React.Fragment>
      <Card>
        <Logo>
          <LogoText> PloggingMate</LogoText>
          <Img src={require("../img/logo.png").default} alt="logo" />
        </Logo>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            login();
          }}
        >
          <Input
            required
            type="email"
            placeholder="아이디를 입력해주세요."
            onChange={(e) => {
              setId(e.target.value);
            }}
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "아이디를 입력해주세요.";
            }}
          />
          <Input
            required
            type="password"
            placeholder="비밀번호를 입력해주세요."
            onChange={(e) => {
              setPwd(e.target.value);
            }}
            onFocus={(e) => {
              e.target.placeholder = "";
            }}
            onBlur={(e) => {
              e.target.placeholder = "비밀번호를 입력해주세요.";
            }}
          />

          <Button>로그인</Button>
          <ETC>
            <Link to="/signup" className="Link_Login">
              <Forgot onClick>아이디/비밀번호 찾기</Forgot>
            </Link>
            <Link to="/signup" className="Link_Login">
              <Signup>회원가입</Signup>
            </Link>
          </ETC>
        </Form>
      </Card>
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

const Card = styled.div`
  border-radius: 10px;
  border: 2px solid #d3d3d3;
  margin-top: 60px;
  margin-bottom: 60px;
  margin-left: 40px;
  width: 50%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1000px) {
    margin: 20px;
  }
`;

const Logo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const LogoText = styled.h3`
  font-weight: 1000;
  color: #00bfff;
  font-size: 1.5rem;
  padding-left: 20px;
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
    border: 3px solid #00bfff;
  }
`;

const Img = styled.img`
  padding: 0px;
  width: 50px;
  height: 70px;
  object-fit: cover;
`;

const Button = styled.button`
  border-radius: 15px;
  width: 70%;
  height: 35px;
  border: 1px solid skyblue;
  background-color: #00bfff;
  font-weight: 1000;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #006e92;
    color: #fff;
  }
`;

const ETC = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
  font-size: 12px;
  color: #838080;
  font-weight: 600;
`;

const Signup = styled.div`
  cursor: pointer;
  text-decoration: none;
  padding: 1px;
  border-bottom: #838080 solid 1px;
  &:hover {
    color: black;
    font-weight: 700;
  }
`;

const Forgot = styled.div`
  cursor: pointer;
  text-decoration: none;
  padding: 1px;
  border-bottom: #838080 solid 1px;
  &:hover {
    color: black;
    font-weight: 700;
  }
`;
