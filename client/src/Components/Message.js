import React from "react";

function Message({ body, userName, message, messageUserId, currentUser }) {
const isCurrentUser = currentUser === messageUserId
console.log(isCurrentUser)
  return (
    
    <div style={{textAlign: isCurrentUser && "right"}}>
      <div>
        <em>{userName}</em>
      </div>
      <div>{body}</div>
    </div>
  );
}

export default Message;
// 