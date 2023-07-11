import React from 'react'
import './userinfo.css'

function UserInfo() {
  return (
    <div className='user-info'>
      {/* 案主資訊 */}
      <h1 className='text-center '>案主資訊</h1>
      <div className='d-flex justify-content-evenly'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPsxapGtZ2ZF9bbIB_w4Htfi6Del7RBJs-uQ&usqp=CAU' width={'100'} alt='img' />
        <div className='profile-info'>
          <p>XXX股份有限公司</p>
          <p>邱先生</p>

        </div>
      </div>
      <p>案主自介............................</p>
      {/* 自我推薦 */}
      <div className="input-group input-group-lg" >
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{ padding: '0' }}>自我推薦</span>
        <textarea type="text" rows={'5'} style={{ padding: '0', margin: 0 }} className="form-control" ></textarea>
      </div>
      {/* 報價金額 */}
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg" style={{ padding: '0' }}>報價金額</span>
        <input type="text" style={{ padding: '0', margin: 0 }} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
      </div>
      {/* 我要報價 */}
      <button type="button" className="btn btn-secondary">我要報價</button>
    </div>
  )
}

export default UserInfo