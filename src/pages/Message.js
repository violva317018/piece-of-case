import React, { useContext } from 'react'
import '../App.css'
import './message.css'
import { GlobelDate } from '../App'

function Message() {
    // get 全域變數
    const { currentUserID } = useContext(GlobelDate) // 當前使用者 A02
    // 訊息假資料
    const allMessage = [
        {
            'sendUser': 'A01',
            'sendUserProfilePhoto': 'A01',
            'receiveUser': 'A02',
            'message': 'Hello',
            'sendDate': '11:25'
        },
        {
            'sendUser': 'A01',
            'sendUserProfilePhoto': 'A01',
            'receiveUser': 'A03',
            'message': 'Hello world',
            'sendDate': '15:05'
        },
        {
            'sendUser': 'A02',
            'sendUserProfilePhoto': 'A03',
            'receiveUser': 'A01',
            'message': 'bad boy',
            'sendDate': '21:50'
        },
        {
            'sendUser': 'A03',
            'sendUserProfilePhoto': 'A03',
            'receiveUser': 'A02',
            'message': 'bad boy',
            'sendDate': '21:50'
        },

    ]
    return (
        <div className='container'>
            <main className='d-flex'>
                {/* 顯示左側聊天室人員 */}
                <aside className='message-user'>
                    {/* 顯示其他聊天人員 */}
                    {allMessage.map((item, index) => (
                        <div key={index}>
                            {/* 只會顯示 ( 當前使用者 === receiveUser ) */}
                            {(currentUserID === item.receiveUser) &&
                                <div className='showOtherUser'>
                                    <p>訊息發送者大頭貼 : {item.sendUserProfilePhoto}</p>
                                    <p>訊息發送者 : {item.sendUser}</p>
                                    <p>訊息 : {item.message}</p>
                                    <span className='sendDate'>發送訊息時間 : {item.sendDate}</span>
                                </div>
                            }
                        </div>
                    ))}
                </aside>

                {/* 右側聊天區 */}
                <div className='message-room'>
                    {allMessage.map((item, index) => (
                        <div key={index} className='message-box'>
                            {/* 判斷發送訊息的是不是自己 */}
                            {item.sendUser === currentUserID ?
                                <p className='my-message'>
                                    {item.message}
                                </p> :
                                <p className='other-message'>
                                    {item.message}
                                </p>
                            }
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Message