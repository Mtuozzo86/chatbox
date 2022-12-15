import React from "react";

function Message({ body, userName, messageUserId, currentUser }) {

const isCurrentUser = currentUser === messageUserId

  return (
    <div style={{ textAlign: isCurrentUser && "right" }}>
      <div>
        <em className="fw-semibold">{userName}</em>
      </div>
      <div>{body}</div>
    </div>
  );
}

export default Message;
// 