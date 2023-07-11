import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='home'>
      <div className='container h-100'>
        <div className='d-flex' style={{ height: '80%' }}>
          <Link to='/proposal' className='get-case case-box d-flex'>提案</Link>
          <Link to='/allCase' className='send-case case-box d-flex'>接案畫面</Link>
        </div>
        <div className='d-flex'>最方便、快速的接案平台</div>
      </div>
    </div>
  )
}

export default Home