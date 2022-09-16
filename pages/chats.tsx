import React from 'react'
import Header from '../components/Header'
function chats({userInfo}) {
  return (
    <div>
        <Header/>

        <h1>{userInfo}</h1>
    </div>
  )
}

export default chats