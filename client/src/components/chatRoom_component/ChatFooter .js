import React, { useState } from 'react';
import socket from "../../socket";
const moment = require("moment");

const ChatFooter = (props) => {
    const [message, setMessage] = useState('');
    const handleSendMessage = (e) => {
        e.preventDefault();
        console.log({ userName: localStorage.getItem('userName'), message });
        setMessage('');
    };

    // chat --- start 
    let messageContent = "";
    let ref; //Reference to the input field so that it gets cleared every time we submit
    const getContent = (e) => {
        messageContent = e.target.value;
        ref = e;
    };
    const onMessage = (e, content) => {
        e.preventDefault();
        console.log("Message is:", content);
        ref.target.value = "";
        if (props.selectedUser) {
            socket.emit("private message", {
                content,
                to: props.selectedUser.userID,
            });
            props.setMessages((messages) => [
                ...messages,
                { toUser: props.selectedUser.username, content, time: moment().format("h:mm a"), fromSelf: true },
            ]);
        }
        console.log("Message object", props.messages);
    };


    // chat --- end
    return (
        // <div className="chat__footer">
        //     <form className="form" onSubmit={handleSendMessage}>
        //         <input
        //             type="text"
        //             placeholder="Write message"
        //             className="message"
        //             value={message}
        //             onChange={(e) => setMessage(e.target.value)}
        //         />
        //         <button className="sendBtn">SEND</button>
        //     </form>
        // </div>
        <div className="chat__footer">
            <form className="form" onSubmit={(e) => onMessage(e, messageContent)}>
                <input
                    type="text"
                    placeholder="Write message"
                    className="message"
                    onChange={(e) => getContent(e)}
                />
                <button className="sendBtn">SEND</button>
            </form>
        </div>
    );
};

export default ChatFooter;