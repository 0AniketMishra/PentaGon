import React, { useEffect } from 'react'
import { Fragment, useRef, useState } from 'react'

import { useRecoilState } from "recoil"
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon, CubeTransparentIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { isTypedArray } from 'util/types'
import { db, storage } from '../firebase'
import { addDoc, collection, doc, updateDoc } from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { ref, getDownloadURL, uploadString } from '@firebase/storage'
import toast from 'react-hot-toast'
import { chatModalState } from '../atoms/chatModalAtoms'
import { onSnapshot, query } from 'firebase/firestore'


function ChatModal() {
    const [Open, setOpen] = useRecoilState(chatModalState)
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([])


    useEffect(() => {
        ; (async () => {
            onSnapshot(query(collection(db, 'users')),
                snapshot => {
                    setUsers(snapshot.docs)
                }
            ),
                [db]
        })()
    })  


  return (
      <div>
          

          <Transition appear show={Open} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                  <Transition.Child
                      as={Fragment}
                      enter="ease-out duration-300"
                      enterFrom="opacity-0"
                      enterTo="opacity-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                  >
                      <div className="fixed inset-0 bg-black bg-opacity-25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                      <div className="flex min-h-full items-center justify-center p-4 text-center">
                          <Transition.Child
                              as={Fragment}
                              enter="ease-out duration-300"
                              enterFrom="opacity-0 scale-95"
                              enterTo="opacity-100 scale-100"
                              leave="ease-in duration-200"
                              leaveFrom="opacity-100 scale-100"
                              leaveTo="opacity-0 scale-95"
                          >
                              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                  <Dialog.Title
                                      as="h3"
                                      className="text-lg font-medium leading-6 text-gray-900"
                                  >
                                      Search Users
                                  </Dialog.Title>
                                  <div className="mt-2 flex  space-x-2 bg-transparent p-1 rounded-full text-center ">
                                      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                      <input type="text" placeholder='Search-PenaGon' className='bg-transparent lg:w-80  w-36 outline-none  ' />
                                  </div>
                                  <div className="mt-4 max-h-96 overflow-y-scroll scrollbar-hide">

                                          
                                

                                              {users.map(user => {
                                                  return (
                                                      <div className="mt-4 flex  items-center hover:bg-gray-100 p-2 rounded-lg">
                                              <div className="">
                                                <img src={user.data().photoURL} alt="" className='w-12 border p-1 rounded-full mr-2 '/>
                                              </div>
                                              <div>
                                                              <h1 className='font-bold text-sm'>{user.data().username}</h1>
                                                              <h1 className="text-xs">{user.data().lowerUsername}</h1> 
                                              </div>
                                                          <h1 className="flex-1"></h1>
                                                          <div>
                                                              <button className='text-xs font-bold bg-blue-900 text-white pb-1 pt-1 rounded-lg pl-2 pr-2'>Message</button>

                                                          </div>
                                             </div>
                                                  )
                                                  })}
                                      
                                         
                                      </div>
                                  

                                  {/* <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={() => setOpen(true)}
                                      >
                                          Got it, thanks!
                                      </button>
                                  </div> */}
                              </Dialog.Panel>
                          </Transition.Child>
                      </div>
                  </div>
              </Dialog>
          </Transition>
      </div>
  )
}

export default ChatModal