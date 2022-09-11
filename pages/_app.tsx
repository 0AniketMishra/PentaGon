import '../styles/globals.css'
import { AppProps } from 'next/app';
import {useAuthState} from "react-firebase-hooks/auth"
import {auth , db} from '../firebase'
import firebase from '@firebase/app-compat';
import "firebase/compat/firestore";
import { useEffect } from 'react';
import Login from './login';
import {RecoilRoot} from "recoil"


function MyApp({ Component, pageProps}: any) {
  const [user , loading] = useAuthState(auth)
  useEffect(() => {
    if(user) {
      db.collection('users').doc(user.uid).set({
        email: user.email, 
        lastSeen: firebase.firestore.FieldValue.serverTimestamp(), 
        photoURL: user.photoURL, 
        username: user.displayName,
        phone: user.phoneNumber, 
    

      }, 
      {merge: true}); 
    }
  }, [user])
    
  
  if(!user) return <Login/>
  return (
    <RecoilRoot>
    <Component {...pageProps}/>
    </RecoilRoot>
  
)
}
export default MyApp
