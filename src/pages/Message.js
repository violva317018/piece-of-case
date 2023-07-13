import React, { useContext } from 'react'
import '../App.css'
import './message.css'
import { GlobelDate } from '../App'

function Message() {
    // get 全域變數
    const { currentUserID } = useContext(GlobelDate)
    // 訊息假資料
    const allMessage = [
        {
            'sendUser': 'A01',
            'receiveUser': 'A02',
            'message': 'Hello',
        }, {
            'sendUser': 'A01',
            'receiveUser': 'A03',
            'message': 'Hello world',
        }, {
            'sendUser': 'A03',
            'receiveUser': 'A02',
            'message': 'bad boy',
        }
    ]
    return (
        <div className='container'>
            <main className='d-flex'>
                <aside className='message-user'>
                    oighoidrg
                </aside>
                <div className='message-room'>

                    {allMessage.map((item, index) => (
                        <div key={index}>
                            {/* 判斷發送訊息的是不是自己 */}
                            {item.sendUser === currentUserID ?
                                <div className='my-message'>
                                    {item.message}
                                </div> :
                                <div className='other-message'>
                                    {item.message}
                                </div>}
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

export default Message