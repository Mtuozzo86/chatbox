import React from "react";

function Message({ body, user }) {


  return (
    <div>
      <div>
        <em>{user}</em>
      </div>
      <div>{body}</div>
    </div>
  );
}

export default Message;
