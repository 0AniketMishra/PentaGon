import React from 'react'

function MiniProfile() {
  return (
    <div className="flex border p-2 rounded-lg items-center justify-between mt-14  mr-10">
          
          <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="w-16 h-16 rounded-full border p-[2px]" />
          <div className="flex-1 mx-4">
            <h2 className="font-bold">Shreya Mishra</h2>
            <h3 className="text-sm text-gray-400">Welcome to PentaGon</h3>
              <button className="text-blue-400 text-sm font-semibold" >Sign Out</button>
          </div>

         
          
    </div>
  )
}

export default MiniProfile