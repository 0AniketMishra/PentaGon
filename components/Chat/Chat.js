import { ArrowLeftIcon, EllipsisVerticalIcon, FaceSmileIcon, PaperAirplaneIcon, PaperClipIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../../firebase'
import { useRecoilState } from 'recoil';
import { ChatAtomState } from '../../atoms/ChatAtom';
import firebase from '@firebase/app-compat';
import {orderBy } from '@firebase/firestore'


// Main Function Starts Here 

function Chat() {
  
  const [user] = useAuthState(auth);
  const [selectedChat, setSelectedChat] = useRecoilState(ChatAtomState)
  const [message, setMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([])
  const [selectedChatData, setSelectedChatData] = useState([])
  const [selectedPhotoURL, setSelectedPhotoURL] = useState([]) 

  const sendMessage = async (e) => {
    e.preventDefault();
    const messagetosend = message;
    setMessage('')

  
     

    await addDoc(collection(db, "userChat", user.uid, "Contacts", selectedChat, 'messages'), {
      message: messagetosend,
      username: user.displayName,
      userImage: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid
    })
    await addDoc(collection(db, "userChat", selectedChat, "Contacts", user.uid, 'messages'), {
      message: messagetosend,
      username: user.displayName,
      userImage: user.photoURL,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      uid: user.uid
    })
  }
   onSnapshot(query(collection(db, 'userChat', user.uid, "Contacts", selectedChat, "messages"), orderBy('timestamp')),
        snapshot => {
          setSentMessages(snapshot.docs)
        }
      ),
    [db]

    ; (async () => {
      const docRef = doc(db, 'users', selectedChat);
      const snapshots = await getDoc(docRef)
      const username = snapshots.data()?.username
      setSelectedChatData(username)
      const photoURL = snapshots.data()?.photoURL
      setSelectedPhotoURL(photoURL)


    })()
   
  

  return (
    <div>
      <div className='  hidden lg:block mt-6 mx-auto rounded-lg border w-[90%] h-[84vh]'>
        <div className='flex bg-gray-100 p-2  items-center justify-between'>
          {/* {contactInfo.map(info => {
         return( */}
          <div className="flex items-center space-x-2">
            <img src={selectedPhotoURL} className="w-8 h-8 rounded-full"/>
            <span className=' font-bold '>{selectedChatData}</span>
          </div>
          {/* )
       })} */}
          <div className='flex space-x-4 items-center'>
            <VideoCameraIcon onClick={fetch} className='w-4 h-4 ' />
            <PhoneIcon className='w-4 h-4' />
            <EllipsisVerticalIcon className='w-5 h-5  ml-4' />
          </div>
        </div>

        <div className="h-[68vh] overflow-y-scroll scrollbar-hide">



          {sentMessages.map(message => {
            return (
              <div key={message.id} className="">
                {user.uid === message.data().uid ? (
                  <div key={message.id}>
                    <div className=" flex justify-end ">
                      <h1 className='w-fit p-1 rounded-lg text-white font-semibold  mr-4 mt-2 bg-blue-900   '>{message.data().message}</h1>
                    </div>
                  </div>
                ) : (
                  <div >
                    <div className='flex justify-start'>
                      <h1 className='w-fit text-white font-semibold bg-gray-500 p-1 rounded-lg ml-4 mt-2'>{message.data().message}</h1>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          {/* {receivedMessages.map(message => {
          return (
            
          )
        })} */}



        </div>
        <div className="">
          <div className=' mb-6 flex  ml-2 items-end  justify-center '>
            <div className="flex items-center w-full ml-6 mr-6 mb-4">
              <div className="flex space-x-2">
                <FaceSmileIcon className='w-6' />
                <PaperClipIcon className="w-6" />
              </div>
              <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
              <PaperAirplaneIcon onClick={sendMessage} type='submit' className='mr-2 h-8 cursor-pointer'/>
              
            </div>
          </div>
        </div>
      </div>











      {selectedChat != "Undefined" && (
      <div className='lg:hidden  mt-6 mr-4 rounded-lg border ml-4 h-[82vh]'>
        <div className='flex bg-white p-2   items-center justify-between'>
          {/* {contactInfo.map(info => {
         return( */}
          <div className="flex space-x-2 items-center">
              <img src={selectedPhotoURL} className="w-8 h-8 rounded-full"/>
              <span className=' font-bold '>{selectedChatData}</span>
          </div>
          {/* )
       })} */}
          <div className='flex space-x-4'>
            <VideoCameraIcon onClick={fetch} className='w-6 h-6  hover:bg-gray-500 rounded-full p-1' />
            <PhoneIcon className='w-6 h-6  hover:bg-gray-500 rounded-full p-1' />
            <EllipsisVerticalIcon className='w-6 h-6  ml-4 hover:bg-gray-500 rounded-full p-1' />
          </div>
        </div>

        <div className="h-[68vh] overflow-y-scroll scrollbar-hide">



          {sentMessages.map(message => {
            return (
              <div key={message.id}>
                {user.uid === message.data().uid ? (
                  <div key={message.id}>
                    <div className=" flex justify-end ">
                      <h1 className='w-fit p-1 rounded-lg text-white font-semibold  mr-4 mt-2 bg-blue-900   '>{message.data().message}</h1>
                    </div>
                  </div>
                ) : (
                  <div >
                    <div className='flex justify-start'>
                      <h1 className='w-fit text-white font-semibold bg-gray-500 p-1 rounded-lg ml-4 mt-2'>{message.data().message}</h1>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          {/* {receivedMessages.map(message => {
          return (
            
          )
        })} */}



        </div>
        <div className="">
          <div className=' mb-6 flex  ml-2 items-end  justify-center '>
            <div className="flex items-center w-full ml-6 mr-6 mb-4">
              <FaceSmileIcon className='w-6' />
              <input value={message} onChange={e => setMessage(e.target.value)} placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
              <button onClick={sendMessage} type='submit' className='mr-2 bg-blue-900 text-white font-semibold p-1 rounded-lg'>Send</button>
              <PaperClipIcon className="w-6" />
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  )
}

export default Chat