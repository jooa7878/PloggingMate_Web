import React from "react";
import { Link } from "react-router-dom";

import "../scss/FindPark.scss";
function FindPark() {
  return (
    <React.Fragment>
      <div className="find-park-container">
        <img src={require("../img/findpark.jpg").default} alt="park" />
        <Link to="/park" className="btn">
          가까운 공원 찾기
        </Link>
      </div>
    </React.Fragment>
  );
}

export default FindPark;
