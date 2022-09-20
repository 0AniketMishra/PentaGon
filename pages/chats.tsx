import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Chat from '../components/Chat'
import ChatSidebar from '../components/ChatSidebar'
import Header from '../components/Header'
import MiniProfile from '../components/MiniProfile'
import Stories from '../components/Stories'
import Suggestions from '../components/Suggestions'
import Modal from '../components/Modal'
import { RecoilRoot } from "recoil"

function chats({userInfo}) {
  return (

   <div>
        <RecoilRoot>
        <Modal />
        <Header />
        <main className='grid grid-cols-1 md:grid-cols-10 lg:grid-cols-9 lg:max-w-7xl mx-auto'>
          {/* Stories  */}

          <section className="lg:col-span-2 md:col-span-3 ">
            {/* <h1 className="ml-8  mr-8 font-bold text-xl">#Stories</h1> */}

            <ChatSidebar />
          </section>
          <section className="lg:col-span-5 md:col-span-7">

            <Chat />
          </section>
          {/* Posts  */}
          <section className="hidden lg:inline-grid lg:cols-span-1">
            <div className="fixed top-20">
              <MiniProfile />
              <Suggestions />
            </div>

          </section>
        </main>
        </RecoilRoot>
   </div>
  
  )
}

export default chats