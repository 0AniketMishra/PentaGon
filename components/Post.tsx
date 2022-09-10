import React from 'react'
import { ArrowsRightLeftIcon, ChatBubbleOvalLeftEllipsisIcon, EllipsisHorizontalIcon, FaceSmileIcon, HeartIcon, ShareIcon } from '@heroicons/react/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline'
import { LikeButton } from '@lyket/react'

function Post() {
  let username = "Shreya Mishra"
  return (
    <div className="ml-4 mr-4  p-2 rounded-lg items-center border border-gray-200 lg:w-[85%]">

      <div className="flex items-center ">
        <div className="flex  items-center ">

          <div>
            <img src="https://lh3.googleusercontent.com/a-/AFdZucqIzaspPhKsj-lKIF-KPwINypZ9ESrPY6_Kpo1JiA=s96-c" alt="" className="w-12 h-12 rounded-full p-1 border mb-2" />
          </div>
            <div className=" items-center">
           <div className="flex items-center">
              <h1 className="font-bold ml-2 hover:border-b cursor-pointer ">Shreya Mishra</h1>
              <img src="https://th.bing.com/th/id/R.9c88df48e24182943ba4945b92aa3704?rik=ng8QDZfIeaOAvg&riu=http%3a%2f%2fclipart-library.com%2fimages%2fgTeEegLRc.png&ehk=rFKFF6hVaGBnpA8yieOD6YZvrGTf6%2fiafNKrPlbD7a8%3d&risl=&pid=ImgRaw&r=0" className='w-4 ml-1 h-4' alt="" />
              
           </div>
            <div className="ml-2 flex">
              <h1 className="text-xs font-bold">@{username.replace(/\s+/g, '').toLowerCase()}</h1>
              <h1 className="text-xs ml-2">19 Hours Ago</h1>

            </div>
          </div>
           
        
            
        
         

        </div>
        
        <h1 className="flex-1"></h1>
        <EllipsisHorizontalIcon className="h-6  mr-2 hover:scale-125   transition-all duration-150 ease-out" />

      </div>

      
      <div className="ml-4  mt-2 md:mr-4 ">
        <h1 className="lg:w-[90%] mb-4">Hello Everybody! I like to introduce all of you to my new creataion its called the pentagon its a social media application which would allow everybody amoong overselves to connect</h1>
       <div className="flex items-center overflow-x-scroll space-x-4 p-2 " >
          <img src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2019/05/13/discord-has-amassed-over-250-million-users-in-four-years_feature.jpg" alt="" className='w-96 rounded-lg ' />
          <img src="https://th.bing.com/th/id/R.780bc5643ae468d8689ad0ee79c6058d?rik=oDZqR7uu8LIOSw&riu=http%3a%2f%2fppcorn.com%2fus%2fwp-content%2fuploads%2fsites%2f14%2f2016%2f02%2fWhatsApp-ppcorn.jpg&ehk=ZvZvP3tojOcmtZPSdPhOqaU7CiCkKkYCXf0MzYXZ%2bMo%3d&risl=&pid=ImgRaw&r=0" alt="" className='w-96 rounded-lg ' />
       </div>
      </div>
      
      <div >
        <div className=" mt-4 p-1 flex space-x-8 ml-6  justify-between  mr-4 ">
          <div className="flex items-center hover:text-red-500  hover:scale-125   transition-all duration-150 ease-out">
            <HeartIcon className='h-6 ' />
            <h1 className='ml-2'>311K</h1>
          </div>

          <div className="flex items-center hover:text-blue-500  hover:scale-125   transition-all duration-150 ease-out">
            <ChatBubbleOvalLeftEllipsisIcon className='h-6 ' />
            <h1 className='ml-2'>2.2K</h1>
          </div>
          <div className="flex items-center hover:text-purple-500  hover:scale-125   transition-all duration-150 ease-out">
            <ArrowsRightLeftIcon className='h-6 ' />
            <h1 className='ml-2'>3.2K</h1>
          </div>


        
        <ShareIcon className='h-6 hover:scale-125   transition-all duration-150 ease-out  hover:text-green-500' />
      </div>


<div>
  <form action="" className="flex items-center p-4 mt-4 border-t">
  <FaceSmileIcon className='h-7'/>
  <input type="text"
   placeholder='Add a comment...'
   className='border-none flex-1 focus:ring-0 outline-none ml-2'
  />
  <button className="font-semibold text-blue-400">Post </button>
  </form>
</div>
      </div>
      
      
    </div>
  )
}

export default Post