import React, { useState, useRef, useContext, useEffect } from 'react'
import '../App.css'
import './chatRoom.css'
import { GlobelDate } from '../App'
import ChatBar from "../components/chatRoom_component/ChatBar ";
import ChatBody from "../components/chatRoom_component/ChatBody ";
import ChatFooter from "../components/chatRoom_component/ChatFooter ";
import { useParams } from 'react-router-dom';
import Chat from '../axios/Chat';


function ChatRoom(props) {
    // 取得 網址帶入的參數
    const { chatid } = useParams(); // 被點擊【聊聊】的使用者
    const { userID } = useContext(GlobelDate) // 取得當前登入的使用者
    const [allUser, setAllUser] = useState([]); // 儲存所有使用者

    const [selectedUser, setSelectedUser] = useState({});
    const [userSelected, setUserSelected] = useState(false); // So that any chat window is not rendered when app is loaded
    const [messages, setMessages] = useState([]);
    const lastMessageRef = useRef(null);
    // console.log("in ChatPage", props.connectedUsers);

    const getSelectedUser = (user) => {
        setSelectedUser(user);
        setUserSelected(true);
        console.log("In ChatPage, selected user:", user);
    };
    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        Chat.getChatOtherUser(JSON.parse(localStorage.getItem('userID'))).then((result) => { setAllUser(result) }).catch((err) => { console.error(err) })

        // get all user info

    }, [messages]);
    return (

        <div className="chat">
            <ChatBar
                connectedUsers={props.connectedUsers}
                selectUser={getSelectedUser}
                allUser={allUser}
            />
            <div className="chat__main">
                <ChatBody
                    selectedUser={selectedUser}
                    connectedUsers={props.connectedUsers}
                    messages={messages}
                    setMessages={setMessages}
                    lastMessageRef={lastMessageRef}
                />
                <ChatFooter
                    selectedUser={selectedUser}
                    connectedUsers={props.connectedUsers}
                    messages={messages}
                    setMessages={setMessages}
                />
            </div>
        </div>
    )
}

export default ChatRoom