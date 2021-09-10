import React from "react";

const Post = (props) => {
  return (
    <React.Fragment>
      <div>아이디 : {props.user_name}</div>
      <br />
      <div>날짜 : {props.insert_dt} </div>
      <br />
      <div>내용 : {props.contents} </div>
      <br />
      <div>댓글 수 " {props.comment_cnt}</div>
      <br />
    </React.Fragment>
  );
};

Post.defaultProps = {
  user_name: "on.schan",
  image_url: "",
  contents: "포스트용 더미 데이터",
  comment_cnt: 5,
  insert_dt: "2021-09-08 00:00:00",
  is_me: false,
};

export default Post;
