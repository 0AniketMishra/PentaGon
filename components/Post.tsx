import React, { useEffect, useState } from 'react'
import { ArrowsRightLeftIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import {

} from '@heroicons/react/24/solid'
import { onSnapshot, collection, addDoc,doc, deleteDoc, setDoc, query, orderBy } from '@firebase/firestore'
import { db } from '../firebase';
import firebase  from '@firebase/app-compat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';
import Moment from 'react-moment';
function Post(
  {
    id, 
    username, 
    userImg, 
    img, 
    posttext,
    timestamp
  }

) {
  const [user] = useAuthState(auth);
  const [comments, setComments] = useState([])
  const [comment , setComment] = useState("");
  const [likes, setLikes] = useState([])
  const [hasLiked, setHasLiked] = useState(false)

  useEffect(() => onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) => 
  setLikes(snapshot.docs)),[db, id]
  )


useEffect(() => {
  setHasLiked(likes.findIndex(like => like.id === user.uid) !== -1)
}, [likes])


  const likePost = async () => {
    if(hasLiked) {
       await deleteDoc(doc(db, 'posts', id, 'likes', user.uid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', user.uid), {
        username: user.displayName,
      });
    }
};


  useEffect(() => onSnapshot(query(collection(db, 'posts' , id , "comments"), orderBy('timestamp', 'desc')) , snapshot  => setComments(snapshot.docs)), [db, id])
  const sendComment = async (e) => {
    e.preventDefault();


    const commenttoSend = comment; 
    setComment('')



    await addDoc(collection(db, "posts", id,  'comments'), {
      comment: commenttoSend,
      username: user.displayName,
      userImage: user.photoURL, 
      timestamp: firebase.firestore.FieldValue.serverTimestamp(), 

    })

  }
  
  return (
  <div>
      <div className="ml-4 mr-4 mt-8 p-2 rounded-lg items-center border border-gray-200 lg:w-[85%]">

        <div className="flex items-center ">
          <div className="flex  items-center ">

            <div>
              <img src={userImg} alt="" className="w-12 h-12 rounded-full p-1 border mb-2" />
            </div>
            <div className=" items-center">
              <div className="flex items-center">
                <h1 className="font-bold ml-2 hover:border-b cursor-pointer ">{username}</h1>
                <img src="https://th.bing.com/th/id/R.9c88df48e24182943ba4945b92aa3704?rik=ng8QDZfIeaOAvg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgTeEegLRc.png&ehk=rFKFF6hVaGBnpA8yieOD6YZvrGTf6%2fiafNKrPlbD7a8%3d&risl=&pid=ImgRaw&r=0" className='w-4 ml-1 h-4' alt="" />

              </div>
              <div className="ml-2 flex">
                <h1 className="text-xs font-bold">@{username.replace(/\s+/g, '').toLowerCase()}</h1>
                <h1 className="text-xs ml-2">  <Moment fromNow>{timestamp.toDate()}</Moment></h1>
                {/* <h1 className="text-xs ml-2"><TimeAgo className='text-xs ml-2'date={timestamp}/></h1> */}

                

              </div>
            </div>






          </div>

          <h1 className="flex-1"></h1>
          <EllipsisHorizontalIcon className="h-6  mr-2 hover:scale-125   transition-all duration-150 ease-out" />

        </div>


        <div className="ml-4  mt-2 md:mr-4 ">
          <h1 className="lg:w-[90%] mb-4">{posttext}</h1>
          <div className="flex items-center space-x-4 p-2 " >

            <img src={img} alt="" className='w-96 rounded-lg ' />
          </div>
        </div>

        <div >
          <div className=" mt-4 p-1 flex space-x-8 ml-6  justify-between  mr-4 ">
            <div  className=" items-center hover:text-red-500  cursor-pointer hover:scale-125   transition-all duration-150 ease-out">
              {hasLiked ? (
                <div className='flex' onClick={likePost}>
                  <HeartIcon fill='red' className='h-6 text-red-500 ' />
                  <h1 className='ml-2'>{likes.length}</h1>
               </div>
              ): (
                <div>
                    <div className='flex' onClick={likePost}>
                      <HeartIcon  className='h-6 ' />
                      <h1 className='ml-2'>{likes.length}</h1>
                    </div>
                </div>
              )}
             
            </div>

            <div className="flex items-center hover:text-blue-500  hover:scale-125   transition-all duration-150 ease-out">
              <ChatBubbleOvalLeftEllipsisIcon className='h-6 ' />
              <h1 className='ml-2'>{comments.length}</h1>
            </div>
            <div className="flex items-center hover:text-purple-500  hover:scale-125   transition-all duration-150 ease-out">
              <ArrowsRightLeftIcon className='h-6 ' />
              <h1 className='ml-2'>3.2K</h1>
            </div>



            <ShareIcon className='h-6 hover:scale-125   transition-all duration-150 ease-out  hover:text-green-500' />
          </div>


          <div>
            <form action="" className="flex items-center p-4 mt-4  mb-4border-t">
              <FaceSmileIcon className='h-7' />
              <input
                type="text"
                value={comment}
                onChange={e => setComment(e.target.value)}
                placeholder='Add a comment...'
                className='border-none flex-1 focus:ring-0 outline-none ml-2'
              />
              <button disabled={!comment.trim()} type="submit" onClick={sendComment} className="font-semibold text-blue-400">Post </button>
            </form>

            {comments.length > 0 && (
              <div className='ml-2 items-center mt-2 h-28 overflow-y-scroll '>
                {comments.map(comment => (
                  <div key={comment.id} className=" space-x-2 mb-3 " >
                    <div className="flex items-center ">
                      <img src={comment.data().userImage} alt="" className='h-7 border  rounded-full' />
                      <span className="font-bold text-sm ml-2">{comment.data().username + " : "}</span>
                      <h1 className="flex-1"></h1>
                    <Moment className="text-xs ml-2" fromNow>{comment.data().timestamp?.toDate()}</Moment>
                    </div>
                
                    
                      <p className="mt-2 spacex-2">{comment.data().comment}</p>
                     
                    
                    </div>
                ))}
              </div>
            )}
          </div>


        </div>


      </div>

      
  </div>
  )
}

export default Post