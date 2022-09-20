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
import Contacts from './Contacts';

function ChatSidebar() {
    const [user] = useAuthState(auth);
    const [Open, setOpen] = useRecoilState(chatModalState)
    const [newUsername, setNewUsername] = useState("")
    const [newEmail, setNewEmail] = useState("")
    const [newPhotoURL, setNewPhotoURL] = useState("")
    const [newID, setNewID] = useState("")
    const [contacts, setContacts] = useState([])
    let newUser = useRef(null)

  useEffect(() => {
      ; (async () => {
     
 

      })()
})  
  
        const newChat = async () => {
            db.collection('chats').doc(user.uid).set({
                email: user.email,
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
                photoURL: user.photoURL,
                username: user.displayName,
                phone: user.phoneNumber,
                uid: user.uid,
                slug: user.displayName.replace(/\s+/g, '').toLowerCase(),
                lowerUsername: '@' + user.displayName.replace(/\s+/g, '').toLowerCase()
            },
                { merge: true }); 


            const docRef = collection(db, "users");
            const snapshots = query(docRef, where("lowerUsername", "==", newUser.current.value));
            const querySnapshot = await getDocs(snapshots);
            querySnapshot.forEach((Newuser) => {
                setNewID(Newuser.data().uid)
                setNewUsername(Newuser.data().username)
                setNewEmail(Newuser.data().email)
                setNewPhotoURL(Newuser.data().photoURL)
            })
       
             setDoc(doc(db, "chats", user.uid, 'contacts', newUser.current.value, ), {
                uid : newID,
                addedFrom: newUser.current.value, 
                username: newUsername, 
                email: newEmail, 
                photoURL: newPhotoURL
                // photoURL: newuserdata.photoURL,
                // username: newuserdata.username,
                // uid: newuserdata.uid,
                // lowerUsername: newuserdata.lowerUsername
            });
         }
    

  return (
      <div className='mr-4 ml-4 '>
          <div className='flex mt-6 cursor-pointer  bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-between'>
              <input ref={newUser} type="text" placeholder='Start a new Chat' className='bg-gray-100 outline-none' />
              <PlusIcon onClick={newChat} className='w-4 ml-2 ' />
          </div>
        <Contacts username={undefined} userImg={undefined} uid={undefined} addedFrom={undefined} email={undefined}/>
        
          {contacts.map((contact) => (
              <Contacts
                  key={contact.id}
                  username={contact.data().username}
                  userImg={contact.data().profileImg}
                  uid={contact.data().uid}
                  addedFrom={contact.data().addedFrom}
                  email={contact.data().email}
              />
          ))}
      </div>
  )
}

export default ChatSidebar