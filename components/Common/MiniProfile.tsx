import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';

function MiniProfile() {


  const [user] = useAuthState(auth);
  return (
    <div className=" ">
      <div className="flex  bg-gray-100 p-2 rounded-lg items-center justify-between  mr-4">
        <img src={user.photoURL} alt="" className="w-12 h-12 rounded-full border p-[2px]" />
        <div className="flex-1 ml-2">
          <h2 className="font-bold text-xs ">{user.displayName}</h2>
          <h3 className=" text-gray-400 text-xs mr-2">Welcome to PentaGon</h3>
          <button className="text-blue-400  font-semibold text-xs" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
      </div>
    </div>

  )
}

export default MiniProfile