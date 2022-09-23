import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

import {db} from '../firebase'




function Stories() {
  const [users, setUsers] = useState([])

  useEffect(
    () =>
      onSnapshot(query(collection(db, 'users')),
        snapshot => {
          setUsers(snapshot.docs)
        }
      ),
    [db]
  );

  return (
    <div >
      <div className="flex ml-4 mr-4  p-2 rounded-lg  overflow-x-scroll border    border-gray-200  ">
          
           <div className='flex space-x-6 '>
                  {users.map(user => {
                    return(
                      <div key={user.id}>
                        <img src={user.data().photoURL} alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                        <p className="text- w-14 truncate text-center">{user.data().username}</p>
                      </div>
                    )
                  })}

                  {/* <div>
                      <img src="https://lh3.googleusercontent.com/a-/AFdZucoFr558QfwMp9DHpHuQDtcie1N1xGLmRVlC-AyqQg=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                      <p className="text-xs w-14 truncate text-center">JustAUserName</p>
                  </div><div>
                      <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                      <p className="text-xs w-14 truncate text-center">JustAUserName</p>
                  </div><div>
                      <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                      <p className="text-xs w-14 truncate text-center">JustAUserName</p>
                  </div><div>
                      <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                      <p className="text-xs w-14 truncate text-center">JustAUserName</p>
                  </div><div>
                      <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
                      <p className="text-xs w-14 truncate text-center">JustAUserName</p>
                  </div>
          <div>
            <img src="https://lh3.googleusercontent.com/a-/AFdZucoFr558QfwMp9DHpHuQDtcie1N1xGLmRVlC-AyqQg=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
            <p className="text-xs w-14 truncate text-center">JustAUserName</p>
          </div>
          <div>
          <img src="https://lh3.googleusercontent.com/a-/AFdZucp-DpvRFsOhhrfN3AGspMsAFGVyRxoC4i2478xbbQ=s96-c" alt="" className="h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2" />
          <p className="text-xs w-14 truncate text-center">JustAUserName</p>
        </div> */}
                  
                 
           </div>
     
       </div>
    </div>
  )
}

export default Stories