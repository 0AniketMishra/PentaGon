import React from 'react'

function Contacts({
    username, 
    userImg, 
    uid, 
    addedFrom,
    email,
}) {
  return (
      <div className=''>

          <div className="">
              

              <div className='mt-4 border border-gray-300 rounded-lg p-2 '>
                  <h1 className='ml-3 font-bold mb-3'>Chats - </h1>
                  <div className='h-96 overflow-y-scroll scrollbar-hide'>
                      <div className='flex items-center space-x-1 p-3 mt-4 hover:bg-gray-100 rounded-lg cursor-pointer ' >

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

export default Contacts