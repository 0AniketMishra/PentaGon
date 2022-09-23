import { PlusIcon } from '@heroicons/react/24/outline'
import React, { useEffect } from 'react'
import { auth } from '../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { db } from '../firebase'
import { collection, doc,setDoc } from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRecoilState } from 'recoil';
import { chatModalState } from '../atoms/chatModalAtoms';
import { useState } from 'react';
import {useRef} from 'react'
import { getDocs, onSnapshot, query, where } from 'firebase/firestore';


function ChatSidebar() {
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(chatModalState)
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhotoURL, setNewPhotoURL] = useState("")
    const [newID, setNewID] = useState("")
    const [users, setUsers] = useState([])
    const [contacts, setContacts] = useState([])
    let newUser = useRef(null)


  
        // const newChat = async () => {
        //     db.collection('chats').doc(user.uid).set({
        //         email: user.email,
        //         lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
        //         photoURL: user.photoURL,
        //         username: user.displayName,
        //         phone: user.phoneNumber,
        //         uid: user.uid,
        //         slug: user.displayName.replace(/\s+/g, '').toLowerCase(),
        //         lowerUsername: '@' + user.displayName.replace(/\s+/g, '').toLowerCase()
        //     },
        //         { merge: true }); 


       
        //      setDoc(doc(db, "chats", user.uid, 'contacts', newUser.current.value, ), {
        //         uid : newID,
        //         addedFrom: newUser.current.value, 
        //         username: newUsername, 
        //         email: newEmail, 
        //         photoURL: newPhotoURL
        //         // photoURL: newuserdata.photoURL,
        //         // username: newuserdata.username,
        //         // uid: newuserdata.uid,
        //         // lowerUsername: newuserdata.lowerUsername
        //     });
          
        //             newUser = null
           
           useEffect(() => {
          ;(async () => {

              const q = query(collection(db, "users", user.uid, 'contacts'));

              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                  // doc.data() is never undefined for query doc snapshots
                  console.log(doc.id, " => ", doc.data());
              });
          })()
      }, [])
  

  return (
      <div className='mr-4 ml-4 ' >
          <div className='flex mt-6 cursor-pointer  bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-center' onClick={() => setOpen(true)} >
              <h1  className='bg-gray-100 outline-none' >Start a new chat..</h1>
              <PlusIcon  className='w-4 ml-2 ' />
          </div>
          {/* <h1 className='ml-3 font-bold mb-3 mt-4'>Chats - </h1> */}

          <div className='mt-4 border border-gray-300 rounded-lg p-2 '>
              <h1 className='ml-3 font-bold mb-3'>Contacts - </h1>
              <div className='h-96 overflow-y-scroll scrollbar-hide'>
                  <div className='flex items-center space-x-1  rounded-lg cursor-pointer ' >
                      {contacts.map(contact => {
                          return (
                             <div>
                                <h1>{contact.data().username}</h1>
                             </div>
                          )
                      })}
  
                      <div>
                         
                      </div>
                  </div>

              </div>
          </div>
       
         

        
      </div>
  )
}

export default ChatSidebar