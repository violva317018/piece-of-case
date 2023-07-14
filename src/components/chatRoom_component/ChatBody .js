import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobelDate } from '../../App';

const ChatBody = () => {
    const navigate = useNavigate();
    const { currentUserID } = useContext(GlobelDate) // 當前使用者 A02

    const handleLeaveChat = () => {
        localStorage.removeItem('userName');
        navigate('/');
        window.location.reload();
    };
    // 訊息假資料
    const allMessage = [
        {
            'sender': 'A01',
            'senderProfilePhoto': 'A01',
            'recipient': 'A02',
            'recipientProfilePhoto': 'A02',
            'message': 'Hello',
            'sendDate': '11:25'
        },
        {
            'sender': 'A01',
            'senderProfilePhoto': 'A01',
            'recipient': 'A03',
            'recipientProfilePhoto': 'A03',
            'message': 'Hello world',
            'sendDate': '15:05'
        },
        {
            'sender': 'A02',
            'senderProfilePhoto': 'A02',
            'recipient': 'A03',
            'recipientProfilePhoto': 'A03',
            'message': 'bad boy',
            'sendDate': '21:50'
        },
        {
            'sender': 'A02',
            'senderProfilePhoto': 'A02',
            'recipient': 'A01',
            'recipientProfilePhoto': 'A01',
            'message': 'good boy',
            'sendDate': '21:50'
        },

    ]
    return (
        <div className='chat-content'>
            {/* <header className="chat__mainHeader">
                <p>Hangout with Colleagues</p>
                <button className="leaveChat__btn" onClick={handleLeaveChat}>
                    LEAVE CHAT
                </button>
            </header> */}

            {/*This shows messages sent from you*/}
            {/* 判別 sender  */}
            {allMessage.map((message, index) => (
                <div className="message__chats" key={index}>
                    <p>{message.sender === currentUserID ? 'me' : 'other'}</p>
                    <div className={message.sender === currentUserID ? "message__sender" : "message__recipient"}>
                        <p>{message.message}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default ChatBody;