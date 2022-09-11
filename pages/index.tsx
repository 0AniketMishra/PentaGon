import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'

function Home() {
  
  return (
    <div>
      <Modal />
        <Header/>
        <Feed/>
       
    </div>
  )
}

export default Home