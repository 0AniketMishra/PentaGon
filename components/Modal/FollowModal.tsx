import React from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useRecoilState } from 'recoil'
import { followState } from '../../atoms/followAtom'
import { pidState } from '../../atoms/pidAtom'
import {useEffect} from 'react'
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore'
import { auth, db } from '../../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

function FollowModal() {
    const [user] = useAuthState(auth);
    const [followOpen, setFollowOpen] = useRecoilState(followState)
    const [pidValue, setPidValue] = useRecoilState(pidState)
    const [following, setFollowing] = useState([])
    const [ followers, setFollowers ] = useState([])
    const [uid, setUid] = useState("")
    const [username, setUsername] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
   
    useEffect(() => onSnapshot(collection(db, 'users', user.uid, 'following'), (snapshot) =>
        setFollowing(snapshot.docs)), [db]
    )
    useEffect(() => onSnapshot(collection(db, 'users', user.uid, 'followers'), (snapshot) =>
        setFollowers(snapshot.docs)), [db]
    )
    useEffect(() => {
        ; (async () => {
            const docRef = doc(db, 'users', pidValue);
            const snapshots = await getDoc(docRef)
            const username = snapshots.data().username
            const photoURL = snapshots.data().photoURL
            const uid = snapshots.data().uid
            setUid(uid)
            setUsername(username)
            setPhotoUrl(photoURL)
        })()
    }, [])
  return (
    <div>
          <Transition appear show={followOpen} as={Fragment}>
              <Dialog as="div" className="relative z-10" onClose={() => setFollowOpen(false)}>
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
                                    <div className='flex items-center space-x-2'>
                                        <img src={photoUrl} alt="" className='w-10 h-10 rounded-full'/>
                                        <div>
                                              <h1>{username}</h1>
                                              <p className='text-sm text-gray-500'>@{username.replace(/\s+/g, '').toLowerCase()}</p>
                                        </div>
                                    </div>
                                  </Dialog.Title>
                                  <div className="mt-2">
                                      
                                      <div className="max-w-xl ">
                                          <div className=" p-3 rounded-md flex h-14 items-center">
                                              <div className=' hidden lg:inline-flex space-x-2  p-2 rounded-full px-2  justify-center '>
                                                  <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                                                  <input type="text" placeholder='Search' className='bg-transparent lg:w-80  w-36 outline-none  ' />
                                              </div>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={() => setFollowOpen(false)}
                                      >
                                          Close
                                      </button>
                                  </div>
                              </Dialog.Panel>
                          </Transition.Child>
                      </div>
                  </div>
              </Dialog>
          </Transition>
    </div>
  )
}

export default FollowModal