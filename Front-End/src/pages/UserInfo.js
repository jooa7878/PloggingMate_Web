import React from "react";
import "../scss/UserInfo.scss";
import { useSelector } from "react-redux";

import StarIcon from "@material-ui/icons/Star";

function UserInfo({ history }) {
  const user = useSelector((state) => state.user.user);
  const is_login = useSelector((state) => state.user.is_login);
  if (!is_login) {
    window.alert("로그인 후 이용가능합니다.");
    history.replace("/login");
    return <></>;
  }
  return (
    <React.Fragment>
      <div className="userinfo-container">
        <div className="inner">
          <h1>My Profile</h1>
          <div className="box">
            <img src={require("../img/logo.png").default} alt="logo" />
            <div className="btn-container">
              <button className="btn btn-change">Change Picture</button>
              <button className="btn btn-myplogging">내 플로깅</button>
            </div>
          </div>
          <div className="my-point">
            나의 플로깅 지수는 <StarIcon></StarIcon> user.count
          </div>
          <div className="info">
            <span>Name </span>
            <input
              className="input-name"
              type="text"
              placeholder={user.nickname}
            />
            <span>Address</span>
            <input
              className="input-address"
              type="text"
              placeholder={user.address}
            />
          </div>

          <button className="btn btn-modify">수정하기</button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default UserInfo;
