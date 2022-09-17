import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { collection, query, where,doc, getDocs, connectFirestoreEmulator, getDoc, onSnapshot, getDocFromCache,  } from "firebase/firestore";
import {db}  from '../../firebase'
// import Profile from '../../components/profile';


const User = (docSnap) => {
    const router = useRouter()
    const pid  = router.query.User as string
    const [items, setItems] = useState([])

      useEffect(() => {
          const getUser = async () => {
              const docRef = doc(db, "users", pid);
              const docSnap = await getDoc(docRef);
              const item = docSnap.data();
              setItems(items)

          }
      })
    
      
   
    
  

  
    return( 
        <div>
            <p>Post: {pid}</p>
            
             <div>
                {/* {items.map((item) => (
                    <Profile
                        uid={item.uid}
                        username={item.data().username}
                        userImg={item.data().profileImg}
                        
                        posttext={item.data().posttext}
                        timestamp={item.data().timestamp}
                        uid={item.data().uid}
                    />
                ))} */}
             </div>

        </div>
    )
}

export default User