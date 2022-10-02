import { EllipsisHorizontalCircleIcon, EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import React from 'react'

function Suggestions() {
  return (
    <div className='bg-white w-60 mt-4 p-2  rounded-xl'>
      <div>
        <h1 className='text-md font-semibold p-2'>People You May Know.</h1>
      </div>
      <div className='mt-4 p-1'>
        <div className="flex items-center space-x-2">
          <div>
            <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className='w-10 h-10 rounded-full' />
          </div>
          <div >
            <h1 className='font-bold text-sm'>Elon Musk</h1>
            <h1 className='text-sm'>@elonmusk</h1>
           
          
          </div>
      
        </div>
        <div className="flex mt-4 items-center space-x-2">
          <div>
            <img src="https://lh3.googleusercontent.com/a/AItbvmld8x4l-U0o2L28Ipg6VMny5NvPVM0sOjiqjlT8=s96-c" alt="" className='w-10 h-10 rounded-full' />
          </div>
          <div >
            <h1 className='font-bold text-sm'>Aniket Mishra</h1>
            <h1 className='text-sm'>@aniketmishra</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Suggestions