import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import {doc, getDoc, onSnapshot, collection, deleteDoc, setDoc, query, where, getDocs} from "firebase/firestore";
import {db}  from '../../firebase'
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import Suggestions from '../../components/Suggestions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { BellIcon, EllipsisHorizontalCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Moment from 'react-moment';
import { Tab } from '@headlessui/react';


const User = (data,  {
    id,
}) => {
    const router = useRouter()
    const pid  = router.query.User as string
    const [username, setUsername] = useState("")
    const [uid, setUid] = useState("")
    const [photoUrl, setPhotoUrl] = useState("")
    const [timestamp, setTimestamp] = useState("")
    const [followers, setFollowers] = useState([])
    const [hasFollowed, setHasFollowed] = useState(false)
    const [following, setFollowing] = useState([])
    const [user] = useAuthState(auth);
    const [userPost, setUserPost] = useState([])

      useEffect(() => {
          ;(async () => {
            const docRef = doc(db, 'users', pid); 
            const snapshots = await getDoc(docRef)
            const username = snapshots.data().username
            const photoURL = snapshots.data().photoURL
            
            setUsername(username)
            setPhotoUrl(photoURL)
            setTimestamp(timestamp)

          })()
      }, [])

    useEffect(() => {
        ;(async () => {
            const docRef = collection(db, "posts");
            const snapshots = query(docRef, where("uid", "==", pid));
            const querySnapshot = await getDocs(snapshots);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });

        })
    })
    
    useEffect(() => onSnapshot(collection(db, 'users', pid, 'followers'), (snapshot) =>
        setFollowers(snapshot.docs)), [db]
    )
    useEffect(() => {
        setHasFollowed(followers.findIndex(follower => follower.id === user.uid) !== -1)
    }, [followers])



    const followUser = async () => {
      
        if (hasFollowed && pid!=user.uid) {
            await deleteDoc(doc(db, 'users', pid ,  'followers', user.uid));
        } else {

            await setDoc(doc(db, 'users', pid , 'followers', user.uid), {
                username: user.displayName,
            });
             setHasFollowed(false)
        }
    };
   
  const ContactUser = async () => {
    console.log("I am working!!")
      await setDoc(doc(db, 'users', user.uid, 'Contacts', pid), {
          username: username,
          profileImg: photoUrl,
          lowerUsername: '@' + username.replace(/\s+/g, '').toLowerCase()
      }, { merge: true });
  }

  
    return( 
      <div>
            <Header />
            <main className='grid grid-cols-1   lg:grid-cols-9 lg:max-w-7xl mx-auto'>
               
                <section className="lg:col-span-6 md:col-span-6 ">
                    <div className='rounded-lg'>
                        <div className=" bg-gray-200  mt-6   flex   justify-center  ">
                            <div className=" w-full   bg-white  shadow-lg  ">
                               
                               
                                <div className=" h-48 overflow-hidden" >
                                    <img className="w-full " src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                                   
                                </div>
                               
                                <div className="flex justify-between px-5  -mt-12">
                                    <img className="h-28 w-28 bg-white p-1 rounded-full  ml-4 " src={photoUrl} alt="" />
                                    {pid != user.uid && (
                                        <div className='flex space-x-4 '>
                                            {/* <EllipsisHorizontalCircleIcon className="w-8  mt-8 h-8 bg-white rounded-full"/> */}
                                            <button onClick={ContactUser} className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-24 h-10  mt-7 hover:text-green-500  rounded-full p-1 hover:border-green-500 font-bold '>Message</button>
                                      
                                                <div className='flex' >
                                                <button onClick={followUser} className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-20 h-10  mt-7 hover:text-blue-500  rounded-full p-1 hover:border-blue-500 font-bold '> {hasFollowed ? "Following" : "Follow"}</button>
                                                </div>
                                          

                                           
                                        </div>
                                    )}
                                </div>
                               
                                
                                <div className="">
                                    {/* If you want the text to be centered then add text-center in the div below */}
                                    <div className=" px-14">
                                       <div>
                                            <h2 className="text-gray-800 text-xl font-bold">{username}</h2>
                                            <a className="text-gray-400 mt-2 hover:text-blue-500" target="BLANK()">@{username.replace(/\s+/g, " ").toLowerCase()}</a>
                                       </div>
                                       <div className="flex mt-2 items-center">
                                        <EyeIcon className="w-6 h-6 mr-1 "/>
                                        <h1>Last Seen : </h1>
                                        <h1> Dummy date</h1>
                                       </div>
                                       <div className="flex  space-x-10 mt-4 mb-4 font-bold"> 
                                         <h1>21 Following</h1>
                                         <h1>{followers.length} Followers</h1>
                                       </div>
                                        <p className="mt-2 text-gray-500 text-sm">Hey There! I am on PentaGon</p>
                                    </div>

                                    
                                  
                                    <div className="flex mt-6 ">
                                       

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