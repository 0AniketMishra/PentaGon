import { EllipsisVerticalIcon, FaceSmileIcon, PaperClipIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import { collection, onSnapshot, query } from 'firebase/firestore'
import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '../firebase'




function Chat() {
 
  return (
    <div className='mt-6 mr-4 border-r border-b border-t h-[82vh]'>
      <div className='flex   bg-white p-2   items-center justify-between'>
        <span className=' font-bold '>Udit</span>
        <div className='flex space-x-4'>
          <VideoCameraIcon className='w-6 h-6  hover:bg-gray-500 rounded-full p-1'/>
          <PhoneIcon className='w-6 h-6  hover:bg-gray-500 rounded-full p-1'/>
          <EllipsisVerticalIcon className='w-6 h-6  ml-4 hover:bg-gray-500 rounded-full p-1'/>
        </div>
        
      </div>
           
   <div className="">
        <div className='h-[76vh]  mb-6 flex  ml-2 items-end  justify-center '>
         <div className="flex items-center w-full ml-6 mr-6 mb-4">
           <FaceSmileIcon className='w-6' />
          <textarea  placeholder='Enter your message here' className='w-full outline-none border bg-gray-200 rounded-lg text-black p-2 ml-2 mr-2 h-10 scrollbar-hide ' />
          <PaperClipIcon className="w-6" />
         </div>
        </div>
      </div>
   </div>
  )
}

export default Chat