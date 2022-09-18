import React from 'react'

function Chat() {
  return (
    <div>
          {/* <div className='h-full mt-6 '>
              <h1 className="flex-row flex-1">Hellooooo</h1>
          </div> */}
        <div className="hidden  md:inline-flex  w-[97%]  mt-6 rounded-lg   p-3">
              <div className='w-full flex items-center justify-center ' >
                <input type="text" className="w-96  mr-2 h-8 border border-black rounded-lg outline-none p-2" />
                <button className="bg-blue-900 font-bold p-1 pl-4 pr-4 rounded-lg text-white">Send </button>
            </div>

              <div>
                
              </div>
        </div>
    </div>
  )
}

export default Chat