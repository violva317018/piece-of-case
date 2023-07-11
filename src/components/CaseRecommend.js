import React, { useContext, useState } from 'react'
import './caseRecommend.css'
import { GlobelDate } from '../App'

function CaseRecommend() {
    //    從 【GlobelDate】取得變數
    const { aID, bID } = useContext(GlobelDate)
    // 目前使用者id === 建案子的使用者id
    const [userEqual, useUserEqual] = useState(aID === bID)
    console.log(userEqual)
    // 推薦案子 ， 從後端API取得
    const recommendCases = [
        {
            title: '案件標題',
            place: '地點',
            deadline: '時間',
            price: '預算金額',
        },
        {
            title: '案件標題',
            place: '地點',
            deadline: '時間',
            price: '預算金額',
        },
        {
            title: '案件標題',
            place: '地點',
            deadline: '時間',
            price: '預算金額',
        },
        {
            title: '案件標題',
            place: '地點',
            deadline: '時間',
            price: '預算金額',
        },
    ]
    // 推薦案子 ， 從後端API取得
    const quote = [
        {
            name: 'A猿人',
            price: '2000',
        },
        {
            name: 'B人猿',
            price: '1000',
        },
        {
            name: 'C猩猩',
            price: '5500',
        },

    ]
    return (
        <div className='recommend'>
            <div className='recommend-tile'>
                <h1>
                    {userEqual ? '報價人員' : '為您推薦案子'}
                </h1>
            </div>
            <div className='recommend-content'>
                {/* 三元表達式 假如【userEqual】為【True】就執行【:】前面，反之【userEqual】為【False】就執行【:】後面 */}
                {userEqual ?
                    // 以案主身分查看自己的提案
                    <>{quote.map((item, index) => (
                        <div className='recommend-content-box' key={index}>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}</> :
                    // 以接案者身分查看案件
                    <>{recommendCases.map((item, index) => (
                        <div className='recommend-content-box' key={index}>
                            <p>{item.title}</p>
                            <p>{item.place}</p>
                            <p>{item.deadline}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}</>}
                {/* 渲染 recommendCases 內的案件，要使用<Link> */}

            </div>
        </div>
    )
}

export default CaseRecommend