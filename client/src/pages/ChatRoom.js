import React, { useState, useRef, useContext, useEffect } from "react";
import "../App.css";
import "./chatRoom.css";
import { GlobelDate } from "../App";
import ChatBar from "../components/chatRoom_component/ChatBar ";
import ChatBody from "../components/chatRoom_component/ChatBody ";
import ChatFooter from "../components/chatRoom_component/ChatFooter ";
import { useParams } from "react-router-dom";
import Chat from "../axios/Chat";

function ChatRoom(props) {
    // 取得 網址帶入的參數
    // const { chatid } = useParams(); // 被點擊【聊聊】的使用者
    // const { userID } = useContext(GlobelDate); // 全域變數儲存在App.js ， 從全域變數取得當前登入的使用者
    const [allUser, setAllUser] = useState([]); // 儲存所有使用者
    const [selectedUser, setSelectedUser] = useState({});
    const [selected, setSelected] = useState(false);
    const [currentChat, setCurrentChat] = useState([]); // So that any chat window is not rendered when app is loaded
    const [messages, setMessages] = useState({});
    const lastMessageRef = useRef(null);

    const currentUserID = JSON.parse(localStorage.getItem("userID"));


    useEffect(() => {
        // 👇️ scroll to bottom every time messages change
        lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        // 畫面一掛載時，將當前使用者ID傳入，並取得其他已聊過的人員資訊
        Chat.getChatOtherUser(currentUserID)
            .then((result) => {
                setAllUser(result['data']);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [currentUserID]);

    useEffect(() => {
        if (selected) {
        // 透過兩個人的 userID 取得兩個人的聊天紀錄
        Chat.getMessage(currentUserID, selectedUser.userID)
            .then((result) => {
                // for (let i = 0; i < result['data'].length; i++) {
                //     const chatData = result['data'][i];
                //     setCurrentChat(chatData)
                //     console.log('聊天紀錄', currentChat);
                // }
                console.log('聊天紀錄', result['data']);
                setCurrentChat(result['data']);
            })
            .catch((err) => {
                console.error(err);
            })
        }
    }, [selected, currentUserID, selectedUser]);

    return (
        <div className="chat">
            <ChatBar
                connectedUsers={props.connectedUsers}
                setSelectedUser={setSelectedUser}
                setSelected={setSelected}
                allUser={allUser}
            />
            <div className="chat__main">
                {
                    currentChat ? (
                        <>
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
                        </>
                    ) : (
                        <span className="chat__noRoom">
                            選取聊天用戶開啟談話吧!
                        </span>
                    )}
            </div>
        </div>
    );
}

export default ChatRoom;
