import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { StoryModalAtomState } from '../../atoms/StoryModalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { SelectedStoryAtom } from '../../atoms/SelectedStoryAtom'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { db } from '../../firebase'

function StoryPopupModal() {
    const [Open, setOpen] = useRecoilState(StoryModalAtomState)
    const [selectedStory, setSelectedStory] = useRecoilState(SelectedStoryAtom)
    const [data, setData] = useState([])

   
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
                                      {selectedStory}
                                  </Dialog.Title>
                                  <div className="mt-2">
                                     {data.map(info => {
                                       return(
                                           <div key={info.id}>
                                               <p>{info.data().username}</p>
                                           </div>
                                       )
                                     })}
                                  </div>

                                  <div className="mt-4">
                                      <button
                                          type="button"
                                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                          onClick={() => setOpen(false)}
                                      >
                                          Got it, thanks!
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

export default StoryPopupModal