import { PlusIcon } from '@heroicons/react/24/outline'
import React from 'react'

function ChatSidebar() {
  return (
      <div className='mr-4 ml-4 '>
      
       <div className="">
              <div className='flex mt-6 cursor-pointer  bg-gray-100 p-1 rounded-full pl-2 pr-2 justify-center'>
                  <h1 className=''>Start a new chat </h1>
                  <PlusIcon className='w-4 ml-2' />
              </div>

              <div className='mt-4 border border-gray-300 rounded-lg p-2 '>
                  <h1 className='ml-3 font-bold mb-3'>Chats - </h1>
                  <div className='h-96 overflow-y-scroll scrollbar-hide'>
                      <div className='flex items-center space-x-1 p-3 mt-4 hover:bg-gray-100 rounded-lg cursor-pointer mt-2' >

                          <div>
                              <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className=" w-8 h-8 rounded-full" />
                          </div>
                          <div>
                              <h1 className="text-sm font-bold">Elon Musk</h1>
                              <h1 className='text-xs'>@elonmusk</h1>
                          </div>
                      </div>
                      <div className='flex items-center space-x-1 p-3   hover:bg-gray-100 rounded-lg cursor-pointer mt-2' >

                          <div>
                              <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className=" w-8 h-8 rounded-full" />
                          </div>
                          <div>
                              <h1 className="text-sm font-bold">Elon Musk</h1>
                              <h1 className='text-xs'>@elonmusk</h1>
                          </div>
                      </div>
                      <div className='flex items-center space-x-1 p-3   hover:bg-gray-100 rounded-lg cursor-pointer mt-2' >

                          <div>
                              <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className=" w-8 h-8 rounded-full" />
                          </div>
                          <div>
                              <h1 className="text-sm font-bold">Elon Musk</h1>
                              <h1 className='text-xs'>@elonmusk</h1>
                          </div>
                      </div>
                      <div className='flex items-center space-x-1 p-3   hover:bg-gray-100 rounded-lg cursor-pointer mt-2' >

                          <div>
                              <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className=" w-8 h-8 rounded-full" />
                          </div>
                          <div>
                              <h1 className="text-sm font-bold">Elon Musk</h1>
                              <h1 className='text-xs'>@elonmusk</h1>
                          </div>
                      </div>
                      <div className='flex items-center space-x-1 p-3  hover:bg-gray-100 rounded-lg cursor-pointer mt-2' >

                          <div>
                              <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className=" w-8 h-8 rounded-full" />
                          </div>
                          <div>
                              <h1 className="text-sm font-bold">Elon Musk</h1>
                              <h1 className='text-xs'>@elonmusk</h1>
                          </div>
                      </div>
                 </div>
              </div>
       </div>
    </div>
  )
}

export default ChatSidebar