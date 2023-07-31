import "./chatRoom.css";
import React, { useState, useRef, useEffect } from "react";
import User from "../components/chatRoom_component/user/User"
import Message from "../components/chatRoom_component/message/Message"
import Chat from "../axios/Chat";
import { io } from "socket.io-client";

function ChatRoom(props) {
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(null);
    const [arrivalMessage, setArrivalMessage] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const socket = useRef(io("http://localhost:4000"))
    const scrollRef = useRef();
    const currentUserID = JSON.parse(localStorage.getItem("userID"));

    // 對方傳來訊息(透過socket.io)
    useEffect(() => {
        socket.current = io("http://localhost:4000");
        socket.current.on("getMessage", data => {
            setArrivalMessage({
                fromID: data.senderId,
                message: data.text,
            })
        })
    });

    useEffect(() => {
        if (arrivalMessage && currentChat.userID === arrivalMessage.fromID) {
            setMessages((prev) => [...prev, arrivalMessage])
        }
    }, [arrivalMessage, currentChat]);

    // 用戶上線
    useEffect(() => {
        socket.current.emit("addUser", currentUserID);
        socket.current.on("getUsers", (users) => {
            setOnlineUsers(users);
        })
    }, [currentUserID]);

    useEffect(() => {
        console.log("onlineUsers", onlineUsers);
    }, [onlineUsers]);

    // 訊息滾動至最新一筆
    useEffect(() => {
        scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // 畫面一掛載時，將當前使用者ID傳入，並取得其他已聊過的人員資訊
    useEffect(() => {
        Chat.getChatOtherUser(currentUserID)
            .then((res) => {
                setConversations(res['data']);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [currentUserID]);

    // 得到兩人之間的歷史訊息
    useEffect(() => {
        if (currentChat !== null) {
            Chat.getMessage(currentUserID, currentChat.userID)
                .then((res) => {
                    setMessages(res['data']);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [currentChat]);

    // 按下 Send 傳送訊息
    const handleSubmit = (e) => {
        e.preventDefault();

        socket.current.emit("sendMessage", {
            senderId: currentUserID,
            receiverId: currentChat.userID,
            text: newMessage,
        })

        Chat.sendMessage(currentUserID, currentChat.userID, newMessage, null)
            .then((res) => {
                setMessages([...messages, res['data']]); // ! 還未能獲取最新一筆剛傳入的訊息 procedure?
            })
            .catch((err) => {
                console.error(err);
            });
    }


    return (
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                    <input placeholder="Search for friends" className="chatMenuInput" />
                    {conversations.map((c) => (
                        <div onClick={() => setCurrentChat(c)}>
                            <User user={c} online={onlineUsers.some((o) => c.userID === o.userId)} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                    {currentChat ? (
                        <>
                            <div className="chatBoxTop">
                                {messages.map((m) => (
                                    <div ref={scrollRef}>
                                        <Message message={m} own={m.fromID === currentUserID} />
                                    </div>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea
                                    className="chatMessageInput"
                                    placeholder="write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>
                                    Send
                                </button>
                            </div>
                        </>
                    ) : (
                        <span className="noConversationText">
                            Open a conversation to start a chat.
                        </span>
                    )}
                </div>
            </div>

        </div>
    );
}

export default ChatRoom;
