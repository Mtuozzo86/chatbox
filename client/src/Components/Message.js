import React from "react";

function Message({ body, userName, messageUserId, currentUser }) {
  console.log("Message Component", "Username and ID: ", messageUserId, userName)
const isCurrentUser = currentUser === messageUserId

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