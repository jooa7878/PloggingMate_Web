import React from "react";
import axios from "axios";

const Connect = (props) => {
  const getData = async () => {
    const data = await axios.post("/users");
  };

  return <></>;
};

export default Connect;
