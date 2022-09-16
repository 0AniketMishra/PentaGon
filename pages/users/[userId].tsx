import next from "next"
import {useRouter} from 'next/router'
import {db} from "../../firebase"
import { onSnapshot, collection, addDoc, doc, deleteDoc, setDoc, query, orderBy, where, getDocs } from '@firebase/firestore'
import {useEffect} from 'react'
import {useState} from 'react'

function userId() {
    const router = useRouter();
    const userId = router.query.userId;
    const userRef = collection(db, "cities");
    const [user, setUser] = useState([])

  
  
    
    
    
  return (
    
    <div>
        <h1>{userId}</h1>
        <h1></h1>
    </div>
  )
}

export default userId