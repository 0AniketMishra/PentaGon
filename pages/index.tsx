import React from 'react'
import Header from '../components/Header'
import Feed from '../components/Feed'
import Modal from '../components/Modal'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

function Home() {
 
  return (
    
    <div>
      <Head>
        <title>Home | PentaGon</title>
      </Head>

      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Modal />
        <Header/>
        <Feed/>
       
    </div>
  )
}

export default Home