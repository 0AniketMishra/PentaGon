import React, { useEffect, useState } from 'react'
import Post from './Post'
import {onSnapshot, collection, query, orderBy} from '@firebase/firestore'
import { db } from '../firebase';
import firebase from 'firebase/compat';


function Posts() {
  const [posts , setPosts] = useState([]);

  useEffect(
    () => 
 onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
  snapshot => {
      setPosts(snapshot.docs)
    }
    ),
    [db]
  );

  console.log(posts)

    
    

  

  return (
    <div>
      {posts.map((post) => (
        <Post 
        key={post.id}
        id={post.id}
        username={post.data().username}
        userImg={post.data().profileImg}
        img={post.data().image}
        posttext={post.data().posttext}
        />
      ))}
    </div>
    );
  
}

export default Posts


