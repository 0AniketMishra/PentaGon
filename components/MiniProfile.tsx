import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

function MiniProfile() {

  
  const [user] = useAuthState(auth);
  return (
    <div className="flex bg-gray-100 p-2 rounded-lg items-center justify-between ml-10 w-[85%] mr-10">
          
          <img src={user.photoURL} alt="" className="w-26 h-16 rounded-full border p-[2px]" />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">{user.displayName}</h2>
            <h3 className="text-sm text-gray-400">Welcome to PentaGon</h3>
        <button className="text-blue-400 text-sm font-semibold" onClick={() => auth.signOut()}>Sign Out</button>
          </div>

         
          
    </div>
  )
}

export default MiniProfile