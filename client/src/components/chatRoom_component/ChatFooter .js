import React, { useState } from "react";
import socket from "../../socket";
const moment = require("moment");

const ChatFooter = (props) => {
  const [message, setMessage] = useState("");
  const { selectedUser, connectedUsers, messages, setMessages } = props; // 從 ChatRoom 得到的資訊

  // 處理發送
  const handleSend = () => {
    // reset input
    setMessage("");
  };

  const onMessage = (e, content) => {
    if (selectedUser) {
      // 發送給 socket
      socket.emit("private message", {
        content,
        to: selectedUser.userID,
      });
      // 儲存本地陣列
      setMessages((messages) => [
        ...messages,
        {
          toUser: selectedUser.username,
          content,
          time: moment().format("h:mm a"),
          fromSelf: true,
        },
      ]);
    }
  };

  return (
    <div className="chat__footer">
      <div className="form">
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="sendBtn" onClick={handleSend}>
          SEND
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
