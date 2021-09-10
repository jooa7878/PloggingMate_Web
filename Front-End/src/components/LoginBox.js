import React, { useState, useEffect } from "react";
import "../scss/LoginBox.scss";

function LoginBox() {
  let [login, setLogin] = useState(false);

  return (
    <React.Fragment>
      <div className="userbox-container">
        {login ? (
          <div className="userbox">user-box</div>
        ) : (
          <button className="btn">로그인 하기</button>
        )}
      </div>
    </React.Fragment>
  );
}

export default LoginBox;
