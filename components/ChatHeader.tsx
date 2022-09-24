import React from 'react'

function ChatHeader() {
  return (
      <div className='ml-2 p-2 sticky top-0 bg-gray-100'>
          <div>
              <h1 className=' text-black font-bold justify-between'>Contacts - </h1>
          </div>
          <div className='m-2 '>
            <input type="text" placeholder='Search Contacts' className='mr-4 bg-transparent w-full  outline-none' />
          </div>
  </div>
  )
}

export default ChatHeader