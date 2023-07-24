import React, { useState } from 'react';
import socket from "../../socket";
const moment = require("moment");

const ChatFooter = (props) => {
    const [message, setMessage] = useState('');

    // 處理發送
    const handleSend = () => {
        setMessage('')
    };

    const onMessage = (e, content) => {

        if (props.selectedUser) {
            // 發送給 socket
            socket.emit("private message", {
                content,
                to: props.selectedUser.userID,
            });
            // 儲存本地陣列
            props.setMessages((messages) => [
                ...messages,
                { toUser: props.selectedUser.username, content, time: moment().format("h:mm a"), fromSelf: true },
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
                <button className="sendBtn" onClick={handleSend}>SEND</button>
            </div>
        </div>
    );
};

export default ChatFooter;