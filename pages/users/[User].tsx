import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import {doc, getDoc,  } from "firebase/firestore";
import {db}  from '../../firebase'
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import Suggestions from '../../components/Suggestions';

import { BellIcon, EllipsisHorizontalCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Moment from 'react-moment';


const User = (data) => {
    const router = useRouter()
    const pid  = router.query.User as string
    const [username, setUsername] = useState("")
    const [uid, setUid] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [timestamp, setTimestamp] = useState("")

      useEffect(() => {
          ;(async () => {
            const docRef = doc(db, 'users', pid); 
            const snapshots = await getDoc(docRef)
            const username = snapshots.data().username
            const photoURL = snapshots.data().photoURL
            const timestamp = snapshots.data().lastSeen.seconds
            console.log(timestamp)
            setUsername(username)
            setPhotoUrl(photoURL)
            setTimestamp(timestamp)

          })()
      }, [])
    
      
   
   

  

  
    return( 
      <div>
            <Header />
            <main className='grid grid-cols-1   lg:grid-cols-9 lg:max-w-7xl mx-auto'>
               
                <section className="lg:col-span-6 md:col-span-6 ">
                    <div className='rounded-lg'>
                        <div className=" bg-gray-200  mt-6   flex flex-wrap items-start  justify-center  ">
                            <div className=" w-full   bg-white  shadow-lg    transform   duration-200 easy-in-out">
                               
                               
                                <div className=" h-40 overflow-hidden" >
                                    <img className="w-full " src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                                   
                                </div>
                               
                                <div className="flex justify-between px-5  -mt-12">
                                    <img className="h-28 w-28 bg-white p-1 rounded-full  ml-4 " src={photoUrl} alt="" />
                                   <div className='flex space-x-4 '>
                                        {/* <EllipsisHorizontalCircleIcon className="w-8  mt-8 h-8 bg-white rounded-full"/> */}
                                        <button className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-20 h-10  mt-7 hover:text-blue-500  rounded-full p-1 hover:border-blue-500 font-bold '>Follow</button>
                                        
                                   </div>
                                </div>
                               
                                
                                <div className="">
                                    {/* If you want the text to be centered then add text-center in the div below */}
                                    <div className=" px-14">
                                       <div>
                                            <h2 className="text-gray-800 text-2xl font-bold">{username}</h2>
                                            <a className="text-gray-400 mt-2 hover:text-blue-500" target="BLANK()">@{username.replace(/\s+/g, " ").toLowerCase()}</a>
                                       </div>
                                       <div className="flex mt-2 items-center">
                                        <EyeIcon className="w-6 h-6 mr-1 "/>
                                        <h1>Last Seen : </h1>
                                        <h1> Dummy date</h1>
                                       </div>
                                       <div className="flex  space-x-10 mt-4 mb-4 font-bold"> 
                                         <h1>21 Following</h1>
                                         <h1>5.3M Followers</h1>
                                       </div>
                                        <p className="mt-2 text-gray-500 text-sm">Hey There! I am on PentaGon</p>
                                    </div>

                                    
                                    <hr className="mt-6" />
                                    <div className="flex  ">
                                        <div className="text-center w-1/2 p-4  cursor-pointer hover:bg-gray-100">
                                            <p className="font-semibold"><span >15 </span>Posts</p>
                                        </div>
                                        
                                        <div className="text-center w-1/2 p-4  cursor-pointer hover:bg-gray-100">
                                            <p className="font-semibold"> <span>2.0 k </span></p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="hidden lg:inline-grid lg:cols-span-3">
                    <div className="fixed top-20">
                        <MiniProfile />
                        <Suggestions />
                    </div>
                </section>
            </main>
      </div>
     
    )
}

export default User