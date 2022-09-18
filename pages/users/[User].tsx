import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import {doc, getDoc, onSnapshot, collection, deleteDoc, setDoc, query} from "firebase/firestore";
import {db}  from '../../firebase'
import Header from '../../components/Header';
import MiniProfile from '../../components/MiniProfile';
import Suggestions from '../../components/Suggestions';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import { BellIcon, EllipsisHorizontalCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import Moment from 'react-moment';
import { Tab } from '@headlessui/react';


const User = (data) => {
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
   
    let [categories] = useState({
        Posts: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                date: '5h ago',
                commentCount: 5,
                shareCount: 2,
            },
            {
                id: 2,
                title: "So you've bought coffee... now what?",
                date: '2h ago',
                commentCount: 3,
                shareCount: 2,
            },
        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
        ],
        Trending: [
            {
                id: 1,
                title: 'Ask Me Anything: 10 answers to your questions about coffee',
                date: '2d ago',
                commentCount: 9,
                shareCount: 5,
            },
            {
                id: 2,
                title: "The worst advice we've ever heard about coffee",
                date: '4d ago',
                commentCount: 1,
                shareCount: 2,
            },
        ],
    })
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
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

                                            {!hasFollowed ? (
                                                <div className='flex' >
                                                    <button onClick={followUser} className='hover:bg-white border-blue-500 border bg-blue-500 text-white w-20 h-10  mt-7 hover:text-blue-500  rounded-full p-1 hover:border-blue-500 font-bold '>Follow</button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <button onClick={followUser} className='hover:bg-red-500 border-blue-500 border bg-blue-500 text-white w-24 h-10  mt-7 hover:text-white  rounded-full p-1 hover:border-red-500 font-bold '>Following</button>
                                                </div>
                                            )}
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
                                        <div className="w-full  px-2  sm:px-0 ml-12 mr-12">
                                            <Tab.Group>
                                                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900 p-1">
                                                    {Object.keys(categories).map((category) => (
                                                        <Tab
                                                            key={category}
                                                            className={({ selected }) =>
                                                                classNames(
                                                                    'w-full   rounded-lg py-2.5 text-sm font-bold ',
                                                                    ' ',
                                                                    selected
                                                                        ? 'bg-white shadow'
                                                                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                                                )
                                                            }
                                                        >
                                                            {category}
                                                        </Tab>
                                                    ))}
                                                </Tab.List>
                                                <Tab.Panels className="mt-2">
                                                    {Object.values(categories).map((posts, idx) => (
                                                        <Tab.Panel
                                                            key={idx}
                                                            className={classNames(
                                                                'rounded-xl bg-white p-3',
                                                                'ring-white ring-opacity-60 ring-offset-2 focus:outline-none focus:ring-2'
                                                            )}
                                                        >
                                                            <ul>
                                                                {posts.map((post) => (
                                                                    <li
                                                                        key={post.id}
                                                                        className="relative rounded-md p-3 hover:bg-gray-100"
                                                                    >
                                                                        <h3 className="text-sm font-medium leading-5">
                                                                            {post.title}
                                                                        </h3>

                                                                        <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                                            <li>{post.date}</li>
                                                                            <li>&middot;</li>
                                                                            <li>{post.commentCount} comments</li>
                                                                            <li>&middot;</li>
                                                                            <li>{post.shareCount} shares</li>
                                                                        </ul>

                                                                        <a
                                                                            href="#"
                                                                            className={classNames(
                                                                                'absolute inset-0 rounded-md',
                                                                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                                            )}
                                                                        />
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </Tab.Panel>
                                                    ))}
                                                </Tab.Panels>
                                            </Tab.Group>
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