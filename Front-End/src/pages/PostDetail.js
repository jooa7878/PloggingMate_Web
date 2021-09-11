import React from "react";

const PostDetail = (props) => {
  const postData = props.location.state.props;

  return (
    <>
      post_id : {postData.post_id}
      <br />
      user_name : {postData.user_name}
      <br />
    </>
  );
};

export default PostDetail;
