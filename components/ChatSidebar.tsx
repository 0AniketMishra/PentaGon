import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'
import ChatHeader from './ChatHeader'
import { where, getDocs } from "firebase/firestore";

function ChatSidebar() {
  const [user] = useAuthState(auth);
  const [contacts, setContacts] = useState([])
  
  useEffect(() => onSnapshot(query(collection(db, 'users', user.uid, "Contacts")), snapshot =>
    setContacts(snapshot.docs)), [db])
  
    
  return (
    <div className=' mt-6 mb-8 ml-4 border-l border-t border-b  overflow-y-scroll scrollbar-hide bg-gray-100  h-[82vh]'>
        <ChatHeader />
         {contacts.map(contact => {
          return(
            <div key={contact.id} className='flex rounded-lg mb-4 ml-2 mr-2 p-2  hover:bg-gray-200 items-center'>

              <div>
                <img src={contact.data().profileImg} alt="" className=' border p-[1px] mt-2  bg-white w-12 h-12 rounded-full ' />
              </div>
              <div className=''>
                <h1 className='ml-1 font-bold text-black '>{contact.data().username}</h1>
                <h1 className='ml-1 text-black text-sm truncate w-40 '>This is a sample of a latest message </h1>
              </div>

            </div>
          )
         })} 
    </div>
  )
}

export default ChatSidebar