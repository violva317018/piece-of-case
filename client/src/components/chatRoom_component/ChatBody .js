// 試用版
import React, { useContext } from "react";
import socket from "../../socket";
import { GlobelDate } from "../../App";

const ChatBody = (props) => {
  // const { currentUserID } = useContext(GlobelDate) // 當前使用者

  const {
    selectedUser,
    connectedUsers,
    messages,
    setMessages,
    lastMessageRef,
  } = props; // 從 ChatRoom 得到的資訊

  // 訊息畫面一掛載就會出現，就要去執行【showMessages】

  // const showMessages = props.messages.map((message) => {
  //     if (props.userSelected) {
  //         if (message.fromSelf && message.toUser === props.selectedUser.username)
  //             return (
  //                 <>
  //                     <div className="message__sender" ref={props.lastMessageRef}>
  //                         <p>{message.time}</p>
  //                         <p>{message.content}</p>
  //                     </div>
  //                 </>
  //             );
  //         else if (!message.fromSelf && message.fromUser === props.selectedUser.username)
  //             return (
  //                 <>
  //                     <div className="message__recipient" ref={props.lastMessageRef}>
  //                         <p>{message.time}</p>
  //                         <p>{message.content}</p>
  //                     </div>
  //                 </>
  //             );
  //     }
  // });

  // receive private message from server
  socket.on("private message", ({ content, time, from }) => {
    for (let i = 0; i < connectedUsers.length; i++) {
      const user = connectedUsers[i];
      if (user.username === from) {
        let newMessages = {
          fromUser: from,
          content,
          time,
          fromSelf: false,
        };
        setMessages([...messages, newMessages]);
        if (user.username !== selectedUser.username) {
          user.hasNewMessages = true;
        } else {
          user.hasNewMessages = false;
        }
        break;
      }
    }
  });

  return (
    <>
      <div className="message__container">
        <div className="message__chats">{/* {showMessages} */}</div>
        <div />
      </div>
    </>
  );
};

export default ChatBody;
