import React, { Fragment, useRef, useState } from 'react'
import { modalState } from '../atoms/modalAtom'
import { useRecoilState } from "recoil"
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon, CubeTransparentIcon } from '@heroicons/react/24/outline'
import { isTypedArray } from 'util/types'
import {db, storage} from '../firebase'
import {addDoc, collection, doc, updateDoc} from "@firebase/firestore"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import {ref, getDownloadURL, uploadString} from '@firebase/storage'


function Modal() {
    const [Open, setOpen] = useRecoilState(modalState)
    const filePickerRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef(null)
    const [loading, setLoading] = useState(false); 
    const [user] = useAuthState(auth);

    const uploadPost = async () => {
      if(loading) return; 
      setLoading(true)
      const docRef = await addDoc(collection(db, "posts"), {
        username: user.displayName, 
        posttext: captionRef.current.value, 
        profileImg: user.photoURL, 
          timestamp: firebase.firestore.FieldValue.serverTimestamp(), 
          uid: user.uid
      })

      console.log("New doc added wth ID", docRef.id); 
      const imageRef = ref(storage, `posts/${docRef.id}/image`)
      if(selectedFile){
          await uploadString(imageRef, selectedFile, "data_url").then(async snapshot => {
              const downloadURL = await getDownloadURL(imageRef)

              await updateDoc(doc(db, 'posts', docRef.id), {
                  image: downloadURL
              })
          }); 
      }

      setOpen(false)
      setLoading(false)
      setSelectedFile(null)
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }
    }
    
    return (
        <Transition.Root show={Open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                onClose={setOpen}
            >

                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4  px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                       <span
                       className="hidden sm:inline-block sm:align-middle sm:h-screen"
                       aria-hidden="true"
                       >
                        &#8203;
                       </span>
                       <Transition.Child 
                       as={Fragment}
                       enter="ease-out duration-300"
                       enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                       enterTo="opacity-100 translate-y-0 sm:scale-100"
                       leave="ease-in duration-200"
                       leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                       leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >

                        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all  sm:my-8 sm:align-middle sm:max-w-sm sm:w-full">
                            <div>

                                {selectedFile ? (
                                 <img src={selectedFile} onClick={() => setSelectedFile(null) 
                                } 
                                        className="w-full object-contain cursor-pointer" 
                                        alt="" />
                                ): (
                                    <div
                                            onClick = {() => filePickerRef.current.click()}
                                            className="mx-auto flex items-center justify-center h-12 w-12 rouned-full bg-red-100 rounded-full cursor-pointer"
                                    >
                                            <CameraIcon
                                                className="h-6 w-6 text-red-600 rounded-full"
                                                aria-hidden="true"
                                                />
                                    </div>
                                
                                )}

                                

                            <div className="mt-3 text-center sm:mt-5">
                                <Dialog.Title
                                as="h3"
                                className="text-lg leading-6 font-medium text-black "
                                >
                                    Upload a photo
                                </Dialog.Title>

                                <div>
                                    
                                    <input type="file"
                                    ref={filePickerRef}
                                     hidden
                                     onChange={addImageToPost}
                                     
                                    />
                                </div>

                                <div className="mt-2">
                                    <textarea  ref={captionRef}
                                    className='border rounded-lg outline-none focus:ring-0 w-full p-2' 
                                    placeholder="Say Something..."/>

                                </div>
                            </div>


                            



                                <div className="mt-5 sm:mt-6">
                                    
                                    <button
                                     type="button"
                                
                                    className="inline-flex justify-center w-full rounded-md border-transparent shadow-sm px-4 first-letter:
                                    py-2 bg-red-600 text-base cursor-pointer font-medium text-white hover:bg-red-700 focus:outline-none focus-ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm  "
                                    onClick={uploadPost}
                                    >
                                    {loading ? "Uploading..." : "Upload Post"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Transition.Child>
                     
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default Modal

function serverTimestamp(): any {
    throw new Error('Function not implemented.')
}
