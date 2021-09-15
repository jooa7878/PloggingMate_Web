import React from "react";
import axios from "axios";

const Connect = (props) => {
  const data = axios.post("http://localhost:8080/app/sign-in", {
    email: "vividswan@naver.com",
    password: "test1234"
  }).then(res => {
    console.log(res);
  }).catch(error => {
    console.log(error.response.data)
  })


  return <></>;
};

export default Connect;
