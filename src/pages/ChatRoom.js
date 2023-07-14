import React, { useContext } from 'react'
import '../App.css'
import './chatRoom.css'
import { GlobelDate } from '../App'
import ChatBar from "../components/chatRoom_component/ChatBar ";
import ChatBody from "../components/chatRoom_component/ChatBody ";
import ChatFooter from "../components/chatRoom_component/ChatFooter ";


function ChatRoom() {
    return (
        // 原版
        // <div className='container'>
        //     <main className='d-flex'>
        //         {/* 顯示左側聊天室人員 */}
        //         <aside className='message-user'>
        //             {/* 顯示其他聊天人員 */}
        //             {allMessage.map((item, index) => (
        //                 <div key={index}>
        //                     {/* 只會顯示 ( 當前使用者 === receiveUser ) */}
        //                     {(currentUserID === item.receiveUser) &&
        //                         <div className='showOtherUser'>
        //                             <p>訊息發送者大頭貼 : {item.sendUserProfilePhoto}</p>
        //                             <p>訊息發送者 : {item.sendUser}</p>
        //                             <p>訊息 : {item.message}</p>
        //                             <span className='sendDate'>發送訊息時間 : {item.sendDate}</span>
        //                         </div>
        //                     }
        //                 </div>
        //             ))}
        //         </aside>

        //         {/* 右側聊天區 */}
        //         <div className='message-room'>
        //             {allMessage.map((item, index) => (
        //                 <div key={index} className='message-box'>
        //                     {/* 判斷發送訊息的是不是自己 */}
        //                     {item.sendUser === currentUserID ?
        //                         <p className='my-message'>
        //                             {item.message}
        //                         </p> :
        //                         <p className='other-message'>
        //                             {item.message}
        //                         </p>
        //                     }
        //                 </div>
        //             ))}
        //         </div>
        //     </main>
        // </div>

        // 新版
        <div className="chat">
            <ChatBar />
            <div className="chat__main">
                <ChatBody />
                {/* <ChatFooter socket={socket} /> */}
                <ChatFooter />
            </div>
        </div>
    )
}

export default ChatRoom