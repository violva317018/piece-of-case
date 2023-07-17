// 試用版
import React, { useContext } from 'react';
import socket from "../../socket";

import { useNavigate } from 'react-router-dom';
import { GlobelDate } from '../../App';

// const ChatBody = () => {
//     const navigate = useNavigate();
//     const { currentUserID } = useContext(GlobelDate) // 當前使用者 A02

//     const handleLeaveChat = () => {
//         localStorage.removeItem('userName');
//         navigate('/');
//         window.location.reload();
//     };
//     // 訊息假資料
//     const allMessage = [
//         {
//             'sender': 'A01',
//             'senderProfilePhoto': 'A01',
//             'recipient': 'A02',
//             'recipientProfilePhoto': 'A02',
//             'message': 'Hello',
//             'sendDate': '11:25'
//         },
//         {
//             'sender': 'A01',
//             'senderProfilePhoto': 'A01',
//             'recipient': 'A03',
//             'recipientProfilePhoto': 'A03',
//             'message': 'Hello world',
//             'sendDate': '15:05'
//         },
//         {
//             'sender': 'A02',
//             'senderProfilePhoto': 'A02',
//             'recipient': 'A03',
//             'recipientProfilePhoto': 'A03',
//             'message': 'bad boy',
//             'sendDate': '21:50'
//         },
//         {
//             'sender': 'A02',
//             'senderProfilePhoto': 'A02',
//             'recipient': 'A01',
//             'recipientProfilePhoto': 'A01',
//             'message': 'good boy',
//             'sendDate': '21:50'
//         },

//     ]
//     return (
//         <div className='chat-content'>
//             {/* <header className="chat__mainHeader">
//                 <p>Hangout with Colleagues</p>
//                 <button className="leaveChat__btn" onClick={handleLeaveChat}>
//                     LEAVE CHAT
//                 </button>
//             </header> */}

//             {/*This shows messages sent from you*/}
//             {/* 判別 sender  */}
//             {allMessage.map((message, index) => (
//                 <div className="message__chats" key={index}>
//                     <p>{message.sender === currentUserID ? 'me' : 'other'}</p>
//                     <div className={message.sender === currentUserID ? "message__sender" : "message__recipient"}>
//                         <p>{message.message}</p>
//                     </div>
//                 </div>
//             ))}

//         </div>
//     );
// };

// export default ChatBody;



// 正式版

const ChatBody = (props) => {
    const navigate = useNavigate();

    //   let selectedUser = {
    //     ...props.selectedUser,
    //     messages: [],
    //   };

    const handleLeaveChat = () => {
        console.log(socket.username);
        socket.disconnect();
        navigate("/");
        window.location.reload();
    };

    const showMessages = props.messages.map((message) => {
        if (
            message.fromSelf === true &&
            message.toUser === props.selectedUser.username
        )
            return (
                <>

                    <div className="message__sender" ref={props.lastMessageRef}>
                        <p>{message.time}</p>
                        <p>{message.content}</p>
                    </div>
                </>
            );
        if (
            message.fromSelf === false &&
            message.fromUser === props.selectedUser.username
        )
            return (
                <>

                    <div className="message__recipient" ref={props.lastMessageRef}>
                        <p>{message.time}</p>
                        <p>{message.content}</p>
                    </div>
                </>
            );
    });

    // receive private message from server
    socket.on("private message", ({ content, time, from }) => {
        let newMessages = {};
        for (let i = 0; i < props.connectedUsers.length; i++) {
            const user = props.connectedUsers[i];
            if (user.userID === from) {
                newMessages = {
                    fromUser: props.connectedUsers[i].username,
                    content,
                    time,
                    fromSelf: false,
                };
                const messagesList = [...props.messages, newMessages];
                props.setMessages(messagesList);
            }
        }
    });

    return (
        <>
            <header className="chat__mainHeader">
                <p>{props.selectedUser.username}</p>
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header>

            <div className="message__container">
                <div className="message__chats">
                    {showMessages}
                </div>
            </div>
        </>
    );
};

export default ChatBody;